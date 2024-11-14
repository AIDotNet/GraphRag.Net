using GraphRag.Net.Domain.Model.Graph;
using GraphRag.Net.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GraphRag.EntityFrameworkCore.Repositories;

public class GraphRagContext : DbContext
{
    public GraphRagContext(DbContextOptions<GraphRagContext> options) : base(options)
    {
    }

    public DbSet<GraphModel> GraphModels { get; set; }

    public DbSet<RelationShipModel> RelationShipModels { get; set; }

    public DbSet<Globals> Globals { get; set; }

    public DbSet<CommunitieNodes> CommunitieNodes { get; set; }

    public DbSet<Nodes> Nodes { get; set; }
}