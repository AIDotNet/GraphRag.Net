using GraphRag.Net.Repositories;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class GraphModel
    {
        public List<Nodes> Nodes { get; set; }
        public List<Edges> Edges { get; set; }
    }
}
