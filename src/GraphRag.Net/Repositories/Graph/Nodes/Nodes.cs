using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 节点
    /// </summary>
    [SugarTable("Nodes")]
    [SugarIndex("i_nodes_index", nameof(Nodes.Index), OrderByType.Asc)]
    public class Nodes
    {
        /// <summary>
        /// 主键
        /// </summary>
        [SugarColumn(IsPrimaryKey = true)]
        public string Id { get; set; }
        /// <summary>
        /// 索引
        /// </summary>
        public string Index { get; set; }
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 类型
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// 节点描述
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(2000)")]
        public string? Desc { get; set; }
    }
}