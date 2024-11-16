using System.Linq.Expressions;
using GraphRag.Core.Entities;
using GraphRag.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class BaseRepository<TDbContext, TEntity> : IRepository<TEntity>
    where TDbContext : DbContext where TEntity : class
{
    protected readonly TDbContext _dbContext;
    protected readonly DbSet<TEntity> _dbSet;

    public BaseRepository(TDbContext dbContext, DbSet<TEntity> dbSet)
    {
        _dbContext = dbContext;
        _dbSet = dbSet;
    }

    public Task<List<TEntity>> GetListAsync()
    {
        return _dbSet.ToListAsync();
    }

    public Task<List<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.Where(whereExpression).ToListAsync();
    }

    public int Count(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.Count(whereExpression);
    }

    public Task<int> CountAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.CountAsync(whereExpression);
    }

    public TEntity GetSingle(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.FirstOrDefault(whereExpression);
    }

    public Task<TEntity> GetSingleAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.FirstOrDefaultAsync(whereExpression);
    }

    public TEntity GetFirst(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.FirstOrDefault(whereExpression);
    }

    public Task<TEntity> GetFirstAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.FirstOrDefaultAsync(whereExpression);
    }

    public bool Insert(TEntity obj)
    {
        _dbSet.Add(obj);
        return _dbContext.SaveChanges() > 0;
    }

    public async Task<bool> InsertAsync(TEntity obj)
    {
        _dbSet.Add(obj);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public bool InsertRange(List<TEntity> objs)
    {
        _dbSet.AddRange(objs);
        return _dbContext.SaveChanges() > 0;
    }

    public async Task<bool> InsertRangeAsync(List<TEntity> objs)
    {
        _dbSet.AddRange(objs);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public int InsertReturnIdentity(TEntity obj)
    {
        var entity = _dbSet.Add(obj);

        return _dbContext.SaveChanges();
    }

    public Task<int> InsertReturnIdentityAsync(TEntity obj)
    {
        var entity = _dbSet.Add(obj);

        return _dbContext.SaveChangesAsync();
    }

    public long InsertReturnBigIdentity(TEntity obj)
    {
        var entity = _dbSet.Add(obj);

        return _dbContext.SaveChanges();
    }

    public async Task<long> InsertReturnBigIdentityAsync(TEntity obj)
    {
        await _dbSet.AddAsync(obj);

        return await _dbContext.SaveChangesAsync();
    }

    public bool Delete(TEntity obj)
    {
        _dbSet.Remove(obj);
        return _dbContext.SaveChanges() > 0;
    }

    public async Task<bool> DeleteAsync(TEntity obj)
    {
        _dbSet.Remove(obj);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public async Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
#if NET8_0
        var result = await _dbSet.Where(whereExpression)
            .ExecuteDeleteAsync();

        return result > 0;
#else
        var objs = await _dbSet.Where(whereExpression).ToListAsync();

        _dbSet.RemoveRange(objs);

        return await _dbContext.SaveChangesAsync() > 0;

#endif
    }

    public bool Update(TEntity obj)
    {
        _dbSet.Update(obj);
        return _dbContext.SaveChanges() > 0;
    }

    public async Task<bool> UpdateAsync(TEntity obj)
    {
        _dbSet.Update(obj);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public bool UpdateRange(List<TEntity> objs)
    {
        _dbSet.UpdateRange(objs);
        return _dbContext.SaveChanges() > 0;
    }

    public async Task<bool> UpdateRangeAsync(List<TEntity> objs)
    {
        _dbSet.UpdateRange(objs);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public bool Any(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.Any(whereExpression);
    }

    public Task<bool> AnyAsync(Expression<Func<TEntity, bool>> whereExpression)
    {
        return _dbSet.AnyAsync(whereExpression);
    }

    public Task<List<TResult>> OrderBySelect<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, TResult>> selectExpression)
    {
        var query = _dbSet.Where(whereExpression);

        query = isAsc ? query.OrderBy(orderExpression) : query.OrderByDescending(orderExpression);

        return query.Select(selectExpression).ToListAsync();
    }

    public async Task<IEnumerable<TEntity>> OrderByGroupBySelect(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, object>> groupExpression)
    {
        var query = _dbSet.Where(whereExpression);

        if (isAsc)
        {
            query = query.OrderBy(orderExpression);
        }
        else
        {
            query = query.OrderByDescending(orderExpression);
        }

        var result = await query.GroupBy(groupExpression).Select(g => g.Key as TEntity).ToListAsync();


        return result;
    }

    public async Task<IEnumerable<TEntity>> OrderByGroupBySelect(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, TEntity>> groupExpression)
    {
        var query = _dbSet.Where(whereExpression);

        if (isAsc)
        {
            query = query.OrderBy(orderExpression);
        }
        else
        {
            query = query.OrderByDescending(orderExpression);
        }

        var result = await query.GroupBy(groupExpression).Select(g => g.Key).ToListAsync();

        return result;
    }

    public Task<List<TResult>> Select<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, TResult>> selectExpression)
    {
        return _dbSet.Where(whereExpression).Select(selectExpression).ToListAsync();
    }
}

public class BaseRepository<TDbContext, TEntity, TKey> : BaseRepository<TDbContext, TEntity>, IRepository<TEntity, TKey>
    where TDbContext : DbContext where TEntity : class, IEntity<TKey>
{
    public BaseRepository(TDbContext dbContext, DbSet<TEntity> dbSet) : base(dbContext, dbSet)
    {
    }

    public async Task<TEntity> GetByIdAsync(TKey id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<bool> DeleteByIdsAsync(TKey[] ids)
    {
        var objs = _dbSet.Where(m => ids.Contains(m.Id)).ToList();

        _dbSet.RemoveRange(objs);

        return await _dbContext.SaveChangesAsync() > 0;
    }


    public async Task<bool> DeleteAsync(TKey id)
    {
#if NET8_0
        return await _dbSet.Where(m => m.Id.Equals(id) == true).ExecuteDeleteAsync() > 0;
#else
        var obj = await _dbSet.FindAsync(id);
        if (obj == null)
        {
            return false;
        }

        _dbSet.Remove(obj);

        return await _dbContext.SaveChangesAsync() > 0;
#endif
    }
}