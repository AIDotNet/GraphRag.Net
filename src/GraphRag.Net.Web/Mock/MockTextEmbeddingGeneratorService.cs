using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Embeddings;
using Microsoft.SemanticKernel.Services;

namespace GraphRag.Net.Web.Mock
{
    public sealed class MockTextEmbeddingGeneratorService : ITextEmbeddingGenerationService
    {
        private Dictionary<string, object?> AttributesInternal { get; } = [];
        public IReadOnlyDictionary<string, object?> Attributes => this.AttributesInternal;
        public MockTextEmbeddingGeneratorService()
        {

        }
        public async Task<IList<ReadOnlyMemory<float>>> GenerateEmbeddingsAsync(
          IList<string> data,
          Kernel? kernel = null,
          CancellationToken cancellationToken = default)
        {
            IList<ReadOnlyMemory<float>> results = new List<ReadOnlyMemory<float>>();

            float[] array1 = { 1.0f, 2.0f, 3.0f };
            float[] array2 = { 4.0f, 5.0f, 6.0f };
            float[] array3 = { 7.0f, 8.0f, 9.0f };

            // 将数组包装为ReadOnlyMemory<float>并添加到列表中
            results.Add(new ReadOnlyMemory<float>(array1));
            results.Add(new ReadOnlyMemory<float>(array2));
            results.Add(new ReadOnlyMemory<float>(array3));

            return results;
        }

        public void Dispose()
        {

        }
    }
}
