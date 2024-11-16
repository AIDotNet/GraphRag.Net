using GraphRag.Core.Repositories;
using GraphRag.Net.Repositories;
using GraphRag.SqlSugar.Repositories;
using SqlSugar;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class GlobalsRepository : BaseRepository<Globals>, IGlobalsRepository
{
    public GlobalsRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }
}