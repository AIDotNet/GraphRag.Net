using GraphRag.Core.Repositories;
using GraphRag.EntityFrameworkCore.Repositories;
using GraphRag.Net.Base;
using Microsoft.Extensions.DependencyInjection;
using SqlSugar;

namespace GraphRag.SqlSugar;

public static class ServiceExtensions
{
    public static IServiceCollection AddSqlSugar(this IServiceCollection services)
    {
        services.AddScoped<ISqlSugarClient>(provider => SqlSugarHelper.SqlScope());

        services.AddHostedService<DatabaseMigration>();

        services.AddScoped<INodesRepository, NodesRepository>();
        services.AddScoped<IEdgesRepository, EdgesRepository>();
        services.AddScoped<IGlobalsRepository, GlobalsRepository>();
        services.AddScoped<ICommunitieNodesRepository, CommunitieNodesRepository>();
        services.AddScoped<ICommunitiesRepository, CommunitiesRepository>();

        return services;
    }
}