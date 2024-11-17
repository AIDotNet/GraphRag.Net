using GraphRag.Net.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SqlSugar;

namespace GraphRag.SqlSugar;

public class DatabaseMigration :  BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<DatabaseMigration> _logger;

    public DatabaseMigration(IServiceProvider serviceProvider, ILogger<DatabaseMigration> logger)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
    }
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        try
        {
            _logger.LogInformation("DatabaseMigration Start");
            
            using var scope = _serviceProvider.CreateScope();
            
            var services = scope.ServiceProvider;
            
            CodeFirst(services);
            
            await Task.CompletedTask;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
    
    
    /// <summary>
    ///     初始化DB
    /// </summary>
    private static void CodeFirst(IServiceProvider serviceProvider)
    {
        // 获取仓储服务
        var sugarClient = serviceProvider.GetRequiredService<ISqlSugarClient>();

        // 创建数据库（如果不存在）
        sugarClient.DbMaintenance.CreateDatabase();
        
        // 配置迁移实体
        sugarClient.CodeFirst.InitTables<CommunitieNodes>();
        
        sugarClient.CodeFirst.InitTables<Communities>();
        sugarClient.CodeFirst.InitTables<Edges>();
        sugarClient.CodeFirst.InitTables<Globals>();
        sugarClient.CodeFirst.InitTables<Nodes>();
    }
}