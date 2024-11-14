using GraphRag.Core.Entities;

namespace GraphRag.Net.Repositories;

/// <summary>
///     节点
/// </summary>
public class Nodes : Entity<string>
{

    /// <summary>
    ///     索引
    /// </summary>
    public string Index { get; set; }

    /// <summary>
    ///     名称
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    ///     类型
    /// </summary>
    public string Type { get; set; }

    /// <summary>
    ///     节点描述
    /// </summary>
    public string? Desc { get; set; }
}