using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// Ребро
    /// </summary>
    [SugarTable("Edges")]
    [SugarIndex("i_edges_index", nameof(Edges.Index), OrderByType.Asc)]
    [SugarIndex("i_edges_source", nameof(Edges.Source), OrderByType.Asc)]
    [SugarIndex("i_edges_target", nameof(Edges.Target), OrderByType.Asc)]
    public class Edges
    {
        /// <summary>
        /// Первичный ключ
        /// </summary>
        [SugarColumn(IsPrimaryKey = true)]
        public string Id { get; set; }
        /// <summary>
        /// Индекс
        /// </summary>
        public string Index { get; set; }
        /// <summary>
        /// Исходный ID
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// Целевой ID
        /// </summary>
        public string Target { get; set; }

        /// <summary>
        /// Информация об отношении
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(2000)")]
        public string Relationship { get; set; }
    }
}