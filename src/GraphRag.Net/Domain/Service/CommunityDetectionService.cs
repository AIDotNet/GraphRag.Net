using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Domain.Model.Graph;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Service
{
    [ServiceDescription(typeof(ICommunityDetectionService), ServiceLifetime.Scoped)]
    public class CommunityDetectionService: ICommunityDetectionService
    {
        /// <summary>
        /// 标签传播算法
        /// </summary>
        /// <param name="graph"></param>
        /// <param name="iterations"></param>
        /// <returns></returns>
        public Dictionary<string, string> FastLabelPropagationAlgorithm(Graph graph, int iterations = 10)
        {
            // Initialize labels
            var labels = graph.AdjacencyList.Keys.ToDictionary(node => node, node => node);

            for (int iter = 0; iter < iterations; iter++)
            {
                // Shuffle nodes
                var nodes = graph.AdjacencyList.Keys.OrderBy(a => Guid.NewGuid()).ToList();

                foreach (var node in nodes)
                {
                    // Count neighbor labels
                    var labelCounts = new Dictionary<string, int>();
                    foreach (var neighbor in graph.AdjacencyList[node])
                    {
                        if (!labelCounts.ContainsKey(labels[neighbor]))
                        {
                            labelCounts[labels[neighbor]] = 0;
                        }
                        labelCounts[labels[neighbor]]++;
                    }

                    // Find the label of highest frequency
                    var maxCount = labelCounts.Values.Max();
                    var bestLabels = labelCounts.Where(x => x.Value == maxCount).Select(x => x.Key).ToList();

                    // Pick a random label among the smallest lexicographically in case of tie
                    var newLabel = bestLabels.OrderBy(x => x).First();

                    if (labels[node] != newLabel)
                    {
                        labels[node] = newLabel;
                    }
                }
            }

            return labels;
        }
    }
}
