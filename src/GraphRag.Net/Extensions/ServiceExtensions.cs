using GraphRag.Core;
using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Domain.Service;
using GraphRag.Net.Options;
using GraphRag.Net.Utils;
using Microsoft.SemanticKernel;

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
        services.AddScoped<ICommunityDetectionService, CommunityDetectionService>();
        services.AddScoped<IGraphService, GraphService>();
        services.AddScoped<ISemanticService, SemanticService>();
        
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

}