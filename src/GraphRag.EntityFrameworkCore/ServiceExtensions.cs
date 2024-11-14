using GraphRag.Core;
using GraphRag.Core.Repositories;
using GraphRag.EntityFrameworkCore.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.EntityFrameworkCore;

public static class ServiceExtensions
{
    /// <summary>
    ///    添加EntityFrameworkCore
    /// </summary>
    /// <param name="builder"></param>
    /// <param name="optionsAction"></param>
    /// <returns></returns>
    public static GraphRagBuilder AddEntityFrameworkCore(this GraphRagBuilder builder,
        Action<DbContextOptionsBuilder>? optionsAction = null)
    {
        builder.Services.AddDbContext<GraphRagContext>(optionsAction);
        builder.Services.AddScoped<INodesRepository, NodesRepository>();
        builder.Services.AddScoped<IEdgesRepository, EdgesRepository>();
        builder.Services.AddScoped<IGlobalsRepository, GlobalsRepository>();
        builder.Services.AddScoped<ICommunitieNodesRepository, CommunitieNodesRepository>();
        builder.Services.AddScoped<ICommunitiesRepository, CommunitiesRepository>();

        return builder;
    }
}