using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class CommunitiesRepository : BaseRepository<GraphRagContext, Communities>, ICommunitiesRepository
{
    public CommunitiesRepository(GraphRagContext dbContext, DbSet<Communities> dbSet) : base(dbContext, dbSet)
    {
    }

    public async Task<IEnumerable<Nodes>> GetCommunitiesNodesAsync(IEnumerable<string> nodeIds)
    {
        /// var communitiesNodes = _communities_Repositories.GetDB().Queryable<Communities>()
        ///     .LeftJoin<CommunitieNodes>((c, cn) => c.CommunitieId == cn.CommunitieId)
        ///     .LeftJoin<Nodes>((c, cn, n) => cn.NodeId == n.Id)
        ///     .Where((c, cn, n) => nodeIds.Contains(n.Id)).Select((c, cn, n) =>
        ///         new Nodes { Index = n.Index, Id = n.Id, Name = n.Name, Type = n.Type, Desc = n.Desc }).ToList();
        ///
        var query = from c in _dbContext.Set<Communities>()
            join cn in _dbContext.Set<CommunitieNodes>() on c.CommunitieId equals cn.CommunitieId
            join n in _dbContext.Set<Nodes>() on cn.NodeId equals n.Id
            where nodeIds.Contains(n.Id)
            select new Nodes { Index = n.Index, Id = n.Id, Name = n.Name, Type = n.Type, Desc = n.Desc };

        return await query.ToListAsync();
    }
}