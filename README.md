简体中文 | [English](./README.en.md) 

## 这是一个参考GraphRag的dotnet简易实现

基于微软在论文中提到的实现思路，执行过程GraphRAG主要实现了如下功能：
- Source Documents → Text Chunks：将源文档分割成文本块。
- Text Chunks → Element Instances：从每个文本块中提取图节点和边的实例。
- Element Instances → Element Summaries：为每个图元素生成摘要。
- Element Summaries → Graph Communities：使用社区检测算法将图划分为社区。
- Graph Communities → Community Summaries：为每个社区生成摘要。
- Community Summaries → Community Answers → Global Answer：使用社区摘要生成局部答案，然后汇总这些局部答案以生成全局答案。

本项目为demo示例，仅用于学习GraphRAG思路。

## 您可以直接在项目中引用NuGet包，或者直接使用本项目提供API服务。

出于方便，LLM接口目前只兼容了openai的规范，其他大模型可以考虑使用one-api类的集成产品

在appsettings.json配置

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
    "VectorConnection": "graphmem.db", //如果用PostgreSQL，可以和DBConnection一致
    "VectorSize": 1536 //DbType=PostgreSQL时需要设置，sqlite可以不设置
},
"GraphSearch": {
    "SearchMinRelevance": 0.5, //搜索最小相关性
    "SearchLimit": 3, //向量搜索节点限制个数
    "NodeDepth": 3 ,//检索节点深度
    "MaxNodes": 100 //检索最大节点数
},
"GraphSys": {
    "RetryCounnt": 2 //重试次数，使用国产模型可能会出现json提取失败，增加重试次数可提高可用性
}
```
## 启动项目
```
dotnet run --project GraphRag.Net.Web.csproj
```

## 启动项目后可以通过
```
http://localhost:5000/swagger
```
## 打开swagger查看接口

![Graoh](https://github.com/xuzeyu91/GraphRag.Net/blob/main/doc/api.png)

### 也可以使用界面
```
http://localhost:5000/
```

打开blazor的UI界面，页面提供了文本导入、文件导入，和问答对话，查看知识图谱等功能

![Graoh](https://github.com/xuzeyu91/GraphRag.Net/blob/main/doc/graph1.png)


## Nuget包使用
```
dotnet add package GraphRag.Net
```
## 为了方便进行提示词调整与修改，SK Plugin我们剥离出了项目，您需要把GraphRag.Net.Web项目中的 graphPlugins目录拷贝到你的项目中，并设置：
[graphPlugins](https://github.com/AIDotNet/GraphRag.Net/tree/main/src/GraphRag.Net.Web/graphPlugins)
```
  <ItemGroup>
    <None Include="graphPlugins\**">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
  </ItemGroup>
```

### 默认配置，使用OpenAI标准接口，在配置了OpenAI的appsettings后可以使用下面代码进行注入
添加包以后，需要进行配置文件的设置以及依赖注入
```
//OpenAI配置
builder.Configuration.GetSection("GraphOpenAI").Get<GraphOpenAIOption>();
//文档切片配置
builder.Configuration.GetSection("TextChunker").Get<TextChunkerOption>();
//配置数据库链接
builder.Configuration.GetSection("GraphDBConnection").Get<GraphDBConnectionOption>();
//系统设置
builder.Configuration.GetSection("GraphSys").Get<GraphSysOption>();

//注入AddGraphRagNet,注意，需要先注入配置文件，然后再注入GraphRagNet
builder.Services.AddGraphRagNet();
```

### 如果你想接入其他模型，可以参考以下代码,这里抽象了Kernel的实现，你可以自定义实现
```
var kernelBuild = Kernel.CreateBuilder();
kernelBuild.Services.AddKeyedSingleton<ITextGenerationService>("mock-text", new MockTextCompletion());
kernelBuild.Services.AddKeyedSingleton<IChatCompletionService>("mock-chat", new MockChatCompletion());
kernelBuild.Services.AddSingleton((ITextEmbeddingGenerationService)new MockTextEmbeddingGeneratorService());
kernelBuild.Services.AddKeyedSingleton("mock-embedding", new MockTextEmbeddingGeneratorService());

builder.Services.AddGraphRagNet(kernelBuild.Build());
```

#### 此处需要注意，由于导入可能分多次导入，没有在导入时自动调用生成社区和全局信息，需要自己根据实际情况调用生成社区和全局信息

```
    await _graphService.GraphCommunitiesAsync(index);
    await _graphService.GraphGlobalAsync(index);
```


使用时注入 IGraphService  服务,以下为参考示例代码
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

## 测试DB，有社区朋友提前预训练了一些数据，链接如下，下载后直接放进项目目录替换即可测试体验
```
https://pan.quark.cn/s/bf2d21f29f85
```

## 更多Rag场景可查看 AntSK
项目地址：[AntSK](https://github.com/AIDotNet/AntSK)

体验环境：

[Demo地址](https://demo.antsk.cn)

账号：test

密码：test


也欢迎大家加入我们的微信交流群，可以添加我的微信：**xuzeyu91** 发送进群
