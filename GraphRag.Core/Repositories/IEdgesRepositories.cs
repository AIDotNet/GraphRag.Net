using GraphRag.Net.Repositories;

namespace GraphRag.Core.Repositories;

public interface IEdgesRepositories : IRepositories<Edges, string>
{
    /// <summary>
    /// 查询Edges 的Source和Target 重复数据
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Edges>> QueryEdgesRepeatAsync();
}