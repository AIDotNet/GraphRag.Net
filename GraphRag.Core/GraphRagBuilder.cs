using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Core;

public class GraphRagBuilder
{
    public readonly IServiceCollection Services;

    public GraphRagBuilder(IServiceCollection services)
    {
        Services = services;
    }
}