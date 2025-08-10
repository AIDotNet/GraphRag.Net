using GraphRag.Net.Model;
using SqlSugar;
using System.Linq.Expressions;


namespace GraphRag.Net.Base
{
    public class Repository<T> : SimpleClient<T> where T : class, new()
    {

        public Repository(ISqlSugarClient context = null) : base(context)// Обратите внимание: здесь нужно значение по умолчанию null
        {

            if (context == null)
            {
            }

        }

        // Важно: Client не должен быть статическим, Scope обеспечивает лучшую параллельность

        public static SqlSugarScope SqlScope = SqlSugarHelper.SqlScope();
        public SimpleClient<T> CurrentDb
        { get { return new SimpleClient<T>(SqlScope); } }// Для обработки типовых операций таблицы T

        #region Общие методы

        public virtual SqlSugarScope GetDB()
        {
            return SqlScope;
        }

        /// <summary>
        /// Получить весь список
        /// </summary>
        /// <returns></returns>
        public virtual List<T> GetList()
        {
            return CurrentDb.GetList();
        }

        /// <summary>
        /// Получить весь список — асинхронно
        /// </summary>
        /// <returns></returns>
        public virtual async Task<List<T>> GetListAsync()
        {
            return await CurrentDb.GetListAsync();
        }

        /// <summary>
        /// Запрос по выражению lambda
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual List<T> GetList(Expression<Func<T, bool>> whereExpression)
        {
            return CurrentDb.GetList(whereExpression);
        }

        /// <summary>
        /// Запрос по выражению lambda — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<List<T>> GetListAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await CurrentDb.GetListAsync(whereExpression);
        }

        /// <summary>
        /// Получить количество по выражению lambda
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual int Count(Expression<Func<T, bool>> whereExpression)
        {
            return CurrentDb.Count(whereExpression);
        }

        /// <summary>
        /// Получить количество по выражению lambda — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<int> CountAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await CurrentDb.CountAsync(whereExpression);
        }

        /// <summary>
        /// Получить страницу
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public virtual PageList<T> GetPageList(Expression<Func<T, bool>> whereExpression, PageModel page)
        {
            PageList<T> list = new PageList<T>();
            list.List = CurrentDb.GetPageList(whereExpression, page);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        /// <summary>
        /// Получить страницу — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public virtual async Task<PageList<T>> GetPageListAsync(Expression<Func<T, bool>> whereExpression, PageModel page)
        {
            PageList<T> list = new PageList<T>();
            list.List = await CurrentDb.GetPageListAsync(whereExpression, page);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual PageList<T> GetPageList(Expression<Func<T, bool>> whereExpression, PageModel page, Expression<Func<T, object>> orderByExpression = null, OrderByType orderByType = OrderByType.Asc)
        {
            PageList<T> list = new PageList<T>();
            list.List = CurrentDb.GetPageList(whereExpression, page, orderByExpression, orderByType);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual async Task<PageList<T>> GetPageListAsync(Expression<Func<T, bool>> whereExpression, PageModel page, Expression<Func<T, object>> orderByExpression = null, OrderByType orderByType = OrderByType.Asc)
        {
            PageList<T> list = new PageList<T>();
            list.List = await CurrentDb.GetPageListAsync(whereExpression, page, orderByExpression, orderByType);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual PageList<T> GetPageList(List<IConditionalModel> conditionalList, PageModel page)
        {
            PageList<T> list = new PageList<T>();
            list.List = CurrentDb.GetPageList(conditionalList, page);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual async Task<PageList<T>> GetPageListAsync(List<IConditionalModel> conditionalList, PageModel page)
        {
            PageList<T> list = new PageList<T>();
            list.List = await CurrentDb.GetPageListAsync(conditionalList, page);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual PageList<T> GetPageList(List<IConditionalModel> conditionalList, PageModel page, Expression<Func<T, object>> orderByExpression = null, OrderByType orderByType = OrderByType.Asc)
        {
            PageList<T> list = new PageList<T>();
            list.List = CurrentDb.GetPageList(conditionalList, page, orderByExpression, orderByType);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        public virtual async Task<PageList<T>> GetPageListAsync(List<IConditionalModel> conditionalList, PageModel page, Expression<Func<T, object>> orderByExpression = null, OrderByType orderByType = OrderByType.Asc)
        {
            PageList<T> list = new PageList<T>();
            list.List = await CurrentDb.GetPageListAsync(conditionalList, page, orderByExpression, orderByType);
            list.PageIndex = page.PageIndex;
            list.PageSize = page.PageSize;
            list.TotalCount = page.TotalCount;
            return list;
        }

        /// <summary>
        /// Получить сущность по id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual T GetById(dynamic id)
        {
            return CurrentDb.GetById(id);
        }

        /// <summary>
        /// Получить сущность по id — асинхронно
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<T> GetByIdAsync(dynamic id)
        {
            return await CurrentDb.GetByIdAsync(id);
        }

        /// <summary>
        /// Получить один объект по lambda (важно: должен быть уникальным, иначе используйте GetFirst)
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual T GetSingle(Expression<Func<T, bool>> whereExpression)
        {
            return CurrentDb.GetSingle(whereExpression); //Db.Queryable<T>().First(whereExpression);
        }

        /// <summary>
        /// Получить один объект по lambda — асинхронно (важно: должен быть уникальным, иначе используйте GetFirst)
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<T> GetSingleAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await CurrentDb.GetSingleAsync(whereExpression); //await Db.Queryable<T>().FirstAsync(whereExpression);
        }

        /// <summary>
        /// Получить первый объект по lambda
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual T GetFirst(Expression<Func<T, bool>> whereExpression)
        {
            return GetDB().Queryable<T>().First(whereExpression);
        }

        /// <summary>
        /// Получить первый объект по lambda — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<T> GetFirstAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await GetDB().Queryable<T>().FirstAsync(whereExpression);
        }

        /// <summary>
        /// Вставка сущности
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual bool Insert(T obj)
        {
            return CurrentDb.Insert(obj);
        }

        /// <summary>
        /// Вставка сущности — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<bool> InsertAsync(T obj)
        {
            return await CurrentDb.InsertAsync(obj);
        }

        /// <summary>
        /// Пакетная вставка
        /// </summary>
        /// <param name="objs"></param>
        /// <returns></returns>
        public virtual bool InsertRange(List<T> objs)
        {
            return CurrentDb.InsertRange(objs);
        }

        /// <summary>
        /// Пакетная вставка — асинхронно
        /// </summary>
        /// <param name="objs"></param>
        /// <returns></returns>
        public virtual async Task<bool> InsertRangeAsync(List<T> objs)
        {
            return await CurrentDb.InsertRangeAsync(objs);
        }

        /// <summary>
        /// Вставка с возвратом автоинкремента
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual int InsertReturnIdentity(T obj)
        {
            return CurrentDb.InsertReturnIdentity(obj);
        }

        /// <summary>
        /// Вставка с возвратом автоинкремента — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<int> InsertReturnIdentityAsync(T obj)
        {
            return await CurrentDb.InsertReturnIdentityAsync(obj);
        }

        /// <summary>
        /// Вставка с возвратом longid
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual long InsertReturnBigIdentity(T obj)
        {
            return CurrentDb.InsertReturnBigIdentity(obj);
        }

        /// <summary>
        /// Вставка с возвратом longid — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<long> InsertReturnBigIdentityAsync(T obj)
        {
            return await CurrentDb.InsertReturnBigIdentityAsync(obj);
        }

        /// <summary>
        /// Пакетное удаление
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public virtual bool DeleteByIds(dynamic[] ids)
        {
            return CurrentDb.DeleteByIds(ids);
        }

        /// <summary>
        /// Пакетное удаление — асинхронно
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public virtual async Task<bool> DeleteByIdsAsync(dynamic[] ids)
        {
            return await CurrentDb.DeleteByIdsAsync(ids);
        }

        /// <summary>
        /// Удалить по первичному ключу
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual bool Delete(dynamic id)
        {
            return CurrentDb.DeleteById(id);
        }

        /// <summary>
        /// Удалить по первичному ключу — асинхронно
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<bool> DeleteAsync(dynamic id)
        {
            return await CurrentDb.DeleteByIdAsync(id);
        }

        /// <summary>
        /// Удалить по сущности
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual bool Delete(T obj)
        {
            return CurrentDb.Delete(obj);
        }

        /// <summary>
        /// Удалить по сущности — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<bool> DeleteAsync(T obj)
        {
            return await CurrentDb.DeleteAsync(obj);
        }

        /// <summary>
        /// Удалить по выражению
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual bool Delete(Expression<Func<T, bool>> whereExpression)
        {
            return CurrentDb.Delete(whereExpression);
        }

        /// <summary>
        /// Удалить по выражению — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<bool> DeleteAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await CurrentDb.DeleteAsync(whereExpression);
        }

        /// <summary>
        /// Обновление
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual bool Update(T obj)
        {
            return CurrentDb.Update(obj);
        }

        /// <summary>
        /// Обновление — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<bool> UpdateAsync(T obj)
        {
            return await CurrentDb.UpdateAsync(obj);
        }

        /// <summary>
        /// Пакетное обновление
        /// </summary>
        /// <param name="objs"></param>
        /// <returns></returns>
        public virtual bool UpdateRange(List<T> objs)
        {
            return CurrentDb.UpdateRange(objs);
        }

        /// <summary>
        /// Добавить или обновить
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual bool InsertOrUpdate(T obj)
        {
            return CurrentDb.InsertOrUpdate(obj);
        }

        /// <summary>
        /// Добавить или обновить — асинхронно
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public virtual async Task<bool> InsertOrUpdateAsync(T obj)
        {
            return await CurrentDb.InsertOrUpdateAsync(obj);
        }


        /// <summary>
        /// Пакетное обновление — асинхронно
        /// </summary>
        /// <param name="objs"></param>
        /// <returns></returns>
        public virtual async Task<bool> UpdateRangeAsync(List<T> objs)
        {
            return await CurrentDb.UpdateRangeAsync(objs);
        }

        /// <summary>
        /// Содержит ли элемент
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual bool IsAny(Expression<Func<T, bool>> whereExpression)
        {
            return CurrentDb.IsAny(whereExpression);
        }

        /// <summary>
        /// Содержит ли элемент — асинхронно
        /// </summary>
        /// <param name="whereExpression"></param>
        /// <returns></returns>
        public virtual async Task<bool> IsAnyAsync(Expression<Func<T, bool>> whereExpression)
        {
            return await CurrentDb.IsAnyAsync(whereExpression);
        }

        #endregion Общие методы
    }
}
