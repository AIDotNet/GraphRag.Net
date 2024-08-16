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
        /// 社区检索搜索最小向量相似度
        /// </summary>
        public static double SearchMinRelevance { get; set; } = 0.5;


        /// <summary>
        /// 社区检索搜索向量节点数量
        /// </summary>
        public static int SearchLimit { get; set; } = 3;

        /// <summary>
        /// 节点关系检索深度
        /// </summary>
        public static int NodeDepth { get; set; } = 3;

        /// <summary>
        /// 节点检索最多节点数量
        /// </summary>
        public static int MaxNodes { get; set; } = 300;
    }
}
