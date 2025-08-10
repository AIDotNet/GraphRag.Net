using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// Сообщество
    /// </summary>
    [SugarTable("Globals")]
    [SugarIndex("i_global_index", nameof(Globals.Index), OrderByType.Asc)]
    public class Globals
    {
        /// <summary>
        /// Информация об индексе
        /// </summary>
        public string Index { get; set; }

        /// <summary>
        /// Глобальная сводка
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(4000)")]
        public string Summaries { get; set; }

    }
}