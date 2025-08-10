namespace GraphRag.Net.Options
{
    public class GraphDBConnectionOption
    {
        /// <summary>
        /// Строка подключения SQLite
        /// </summary>
        public static string DbType { get; set; } = "Sqlite";


        /// <summary>
        /// Строка подключения бизнес-данных
        /// </summary>
        public static string DBConnection { get; set; } = $"Data Source=graph.db";
        /// <summary>
        /// Строка подключения векторных данных
        /// </summary>
        public static string VectorConnection { get; set; } = "graphmem.db";
        /// <summary>
        /// Размерность векторных данных, требуется для PG
        /// </summary>
        public static int VectorSize { get; set; } = 1536;
    }

}
