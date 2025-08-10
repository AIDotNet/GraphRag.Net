using GraphRag.Net.Options;
using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Repositories;
using GraphRag.Net.Utils;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Memory;
using Microsoft.SemanticKernel.Text;
using Newtonsoft.Json;
using SqlSugar;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using static Dm.net.buffer.ByteArrayBuffer;

namespace GraphRag.Net.Domain.Service
{
    [ServiceDescription(typeof(IGraphService), ServiceLifetime.Scoped)]
    public class GraphService(
        INodes_Repositories _nodes_Repositories,
        IEdges_Repositories _edges_Repositories,
        ISemanticService _semanticService,
        ICommunities_Repositories _communities_Repositories,
        ICommunitieNodes_Repositories _communitieNodes_Repositories,
        IGlobals_Repositories _globals_Repositories,
        ICommunityDetectionService _communityDetectionService
        ) : IGraphService
    {
        /// <summary>
        /// Получить всю информацию об индексах
        /// </summary>
        /// <returns></returns>
        public List<string> GetAllIndex()
        {
            var indexs = _nodes_Repositories.GetDB().Queryable<Nodes>().GroupBy(p => p.Index).Select(p => p.Index).ToList();
            return indexs;
        }

        /// <summary>
        /// Получить данные графа
        /// </summary>
        /// <returns></returns>
        public GraphViewModel GetAllGraphs(string index)
        {
            if (string.IsNullOrWhiteSpace(index))
            {
                throw new ArgumentException("Index required value cannot be null.");
            }
            GraphViewModel graphViewModel = new GraphViewModel();
            var nodes = _nodes_Repositories.GetList(p => p.Index == index);
            var edges = _edges_Repositories.GetList(p => p.Index == index);
            Dictionary<string, string> TypeColor = new Dictionary<string, string>();
            Random random = new Random();
            foreach (var n in nodes)
            {
                NodesViewModel nodesViewModel = new NodesViewModel()
                {
                    id = n.Id,
                    text = n.Name,
                    data = new NodesDataModel()
                    {
                        desc = n.Desc.ConvertToString()
                    }
                };
                // Обрабатывать одинаковый тип одним цветом
                if (TypeColor.ContainsKey(n.Type))
                {
                    nodesViewModel.color = TypeColor[n.Type];
                }
                else
                {
                    nodesViewModel.color = $"#{random.Next(0x1000000):X6}";
                    TypeColor.Add(n.Type, nodesViewModel.color);
                }

                graphViewModel.nodes.Add(nodesViewModel);
            }

            foreach (var e in edges)
            {
                LinesViewModel linesViewModel = new LinesViewModel()
                {
                    from = e.Source,
                    to = e.Target,
                    text = e.Relationship
                };
                graphViewModel.lines.Add(linesViewModel);
            }
            return graphViewModel;
        }

        /// <summary>
        /// Импортировать текстовые данные по частям
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task InsertTextChunkAsync(string index, string input)
        {
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }

            var lines = TextChunker.SplitPlainTextLines(input, TextChunkerOption.LinesToken);

            var paragraphs = TextChunker.SplitPlainTextParagraphs(lines, TextChunkerOption.ParagraphsToken);
            foreach (var para in paragraphs)
            {
                await InsertGraphDataAsync(index, para);
            }
        }

        /// <summary>
        /// Создать данные графа
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task InsertGraphDataAsync(string index, string input)
        {
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }
            try
            {
                SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
                var graph = await _semanticService.CreateGraphAsync(input);
                Dictionary<string, string> nodeDic = new Dictionary<string, string>();
                foreach (var n in graph.Nodes)
                {

                    string Id = Guid.NewGuid().ToString();
                    string text2 = $"Name:{n.Name};Type:{n.Type};Desc:{n.Desc}";
                    bool isContinue = false;

                    // Проверить наличие одинаковых узлов
                    var oldNode = _nodes_Repositories.GetFirst(p => p.Index == index && p.Name == n.Name);
                    if (oldNode.IsNotNull() && !string.IsNullOrWhiteSpace(n.Desc))
                    {
                        // Связать одинаковые узлы ребрами
                        var newDesc = await _semanticService.MergeDesc(oldNode.Desc.ConvertToString(), n.Desc.ConvertToString());
                        if (string.IsNullOrEmpty(newDesc))
                        {
                            // Возможно, сработали ограничения LLM, просто объединяем
                            oldNode.Desc = oldNode.Desc.ConvertToString() + "; " + n.Desc.ConvertToString();
                        }
                        else
                        {
                            oldNode.Desc = newDesc;
                        }
                        // Обновить описание
                        _nodes_Repositories.Update(oldNode);
                        text2 = $"Name:{oldNode.Name};Type:{oldNode.Type};Desc:{oldNode.Desc}";
                        nodeDic.Add(n.Id, oldNode.Id);
                        await textMemory.SaveInformationAsync(index, id: oldNode.Id, text: text2, cancellationToken: default);
                        continue;
                    }

                    // Проверить наличие связанных узлов
                    await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, text2, limit: 1, minRelevanceScore: 0.9))
                    {
                        if (memory.Relevance == 1)
                        {
                            // Объединить одинаковые узлы
                            Console.WriteLine("节点合并");
                            nodeDic.Add(n.Id, memory.Metadata.Id);
                            isContinue = true;
                            break;
                        }

                        if (graph.Nodes.Select(p => p.Id).Contains(memory.Metadata.Id))
                        {
                            // Если в этом случае включены данные с векторным приближением, пропустить
                            break;
                        }
                        var node1 = _nodes_Repositories.GetFirst(p => p.Id == memory.Metadata.Id);
                        string text1 = $"Name:{node1.Name};Type:{node1.Type};Desc:{node1.Desc}";

                        var relationShip = await _semanticService.GetRelationship(text1, text2);
                        if (relationShip.IsRelationship)
                        {
                            if (relationShip.Edge.Source == "node1")
                            {
                                relationShip.Edge.Source = node1.Id;
                                relationShip.Edge.Target = Id;
                            }
                            else
                            {
                                relationShip.Edge.Source = Id;
                                relationShip.Edge.Target = node1.Id;
                            }
                            if (!_edges_Repositories.IsAny(p => p.Target == relationShip.Edge.Target && p.Source == relationShip.Edge.Source))
                            {
                                relationShip.Edge.Id = Guid.NewGuid().ToString();
                                relationShip.Edge.Index = index;
                                _edges_Repositories.Insert(relationShip.Edge);
                            }
                        }
                    }

                    if (isContinue)
                    {
                        // Слияние узлов, выход из цикла
                        continue;
                    }

                    Nodes node = new Nodes()
                    {
                        Id = Id,
                        Index = index,
                        Name = n.Name,
                        Type = n.Type,
                        Desc = n.Desc.ConvertToString()
                    };

                    if (!nodeDic.ContainsKey(n.Id))
                    {
                        nodeDic.Add(n.Id, node.Id);
                    }
                    _nodes_Repositories.Insert(node);
                    // Обработать информацию узлов векторами
                    await textMemory.SaveInformationAsync(index, id: node.Id, text: text2, cancellationToken: default);
                }

                foreach (var e in graph.Edges)
                {
                    Edges edge = new Edges()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Index = index,
                        Source = nodeDic[e.Source],
                        Target = nodeDic[e.Target],
                        Relationship = e.Relationship
                    };
                    _edges_Repositories.Insert(edge);
                }

                // Проверить повторяющиеся Source и Target у ребер
                var repeatEdges = _edges_Repositories.GetDB().Queryable<Edges>()
                .GroupBy(p => new { p.Source, p.Target })
                .Select(p => new { p.Source, p.Target, Count = SqlFunc.AggregateCount(p.Source) })
                .ToList().Where(p => p.Count > 1).ToList();
                // Объединить повторяющиеся Source и Target ребер
                foreach (var edge in repeatEdges)
                {
                    var edges = _edges_Repositories.GetList(p => p.Source == edge.Source && p.Target == edge.Target);
                    var firstEdge = edges.First();

                    for (int i = 1; i < edges.Count(); i++)
                    {
                        if (firstEdge.Relationship == edges[i].Relationship)
                        {
                            // Объединить одинаковые ребра
                            _edges_Repositories.Delete(edges[i]);
                            continue;
                        }
                        var newDesc = await _semanticService.MergeDesc(firstEdge.Relationship, edges[i].Relationship);
                        firstEdge.Relationship = newDesc;
                        _edges_Repositories.Update(firstEdge);
                        _edges_Repositories.Delete(edges[i]);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"插入数据失败：{ex.ToString()}");
            }
        }

        /// <summary>
        /// Найти связанные узлы
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public async Task<GraphModel> SearchGraphModel(string index, string input)
        {
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }

            var textMemModelList = await RetrieveTextMemModelList(index, input);

            if (textMemModelList.Any())
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                // Создать словарь весов узлов
                Dictionary<string, double> nodeWeights = textMemModelList.ToDictionary(
                    t => t.Id,
                    t => t.Relevance
                );
                var graphModel = GetGraphAllRecursion(index, nodes, nodeWeights);
                
                // Рассчитать предполагаемое количество токенов и при необходимости ограничить число узлов
                int estimatedTokens = EstimateTokenCount(graphModel);
                if (estimatedTokens > GraphSearchOption.MaxTokens)
                {
                    Console.WriteLine($"预估Token数量 {estimatedTokens} 超过限制 {GraphSearchOption.MaxTokens}，正在调整节点数量...");
                    graphModel = LimitGraphByTokenCount(graphModel, nodeWeights);
                }
                
                return graphModel;
            }
            else
            {
                return new GraphModel();
            }
        }

        /// <summary>
        /// Оценить количество токенов для модели графа
        /// </summary>
        /// <param name="model">Модель графа</param>
        /// <returns>Оцененное количество токенов</returns>
        private int EstimateTokenCount(GraphModel model)
        {
            int tokenCount = 0;
            
            // Оценка токенов для узла (примерно 1.3 токена на слово плюс дополнительная информация)
            foreach (var node in model.Nodes)
            {
                // Оценка ID и названия узла
                tokenCount += (node.Id?.Length ?? 0) / 3 + 2;
                tokenCount += (node.Name?.Length ?? 0) / 3 + 2;
                
                // Оценка описания узла (один китайский иероглиф ≈1 токен, английское слово ≈0.75 токена)
                string desc = node.Desc ?? "";
                int chineseCount = desc.Count(c => c >= 0x4E00 && c <= 0x9FFF);
                int otherCount = desc.Length - chineseCount;
                tokenCount += chineseCount + (int)(otherCount * 0.75);
                
                // Оценка дополнительных атрибутов узла
                tokenCount += 10; // Дополнительные структурные расходы
            }
            
            // Оценка токенов для ребер
            tokenCount += model.Edges.Count * 10; // Примерно 10 токенов на структуру каждого ребра
            
            // Расходы на структуру JSON
            tokenCount += 200;
            
            return tokenCount;
        }
        
        /// <summary>
        /// Ограничить размер графа по количеству токенов
        /// </summary>
        /// <param name="model">Исходная модель графа</param>
        /// <param name="nodeWeights">Веса узлов</param>
        /// <returns>Обрезанная модель графа</returns>
        private GraphModel LimitGraphByTokenCount(GraphModel model, Dictionary<string, double> nodeWeights)
        {
            var result = new GraphModel();
            
            // Сортировать узлы по весу
            var sortedNodes = model.Nodes
                .OrderByDescending(n => nodeWeights.GetValueOrDefault(n.Id, 0))
                .ToList();
            
            // Добавлять узлы с большим весом, пока не достигнем лимита токенов
            var selectedNodes = new List<Nodes>();
            int currentTokens = 200; // Базовые структурные расходы
            
            foreach (var node in sortedNodes)
            {
                // Рассчитать количество токенов после добавления узла
                string desc = node.Desc ?? "";
                int chineseCount = desc.Count(c => c >= 0x4E00 && c <= 0x9FFF);
                int otherCount = desc.Length - chineseCount;
                int nodeTokens = chineseCount + (int)(otherCount * 0.75) + 
                                (node.Id?.Length ?? 0) / 3 + 
                                (node.Name?.Length ?? 0) / 3 + 15;
                
                // Если добавление узла превышает лимит, пропустить
                if (currentTokens + nodeTokens > GraphSearchOption.MaxTokens * 0.9)
                {
                    continue;
                }
                
                selectedNodes.Add(node);
                currentTokens += nodeTokens;
            }
            
            // Оставить только ребра, соединяющие выбранные узлы
            var selectedEdges = model.Edges.Where(e => 
                selectedNodes.Any(n => n.Id == e.Source) && 
                selectedNodes.Any(n => n.Id == e.Target)
            ).ToList();
            
            result.Nodes = selectedNodes;
            result.Edges = selectedEdges;
            
            Console.WriteLine($"节点限制调整：从 {model.Nodes.Count} 个节点减少到 {result.Nodes.Count} 个节点");
            Console.WriteLine($"预估调整后Token数：约 {currentTokens}");
            
            return result;
        }

        /// <summary>
        /// Сопоставить связанные узлы с помощью алгоритма сообществ
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public async Task<GraphModel> SearchGraphCommunityModel(string index, string input)
        {
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }

            var textMemModelList = await RetrieveTextMemModelList(index, input);
            if (!textMemModelList.Any())
            {
                // Попробовать снизить порог и выполнить поиск снова
                textMemModelList = await RetrieveTextMemModelList(index, input, 0.3, 5);
            }

            if (textMemModelList.Any())
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                var graphModel = GetGraphAllCommunitiesRecursion(index, nodes);
                
                // Рассчитать предполагаемое количество токенов и при необходимости ограничить число узлов
                int estimatedTokens = EstimateTokenCount(graphModel);
                if (estimatedTokens > GraphSearchOption.MaxTokens)
                {
                    Console.WriteLine($"社区检索：预估Token数量 {estimatedTokens} 超过限制 {GraphSearchOption.MaxTokens}，正在调整节点数量...");
                    // Создать словарь весов для узлов сообщества (по умолчанию одинаковых)
                    Dictionary<string, double> nodeWeights = graphModel.Nodes.ToDictionary(
                        n => n.Id,
                        n => 1.0
                    );
                    // Присвоить больший вес первоначально найденным узлам
                    foreach (var node in nodes)
                    {
                        if (nodeWeights.ContainsKey(node.Id))
                        {
                            nodeWeights[node.Id] = 2.0; // Присвоить начальным узлам больший вес
                        }
                    }
                    graphModel = LimitGraphByTokenCount(graphModel, nodeWeights);
                }
                
                return graphModel;
            }
            else
            {
                return new GraphModel();
            }
        }

        /// <summary>
        /// Рекурсивно искать связанные ребра и узлы для диалога по графу
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<string> SearchGraphAsync(string index, string input)
        {
            var graphModel = await SearchGraphModel(index, input);
            string answer = await _semanticService.GetGraphAnswerAsync(JsonConvert.SerializeObject(graphModel), input);
            return answer;
        }

        /// <summary>
        /// Рекурсивно искать связанные ребра и узлы для диалога по графу с потоковым выводом
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async IAsyncEnumerable<StreamingKernelContent> SearchGraphStreamAsync(string index, string input)
        {
            var graphModel = await SearchGraphModel(index, input);
            if (graphModel.Nodes.Count() > 0)
            {
                var answerStream = _semanticService.GetGraphAnswerStreamAsync(JsonConvert.SerializeObject(graphModel), input);
                await foreach (var content in answerStream)
                {
                    yield return content;
                }
            }
        }

        /// <summary>
        /// Выполнять диалог, извлекая узлы сообщества через алгоритм сообществ
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<string> SearchGraphCommunityAsync(string index, string input)
        {
            string answer = "";
            var graphModel = await SearchGraphCommunityModel(index, input);
            var global = _globals_Repositories.GetFirst(p => p.Index == index)?.Summaries;
            if (graphModel.Nodes.Count() > 0)
            {
                var community = string.Join(Environment.NewLine, _communities_Repositories.GetDB().Queryable<Communities>().Where(p => p.Index == index).Select(p => p.Summaries).ToList());

                // Данных довольно много, нужно семантически отфильтровать
                answer = await _semanticService.GetGraphCommunityAnswerAsync(JsonConvert.SerializeObject(graphModel), community, global, input);
            }
            else
            {
                // Если сведения об узлах не найдены, использовать глобальную информацию
                answer = await _semanticService.GetGraphCommunityAnswerAsync("NoSearch", "NoSearch", global, input);
            }
            return answer;
        }

        /// <summary>
        /// Диалог по узлам сообщества через алгоритм сообществ с потоковым выводом
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async IAsyncEnumerable<StreamingKernelContent> SearchGraphCommunityStreamAsync(string index, string input)
        {
            var textMemModelList = await RetrieveTextMemModelList(index, input);
            var global = _globals_Repositories.GetFirst(p => p.Index == index)?.Summaries;
            IAsyncEnumerable<StreamingKernelContent> answer;

            // Найдена информация об узлах
            var graphModel = await SearchGraphCommunityModel(index, input);
            if (graphModel.Nodes.Count() > 0)
            {
                var community = string.Join(Environment.NewLine, _communities_Repositories.GetDB().Queryable<Communities>().Where(p => p.Index == index).Select(p => p.Summaries).ToList());
                // Данных довольно много, нужно семантически отфильтровать
                answer = _semanticService.GetGraphCommunityAnswerStreamAsync(JsonConvert.SerializeObject(graphModel), community, global, input);
            }
            else
            {
                // Если сведения об узлах не найдены, использовать глобальную информацию
                answer = _semanticService.GetGraphCommunityAnswerStreamAsync("NoSearch", "NoSearch", global, input);
            }
            await foreach (var content in answer)
            {
                yield return content;
            }
        }

        /// <summary>
        /// Сводка по сообществам
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public async Task GraphCommunitiesAsync(string index)
        {
            var nodes = _nodes_Repositories.GetList(p => p.Index == index);
            var edges = _edges_Repositories.GetList(p => p.Index == index);

            // Удалить данные сообщества
            _communitieNodes_Repositories.Delete(p => p.Index == index);
            _communities_Repositories.Delete(p => p.Index == index);

            var graph = new Graph();
            foreach (var edge in edges)
            {
                graph.AddEdge(edge.Source, edge.Target);
            }

            // Пересчитать сообщества
            var result = _communityDetectionService.FastLabelPropagationAlgorithm(graph);

            Console.WriteLine("开始社区总结");
            foreach (var kvp in result)
            {
                // Вставить данные узлов сообщества
                CommunitieNodes communitieNodes = new CommunitieNodes();
                communitieNodes.Index = index;
                communitieNodes.CommunitieId = kvp.Value;
                communitieNodes.NodeId = kvp.Key;
                _communitieNodes_Repositories.Insert(communitieNodes);
            }
            // Получить все идентификаторы сообществ
            var communitieIds = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>().Where(p => p.Index == index).GroupBy(p => p.CommunitieId).Select(p => p.CommunitieId).ToList();

            foreach (var communitieId in communitieIds)
            {
                var nodeList = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>()
                    .LeftJoin<Nodes>((c, n) => c.NodeId == n.Id)
                    .Where(c => c.CommunitieId == communitieId)
                    .Select((c, n) => $"Name:{n.Name}; Type:{n.Type}; Desc:{n.Desc}")
                    .ToList();

                var nodeDescs = string.Join(Environment.NewLine, nodeList);
                var summaries = await _semanticService.CommunitySummaries(nodeDescs);

                Communities communities = new Communities()
                {
                    CommunitieId = communitieId,
                    Index = index,
                    Summaries = summaries
                };
                // Вставить данные сводки сообщества
                _communities_Repositories.Insert(communities);
            }

        }

        /// <summary>
        /// Глобальная сводка
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public async Task GraphGlobalAsync(string index)
        {
            _globals_Repositories.Delete(p => p.Index == index);
            var communitieSummariesList = _communities_Repositories.GetDB().Queryable<Communities>().Where(p => p.Index == index).Select(p => p.Summaries).ToList();
            var communitieSummaries = string.Join(Environment.NewLine, communitieSummariesList);
            var globalSummaries = await _semanticService.GlobalSummaries(communitieSummaries);

            Globals globals = new Globals()
            {
                Index = index,
                Summaries = globalSummaries
            };
            _globals_Repositories.Insert(globals);
        }

        public async Task DeleteGraph(string index)
        {
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            var nodes = await _nodes_Repositories.GetListAsync(p => p.Index == index);
            foreach (var node in nodes)
            {
                // Удалить векторные данные
                await textMemory.RemoveAsync(index, node.Id);
            }
            // Удалить данные индекса
            await _nodes_Repositories.DeleteAsync(p => p.Index == index);
            await _edges_Repositories.DeleteAsync(p => p.Index == index);
            await _communities_Repositories.DeleteAsync(p => p.Index == index);
            await _communitieNodes_Repositories.DeleteAsync(p => p.Index == index);
            await _globals_Repositories.DeleteAsync(p => p.Index == index);
        }


        #region Внутренние методы
        /// <summary>
        /// Получить список TextMemModel на основе условий поиска.
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        private async Task<List<TextMemModel>> RetrieveTextMemModelList(string index, string input, double? minRelevance = null, int? limit = null)
        {
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            List<TextMemModel> textMemModelList = new List<TextMemModel>();

            // Использовать заданный порог или конфигурацию по умолчанию
            double relevanceThreshold = minRelevance ?? GraphSearchOption.SearchMinRelevance;
            int resultLimit = limit ?? GraphSearchOption.SearchLimit;

            int matchCount = 0;
            await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, input, limit: resultLimit, minRelevanceScore: relevanceThreshold))
            {
                matchCount++;
                var textMemModel = new TextMemModel()
                {
                    Id = memory.Metadata.Id,
                    Text = memory.Metadata.Text,
                    Relevance = memory.Relevance
                };
                textMemModelList.Add(textMemModel);
            }

            // Если результатов недостаточно, попытаться снизить порог
            if (matchCount < 2 && relevanceThreshold > 0.3)
            {
                double lowerThreshold = Math.Max(0.3, relevanceThreshold - 0.2);
                Console.WriteLine($"结果不足，降低阈值至:{lowerThreshold}重试");

                await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, input, limit: resultLimit + 2, minRelevanceScore: lowerThreshold))
                {
                    if (!textMemModelList.Any(t => t.Id == memory.Metadata.Id))
                    {
                        matchCount++;
                        var textMemModel = new TextMemModel()
                        {
                            Id = memory.Metadata.Id,
                            Text = memory.Metadata.Text,
                            Relevance = memory.Relevance
                        };
                        textMemModelList.Add(textMemModel);
                    }
                }
            }

            // Сортировать по релевантности
            textMemModelList = textMemModelList.OrderByDescending(t => t.Relevance).ToList();
            Console.WriteLine($"向量匹配数:{matchCount}, 最高相关度:{(textMemModelList.Any() ? textMemModelList.First().Relevance.ToString("F2") : "N/A")}");
            return textMemModelList;
        }

        /// <summary>
        /// Рекурсивно получить все связанные ребра и узлы
        /// </summary>
        /// <param name="initialNodes"></param>
        /// <returns></returns>
        private GraphModel GetGraphAllRecursion(string index, List<Nodes> initialNodes, Dictionary<string, double> nodeWeights)
        {
            var allNodes = new List<Nodes>(initialNodes);
            var allEdges = new List<Edges>();
            var nodesToExplore = new List<Nodes>(initialNodes);
            int depth = 0;

            while (nodesToExplore.Count > 0)
            {
                if (depth >= GraphSearchOption.NodeDepth || allNodes.Count >= GraphSearchOption.MaxNodes)
                {
                    break;
                }

                // Сортировать узлы для исследования по весу
                nodesToExplore = nodesToExplore
                    .OrderByDescending(n => nodeWeights.ContainsKey(n.Id) ? nodeWeights[n.Id] : 0)
                    .ToList();

                var currentNodes = nodesToExplore.Take(Math.Min(5, nodesToExplore.Count)).ToList();
                nodesToExplore.RemoveRange(0, currentNodes.Count);

                var newEdges = GetEdges(index, currentNodes);
                if (!newEdges.Any())
                {
                    continue;
                }

                // Добавить новое ребро, избегая дублирования
                foreach (var edge in newEdges)
                {
                    if (!allEdges.Any(e => e.Source == edge.Source && e.Target == edge.Target))
                    {
                        allEdges.Add(edge);

                        // Установить вес для новых узлов
                        double parentWeight = nodeWeights.GetValueOrDefault(edge.Source, 0);
                        double weightDecay = 0.8; // Коэффициент уменьшения веса

                        if (!nodeWeights.ContainsKey(edge.Target))
                        {
                            nodeWeights[edge.Target] = parentWeight * weightDecay;
                        }
                    }
                }

                // Получить новый узел
                var newNodes = GetNodes(index, newEdges);
                var nodesToAdd = newNodes.Where(n => !allNodes.Any(existingNode => existingNode.Id == n.Id)).ToList();
                allNodes.AddRange(nodesToAdd);
                nodesToExplore.AddRange(nodesToAdd);

                depth++;
            }

            // Если число узлов превышает ограничение, сохранить узлы с наибольшим весом
            if (allNodes.Count > GraphSearchOption.MaxNodes)
            {
                allNodes = allNodes
                    .OrderByDescending(n => nodeWeights.GetValueOrDefault(n.Id, 0))
                    .Take(GraphSearchOption.MaxNodes)
                    .ToList();

                // Убедиться, что узлы ребер находятся среди оставшихся узлов
                allEdges = allEdges
                    .Where(e => allNodes.Any(n => n.Id == e.Source) && allNodes.Any(n => n.Id == e.Target))
                    .ToList();
            }

            return new GraphModel
            {
                Nodes = allNodes,
                Edges = allEdges
            };
        }


        /// <summary>
        /// Извлечь узлы сообщества с помощью алгоритма сообществ
        /// </summary>
        /// <param name="index"></param>
        /// <param name="initialNodes"></param>
        /// <returns></returns>
        private GraphModel GetGraphAllCommunitiesRecursion(string index, List<Nodes> initialNodes)
        {
            var allNodes = new List<Nodes>();
            var allEdges = new List<Edges>();

            var nodeIds = initialNodes.Select(x => x.Id).ToList();

            var communitiesNodes = _communities_Repositories.GetDB().Queryable<Communities>()
                .LeftJoin<CommunitieNodes>((c, cn) => c.CommunitieId == cn.CommunitieId)
                .LeftJoin<Nodes>((c, cn, n) => cn.NodeId == n.Id)
                .Where((c, cn, n) => nodeIds.Contains(n.Id)).Select((c, cn, n) => new Nodes() { Index = n.Index, Id = n.Id, Name = n.Name, Type = n.Type, Desc = n.Desc }).ToList();
            allNodes.AddRange(communitiesNodes);
            var newEdges = GetEdges(index, allNodes);

            foreach (var edge in newEdges)
            {
                if (!allEdges.Any(e => e.Source == edge.Source && e.Target == edge.Target))
                {
                    allEdges.Add(edge);
                }
            }

            // Если число узлов превышает максимум, выполнить усечение
            if (allNodes.Count > GraphSearchOption.MaxNodes)
            {
                allNodes = allNodes.Take(GraphSearchOption.MaxNodes).ToList();
            }
            // Соответственно обработать allEdges, чтобы узлы ребер были в allNodes
            allEdges = allEdges.Where(e => allNodes.Any(p => p.Id == e.Source) && allNodes.Any(p => p.Id == e.Target)).ToList();

            return new GraphModel
            {
                Nodes = allNodes,
                Edges = allEdges
            };
        }

        /// <summary>
        /// Получить информацию о ребрах
        /// </summary>
        /// <param name="nodeIds"></param>
        /// <returns></returns>
        private List<Edges> GetEdges(string index, List<Nodes> nodes)
        {
            var nodeIds = nodes.Select(x => x.Id).ToList();
            var edges = new List<Edges>();
            edges = _edges_Repositories.GetList(x => x.Index == index && nodeIds.Contains(x.Source) && nodeIds.Contains(x.Target));
            return edges;
        }

        /// <summary>
        /// Получить информацию об узлах
        /// </summary>
        /// <param name="edges"></param>
        /// <returns></returns>
        private List<Nodes> GetNodes(string index, List<Edges> edges)
        {
            var targets = edges.Select(p => p.Target).ToList();
            var sources = edges.Select(p => p.Source).ToList();
            List<string> nodeIds = new List<string>();
            nodeIds.AddRange(targets);
            nodeIds.AddRange(sources);

            var nodes = _nodes_Repositories.GetList(p => p.Index == index || nodeIds.Contains(p.Id));
            return nodes;
        }

        /// <summary>
        /// Получить список идентификаторов связанных сообществ
        /// </summary>
        private async Task<List<string>> GetRelevantCommunities(string index, List<string> nodeIds)
        {
            var communities = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>()
                .Where(cn => nodeIds.Contains(cn.NodeId))
                .Select(cn => cn.CommunitieId)
                .Distinct()
                .ToList();

            return communities;
        }
        #endregion
    }
}
