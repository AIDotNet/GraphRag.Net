using GraphRag.Net.Domain.Model.Graph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Interface
{
    public interface ICommunityDetectionService
    {
        Dictionary<string, string> FastLabelPropagationAlgorithm(Graph graph, int iterations = 10);
    }
}
