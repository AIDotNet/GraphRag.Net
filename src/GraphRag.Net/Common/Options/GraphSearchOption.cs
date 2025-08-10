using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphRag.Net.Options
{
    public class GraphSearchOption
    {
        /// <summary>
        /// Минимальное сходство векторов при поиске сообществ
        /// </summary>
        public static double SearchMinRelevance { get; set; } = 0.5;


        /// <summary>
        /// Количество векторных узлов при поиске сообществ
        /// </summary>
        public static int SearchLimit { get; set; } = 3;

        /// <summary>
        /// Глубина поиска связей узлов
        /// </summary>
        public static int NodeDepth { get; set; } = 3;

        /// <summary>
        /// Максимальное число узлов при поиске
        /// </summary>
        public static int MaxNodes { get; set; } = 300;

        /// <summary>
        /// Ограничение на максимальное количество токенов (32K)
        /// </summary>
        public static int MaxTokens { get; set; } = 32000;
    }
}
