using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class NodesRepository : BaseRepository<GraphRagContext, Nodes, string>, INodesRepository
{
    public NodesRepository(GraphRagContext dbContext, DbSet<Nodes> dbSet) : base(dbContext, dbSet)
    {
    }


    public async Task<IEnumerable<string>> GetAllIndexAsync()
    {
        var query = await _dbSet.GroupBy(x => x.Index).Select(x => x.Key).ToListAsync();

        return query;
    }
}