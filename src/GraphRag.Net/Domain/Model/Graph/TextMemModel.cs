using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Model.Graph
{
    public class TextMemModel
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public double Relevance { get; set; }
    }
}
