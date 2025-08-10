using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// Узел
    /// </summary>
    [SugarTable("Nodes")]
    [SugarIndex("i_nodes_index", nameof(Nodes.Index), OrderByType.Asc)]
    public class Nodes
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
        /// Имя
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Тип
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Описание узла
        /// </summary>
        [SugarColumn(ColumnDataType = "varchar(2000)")]
        public string? Desc { get; set; }
    }
}