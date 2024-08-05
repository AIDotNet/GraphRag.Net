using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Unicode;

namespace GraphRag.Net.Web.Mock
{
    public class MockChatCompletion : IChatCompletionService
    {
        private readonly Dictionary<string, object?> _attributes = new();
        private string _chatId;


        private static readonly JsonSerializerOptions _jsonSerializerOptions = new()
        {
            NumberHandling = JsonNumberHandling.AllowReadingFromString,
            Encoder = JavaScriptEncoder.Create(UnicodeRanges.All)
        };

        public IReadOnlyDictionary<string, object?> Attributes => _attributes;

        public MockChatCompletion()
        {

        }

        public async Task<IReadOnlyList<ChatMessageContent>> GetChatMessageContentsAsync(ChatHistory chatHistory, PromptExecutionSettings? executionSettings = null, Kernel? kernel = null, [EnumeratorCancellation] CancellationToken cancellationToken = default)
        {
            StringBuilder sb = new();
            string result = $"这是一条Mock数据，便于聊天测试，你的消息是：{chatHistory.LastOrDefault().ToString()}";
            return [new(AuthorRole.Assistant, result.ToString())];
        }

        public async IAsyncEnumerable<StreamingChatMessageContent> GetStreamingChatMessageContentsAsync(ChatHistory chatHistory, PromptExecutionSettings? executionSettings = null, Kernel? kernel = null, [EnumeratorCancellation] CancellationToken cancellationToken = default)
        {
            StringBuilder sb = new();
            string result = $"这是一条Mock数据，便于聊天测试，你的消息是：{chatHistory.LastOrDefault().ToString()}";
            foreach (var c in result)
            {
                yield return new StreamingChatMessageContent(AuthorRole.Assistant, c.ToString());
            }
        }
    }
}