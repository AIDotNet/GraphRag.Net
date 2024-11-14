namespace GraphRag.Net.Repositories;

/// <summary>
///     社区与节点关系
/// </summary>
public class CommunitieNodes
{
    /// <summary>
    ///     索引信息
    /// </summary>
    public string Index { get; set; }

    /// <summary>
    ///     社区关键节点ID
    /// </summary>
    public string CommunitieId { get; set; }

    /// <summary>
    ///     节点ID
    /// </summary>
    public string NodeId { get; set; }
}