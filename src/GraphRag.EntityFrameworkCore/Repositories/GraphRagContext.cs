using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class GraphRagContext : DbContext
{
    public GraphRagContext(DbContextOptions<GraphRagContext> options) : base(options)
    {
    }

    public DbSet<Globals> Globals { get; set; }

    public DbSet<CommunitieNodes> CommunitieNodes { get; set; }

    public DbSet<Nodes> Nodes { get; set; }
    
    public DbSet<Edges> Edges { get; set; }
    
    public DbSet<Communities> Communities { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<CommunitieNodes>((typeBuilder =>
        {
            typeBuilder.HasKey(x => new { x.Index, x.CommunitieId, x.NodeId });

            typeBuilder.HasIndex(x => x.CommunitieId);

            typeBuilder.HasIndex(x => x.NodeId);

            typeBuilder.HasIndex(x => x.Index);
            
        }));
        
        builder.Entity<Communities>((typeBuilder =>
        {
            typeBuilder.HasKey(x => x.CommunitieId);

            typeBuilder.HasIndex(x => x.Index);
        }));
        
        builder.Entity<Edges>((typeBuilder =>
        {
            typeBuilder.HasKey(x => x.Index);

            typeBuilder.HasIndex(x => x.Source);

            typeBuilder.HasIndex(x => x.Target);

            typeBuilder.HasIndex(x => x.Index);
        }));
        
        builder.Entity<Globals>((typeBuilder =>
        {
            typeBuilder.HasKey(x => x.Index);

            typeBuilder.HasIndex(x => x.Index);
        }));
        
        builder.Entity<Nodes>((typeBuilder =>
        {
            typeBuilder.HasKey(x => x.Index);

            typeBuilder.HasIndex(x => x.Index);
        }));
        
        
    }
}