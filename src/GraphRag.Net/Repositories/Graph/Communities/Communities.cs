using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 社区
    /// </summary>
    [SugarTable("Communities")]
    [SugarIndex("i_communities_index", nameof(Communities.Index), OrderByType.Asc)]
    public class Communities
    {
        /// <summary>
        /// 社区ID
        /// </summary>
        [SugarColumn(IsPrimaryKey = true)]
        public string CommunitieId { get; set; }

        /// <summary>
        /// 索引信息
        /// </summary>
        public string Index { get; set; }

        /// <summary>
        /// 社区摘要
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(4000)")]
        public string Summaries { get; set; }

    }
}