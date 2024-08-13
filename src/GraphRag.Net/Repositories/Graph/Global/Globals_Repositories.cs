using GraphRag.Net.Base;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(IGlobals_Repositories), ServiceLifetime.Scoped)]
    public class Globals_Repositories : Repository<Globals>, IGlobals_Repositories
    {
    }
}
