using Microsoft.SemanticKernel.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Domain.Interface
{
    public interface ISemanticService
    {
        Task<string> CreateGraphAsync(string input);

        Task<string> GetGraphAnswerAsync(string graph, string input);
        Task<string> GetRelationship(string node1, string node2);


        Task<SemanticTextMemory> GetTextMemory();
    }
}
