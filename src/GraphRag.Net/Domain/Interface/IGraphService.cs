using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Interface
{
    public interface IGraphService
    {    
        Task InsertGraph(string input);

        Task<string> SearchGraph(string input);
    }
}
