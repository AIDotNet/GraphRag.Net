using GraphRag.Net.Repositories;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class RelationShipModel
    {
        public bool IsRelationship { get; set; }

        public Edges Edge { get; set; }
    }
}
