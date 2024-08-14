namespace GraphRag.Net.Options
{
    public class TextChunkerOption
    {
        /// <summary>
        /// 行切片token
        /// </summary>
        public static int LinesToken { get; set; } = 100;
        /// <summary>
        /// 段落切片token
        /// </summary>
        public static int ParagraphsToken { get; set; } = 1000;
    }
}
