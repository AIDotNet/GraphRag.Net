using SqlSugar;

namespace GraphRag.Net.Repositories.Graph.Nodes
{
    /// <summary>
    /// 节点
    /// </summary>
    [SugarTable("Nodes")]
    public class Nodes
    {
        /// <summary>
        /// 主键
        /// </summary>
        [SugarColumn(IsPrimaryKey = true)]
        public string Id { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 类型
        /// </summary>
        public string Type { get; set; }

        [SugarColumn(ColumnDataType = "TEXT")]
        public  string? Desc { get; set; }
    }
}