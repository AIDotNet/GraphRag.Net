using GraphRag.Net.Domain.Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GraphRag.Net;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Connectors.OpenAI;
using Azure.AI.OpenAI;
using Newtonsoft.Json;
using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Repositories.Graph.Nodes;
using GraphRag.Net.Repositories;
using GraphRag.Net.Common.Options;
using Microsoft.SemanticKernel.Connectors.Sqlite;
using Microsoft.SemanticKernel.Memory;
using GraphRag.Net.Options;
using GraphRag.Net.Utils;
using static System.Net.Mime.MediaTypeNames;
using static Dm.net.buffer.ByteArrayBuffer;
using GraphRag.Net.Domain.Model.Constant;
using SqlSugar;
using Microsoft.SemanticKernel.Text;

namespace GraphRag.Net.Domain.Service
{
    [ServiceDescription(typeof(IGraphService), ServiceLifetime.Scoped)]
    public class GraphService(
        Kernel _kernel,
        INodes_Repositories _nodes_Repositories,
        IEdges_Repositories _edges_Repositories,
        ISemanticService _semanticService
        ) : IGraphService
    {
        /// <summary>
        /// 获取Graph数据
        /// </summary>
        /// <returns></returns>
        public GraphViewModel GetAllGraph()
        {
            GraphViewModel graphViewModel = new GraphViewModel();
            var nodes = _nodes_Repositories.GetList();
            var edges = _edges_Repositories.GetList();
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

        public async Task TextChunkInsertGraph(string input)
        {
            var lines = TextChunker.SplitPlainTextLines(input, 100);

            var paragraphs = TextChunker.SplitPlainTextParagraphs(lines, 1000);
            foreach (var para in paragraphs)
            {
                await InsertGraph(para);
            }
        }

        /// <summary>
        /// 生成图谱数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task InsertGraph(string input)
        {
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
                        var newDesc = await _semanticService.MergeDesc(oldNode.Desc, n.Desc);
                        oldNode.Desc = newDesc;
                        //更新描述
                        _nodes_Repositories.Update(oldNode);
                        text2 = $"Name:{oldNode.Name};Type:{oldNode.Type};Desc:{oldNode.Desc}";
                        nodeDic.Add(n.Id, oldNode.Id);
                        await textMemory.SaveInformationAsync(SystemConstant.NodeIndex, id: oldNode.Id, text: text2, cancellationToken: default);
                        continue;
                    }

                    //判断是否存在相关节点
                    await foreach (MemoryQueryResult memory in textMemory.SearchAsync(SystemConstant.NodeIndex, text2, limit: 1, minRelevanceScore: 0.9))
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
                        Name = n.Name,
                        Type = n.Type,
                        Desc = n.Desc
                    };

                    if (!nodeDic.ContainsKey(n.Id))
                    {
                        nodeDic.Add(n.Id, node.Id);
                    }
                    _nodes_Repositories.Insert(node);
                    //向量处理节点信息
                    await textMemory.SaveInformationAsync(SystemConstant.NodeIndex, id: node.Id, text: text2, cancellationToken: default);
                }

                foreach (var e in graph.Edges)
                {
                    Edges edge = new Edges()
                    {
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
        /// 搜索图谱对话
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<string> SearchGraph(string input)
        {
            string answer = "" ;
            SemanticTextMemory textMemory = await _semanticService.GetTextMemory();
            List<TextMemModel> textMemModelList = new List<TextMemModel>() ;
            await foreach (MemoryQueryResult memory in textMemory.SearchAsync(SystemConstant.NodeIndex, input, limit: 3, minRelevanceScore: 0.8))
            {
                var textMemModel = new TextMemModel()
                {
                    Id = memory.Metadata.Id,
                    Text = memory.Metadata.Text,
                    Relevance = memory.Relevance
                };
                textMemModelList.Add(textMemModel);
            }

            if (textMemModelList.Count()>0)
            {
                var nodes= _nodes_Repositories.GetList(p => textMemModelList.Select(c=>c.Id).Contains(p.Id));
                //匹配到节点信息
                var graphModel =  GetGraphAllRecursion(nodes);
                answer = await _semanticService.GetGraphAnswerAsync(JsonConvert.SerializeObject(graphModel), input);
            }
            return answer;
        }  

        /// <summary>
        /// 递归获取节点相关的所有边和节点
        /// </summary>
        /// <param name="initialNodes"></param>
        /// <returns></returns>
        public GraphModel GetGraphAllRecursion(List<Nodes> initialNodes)
        {
            var allNodes = new List<Nodes>(initialNodes);
            var allEdges = new List<Edges>();
            var nodesToExplore = new List<Nodes>(initialNodes);
            int i = 0;
            while (nodesToExplore.Count > 0)
            {
                //线的深度，暂时先不处理太远距离的关联
                if (i > 5)
                {
                    break;
                }

                var newEdges = GetEdges(nodesToExplore);
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
                var newNodes = GetNodes(newEdges);

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
        /// 获取边信息
        /// </summary>
        /// <param name="nodeIds"></param>
        /// <returns></returns>
        public List<Edges> GetEdges(List<Nodes> nodes)
        {
            var nodeIds=nodes.Select(x => x.Id).ToList();
            var edges = new List<Edges>();
            edges = _edges_Repositories.GetList(x => nodeIds.Contains(x.Source) || nodeIds.Contains(x.Target));
            return edges;
        }

        /// <summary>
        /// 获取节点信息
        /// </summary>
        /// <param name="edges"></param>
        /// <returns></returns>
        public List<Nodes> GetNodes(List<Edges> edges)
        {
            var targets = edges.Select(p => p.Target).ToList();
            var sources = edges.Select(p => p.Source).ToList();
            List<string> nodeIds= new List<string>();
            nodeIds.AddRange(targets);
            nodeIds.AddRange(sources);

            var nodes=_nodes_Repositories.GetList(p=> nodeIds.Contains(p.Id));
            return nodes;
        }
    }
}
