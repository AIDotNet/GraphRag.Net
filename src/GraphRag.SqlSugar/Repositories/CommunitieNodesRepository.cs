using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using GraphRag.SqlSugar.Repositories;
using SqlSugar;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class CommunitieNodesRepository : BaseRepository<CommunitieNodes>, ICommunitieNodesRepository
{

    public CommunitieNodesRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }

    public async Task<IEnumerable<string>> GetAllCommunitieIdAsync(string index)
    {
        var communitieIds = await SqlSugarClient.Queryable<CommunitieNodes>()
            .Where(p => p.Index == index).GroupBy(p => p.CommunitieId).Select(p => p.CommunitieId).ToListAsync();

        return communitieIds;
    }

    public async Task<IEnumerable<string>> GetCommunitieNodesAsync(string communitieId)
    {
        var nodeList = await SqlSugarClient.Queryable<CommunitieNodes>()
            .LeftJoin<Nodes>((c, n) => c.NodeId == n.Id)
            .Where(c => c.CommunitieId == communitieId)
            .Select((c, n) => $"Name:{n.Name}; Type:{n.Type}; Desc:{n.Desc}")
            .ToListAsync();

        return nodeList;
    }
}