using GraphRag.Net.Base;

namespace GraphRag.Net.Repositories.Graph.Nodes
{
    [ServiceDescription(typeof(INodes_Repositories), ServiceLifetime.Scoped)]
    public class Nodes_Repositories : Repository<Nodes>, INodes_Repositories
    {
    }
}
