using GraphRag.Net.Domain.Model.Graph;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Memory;

namespace GraphRag.Net.Domain.Interface
{
    public interface ISemanticService
    {
        Task<GraphModel> CreateGraphAsync(string input);

        Task<string> GetGraphAnswerAsync(string graph, string input);
        IAsyncEnumerable<StreamingKernelContent> GetGraphAnswerStreamAsync(string graph, string input);
        Task<string> GetGraphCommunityAnswerAsync(string graph, string community, string global, string input);

        IAsyncEnumerable<StreamingKernelContent> GetGraphCommunityAnswerStreamAsync(string graph, string community, string global, string input);
        Task<RelationShipModel> GetRelationship(string node1, string node2);
        Task<string> MergeDesc(string desc1, string desc2);
        Task<string> CommunitySummaries(string nodes);
        Task<string> GlobalSummaries(string community);
        Task<SemanticTextMemory> GetTextMemory();
    }
}
