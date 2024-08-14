using GraphRag.Net.Base;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(INodes_Repositories), ServiceLifetime.Scoped)]
    public class Nodes_Repositories : Repository<Nodes>, INodes_Repositories
    {
    }
}
