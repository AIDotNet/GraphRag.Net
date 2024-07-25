using GraphRag.Net.Domain.Model.Graph;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {
        List<string> GetAllIndex();
        GraphViewModel GetAllGraphs(string index);

        Task InsertTextChunkAsync(string index, string input);
        Task InsertGraphDataAsync(string index, string input);

        Task<string> SearchGraphAsync(string index, string input);
    }
}
