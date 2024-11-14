using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class GlobalsRepository : BaseRepository<GraphRagContext,Globals>, IGlobalsRepository
{
    public GlobalsRepository(GraphRagContext dbContext, DbSet<Globals> dbSet) : base(dbContext, dbSet)
    {
    }
    
}