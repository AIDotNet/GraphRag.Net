using SqlSugar;

namespace GraphRag.Net.Repositories
{
    /// <summary>
    /// 社区与节点关系
    /// </summary>
    [SugarTable("CommunitieNodes")]
    [SugarIndex("i_communitienodes_index", nameof(CommunitieNodes.Index), OrderByType.Asc)]
    [SugarIndex("i_communitienodes_communitieid", nameof(CommunitieNodes.CommunitieId), OrderByType.Asc)]
    [SugarIndex("i_communitienodes_nodeid", nameof(CommunitieNodes.NodeId), OrderByType.Asc)]
    public class CommunitieNodes
    {
        /// <summary>
        /// 索引信息
        /// </summary>
        public string Index { get; set; }
        /// <summary>
        /// 社区关键节点ID
        /// </summary>
        public string CommunitieId { get; set; }
        /// <summary>
        /// 节点ID
        /// </summary>
        public string NodeId { get; set; }

    }
}