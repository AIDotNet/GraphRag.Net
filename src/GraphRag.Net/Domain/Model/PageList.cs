namespace GraphRag.Net.Model
{
    public class PageList<T>
    {
        // Результаты запроса
        public List<T> List { get; set; }
        /// <summary>
        /// Текущая страница, начиная с 1
        /// </summary>
        public int PageIndex { get; set; }
        /// <summary>
        /// Количество на странице
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// Общее количество
        /// </summary>
        public int TotalCount { get; set; }
    }
}
