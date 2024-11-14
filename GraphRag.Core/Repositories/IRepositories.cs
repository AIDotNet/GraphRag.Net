using System.Linq.Expressions;
using GraphRag.Core.Entities;

namespace GraphRag.Core.Repositories;

public interface IRepositories<TEntity, in TKey> : IRepositories<TEntity> where TEntity : Entity<TKey>
{
    TEntity GetById(TKey id);

    Task<TEntity> GetByIdAsync(TKey id);

    bool DeleteByIds(TKey[] ids);

    Task<bool> DeleteByIdsAsync(TKey[] ids);

    bool Delete(TKey id);

    Task<bool> DeleteAsync(TKey id);
}

public interface IRepositories<TEntity> where TEntity : class
{
    List<TEntity> GetList();

    Task<List<TEntity>> GetListAsync();

    List<TEntity> GetList(Expression<Func<TEntity, bool>> whereExpression);

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

    bool Delete(Expression<Func<TEntity, bool>> whereExpression);

    Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> whereExpression);

    bool Update(TEntity obj);

    Task<bool> UpdateAsync(TEntity obj);

    bool UpdateRange(List<TEntity> objs);

    bool InsertOrUpdate(TEntity obj);

    Task<bool> InsertOrUpdateAsync(TEntity obj);

    Task<bool> UpdateRangeAsync(List<TEntity> objs);

    bool IsAny(Expression<Func<TEntity, bool>> whereExpression);

    Task<bool> IsAnyAsync(Expression<Func<TEntity, bool>> whereExpression);

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