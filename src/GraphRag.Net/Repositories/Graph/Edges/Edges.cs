using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 边
    /// </summary>
    [SugarTable("Edges")]
    [SugarIndex("i_edges_index", nameof(Edges.Index), OrderByType.Asc)]
    [SugarIndex("i_edges_source", nameof(Edges.Source), OrderByType.Asc)]
    [SugarIndex("i_edges_target", nameof(Edges.Target), OrderByType.Asc)]
    public class Edges
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
        /// 源ID
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// 目标ID
        /// </summary>
        public string Target { get; set; }

        /// <summary>
        /// 关系信息
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(2000)")]
        public string Relationship { get; set; }
    }
}