using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class CommunitieNodesRepository : BaseRepository<GraphRagContext, CommunitieNodes>, ICommunitieNodesRepository
{
    public CommunitieNodesRepository(GraphRagContext dbContext, DbSet<CommunitieNodes> dbSet) : base(dbContext, dbSet)
    {
    }

    public async Task<IEnumerable<string>> GetAllCommunitieIdAsync(string index)
    {
        // var communitieIds = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>()
        //     .Where(p => p.Index == index).GroupBy(p => p.CommunitieId).Select(p => p.CommunitieId).ToList();

        var communitieIds =
            from communitieNodes in _dbSet
            where communitieNodes.Index == index
            group communitieNodes by communitieNodes.CommunitieId
            into g
            select g.Key;


        var result = await communitieIds.ToListAsync();

        return result;
    }

    public async Task<IEnumerable<string>> GetCommunitieNodesAsync(string communitieId)
    {
        /// var nodeList = _communitieNodes_Repositories.GetDB().Queryable<CommunitieNodes>()
        ///     .LeftJoin<Nodes>((c, n) => c.NodeId == n.Id)
        ///     .Where(c => c.CommunitieId == communitieId)
        ///     .Select((c, n) => $"Name:{n.Name}; Type:{n.Type}; Desc:{n.Desc}")
        ///     .ToList();
        var nodeList =
            from communitieNodes in _dbSet
            join nodes in _dbContext.Nodes on communitieNodes.NodeId equals nodes.Id
            where communitieNodes.CommunitieId == communitieId
            select $"Name:{nodes.Name}; Type:{nodes.Type}; Desc:{nodes.Desc}";

        return await nodeList.ToListAsync();
    }
}