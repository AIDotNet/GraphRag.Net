using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// Сообщество
    /// </summary>
    [SugarTable("Communities")]
    [SugarIndex("i_communities_index", nameof(Communities.Index), OrderByType.Asc)]
    public class Communities
    {
        /// <summary>
        /// ID сообщества
        /// </summary>
        [SugarColumn(IsPrimaryKey = true)]
        public string CommunitieId { get; set; }

        /// <summary>
        /// Информация об индексе
        /// </summary>
        public string Index { get; set; }

        /// <summary>
        /// Сводка сообщества
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(4000)")]
        public string Summaries { get; set; }

    }
}