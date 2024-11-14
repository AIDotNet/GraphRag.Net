using GraphRag.Core.Entities;

namespace GraphRag.Net.Repositories;

/// <summary>
///     边
/// </summary>
public class Edges : Entity<string>
{
    /// <summary>
    ///     索引
    /// </summary>
    public string Index { get; set; }

    /// <summary>
    ///     源ID
    /// </summary>
    public string Source { get; set; }

    /// <summary>
    ///     目标ID
    /// </summary>
    public string Target { get; set; }

    /// <summary>
    ///     关系信息
    /// </summary>
    public string Relationship { get; set; }
}