using GraphRag.Net.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class RelationShipModel
    {
        public bool IsRelationship {  get; set; }

        public Edges Edge { get; set; }
    }
}
