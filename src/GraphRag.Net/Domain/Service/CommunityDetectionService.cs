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
        /// <returns></returns>
        public Dictionary<string, string> LabelPropagation(Graph graph)
        {
            // Initialize labels
            var labels = graph.AdjacencyList.Keys.ToDictionary(node => node, node => node);

            bool changed;
            do
            {
                changed = false;
                var nodes = graph.AdjacencyList.Keys.OrderBy(a => Guid.NewGuid()).ToList(); // Randomize order
                foreach (var node in nodes)
                {
                    var neighborLabels = new Dictionary<string, int>();
                    foreach (var neighbor in graph.AdjacencyList[node])
                    {
                        if (!neighborLabels.ContainsKey(labels[neighbor]))
                        {
                            neighborLabels[labels[neighbor]] = 0;
                        }
                        neighborLabels[labels[neighbor]]++;
                    }

                    var maxCount = neighborLabels.Values.Max();
                    var newLabel = neighborLabels.FirstOrDefault(x => x.Value == maxCount).Key;

                    if (labels[node] != newLabel)
                    {
                        labels[node] = newLabel;
                        changed = true;
                    }
                }
            } while (changed);

            return labels;
        }
    }
}
