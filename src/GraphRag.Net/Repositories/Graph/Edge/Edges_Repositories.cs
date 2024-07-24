using GraphRag.Net;
using GraphRag.Net.Base;
using GraphRag.Net.Repositories.Graph.Nodes;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(IEdges_Repositories), ServiceLifetime.Scoped)]
    public class Edges_Repositories : Repository<Edges>, IEdges_Repositories
    {
    }
}
