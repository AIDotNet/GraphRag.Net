using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Options;
using GraphRag.Net.Repositories;
using GraphRag.Net.Utils;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Memory;
using Microsoft.SemanticKernel.Text;
using Newtonsoft.Json;
using SqlSugar;

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
        /// 获取所有索引信息
        /// </summary>
        /// <returns></returns>
        public List<string> GetAllIndex()
        {
            var indexs = _nodes_Repositories.GetDB().Queryable<Nodes>().GroupBy(p => p.Index).Select(p => p.Index).ToList();
            return indexs;
        }

        /// <summary>
        /// 获取Graph数据
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
                //处理相同的Type用相同的颜色
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
        /// 切片导入文本数据
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

            // 优化文本分块：使用重叠窗口来保持关系信息
            var optimizedChunks = CreateOverlappingChunks(paragraphs);

            foreach (var chunk in optimizedChunks)
            {
                await InsertGraphDataAsync(index, chunk);
            }
        }

        /// <summary>
        /// 创建重叠文本块以保持关系信息
        /// </summary>
        /// <param name="paragraphs"></param>
        /// <returns></returns>
        private List<string> CreateOverlappingChunks(List<string> paragraphs)
        {
            var chunks = new List<string>();
            const int maxChunkSize = 3; // 每个块最多包含3个段落
            const int overlapSize = 1;   // 重叠1个段落

            if (paragraphs.Count <= maxChunkSize)
            {
                // 如果段落数量不多，直接作为一个块
                chunks.Add(string.Join("\n\n", paragraphs));
            }
            else
            {
                // 创建重叠的文本块
                for (int i = 0; i < paragraphs.Count; i += (maxChunkSize - overlapSize))
                {
                    var chunkParagraphs = paragraphs
                        .Skip(i)
                        .Take(maxChunkSize)
                        .ToList();

                    if (chunkParagraphs.Count > 0)
                    {
                        var chunk = string.Join("\n\n", chunkParagraphs);

                        // 避免重复的块
                        if (!chunks.Contains(chunk))
                        {
                            chunks.Add(chunk);
                        }
                    }

                    // 如果剩余段落不足一个完整块，退出循环
                    if (i + maxChunkSize >= paragraphs.Count)
                    {
                        break;
                    }
                }
            }

            Console.WriteLine($"原始段落数: {paragraphs.Count}, 优化后块数: {chunks.Count}");
            return chunks;
        }

        /// <summary>
        /// 生成图谱数据
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
                List<Nodes> newNodes = new List<Nodes>(); // 收集新插入的节点

                foreach (var n in graph.Nodes)
                {

                    string Id = Guid.NewGuid().ToString();
                    string text2 = $"Name:{n.Name};Type:{n.Type};Desc:{n.Desc}";
                    bool isContinue = false;

                    //判断是否存在相同节点
                    var oldNode = _nodes_Repositories.GetFirst(p => p.Index == index && p.Name == n.Name);
                    if (oldNode.IsNotNull() && !string.IsNullOrWhiteSpace(n.Desc))
                    {
                        //相同节点关联edge关系
                        var newDesc = await _semanticService.MergeDesc(oldNode.Desc.ConvertToString(), n.Desc.ConvertToString());
                        if (string.IsNullOrEmpty(newDesc))
                        {
                            //可能触发了LLM规则限制，简单粗暴来拼接吧
                            oldNode.Desc = oldNode.Desc.ConvertToString() + "; " + n.Desc.ConvertToString();
                        }
                        else
                        {
                            oldNode.Desc = newDesc;
                        }
                        //更新描述
                        _nodes_Repositories.Update(oldNode);
                        text2 = $"Name:{oldNode.Name};Type:{oldNode.Type};Desc:{oldNode.Desc}";
                        nodeDic.Add(n.Id, oldNode.Id);
                        await textMemory.SaveInformationAsync(index, id: oldNode.Id, text: text2, cancellationToken: default);
                        continue;
                    }

                    //优化相关节点发现：增加搜索数量和降低阈值
                    List<string> potentialRelatedNodes = new List<string>();
                    await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, text2, limit: 5, minRelevanceScore: 0.7))
                    {
                        if (memory.Relevance == 1)
                        {
                            //相同节点进行合并
                            Console.WriteLine("节点合并");
                            nodeDic.Add(n.Id, memory.Metadata.Id);
                            isContinue = true;
                            break;
                        }

                        if (graph.Nodes.Select(p => p.Id).Contains(memory.Metadata.Id))
                        {
                            //如果本次包含了向量近似的数据，则跳过
                            continue;
                        }

                        potentialRelatedNodes.Add(memory.Metadata.Id);
                    }

                    if (isContinue)
                    {
                        //节点合并，跳出循环
                        continue;
                    }

                    // 创建新节点
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
                    newNodes.Add(node);

                    // 检查与潜在相关节点的关系
                    foreach (var relatedNodeId in potentialRelatedNodes)
                    {
                        var node1 = _nodes_Repositories.GetFirst(p => p.Id == relatedNodeId);
                        if (node1 != null)
                        {
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
                    }

                    //向量处理节点信息
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

                // 检测和处理孤立节点
                await ProcessOrphanNodesAsync(index, newNodes, textMemory);

                //查询Edges 的Source和Target 重复数据
                var repeatEdges = _edges_Repositories.GetDB().Queryable<Edges>()
                .GroupBy(p => new { p.Source, p.Target })
                .Select(p => new { p.Source, p.Target, Count = SqlFunc.AggregateCount(p.Source) })
                .ToList().Where(p => p.Count > 1).ToList();
                //合并查询Edges 的Source和Target 重复数据
                foreach (var edge in repeatEdges)
                {
                    var edges = _edges_Repositories.GetList(p => p.Source == edge.Source && p.Target == edge.Target);
                    var firstEdge = edges.First();

                    for (int i = 1; i < edges.Count(); i++)
                    {
                        if (firstEdge.Relationship == edges[i].Relationship)
                        {
                            //相同的边进行合并
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
        /// 检索相关节点
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
                // 创建节点权重字典
                Dictionary<string, double> nodeWeights = textMemModelList.ToDictionary(
                    t => t.Id,
                    t => t.Relevance
                );
                var graphModel = GetGraphAllRecursion(index, nodes, nodeWeights);

                // 计算预估的token数量，并在必要时限制节点数量
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
        /// 估算图模型的token数量
        /// </summary>
        /// <param name="model">图模型</param>
        /// <returns>估算的token数量</returns>
        private int EstimateTokenCount(GraphModel model)
        {
            int tokenCount = 0;

            // 估算节点的token（每个单词约1.3个token，每个节点信息加上额外开销）
            foreach (var node in model.Nodes)
            {
                // 节点ID和名称估算
                tokenCount += (node.Id?.Length ?? 0) / 3 + 2;
                tokenCount += (node.Name?.Length ?? 0) / 3 + 2;

                // 节点描述估算（一个汉字约等于1个token，英文单词约等于0.75个token）
                string desc = node.Desc ?? "";
                int chineseCount = desc.Count(c => c >= 0x4E00 && c <= 0x9FFF);
                int otherCount = desc.Length - chineseCount;
                tokenCount += chineseCount + (int)(otherCount * 0.75);

                // 节点额外属性估算
                tokenCount += 10; // 额外结构开销
            }

            // 估算边的token
            tokenCount += model.Edges.Count * 10; // 每个边的结构信息约10个token

            // JSON结构开销
            tokenCount += 200;

            return tokenCount;
        }

        /// <summary>
        /// 根据token数量限制图大小
        /// </summary>
        /// <param name="model">原始图模型</param>
        /// <param name="nodeWeights">节点权重</param>
        /// <returns>裁剪后的图模型</returns>
        private GraphModel LimitGraphByTokenCount(GraphModel model, Dictionary<string, double> nodeWeights)
        {
            var result = new GraphModel();

            // 将节点按权重排序
            var sortedNodes = model.Nodes
                .OrderByDescending(n => nodeWeights.GetValueOrDefault(n.Id, 0))
                .ToList();

            // 从高权重节点开始添加，直到接近token限制
            var selectedNodes = new List<Nodes>();
            int currentTokens = 200; // 基础结构开销

            foreach (var node in sortedNodes)
            {
                // 计算添加此节点后的token数
                string desc = node.Desc ?? "";
                int chineseCount = desc.Count(c => c >= 0x4E00 && c <= 0x9FFF);
                int otherCount = desc.Length - chineseCount;
                int nodeTokens = chineseCount + (int)(otherCount * 0.75) +
                                (node.Id?.Length ?? 0) / 3 +
                                (node.Name?.Length ?? 0) / 3 + 15;

                // 如果添加此节点会超过限制，跳过
                if (currentTokens + nodeTokens > GraphSearchOption.MaxTokens * 0.9)
                {
                    continue;
                }

                selectedNodes.Add(node);
                currentTokens += nodeTokens;
            }

            // 只保留连接选中节点的边
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
        /// 通过社区算法匹配相关节点信息
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
                // 尝试降低阈值重新检索
                textMemModelList = await RetrieveTextMemModelList(index, input, 0.3, 5);
            }

            if (textMemModelList.Any())
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                var graphModel = GetGraphAllCommunitiesRecursion(index, nodes);

                // 计算预估的token数量，并在必要时限制节点数量
                int estimatedTokens = EstimateTokenCount(graphModel);
                if (estimatedTokens > GraphSearchOption.MaxTokens)
                {
                    Console.WriteLine($"社区检索：预估Token数量 {estimatedTokens} 超过限制 {GraphSearchOption.MaxTokens}，正在调整节点数量...");
                    // 为社区节点创建权重字典（默认权重相同）
                    Dictionary<string, double> nodeWeights = graphModel.Nodes.ToDictionary(
                        n => n.Id,
                        n => 1.0
                    );
                    // 为初始检索到的节点赋予更高权重
                    foreach (var node in nodes)
                    {
                        if (nodeWeights.ContainsKey(node.Id))
                        {
                            nodeWeights[node.Id] = 2.0; // 给初始节点更高权重
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
        /// 搜索递归获取节点相关的所有边和节点进行图谱对话
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
        /// 搜索递归获取节点相关的所有边和节点进行图谱对话,流式返回
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
        /// 通过社区算法检索社区节点进行对话
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

                //这里数据有点多，要通过语义进行一次过滤
                answer = await _semanticService.GetGraphCommunityAnswerAsync(JsonConvert.SerializeObject(graphModel), community, global, input);
            }
            else
            {
                //如果没有匹配到节点信息，使用全局信息
                answer = await _semanticService.GetGraphCommunityAnswerAsync("NoSearch", "NoSearch", global, input);
            }
            return answer;
        }

        /// <summary>
        /// 通过社区算法检索社区节点进行对话,流式返回
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async IAsyncEnumerable<StreamingKernelContent> SearchGraphCommunityStreamAsync(string index, string input)
        {
            var textMemModelList = await RetrieveTextMemModelList(index, input);
            var global = _globals_Repositories.GetFirst(p => p.Index == index)?.Summaries;
            IAsyncEnumerable<StreamingKernelContent> answer;

            //匹配到节点信息
            var graphModel = await SearchGraphCommunityModel(index, input);
            if (graphModel.Nodes.Count() > 0)
            {
                var community = string.Join(Environment.NewLine, _communities_Repositories.GetDB().Queryable<Communities>().Where(p => p.Index == index).Select(p => p.Summaries).ToList());
                //这里数据有点多，要通过语义进行一次过滤
                answer = _semanticService.GetGraphCommunityAnswerStreamAsync(JsonConvert.SerializeObject(graphModel), community, global, input);
            }
            else
            {
                //如果没有匹配到节点信息，使用全局信息
                answer = _semanticService.GetGraphCommunityAnswerStreamAsync("NoSearch", "NoSearch", global, input);
            }
            await foreach (var content in answer)
            {
                yield return content;
            }
        }

        /// <summary>
        /// 社区摘要
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public async Task GraphCommunitiesAsync(string index)
        {
            var nodes = _nodes_Repositories.GetList(p => p.Index == index);
            var edges = _edges_Repositories.GetList(p => p.Index == index);

            //删除社区数据
            _communitieNodes_Repositories.Delete(p => p.Index == index);
            _communities_Repositories.Delete(p => p.Index == index);

            var graph = new Graph();
            foreach (var edge in edges)
            {
                graph.AddEdge(edge.Source, edge.Target);
            }

            //重新计算社区
            var result = _communityDetectionService.FastLabelPropagationAlgorithm(graph);

            Console.WriteLine("开始社区总结");
            foreach (var kvp in result)
            {
                //插入社区节点数据
                CommunitieNodes communitieNodes = new CommunitieNodes();
                communitieNodes.Index = index;
                communitieNodes.CommunitieId = kvp.Value;
                communitieNodes.NodeId = kvp.Key;
                _communitieNodes_Repositories.Insert(communitieNodes);
            }
            //获取所有社区ID
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
                //插入社区总结数据
                _communities_Repositories.Insert(communities);
            }

        }

        /// <summary>
        /// 全局摘要
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

        /// <summary>
        /// 增强图谱关系：为现有节点发现和建立新的关系
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public async Task EnhanceGraphRelationshipsAsync(string index)
        {
            if (string.IsNullOrWhiteSpace(index))
            {
                throw new ArgumentException("Index required value cannot be null.");
            }

            Console.WriteLine("开始增强图谱关系...");
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();

            // 获取所有孤立或连接较少的节点
            var allNodes = _nodes_Repositories.GetList(p => p.Index == index);
            var lowConnectedNodes = new List<Nodes>();

            foreach (var node in allNodes)
            {
                var connectionCount = _edges_Repositories.GetDB().Queryable<Edges>()
                    .Where(e => (e.Source == node.Id || e.Target == node.Id) && e.Index == index)
                    .Count();

                // 如果连接数少于2个，认为是需要增强的节点
                if (connectionCount < 2)
                {
                    lowConnectedNodes.Add(node);
                }
            }

            Console.WriteLine($"发现 {lowConnectedNodes.Count} 个需要增强关系的节点");

            // 为每个低连接节点尝试建立新关系
            int enhancedCount = 0;
            foreach (var node in lowConnectedNodes)
            {
                try
                {
                    int newConnections = await AttemptConnectOrphanNodeAsync(index, node, textMemory);
                    if (newConnections > 0)
                    {
                        enhancedCount++;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"增强节点 {node.Name} 关系时出错：{ex.Message}");
                }
            }

            Console.WriteLine($"关系增强完成，共为 {enhancedCount} 个节点建立了新关系");
        }

        /// <summary>
        /// 批量关系验证：检查并优化现有关系的质量
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public async Task ValidateAndOptimizeRelationshipsAsync(string index)
        {
            if (string.IsNullOrWhiteSpace(index))
            {
                throw new ArgumentException("Index required value cannot be null.");
            }

            Console.WriteLine("开始验证和优化现有关系...");

            var allEdges = _edges_Repositories.GetList(p => p.Index == index);
            var weakRelationships = new List<Edges>();

            // 识别可能需要优化的关系
            foreach (var edge in allEdges)
            {
                // 检查关系描述是否过于简单或模糊
                if (string.IsNullOrWhiteSpace(edge.Relationship) ||
                    edge.Relationship.Length < 3 ||
                    edge.Relationship.ToLower().Contains("related") ||
                    edge.Relationship.ToLower().Contains("associated"))
                {
                    weakRelationships.Add(edge);
                }
            }

            Console.WriteLine($"发现 {weakRelationships.Count} 个需要优化的关系");

            // 优化弱关系
            int optimizedCount = 0;
            foreach (var edge in weakRelationships.Take(20)) // 限制处理数量
            {
                try
                {
                    var sourceNode = _nodes_Repositories.GetFirst(p => p.Id == edge.Source);
                    var targetNode = _nodes_Repositories.GetFirst(p => p.Id == edge.Target);

                    if (sourceNode != null && targetNode != null)
                    {
                        string sourceText = $"Name:{sourceNode.Name};Type:{sourceNode.Type};Desc:{sourceNode.Desc}";
                        string targetText = $"Name:{targetNode.Name};Type:{targetNode.Type};Desc:{targetNode.Desc}";

                        var newRelationship = await _semanticService.GetRelationship(sourceText, targetText);
                        if (newRelationship.IsRelationship &&
                            !string.IsNullOrWhiteSpace(newRelationship.Edge.Relationship) &&
                            newRelationship.Edge.Relationship != edge.Relationship)
                        {
                            edge.Relationship = newRelationship.Edge.Relationship;
                            _edges_Repositories.Update(edge);
                            optimizedCount++;
                            Console.WriteLine($"优化关系: {sourceNode.Name} -> {targetNode.Name}: {newRelationship.Edge.Relationship}");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"优化关系时出错：{ex.Message}");
                }
            }

            Console.WriteLine($"关系优化完成，共优化了 {optimizedCount} 个关系");
        }

        public async Task DeleteGraph(string index)
        {
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            var nodes = await _nodes_Repositories.GetListAsync(p => p.Index == index);
            foreach (var node in nodes)
            {
                //删除向量数据
                await textMemory.RemoveAsync(index, node.Id);
            }
            //删除索引数据
            await _nodes_Repositories.DeleteAsync(p => p.Index == index);
            await _edges_Repositories.DeleteAsync(p => p.Index == index);
            await _communities_Repositories.DeleteAsync(p => p.Index == index);
            await _communitieNodes_Repositories.DeleteAsync(p => p.Index == index);
            await _globals_Repositories.DeleteAsync(p => p.Index == index);
        }


        #region 内部方法

        /// <summary>
        /// 检测和处理孤立节点
        /// </summary>
        /// <param name="index"></param>
        /// <param name="newNodes"></param>
        /// <param name="textMemory"></param>
        /// <returns></returns>
        private async Task ProcessOrphanNodesAsync(string index, List<Nodes> newNodes, SemanticTextMemory textMemory)
        {
            Console.WriteLine($"开始检测孤立节点，新增节点数：{newNodes.Count}");

            foreach (var node in newNodes)
            {
                // 检查节点是否为孤立节点（没有任何边连接）
                bool hasConnections = _edges_Repositories.IsAny(p =>
                    (p.Source == node.Id || p.Target == node.Id) && p.Index == index);

                if (!hasConnections)
                {
                    Console.WriteLine($"发现孤立节点：{node.Name}");
                    var connectionsFound = await AttemptConnectOrphanNodeAsync(index, node, textMemory);
                    Console.WriteLine($"为节点 {node.Name} 建立了 {connectionsFound} 个新连接");
                }
            }
        }

        /// <summary>
        /// 尝试为孤立节点建立连接
        /// </summary>
        /// <param name="index"></param>
        /// <param name="orphanNode"></param>
        /// <param name="textMemory"></param>
        /// <returns>返回建立的新连接数量</returns>
        private async Task<int> AttemptConnectOrphanNodeAsync(string index, Nodes orphanNode, SemanticTextMemory textMemory)
        {
            string nodeText = $"Name:{orphanNode.Name};Type:{orphanNode.Type};Desc:{orphanNode.Desc}";

            // 使用更低的阈值和更多的搜索结果来寻找潜在关系
            List<string> candidateNodes = new List<string>();

            // 第一轮：基于节点描述搜索
            await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, nodeText, limit: 10, minRelevanceScore: 0.5))
            {
                if (memory.Metadata.Id != orphanNode.Id)
                {
                    candidateNodes.Add(memory.Metadata.Id);
                }
            }

            // 第二轮：基于节点名称搜索（针对命名实体）
            if (candidateNodes.Count < 3)
            {
                await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, orphanNode.Name, limit: 5, minRelevanceScore: 0.6))
                {
                    if (memory.Metadata.Id != orphanNode.Id && !candidateNodes.Contains(memory.Metadata.Id))
                    {
                        candidateNodes.Add(memory.Metadata.Id);
                    }
                }
            }

            // 第三轮：基于节点类型搜索相同类型的实体
            if (candidateNodes.Count < 2)
            {
                var sameTypeNodes = _nodes_Repositories.GetList(p =>
                    p.Index == index && p.Type == orphanNode.Type && p.Id != orphanNode.Id)
                    .Take(5).Select(p => p.Id).ToList();

                foreach (var nodeId in sameTypeNodes)
                {
                    if (!candidateNodes.Contains(nodeId))
                    {
                        candidateNodes.Add(nodeId);
                    }
                }
            }

            // 尝试建立关系
            int connectionsFound = 0;
            foreach (var candidateId in candidateNodes.Take(5)) // 限制检查数量以控制成本
            {
                var candidateNode = _nodes_Repositories.GetFirst(p => p.Id == candidateId);
                if (candidateNode != null)
                {
                    string candidateText = $"Name:{candidateNode.Name};Type:{candidateNode.Type};Desc:{candidateNode.Desc}";

                    try
                    {
                        var relationShip = await _semanticService.GetRelationship(candidateText, nodeText);
                        if (relationShip.IsRelationship)
                        {
                            // 确定关系方向
                            string sourceId, targetId;
                            if (relationShip.Edge.Source == "node1")
                            {
                                sourceId = candidateNode.Id;
                                targetId = orphanNode.Id;
                            }
                            else
                            {
                                sourceId = orphanNode.Id;
                                targetId = candidateNode.Id;
                            }

                            // 检查关系是否已存在
                            if (!_edges_Repositories.IsAny(p => p.Source == sourceId && p.Target == targetId && p.Index == index))
                            {
                                var edge = new Edges()
                                {
                                    Id = Guid.NewGuid().ToString(),
                                    Index = index,
                                    Source = sourceId,
                                    Target = targetId,
                                    Relationship = relationShip.Edge.Relationship
                                };
                                _edges_Repositories.Insert(edge);
                                connectionsFound++;
                                Console.WriteLine($"为孤立节点 {orphanNode.Name} 建立关系：{relationShip.Edge.Relationship} -> {candidateNode.Name}");

                                // 如果已经找到足够的连接，停止搜索
                                if (connectionsFound >= 2)
                                {
                                    break;
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"为孤立节点建立关系时出错：{ex.Message}");
                    }
                }
            }

            if (connectionsFound == 0)
            {
                Console.WriteLine($"警告：未能为孤立节点 {orphanNode.Name} 建立任何关系");
            }

            return connectionsFound;
        }

        /// <summary>
        /// 基于搜索条件检索TextMemModel的列表。
        /// </summary>
        /// <param name="index">索引</param>
        /// <param name="input">输入文本</param>
        /// <param name="minRelevance">最小相关性阈值</param>
        /// <param name="limit">搜索结果限制</param>
        /// <returns></returns>
        private async Task<List<TextMemModel>> RetrieveTextMemModelList(string index, string input, double? minRelevance = null, int? limit = null)
        {
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            List<TextMemModel> textMemModelList = new List<TextMemModel>();

            // 使用提供的阈值或默认配置
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

            // 如果结果不足，尝试降低阈值
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

            // 按相关性排序
            textMemModelList = textMemModelList.OrderByDescending(t => t.Relevance).ToList();
            Console.WriteLine($"向量匹配数:{matchCount}, 最高相关度:{(textMemModelList.Any() ? textMemModelList.First().Relevance.ToString("F2") : "N/A")}");
            return textMemModelList;
        }

        /// <summary>
        /// 递归获取节点相关的所有边和节点
        /// </summary>
        /// <param name="index">索引</param>
        /// <param name="initialNodes">初始节点列表</param>
        /// <param name="nodeWeights">节点权重字典</param>
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

                // 按权重排序待探索节点
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

                // 添加新边，避免重复
                foreach (var edge in newEdges)
                {
                    if (!allEdges.Any(e => e.Source == edge.Source && e.Target == edge.Target))
                    {
                        allEdges.Add(edge);

                        // 为新发现的节点设置权重
                        double parentWeight = nodeWeights.GetValueOrDefault(edge.Source, 0);
                        double weightDecay = 0.8; // 权重衰减因子

                        if (!nodeWeights.ContainsKey(edge.Target))
                        {
                            nodeWeights[edge.Target] = parentWeight * weightDecay;
                        }
                    }
                }

                // 获取新节点
                var newNodes = GetNodes(index, newEdges);
                var nodesToAdd = newNodes.Where(n => !allNodes.Any(existingNode => existingNode.Id == n.Id)).ToList();
                allNodes.AddRange(nodesToAdd);
                nodesToExplore.AddRange(nodesToAdd);

                depth++;
            }

            // 如果节点数超过限制，保留权重最高的节点
            if (allNodes.Count > GraphSearchOption.MaxNodes)
            {
                allNodes = allNodes
                    .OrderByDescending(n => nodeWeights.GetValueOrDefault(n.Id, 0))
                    .Take(GraphSearchOption.MaxNodes)
                    .ToList();

                // 确保边的节点都在保留的节点中
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
        /// 通过社区算法检索社区节点
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

            // 如果节点数超过最大限制，进行截断
            if (allNodes.Count > GraphSearchOption.MaxNodes)
            {
                allNodes = allNodes.Take(GraphSearchOption.MaxNodes).ToList();
            }
            // 需要相应地处理 allEdges，确保边的节点在 allNodes 中 
            allEdges = allEdges.Where(e => allNodes.Any(p => p.Id == e.Source) && allNodes.Any(p => p.Id == e.Target)).ToList();

            return new GraphModel
            {
                Nodes = allNodes,
                Edges = allEdges
            };
        }

        /// <summary>
        /// 获取边信息
        /// </summary>
        /// <param name="index">索引</param>
        /// <param name="nodes">节点列表</param>
        /// <returns></returns>
        private List<Edges> GetEdges(string index, List<Nodes> nodes)
        {
            var nodeIds = nodes.Select(x => x.Id).ToList();
            var edges = new List<Edges>();
            edges = _edges_Repositories.GetList(x => x.Index == index && nodeIds.Contains(x.Source) && nodeIds.Contains(x.Target));
            return edges;
        }

        /// <summary>
        /// 获取节点信息
        /// </summary>
        /// <param name="index">索引</param>
        /// <param name="edges">边列表</param>
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
        /// 获取相关社区ID列表
        /// </summary>
        private List<string> GetRelevantCommunities(string index, List<string> nodeIds)
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
