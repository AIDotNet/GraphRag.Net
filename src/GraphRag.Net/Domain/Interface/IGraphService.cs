using GraphRag.Net.Domain.Model.Graph;
using Microsoft.SemanticKernel;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {
        /// <summary>
        /// Получить всю информацию об индексах
        /// </summary>
        /// <returns></returns>
        List<string> GetAllIndex();
        /// <summary>
        /// Получить данные графа
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        GraphViewModel GetAllGraphs(string index);
        /// <summary>
        /// Импортировать текстовые данные по частям
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task InsertTextChunkAsync(string index, string input);
        /// <summary>
        /// Создать данные графа
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task InsertGraphDataAsync(string index, string input);

        /// <summary>
        ///  Рекурсивно искать все ребра и узлы, связанные с узлом
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<GraphModel> SearchGraphModel(string index, string input);

        /// <summary>
        /// Рекурсивно искать все ребра и узлы, связанные с узлом, для диалога по графу
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<string> SearchGraphAsync(string index, string input);
        /// <summary>
        /// Сопоставить связанные узлы с помощью алгоритма сообществ
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<GraphModel> SearchGraphCommunityModel(string index, string input);
        /// <summary>
        /// Рекурсивно искать все ребра и узлы, связанные с узлом, для диалога по графу, потоковый возврат
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        IAsyncEnumerable<StreamingKernelContent> SearchGraphStreamAsync(string index, string input);
        /// <summary>
        /// Выполнять диалог по узлам сообщества через алгоритм сообществ
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<string> SearchGraphCommunityAsync(string index, string input);
        /// <summary>
        /// Диалог по узлам сообщества через алгоритм сообществ с потоковым возвратом
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        IAsyncEnumerable<StreamingKernelContent> SearchGraphCommunityStreamAsync(string index, string input);
        /// <summary>
        /// Сводка по сообществам
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task GraphCommunitiesAsync(string index);
        /// <summary>
        /// Глобальная сводка
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task GraphGlobalAsync(string index);

        /// <summary>
        /// Удалить данные графа
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task DeleteGraph(string index);
    }
}
