namespace GraphRag.Net.Domain.Model.Graph;

public class Graph
{
    public Graph()
    {
        AdjacencyList = new Dictionary<string, List<string>>();
    }

    public Dictionary<string, List<string>> AdjacencyList { get; }

    public void AddEdge(string node1, string node2)
    {
        if (!AdjacencyList.ContainsKey(node1)) AdjacencyList[node1] = new List<string>();
        if (!AdjacencyList.ContainsKey(node2)) AdjacencyList[node2] = new List<string>();
        AdjacencyList[node1].Add(node2);
        AdjacencyList[node2].Add(node1);
    }
}