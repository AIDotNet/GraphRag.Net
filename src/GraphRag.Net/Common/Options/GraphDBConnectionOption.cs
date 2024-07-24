namespace GraphRag.Net.Options
{
    public class GraphDBConnectionOption
    {
        /// <summary>
        /// sqlite连接字符串
        /// </summary>
        public static string DbType { get; set; } = "Sqlite";


        /// <summary>
        /// pg链接字符串
        /// </summary>
        public static string ConnectionStrings { get; set; } = $"Data Source=graph.db";
        public static string Db { get; set; } = "graphmem.db";
    }

}
