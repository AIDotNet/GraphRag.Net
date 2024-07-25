using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 社区
    /// </summary>
    [SugarTable("Globals")]
    [SugarIndex("i_global_index", nameof(Globals.Index), OrderByType.Asc)]
    public class Globals
    {
        /// <summary>
        /// 索引信息
        /// </summary>
        public string Index { get; set; }

        /// <summary>
        /// 全局摘要
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(4000)")]
        public string Summaries { get; set; }

    }
}