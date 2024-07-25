using GraphRag.Net.Domain.Model.Graph;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {
        GraphViewModel GetAllGraphs();

        Task InsertTextChunkAsync(string input);
        Task InsertGraphDataAsync(string input);

        Task<string> SearchGraphAsync(string input);
    }
}
