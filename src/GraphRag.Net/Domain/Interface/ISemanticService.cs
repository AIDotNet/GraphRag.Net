using Microsoft.SemanticKernel.Memory;

namespace GraphRag.Net.Domain.Interface
{
    public interface ISemanticService
    {
        Task<string> CreateGraphAsync(string input);

        Task<string> GetGraphAnswerAsync(string graph, string input);
        Task<string> GetRelationship(string node1, string node2);
        Task<string> MergeDesc(string desc1, string desc2);
        Task<string> CommunitySummaries(string nodes);

        Task<SemanticTextMemory> GetTextMemory();
    }
}
