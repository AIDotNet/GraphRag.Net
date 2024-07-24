using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Common.Options
{
    public class OpenAIOption
    {
        public static string Endpoint { get; set; }

        public static string Key { get; set; }

        public static string ChatModel { get; set; }

        public static string EmbeddingModel { get; set; }
    }
}
