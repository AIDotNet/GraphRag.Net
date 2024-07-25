using GraphRag.Net.Repositories.Graph.Edges;
using GraphRag.Net.Repositories.Graph.Nodes;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class GraphModel
    {
        public List<Nodes> Nodes { get; set; }
        public List<Edges> Edges { get; set; }
    }
}
