using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Unicode;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;

namespace GraphRag.Net.Web.Mock;

public class MockChatCompletion : IChatCompletionService
{
    private static readonly JsonSerializerOptions _jsonSerializerOptions = new()
    {
        NumberHandling = JsonNumberHandling.AllowReadingFromString,
        Encoder = JavaScriptEncoder.Create(UnicodeRanges.All)
    };

    private readonly Dictionary<string, object?> _attributes = new();
    private string _chatId;

    public IReadOnlyDictionary<string, object?> Attributes => _attributes;

    public async Task<IReadOnlyList<ChatMessageContent>> GetChatMessageContentsAsync(ChatHistory chatHistory,
        PromptExecutionSettings? executionSettings = null, Kernel? kernel = null,
        [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        StringBuilder sb = new();
        var result = $"这是一条Mock数据，便于聊天测试，你的消息是：{chatHistory.LastOrDefault()}";
        return [new ChatMessageContent(AuthorRole.Assistant, result)];
    }

    public async IAsyncEnumerable<StreamingChatMessageContent> GetStreamingChatMessageContentsAsync(
        ChatHistory chatHistory, PromptExecutionSettings? executionSettings = null, Kernel? kernel = null,
        [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        StringBuilder sb = new();
        var result = $"这是一条Mock数据，便于聊天测试，你的消息是：{chatHistory.LastOrDefault()}";
        foreach (var c in result) yield return new StreamingChatMessageContent(AuthorRole.Assistant, c.ToString());
    }
}