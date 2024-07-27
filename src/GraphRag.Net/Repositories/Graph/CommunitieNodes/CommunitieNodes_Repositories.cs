﻿using GraphRag.Net.Base;
using GraphRag.Net.Repositories.Graph.Edges;
using Microsoft.Extensions.DependencyInjection;

namespace GraphRag.Net.Repositories
{
    [ServiceDescription(typeof(ICommunitieNodes_Repositories), ServiceLifetime.Scoped)]
    public class CommunitieNodes_Repositories : Repository<CommunitieNodes>, ICommunitieNodes_Repositories
    {
    }
}
