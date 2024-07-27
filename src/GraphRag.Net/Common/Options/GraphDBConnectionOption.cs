namespace GraphRag.Net.Options
{
    public class GraphDBConnectionOption
    {
        /// <summary>
        /// sqlite连接字符串
        /// </summary>
        public static string DbType { get; set; } = "Sqlite";


        /// <summary>
        /// 业务数据链接字符串
        /// </summary>
        public static string DBConnection { get; set; } = $"Data Source=graph.db";
        /// <summary>
        /// 向量数据连接字符串
        /// </summary>
        public static string VectorConnection { get; set; } = "graphmem.db";
        /// <summary>
        /// 向量数据维度，PG需要设置
        /// </summary>
        public static int VectorSize { get; set; } = 1536;
    }

}
