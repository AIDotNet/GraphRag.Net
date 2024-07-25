namespace GraphRag.Net.Domain.Model.Graph
{
    public class GraphViewModel
    {
        public string rootId { get; set; }
        public List<NodesViewModel> nodes { get; set; } = new List<NodesViewModel>();
        public List<LinesViewModel> lines { get; set; } = new List<LinesViewModel>();
    }
    public class NodesViewModel
    {
        public string id { get; set; }
        public string text { get; set; }
        public string color { get; set; } = "#43a2f1";
    }

    public class LinesViewModel
    {
        public string from { get; set; }
        public string to { get; set; }
        public string text { get; set; }
        public string color { get; set; } = "#000";
    }
}
