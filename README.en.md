[简体中文](./README.md) | English

## This is a simple implementation of dotnet referring to GraphRag

Based on the implementation idea mentioned by Microsoft in the paper, GraphRAG mainly implements the following functions in the execution process:
- Source Documents → Text Chunks: divide the source document into text blocks.
- Text Chunks → Element Instances: Extract instances of graph nodes and edges from each text block.
- Element Instances → Element Summaries: generate summaries for each diagram element.
- Element Summaries → Graph Communities: use the community detection algorithm to divide the graph into communities.
- Graph Communities → Community Summaries: generate summaries for each community.
- Community Summaries → Community Answers → Global Answer: use community summaries to generate local answers, and then summarize these local answers to generate global answers.

This project is a demo example, which is only used to learn GraphRAG ideas.

## You can directly reference the NuGet package in the project, or directly use the project to provide API services.
For convenience, the LLM interface is currently only compatible with the openai specification, and other large models can consider using one api class integration products

Configure in appsettings.json

```
 "GraphOpenAI": {
   "Key": "sk-xxx",
   "EndPoint": "https://api.antsk.cn/",
   "ChatModel": "gpt-4o-mini",
   "EmbeddingModel": "text-embedding-ada-002"
 },
"TextChunker": {
    "LinesToken": 100,
    "ParagraphsToken": 1000
},
"GraphDBConnection": {
    "DbType": "Sqlite", //PostgreSQL
    "DBConnection": "Data Source=graph.db",
    "VectorConnection": "graphmem.db", //If PostgreSQL is used, it can be consistent with DBConnection
    "VectorSize": 1536 //DbType=PostgreSQL needs to be set, sqlite can not be set
},
"GraphSearch": {
    "SearchMinRelevance": 0.5, //Search for minimum relevance
    "SearchLimit": 3, //Limit the number of vector search nodes
    "NodeDepth": 3 ,//Retrieve node depth
    "MaxNodes": 100 //Retrieve the maximum number of nodes
},
"GraphSys": {
    "RetryCounnt": 2 //Number of retries. Using the domestic model may cause json extraction failure. Increasing the number of retries can improve availability
}
```
## Startup project
```
dotnet run --project GraphRag.Net.Web.csproj
```

## After starting the project, you can use the
```
http://localhost:5000/swagger
```
## Open the swagger view interface

![Graoh](https://github.com/xuzeyu91/GraphRag.Net/blob/main/doc/api.png)

### You can also use the interface
```
http://localhost:5000/
```

Open the UI interface of blazer. The page provides functions such as text import, file import, question and answer dialogue, and view knowledge map

![Graoh](https://github.com/xuzeyu91/GraphRag.Net/blob/main/doc/graph1.png)


## Nuget Package Usage
```
dotnet add package GraphRag.Net
```
## In order to facilitate the adjustment and modification of prompt words, SK Plugin has separated the project. You need to put GraphRag Copy the graphPlugins directory in the Net. Web project to your project, and set:
[graphPlugins](https://github.com/AIDotNet/GraphRag.Net/tree/main/src/GraphRag.Net.Web/graphPlugins)
```
  <ItemGroup>
    <None Include="graphPlugins\**">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
  </ItemGroup>
```

### The default configuration uses the OpenAI standard interface. After configuring the OpenAI app settings, you can use the following code to inject
After adding a package, you need to set the configuration file and dependency injection
```
//OpenAI configuration
builder.Configuration.GetSection("GraphOpenAI").Get<GraphOpenAIOption>();
//Document Slicing Configuration
builder.Configuration.GetSection("TextChunker").Get<TextChunkerOption>();
//Configure Database Links
builder.Configuration.GetSection("GraphDBConnection").Get<GraphDBConnectionOption>();
//System settings
builder.Configuration.GetSection("GraphSys").Get<GraphSysOption>();

//Inject AddGraphRagNet. Note that you need to inject the configuration file first, and then inject GraphRagNet
builder.Services.AddGraphRagNet();
```

### If you want to access other models, you can refer to the following code, which abstracts the implementation of Kernel. You can customize the implementation
```
var kernelBuild = Kernel.CreateBuilder();
kernelBuild.Services.AddKeyedSingleton<ITextGenerationService>("mock-text", new MockTextCompletion());
kernelBuild.Services.AddKeyedSingleton<IChatCompletionService>("mock-chat", new MockChatCompletion());
kernelBuild.Services.AddSingleton((ITextEmbeddingGenerationService)new MockTextEmbeddingGeneratorService());
kernelBuild.Services.AddKeyedSingleton("mock-embedding", new MockTextEmbeddingGeneratorService());

builder.Services.AddGraphRagNet(kernelBuild.Build());
```

#### It should be noted here that since the import may be carried out several times, the generated community and global information is not automatically called during import, so you need to call the generated community and global information according to the actual situation

```
    await _graphService.GraphCommunitiesAsync(index);
    await _graphService.GraphGlobalAsync(index);
```


Inject IGraphService service when using. The following is the reference sample code
```
namespace GraphRag.Net.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GraphDemoController(IGraphService _graphService) : ControllerBase
    {
        /// <summary>
        /// 获取所有的索引数据
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllIndex()
        {
            var graphModel = _graphService.GetAllIndex();
            return Ok(graphModel);
        }


        /// <summary>
        /// 获取所有的图谱数据
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllGraphs(string index)
        {
            if (string.IsNullOrEmpty(index))
            {
                return Ok(new GraphViewModel());
            }
            var graphModel = _graphService.GetAllGraphs(index);
            return Ok(graphModel);
        }


        /// <summary>
        /// 插入文本数据
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> InsertGraphData(InputModel model)
        {
            await _graphService.InsertGraphDataAsync(model.Index, model.Input);
            return Ok();
        }

        /// <summary>
        /// 搜索递归获取节点相关的所有边和节点进行图谱对话
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> SearchGraph(InputModel model)
        {
            var result = await _graphService.SearchGraphAsync(model.Index, model.Input);
            return Ok(result);
        }

        /// <summary>
        /// 通过社区算法检索社区节点进行对话
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> SearchGraphCommunity(InputModel model)
        {
            var result = await _graphService.SearchGraphCommunityAsync(model.Index, model.Input);
            return Ok(result);
        }

        /// <summary>
        /// 导入txt文档
        /// </summary>
        /// <param name="index"></param>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> ImportTxt(string index,IFormFile file)
        {
            var forms = await Request.ReadFormAsync();
            using (var stream = new StreamReader(file.OpenReadStream()))
            {
                var txt = await stream.ReadToEndAsync();
                await _graphService.InsertTextChunkAsync(index,txt);
                return Ok();
            }
        }

        /// <summary>
        /// 通过社区检测生成社区和摘要
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GraphCommunities(string index)
        {
            await _graphService.GraphCommunitiesAsync(index);
            return Ok();
        }      
        
        /// <summary>
        /// 通过社区摘要生成全局摘要
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GraphGlobal(string index)
        {
            await _graphService.GraphGlobalAsync(index);
            return Ok();
        }

        /// <summary>
        /// 删除图谱数据
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> DeleteGraph(string index)
        {
            await _graphService.DeleteGraph(index);
            return Ok();
        }
    }

    public class InputModel
    {
        public string Index { get; set; }
        public string Input { get; set; }
    }
}

```

## Test DB. Some community friends pre trained some data in advance. The link is as follows. After downloading, it can be directly put into the project directory for replacement to test the experience
```
https://pan.quark.cn/s/bf2d21f29f85
```

## See AntSK for more Rag scenarios
Project address：[AntSK](https://github.com/AIDotNet/AntSK)

Experience environment：

[Demo地址](https://demo.antsk.cn)

User：test

Pwd：test


You are also welcome to join our WeChat communication group. You can add my WeChat: **xuzeyu91** and send it to the group
