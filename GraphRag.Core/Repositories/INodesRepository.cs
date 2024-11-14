using GraphRag.Net.Repositories;

namespace GraphRag.Core.Repositories;

public interface INodesRepository : IRepository<Nodes,string>
{
    /// <summary>
    /// 获取所有索引
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<string>> GetAllIndexAsync();
}