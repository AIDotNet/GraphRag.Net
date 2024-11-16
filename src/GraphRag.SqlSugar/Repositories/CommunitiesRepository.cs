using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using GraphRag.SqlSugar.Repositories;
using SqlSugar;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class CommunitiesRepository : BaseRepository< Communities>, ICommunitiesRepository
{
    public CommunitiesRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }

    public async Task<IEnumerable<Nodes>> GetCommunitiesNodesAsync(IEnumerable<string> nodeIds)
    {
         var communitiesNodes = await SqlSugarClient.Queryable<Communities>()
             .LeftJoin<CommunitieNodes>((c, cn) => c.CommunitieId == cn.CommunitieId)
             .LeftJoin<Nodes>((c, cn, n) => cn.NodeId == n.Id)
             .Where((c, cn, n) => nodeIds.Contains(n.Id)).Select((c, cn, n) =>
                 new Nodes { Index = n.Index, Id = n.Id, Name = n.Name, Type = n.Type, Desc = n.Desc }).ToListAsync();
        
        return communitiesNodes;
    }
}