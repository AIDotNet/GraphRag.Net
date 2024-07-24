using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 边
    /// </summary>
    [SugarTable("Edges")]
    [SugarIndex("i_edges_source", nameof(Edges.Source), OrderByType.Asc)]
    [SugarIndex("i_edges_target", nameof(Edges.Target), OrderByType.Asc)]
    public class Edges
    {

        public string Source { get; set; }


        public string Target { get; set; }

        [SugarColumn(ColumnDataType = "TEXT")]
        public string Properties { get; set; }
    }
}