using GraphRag.Net.Repositories;

namespace GraphRag.Core.Repositories;

public interface ICommunitiesRepository : IRepository<Communities>
{
    /// <summary>
    /// 获取社区节点,并获取社区节点的所有边
    /// 通过Communities关联CommunitieNodes关联Nodes
    /// 
    /// var communitiesNodes = _communities_Repositories.GetDB().Queryable<Communities>()
    ///     .LeftJoin<CommunitieNodes>((c, cn) => c.CommunitieId == cn.CommunitieId)
    ///     .LeftJoin<Nodes>((c, cn, n) => cn.NodeId == n.Id)
    ///     .Where((c, cn, n) => nodeIds.Contains(n.Id)).Select((c, cn, n) =>
    ///         new Nodes { Index = n.Index, Id = n.Id, Name = n.Name, Type = n.Type, Desc = n.Desc }).ToList();
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Nodes>> GetCommunitiesNodesAsync(IEnumerable<string> nodeIds);
}