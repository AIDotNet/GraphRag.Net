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
        /// 实体
        /// </summary>
        [SugarColumn(ColumnDataType = "TEXT")]

        public string Body { get; set; }
    }
}