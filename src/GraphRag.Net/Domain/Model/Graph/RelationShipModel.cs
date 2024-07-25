using GraphRag.Net.Repositories.Graph.Edges;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class RelationShipModel
    {
        public bool IsRelationship { get; set; }

        public Edges Edge { get; set; }
    }
}
