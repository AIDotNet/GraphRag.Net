using GraphRag.Net.Base;
using GraphRag.Net.Repositories.Graph.Edges;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(ICommunities_Repositories), ServiceLifetime.Scoped)]
    public class Communities_Repositories : Repository<Communities>, ICommunities_Repositories
    {
    }
}
