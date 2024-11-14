using GraphRag.Net.Domain.Model.Graph;

namespace GraphRag.Net.Domain.Interface;

public interface ICommunityDetectionService
{
    Dictionary<string, string> FastLabelPropagationAlgorithm(Graph graph, int iterations = 10);
}