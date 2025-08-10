namespace GraphRag.Net.Options
{
    public class TextChunkerOption
    {
        /// <summary>
        /// Токены разбиения строк
        /// </summary>
        public static int LinesToken { get; set; } = 100;
        /// <summary>
        /// Токены разбиения абзацев
        /// </summary>
        public static int ParagraphsToken { get; set; } = 1000;
    }
}
