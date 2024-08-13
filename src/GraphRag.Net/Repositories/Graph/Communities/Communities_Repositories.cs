using GraphRag.Net.Base;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(ICommunities_Repositories), ServiceLifetime.Scoped)]
    public class Communities_Repositories : Repository<Communities>, ICommunities_Repositories
    {
    }
}
