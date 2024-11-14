using GraphRag.Core;
using GraphRag.Net.Options;
using GraphRag.Net.Utils;
using Microsoft.SemanticKernel;
using SqlSugar;

namespace Microsoft.Extensions.DependencyInjection;

/// <summary>
///     容器扩展
/// </summary>
public static class ServiceExtensions
{
    /// <summary>
    ///     从程序集中加载类型并添加到容器中
    /// </summary>
    /// <param name="services">容器</param>
    /// <param name="kernelFunc"></param>
    /// <returns></returns>
    public static GraphRagBuilder AddGraphRagNet(this IServiceCollection services,
        Func<IServiceProvider, Kernel>? kernelFunc = null)
    {
        services.AddAutoGnarly();

        CodeFirst();
        InitSk(services, kernelFunc);

        return new GraphRagBuilder(services);
    }

    /// <summary>
    ///     初始化SK
    /// </summary>
    /// <param name="services"></param>
    /// <param name="kernelFunc"></param>
    private static void InitSk(IServiceCollection services, Func<IServiceProvider, Kernel>? kernelFunc)
    {
        var handler = new OpenAIHttpClientHandler();
        services.AddTransient<Kernel>((serviceProvider) =>
        {
            Kernel kernel;
            if (kernelFunc != null)
            {
                kernel = kernelFunc(serviceProvider);
            }
            else
            {
                kernel = Kernel.CreateBuilder()
                    .AddOpenAIChatCompletion(
                        GraphOpenAIOption.ChatModel,
                        GraphOpenAIOption.Key,
                        httpClient: new HttpClient(handler)
                    )
                    .Build();
            }

            //导入插件
            if (kernel.Plugins.All(p => p.Name != "graph"))
            {
                var pluginPatth = Path.Combine(RepoFiles.SamplePluginsPath(), "graph");
                Console.WriteLine($"pluginPatth:{pluginPatth}");
                kernel.ImportPluginFromPromptDirectory(pluginPatth);
            }

            return kernel;
        });
    }

    /// <summary>
    ///     初始化DB
    /// </summary>
    private static void CodeFirst()
    {
        // 获取仓储服务
        // var _repository = new Nodes_Repositories();
        //
        // // 创建数据库（如果不存在）
        // _repository.GetDB().DbMaintenance.CreateDatabase();
        // // 在所有程序集中查找具有[SugarTable]特性的类
        // var assembly = Assembly.GetExecutingAssembly();
        // // 获取该程序集中所有具有SugarTable特性的类型
        // var entityTypes = assembly.GetTypes()
        //     .Where(type => TypeIsEntity(type));
        // // 为每个找到的类型初始化数据库表
        // foreach (var type in entityTypes) _repository.GetDB().CodeFirst.InitTables(type);
    }

    private static bool TypeIsEntity(Type type)
    {
        // 检查类型是否具有SugarTable特性
        return type.GetCustomAttributes(typeof(SugarTable), false).Length > 0;
    }
}