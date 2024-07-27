﻿using GraphRag.Net.Common.Options;
using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Domain.Model.Constant;
using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Repositories;
using GraphRag.Net.Repositories.Graph.Edges;
using GraphRag.Net.Repositories.Graph.Nodes;
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
        Kernel _kernel,
        INodes_Repositories _nodes_Repositories,
        IEdges_Repositories _edges_Repositories,
        ISemanticService _semanticService,
        ICommunities_Repositories _communities_Repositories,
        ICommunitieNodes_Repositories _communitieNodes_Repositories,
        IGlobals_Repositories _globals_Repositories
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
                    text = n.Name
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
            foreach (var para in paragraphs)
            {
                await InsertGraphDataAsync(index, para);
            }
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

                var graphJson = await _semanticService.CreateGraphAsync(input);

                var graph = JsonConvert.DeserializeObject<GraphModel>(graphJson);
                Dictionary<string, string> nodeDic = new Dictionary<string, string>();


                foreach (var n in graph.Nodes)
                {

                    string Id = Guid.NewGuid().ToString();
                    string text2 = $"Name:{n.Name};Type:{n.Type};Desc:{n.Desc}";
                    bool isContinue = false;

                    //判断是否存在相同节点
                    var oldNode = _nodes_Repositories.GetFirst(p => p.Name == n.Name);
                    if (oldNode.IsNotNull())
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
                        await textMemory.SaveInformationAsync(SystemConstant.NodeIndex, id: oldNode.Id, text: text2, cancellationToken: default);
                        continue;
                    }

                    //判断是否存在相关节点
                    await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, text2, limit: 1, minRelevanceScore: 0.9))
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
                            break;
                        }
                        var node1 = _nodes_Repositories.GetFirst(p => p.Id == memory.Metadata.Id);
                        string text1 = $"Name:{node1.Name};Type:{node1.Type};Desc:{node1.Desc}";
                        var relationShipJson = await _semanticService.GetRelationship(text1, text2);
                        var relationShip = JsonConvert.DeserializeObject<RelationShipModel>(relationShipJson);
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
                                relationShip.Edge.Index = index;
                                _edges_Repositories.Insert(relationShip.Edge);
                            }
                            else
                            {
                                //相同的边进行合并
                            }
                        }
                    }

                    if (isContinue)
                    {
                        //节点合并，跳出循环
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
                    //向量处理节点信息
                    await textMemory.SaveInformationAsync(index, id: node.Id, text: text2, cancellationToken: default);
                }

                foreach (var e in graph.Edges)
                {
                    Edges edge = new Edges()
                    {
                        Index = index,
                        Source = nodeDic[e.Source],
                        Target = nodeDic[e.Target],
                        Relationship = e.Relationship
                    };
                    _edges_Repositories.Insert(edge);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
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
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }
            string answer = "";
            var textMemModelList = await RetrieveTextMemModelList(index, input);

            if (textMemModelList.Any())
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                var graphModel = await GetFilteredGraphModel(index, input, nodes);
                answer = await _semanticService.GetGraphAnswerAsync(JsonConvert.SerializeObject(graphModel), input);
            }
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
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }
            var textMemModelList = await RetrieveTextMemModelList(index, input);

            if (textMemModelList.Any())
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                var answerStream = GetFilteredGraphModelStream(index, input, nodes);
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
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }
            string answer = "";
            var textMemModelList = await RetrieveTextMemModelList(index, input);
            var global = _globals_Repositories.GetFirst(p => p.Index == index)?.Summaries;
            if (textMemModelList.Count() > 0)
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                //匹配到节点信息
                var graphModel = GetGraphAllCommunitiesRecursion(index, nodes);

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
            if (string.IsNullOrWhiteSpace(index) || string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Values required for index and input cannot be null.");
            }
            var textMemModelList = await RetrieveTextMemModelList(index, input);

            var global = _globals_Repositories.GetFirst(p => p.Index == index)?.Summaries;
            IAsyncEnumerable<StreamingKernelContent> answer;
            if (textMemModelList.Count() > 0)
            {
                var nodes = _nodes_Repositories.GetList(p => p.Index == index && textMemModelList.Select(c => c.Id).Contains(p.Id));
                //匹配到节点信息
                var graphModel = GetGraphAllCommunitiesRecursion(index, nodes);
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
            var communityDetection = new CommunityDetection();
            var result = communityDetection.LabelPropagation(graph);

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
            var communitieSummariesList = _communities_Repositories.GetDB().Queryable<Communities>().Where(p => p.Index == index).Select(p=>p.Summaries).ToList();
            var communitieSummaries =string.Join(Environment.NewLine, communitieSummariesList);
            var globalSummaries = await _semanticService.GlobalSummaries(communitieSummaries);

            Globals globals = new Globals()
            {
                Index = index,
                Summaries = globalSummaries
            };
            _globals_Repositories.Insert(globals);
        }


        #region 内部方法
        /// <summary>
        /// 基于搜索条件检索TextMemModel的列表。
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        private async Task<List<TextMemModel>> RetrieveTextMemModelList(string index, string input)
        {
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            List<TextMemModel> textMemModelList = new List<TextMemModel>();
            await foreach (MemoryQueryResult memory in textMemory.SearchAsync(index, input, limit: 3, minRelevanceScore: 0.8))
            {
                var textMemModel = new TextMemModel()
                {
                    Id = memory.Metadata.Id,
                    Text = memory.Metadata.Text,
                    Relevance = memory.Relevance
                };
                textMemModelList.Add(textMemModel);
            }
            return textMemModelList;
        }

        /// <summary>
        /// 使用基于输入条件的语义过滤来过滤图模型。
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <param name="nodes"></param>
        /// <returns></returns>
        private async Task<GraphModel> GetFilteredGraphModel(string index, string input, List<Nodes> nodes)
        {
            var graphModel = GetGraphAllRecursion(index, nodes);
            var answer = await _semanticService.GetGraphAnswerAsync(JsonConvert.SerializeObject(graphModel), input);
            return graphModel; // or return the answer depending on your use case
        }

        /// <summary>
        /// 使用基于输入条件的语义过滤来过滤图模型。流式返回
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <param name="nodes"></param>
        /// <returns></returns>
        private IAsyncEnumerable<StreamingKernelContent> GetFilteredGraphModelStream(string index, string input, List<Nodes> nodes)
        {
            var graphModel = GetGraphAllRecursion(index, nodes);
            var answerStream = _semanticService.GetGraphAnswerStreamAsync(JsonConvert.SerializeObject(graphModel), input);
            return answerStream;
        }

        /// <summary>
        /// 递归获取节点相关的所有边和节点
        /// </summary>
        /// <param name="initialNodes"></param>
        /// <returns></returns>
        private GraphModel GetGraphAllRecursion(string index, List<Nodes> initialNodes)
        {
            var allNodes = new List<Nodes>(initialNodes);
            var allEdges = new List<Edges>();
            var nodesToExplore = new List<Nodes>(initialNodes);
            int i = 0;
            while (nodesToExplore.Count > 0)
            {
                //线的深度，暂时先不处理太远距离的关联
                if (i > 3)
                {
                    break;
                }

                var newEdges = GetEdges(index, nodesToExplore);
                if (newEdges.Count() == 0)
                {
                    break; // 没有新的边可以获取，终止递归
                }
                // 将新获取的边加入到allEdges中，避免重复
                foreach (var edge in newEdges)
                {
                    if (!allEdges.Any(e => e.Source == edge.Source && e.Target == edge.Target))
                    {
                        allEdges.Add(edge);
                    }
                }

                // 获取新的节点
                var newNodes = GetNodes(index, newEdges);

                // 找到新获取的节点，并更新 nodesToExplore
                nodesToExplore = newNodes.Where(n => !allNodes.Any(existingNode => existingNode.Id == n.Id)).ToList();

                // 将新节点加入到 allNodes 中
                allNodes.AddRange(nodesToExplore);

                i++;
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
            return new GraphModel
            {
                Nodes = allNodes,
                Edges = allEdges
            };
        }

        /// <summary>
        /// 获取边信息
        /// </summary>
        /// <param name="nodeIds"></param>
        /// <returns></returns>
        private List<Edges> GetEdges(string index, List<Nodes> nodes)
        {
            var nodeIds = nodes.Select(x => x.Id).ToList();
            var edges = new List<Edges>();
            edges = _edges_Repositories.GetList(x => x.Index == index && nodeIds.Contains(x.Source) || nodeIds.Contains(x.Target));
            return edges;
        }

        /// <summary>
        /// 获取节点信息
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

            var nodes = _nodes_Repositories.GetList(p => p.Index == index && nodeIds.Contains(p.Id));
            return nodes;
        }

        #endregion
    }
}
