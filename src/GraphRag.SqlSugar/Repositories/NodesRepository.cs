using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using GraphRag.SqlSugar.Repositories;
using SqlSugar;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class NodesRepository : BaseRepository< Nodes, string>, INodesRepository
{
    public NodesRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }

    public async Task<IEnumerable<string>> GetAllIndexAsync()
    {
        var query = await SqlSugarClient
            .Queryable<Nodes>()
            .GroupBy(x => x.Index).Select(x => x.Index).ToListAsync();

        return query;
    }
}