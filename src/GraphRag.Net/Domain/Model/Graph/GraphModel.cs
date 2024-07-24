using GraphRag.Net.Repositories;
using GraphRag.Net.Repositories.Graph.Nodes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class GraphModel
    {
        public List<Nodes> Nodes { get; set; }
        public List<Edges> Edges { get; set; }
    }
}
