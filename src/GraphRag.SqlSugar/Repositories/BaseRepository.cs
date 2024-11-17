using System.Linq.Expressions;
using GraphRag.Core.Entities;
using GraphRag.Core.Repositories;
using SqlSugar;
using OrderByType = SqlSugar.OrderByType;

namespace GraphRag.SqlSugar.Repositories;

public class BaseRepository<TEntity, TKey> : BaseRepository<TEntity>, IRepository<TEntity, TKey>
    where TEntity : class, IEntity<TKey>, new()
{

    public BaseRepository(ISqlSugarClient sqlSugarClient) : base(sqlSugarClient)
    {
    }

    public Task<TEntity> GetByIdAsync(TKey id)
    {
        return SqlSugarClient.Queryable<TEntity>().InSingleAsync(id);
    }

    public Task<bool> DeleteByIdsAsync(TKey[] ids)
    {
        return SqlSugarClient.Deleteable<TEntity>().In(ids).ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public Task<bool> DeleteAsync(TKey id)
    {
        return SqlSugarClient.Deleteable<TEntity>().In(id).ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }
}

public class BaseRepository<TEntity> : IRepository<TEntity>
    where TEntity : class, new()
{
    protected readonly ISqlSugarClient SqlSugarClient;

    public BaseRepository(ISqlSugarClient sqlSugarClient)
    {
        SqlSugarClient = sqlSugarClient;
    }

    public Task<List<TEntity>> GetListAsync()
    {
        return SqlSugarClient.Queryable<TEntity>().ToListAsync();
    }

    public Task<List<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().Where(whereExpression).ToListAsync();
    }

    public int Count(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().Count(whereExpression);
    }

    public Task<int> CountAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().CountAsync(whereExpression);
    }

    public TEntity GetSingle(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().First(whereExpression);
    }

    public Task<TEntity> GetSingleAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().FirstAsync(whereExpression);
    }

    public TEntity GetFirst(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().First(whereExpression);
    }

    public Task<TEntity> GetFirstAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().FirstAsync(whereExpression);
    }

    public bool Insert(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteCommand() > 0;
    }

    public Task<bool> InsertAsync(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public bool InsertRange(List<TEntity> objs)
    {
        var result = SqlSugarClient.Insertable(objs);

        return result.ExecuteCommand() > 0;
    }

    public Task<bool> InsertRangeAsync(List<TEntity> objs)
    {
        var result = SqlSugarClient.Insertable(objs);

        return result.ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public int InsertReturnIdentity(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteReturnIdentity();
    }

    public Task<int> InsertReturnIdentityAsync(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteReturnIdentityAsync();
    }

    public long InsertReturnBigIdentity(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteReturnBigIdentity();
    }

    public Task<long> InsertReturnBigIdentityAsync(TEntity obj)
    {
        var result = SqlSugarClient.Insertable(obj);

        return result.ExecuteReturnBigIdentityAsync();
    }

    public bool Delete(TEntity obj)
    {
        var result = SqlSugarClient.Deleteable(obj);

        return result.ExecuteCommand() > 0;
    }

    public async Task<bool> DeleteAsync(TEntity obj)
    {
        var result = SqlSugarClient.Deleteable(obj);

        return await result.ExecuteCommandAsync() > 0;
    }

    public Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        var result = SqlSugarClient.Deleteable<TEntity>().Where(whereExpression);

        return result.ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public bool Update(TEntity obj)
    {
        var result = SqlSugarClient.Updateable(obj);

        return result.ExecuteCommand() > 0;
    }

    public Task<bool> UpdateAsync(TEntity obj)
    {
        var result = SqlSugarClient.Updateable(obj);

        return result.ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public bool UpdateRange(List<TEntity> objs)
    {
        var result = SqlSugarClient.Updateable(objs);

        return result.ExecuteCommand() > 0;
    }

    public Task<bool> UpdateRangeAsync(List<TEntity> objs)
    {
        var result = SqlSugarClient.Updateable(objs);

        return result.ExecuteCommandAsync().ContinueWith(t => t.Result > 0);
    }

    public bool Any(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().Any(whereExpression);
    }

    public Task<bool> AnyAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().AnyAsync(whereExpression);
    }

    public Task<List<TResult>> OrderBySelect<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, TResult>> selectExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().Where(whereExpression)
            .OrderBy(orderExpression, isAsc ? OrderByType.Asc : OrderByType.Desc).Select(selectExpression)
            .ToListAsync();
    }

    public async Task<IEnumerable<TEntity>> OrderByGroupBySelect(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, object>> groupExpression)
    {
        var query = SqlSugarClient.Queryable<TEntity>().Where(whereExpression);

        query= query.GroupBy(groupExpression);
        
        query = isAsc ? query.OrderBy(orderExpression, OrderByType.Asc) : query.OrderBy(orderExpression, OrderByType.Desc);
        
        return await query.ToListAsync();
    }

    public Task<List<TResult>> Select<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, TResult>> selectExpression)
    {
        return SqlSugarClient.Queryable<TEntity>().Where(whereExpression).Select(selectExpression).ToListAsync();
    }

    public async Task<List<TResult>> GroupBySelect<TResult>(Expression<Func<TEntity, object>> groupExpression,
        Expression<Func<TEntity, TResult>> selectExpression)
    {
        return await SqlSugarClient.Queryable<TEntity>().GroupBy(groupExpression).Select(selectExpression).ToListAsync();
    }
}