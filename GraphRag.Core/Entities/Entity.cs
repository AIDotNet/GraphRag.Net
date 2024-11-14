namespace GraphRag.Core.Entities;

public class Entity<TKey> : IEntity<TKey>
{
    public TKey Id { get; set; }
}