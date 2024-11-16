using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using GraphRag.SqlSugar.Repositories;
using SqlSugar;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class EdgesRepository : BaseRepository<Edges, string>, IEdgesRepository
{
    public EdgesRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }

    public async Task<IEnumerable<(string source, string target)>> QueryEdgesRepeatAsync()
    {
        var repeatEdges = (await SqlSugarClient.Queryable<Edges>()
            .GroupBy(p => new { p.Source, p.Target })
            .Select(p => new { p.Source, p.Target, Count = SqlFunc.AggregateCount(p.Source) })
            .ToListAsync()).Where(p => p.Count > 1).ToList();

        return repeatEdges.Select(p => (p.Source, p.Target));
    }
}