using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// Связь между сообществом и узлом
    /// </summary>
    [SugarTable("CommunitieNodes")]
    [SugarIndex("i_communitienodes_index", nameof(CommunitieNodes.Index), OrderByType.Asc)]
    [SugarIndex("i_communitienodes_communitieid", nameof(CommunitieNodes.CommunitieId), OrderByType.Asc)]
    [SugarIndex("i_communitienodes_nodeid", nameof(CommunitieNodes.NodeId), OrderByType.Asc)]
    public class CommunitieNodes
    {
        /// <summary>
        /// Информация об индексе
        /// </summary>
        public string Index { get; set; }
        /// <summary>
        /// ID ключевого узла сообщества
        /// </summary>
        public string CommunitieId { get; set; }
        /// <summary>
        /// ID узла
        /// </summary>
        public string NodeId { get; set; }

    }
}