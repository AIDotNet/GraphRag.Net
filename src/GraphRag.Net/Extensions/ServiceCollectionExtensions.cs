using System.Reflection;
using GraphRag.Net;
using GraphRag.Net.Options;
using GraphRag.Net.Repositories;
using GraphRag.Net.Utils;
using Microsoft.SemanticKernel;
using SqlSugar;

namespace Microsoft.Extensions.DependencyInjection
{
    /// <summary>
    /// Расширение контейнера
    /// </summary>
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Загрузить типы из сборки и добавить в контейнер
        /// </summary>
        /// <param name="services">Контейнер</param>
        /// <returns></returns>
        public static IServiceCollection AddGraphRagNet(this IServiceCollection services, Kernel _kernel = null)
        {
            Type attributeType = typeof(ServiceDescriptionAttribute);
            //var refAssembyNames = Assembly.GetExecutingAssembly().GetReferencedAssemblies();

            Assembly assembly = Assembly.Load("GraphRag.Net");

            var types = assembly.GetTypes();

            foreach (var classType in types)
            {
                if (!classType.IsAbstract && classType.IsClass && classType.IsDefined(attributeType, false))
                {
                    ServiceDescriptionAttribute serviceAttribute = (classType.GetCustomAttribute(attributeType) as ServiceDescriptionAttribute);
                    switch (serviceAttribute.Lifetime)
                    {
                        case ServiceLifetime.Scoped:
                            services.AddScoped(serviceAttribute.ServiceType, classType);
                            break;

                        case ServiceLifetime.Singleton:
                            services.AddSingleton(serviceAttribute.ServiceType, classType);
                            break;

                        case ServiceLifetime.Transient:
                            services.AddTransient(serviceAttribute.ServiceType, classType);
                            break;
                    }
                }
            }

            CodeFirst();
            InitSK(services, _kernel);

            return services;
        }

        /// <summary>
        /// Инициализация SK
        /// </summary>
        /// <param name="services"></param>
        /// <param name="_kernel">Можно передать собственный Kernel</param>
        static void InitSK(IServiceCollection services,Kernel _kernel = null)
        {
            var handler = new OpenAIHttpClientHandler();
            services.AddTransient<Kernel>((serviceProvider) =>
            {
                if (_kernel == null)
                {
                    _kernel = Kernel.CreateBuilder()
                    .AddOpenAIChatCompletion(
                      modelId: GraphOpenAIOption.ChatModel,
                      apiKey: GraphOpenAIOption.Key,
                      httpClient: new HttpClient(handler)
                         )
                    .Build();
                }
                // Импортировать плагины
                if (!_kernel.Plugins.Any(p => p.Name == "graph"))
                {
                    var pluginPatth = Path.Combine(RepoFiles.SamplePluginsPath(), "graph");
                    Console.WriteLine($"pluginPatth:{pluginPatth}");
                    _kernel.ImportPluginFromPromptDirectory(pluginPatth);
                }
                return _kernel;
            });
        }

        /// <summary>
        /// Инициализация БД
        /// </summary>
        static void CodeFirst()
        {
            // Получить сервис репозитория
            var _repository = new Nodes_Repositories();

            // Создать базу данных (если отсутствует)
            _repository.GetDB().DbMaintenance.CreateDatabase();
            // Найти во всех сборках классы с атрибутом [SugarTable]
            var assembly = Assembly.GetExecutingAssembly();
            // Получить все типы с атрибутом SugarTable в этой сборке
            var entityTypes = assembly.GetTypes()
                    .Where(type => TypeIsEntity(type));
            // Инициализировать таблицы БД для каждого найденного типа
            foreach (var type in entityTypes)
            {
                _repository.GetDB().CodeFirst.InitTables(type);
            }
        }

        static bool TypeIsEntity(Type type)
        {
            // Проверить, имеет ли тип атрибут SugarTable
            return type.GetCustomAttributes(typeof(SugarTable), inherit: false).Length > 0;
        }
    }
}
