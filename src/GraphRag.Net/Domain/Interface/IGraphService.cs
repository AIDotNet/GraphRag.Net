using GraphRag.Net.Domain.Model.Graph;
using Microsoft.SemanticKernel;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {
        /// <summary>
        /// 获取所有索引信息
        /// </summary>
        /// <returns></returns>
        List<string> GetAllIndex();
        /// <summary>
        /// 获取Graph数据
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        GraphViewModel GetAllGraphs(string index);
        /// <summary>
        /// 切片导入文本数据
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task InsertTextChunkAsync(string index, string input);
        /// <summary>
        /// 生成图谱数据
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task InsertGraphDataAsync(string index, string input);

        /// <summary>
        ///  搜索递归获取节点相关的所有边和节点
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<GraphModel> SearchGraphModel(string index, string input);

        /// <summary>
        /// 搜索递归获取节点相关的所有边和节点进行图谱对话
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<string> SearchGraphAsync(string index, string input);
        /// <summary>
        /// 通过社区算法匹配相关节点信息
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<GraphModel> SearchGraphCommunityModel(string index, string input);
        /// <summary>
        /// 搜索递归获取节点相关的所有边和节点进行图谱对话,流式返回
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        IAsyncEnumerable<StreamingKernelContent> SearchGraphStreamAsync(string index, string input);
        /// <summary>
        /// 通过社区算法检索社区节点进行对话
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        Task<string> SearchGraphCommunityAsync(string index, string input);
        /// <summary>
        /// 通过社区算法检索社区节点进行对话，流式返回
        /// </summary>
        /// <param name="index"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        IAsyncEnumerable<StreamingKernelContent> SearchGraphCommunityStreamAsync(string index, string input);
        /// <summary>
        /// 社区摘要
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task GraphCommunitiesAsync(string index);
        /// <summary>
        /// 全局摘要
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task GraphGlobalAsync(string index);

        /// <summary>
        /// 删除图谱数据
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        Task DeleteGraph(string index);
    }
}
