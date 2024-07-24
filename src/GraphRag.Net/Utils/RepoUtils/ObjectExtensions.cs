using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace GraphRag.Net.Utils
{
    public static class ObjectExtensions
    {
        private static readonly JsonSerializerOptions s_jsonOptionsCache = new() { WriteIndented = true };

        public static string AsJson(this object obj)
        {
            return JsonSerializer.Serialize(obj, s_jsonOptionsCache);
        }
    }
}
