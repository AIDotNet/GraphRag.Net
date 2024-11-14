using GraphRag.Net.Repositories;

namespace GraphRag.Core.Repositories;

public interface ICommunitieNodesRepositories : IRepositories<CommunitieNodes>
{
    /// <summary>
    /// 获取所有社区ID
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<string>> GetAllCommunitieIdAsync(string index); 
    
    /// <summary>
    /// 获取社区关键节点
    /// </summary>
    /// <remarks>
    /// 
    /// var nodeList = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>()
    ///     .LeftJoin<Nodes>((c, n) => c.NodeId == n.Id)
    ///     .Where(c => c.CommunitieId == communitieId)
    ///     .Select((c, n) => $"Name:{n.Name}; Type:{n.Type}; Desc:{n.Desc}")
    ///     .ToList();
    /// </remarks>
    /// <param name="communitieId"></param>
    /// <returns></returns>
    Task<IEnumerable<string>> GetCommunitieNodesAsync(string communitieId);
}