using GraphRag.Net.Base;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(IEdges_Repositories), ServiceLifetime.Scoped)]
    public class Edges_Repositories : Repository<Edges>, IEdges_Repositories
    {
    }
}
