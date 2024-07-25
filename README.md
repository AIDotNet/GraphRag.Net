这是一个参考GraphRag的dotnet建议实现

本项目为demo示例，仅用于学习GraphRAG思路。

出于方便，LLM接口目前只兼容了openai的规范，其他大模型可以考虑使用one-api类的集成产品

```
 "OpenAI": {
   "Key": "sk-xxx",
   "Endpoint": "text-embedding-ada-002",
   "ChatModel": "gpt-4o-mini",
   "EmbeddingModel": "https://api.openai.com/"
 }
```

启动项目后可以通过
```
http://localhost:5000/swagger
```
打开swagger查看接口

也可以使用
```
http://localhost:5000/
```

打开blazor的UI界面
