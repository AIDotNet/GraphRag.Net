using Azure.AI.OpenAI;
using GraphRag.Net.Common.Options;
using GraphRag.Net.Domain.Interface;
using GraphRag.Net.Options;
using GraphRag.Net.Utils;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Connectors.OpenAI;
using Microsoft.SemanticKernel.Connectors.Sqlite;
using Microsoft.SemanticKernel.Memory;

namespace GraphRag.Net.Domain.Service
{
    [ServiceDescription(typeof(ISemanticService), ServiceLifetime.Scoped)]
    public class SemanticService(Kernel _kernel) : ISemanticService
    {
        public async Task<string> CreateGraphAsync(string input)
        {
            OpenAIPromptExecutionSettings settings = new()
            {
                Temperature = 0,
                ResponseFormat = ChatCompletionsResponseFormat.JsonObject
            };
            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "create");
            var args = new KernelArguments(settings)
            {
                ["input"] = input,
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }
        public async Task<string> GetGraphAnswerAsync(string graph, string input)
        {

            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "search");
            var args = new KernelArguments()
            {
                ["graph"] = graph,
                ["input"] = input,
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }


        public async Task<string> GetRelationship(string node1, string node2)
        {
            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "relationship");
            var args = new KernelArguments()
            {
                ["node1"] = node1,
                ["node2"] = node2,
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }

        public async Task<string> MergeDesc(string desc1, string desc2)
        {
            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "mergedesc");
            var args = new KernelArguments()
            {
                ["desc1"] = desc1,
                ["desc2"] = desc2,
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }  
        public async Task<string> CommunitySummaries(string nodes)
        {
            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "community_summaries");
            var args = new KernelArguments()
            {
                ["nodes"] = nodes
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }    
        public async Task<string> GlobalSummaries(string community)
        {
            KernelFunction createFun = _kernel.Plugins.GetFunction("graph", "global_summaries");
            var args = new KernelArguments()
            {
                ["community"] = community
            };
            var skresult = await _kernel.InvokeAsync(createFun, args);

            string result = skresult.GetValue<string>()?.Trim() ?? "";
            return result;
        }    


        public async Task<SemanticTextMemory> GetTextMemory()
        {
            IMemoryStore memoryStore = await SqliteMemoryStore.ConnectAsync(GraphDBConnectionOption.Db);
            var handler = new OpenAIHttpClientHandler();
            var httpClient = new HttpClient(handler);
            httpClient.Timeout = TimeSpan.FromMinutes(10);
            var embeddingGenerator = new OpenAITextEmbeddingGenerationService(OpenAIOption.EmbeddingModel, OpenAIOption.Key, httpClient: new HttpClient(handler));
            SemanticTextMemory textMemory = new(memoryStore, embeddingGenerator);

            return textMemory;
        }
    }
}
