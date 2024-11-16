using System.Linq.Expressions;
using GraphRag.Core.Entities;

namespace GraphRag.Core.Repositories;

public interface IRepository<TEntity, in TKey> : IRepository<TEntity> where TEntity : IEntity<TKey>
{
    Task<TEntity> GetByIdAsync(TKey id);

    Task<bool> DeleteByIdsAsync(TKey[] ids);

    Task<bool> DeleteAsync(TKey id);
}

public interface IRepository<TEntity>
{
    Task<List<TEntity>> GetListAsync();

    Task<List<TEntity>> GetListAsync(Expression<Func<TEntity, bool>> whereExpression);

    int Count(Expression<Func<TEntity, bool>> whereExpression);

    Task<int> CountAsync(Expression<Func<TEntity, bool>> whereExpression);

    TEntity GetSingle(Expression<Func<TEntity, bool>> whereExpression);

    Task<TEntity> GetSingleAsync(Expression<Func<TEntity, bool>> whereExpression);

    TEntity GetFirst(Expression<Func<TEntity, bool>> whereExpression);

    Task<TEntity> GetFirstAsync(Expression<Func<TEntity, bool>> whereExpression);

    bool Insert(TEntity obj);

    Task<bool> InsertAsync(TEntity obj);

    bool InsertRange(List<TEntity> objs);

    Task<bool> InsertRangeAsync(List<TEntity> objs);

    int InsertReturnIdentity(TEntity obj);

    Task<int> InsertReturnIdentityAsync(TEntity obj);

    long InsertReturnBigIdentity(TEntity obj);

    Task<long> InsertReturnBigIdentityAsync(TEntity obj);

    bool Delete(TEntity obj);

    Task<bool> DeleteAsync(TEntity obj);

    Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> whereExpression);

    bool Update(TEntity obj);

    Task<bool> UpdateAsync(TEntity obj);

    bool UpdateRange(List<TEntity> objs);

    Task<bool> UpdateRangeAsync(List<TEntity> objs);

    bool Any(Expression<Func<TEntity, bool>> whereExpression);

    Task<bool> AnyAsync(Expression<Func<TEntity, bool>> whereExpression);

    /// <summary>
    /// 排序并且Select指定列
    /// </summary>
    /// <typeparam name="TResult"></typeparam>
    /// <param name="whereExpression"></param>
    /// <param name="orderExpression"></param>
    /// <param name="isAsc"></param>
    /// <param name="selectExpression"></param>
    /// <returns></returns>
    Task<List<TResult>> OrderBySelect<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, TResult>> selectExpression);

    /// <summary>
    /// 排序并且GroupBy指定列，Select指定列
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <param name="whereExpression"></param>
    /// <param name="orderExpression"></param>
    /// <param name="isAsc"></param>
    /// <param name="groupExpression"></param>
    /// <returns></returns>
    Task<IEnumerable<TEntity>> OrderByGroupBySelect(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, object>> orderExpression, bool isAsc,
        Expression<Func<TEntity, object>> groupExpression);

    /// <summary>
    /// 查询并且Select指定列
    /// </summary>
    /// <typeparam name="TResult"></typeparam>
    /// <param name="whereExpression"></param>
    /// <param name="selectExpression"></param>
    /// <returns></returns>
    Task<List<TResult>> Select<TResult>(Expression<Func<TEntity, bool>> whereExpression,
        Expression<Func<TEntity, TResult>> selectExpression);
}