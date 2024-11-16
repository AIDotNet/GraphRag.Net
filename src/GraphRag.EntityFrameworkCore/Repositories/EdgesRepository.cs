using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class EdgesRepository : BaseRepository<GraphRagContext, Edges, string>, IEdgesRepository
{
    public EdgesRepository(GraphRagContext dbContext, DbSet<Edges> dbSet) : base(dbContext, dbSet)
    {
    }

    public async Task<IEnumerable<(string source, string target)>> QueryEdgesRepeatAsync()
    {
        // var repeatEdges = _edges_Repositories.GetDB().Queryable<Edges>()
        //     .GroupBy(p => new { p.Source, p.Target })
        //     .Select(p => new { p.Source, p.Target, Count = SqlFunc.AggregateCount(p.Source) })
        //     .ToList().Where(p => p.Count > 1).ToList();

        var query = from e in _dbSet
            group e by new { e.Source, e.Target }
            into g
            select new
            {
                g.Key.Source,
                g.Key.Target,
                Count = g.Count(),
                edges = g.ToList()
            };

        var repeatEdges = await query.Where(p => p.Count > 1)
            .ToListAsync();

        return repeatEdges.Select(p => (p.Source, p.Target));
    }
}