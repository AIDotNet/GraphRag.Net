using GraphRag.Net.Domain.Model.Graph;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {
        GraphViewModel GetAllGraph();

        Task TextChunkInsertGraph(string input);
        Task InsertGraph(string input);

        Task<string> SearchGraph(string input);
    }
}
