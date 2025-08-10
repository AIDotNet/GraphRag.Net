using GraphRag.Net.Options;
using System.Text;
using System.Text.RegularExpressions;


namespace GraphRag.Net.Utils
{
    internal class OpenAIHttpClientHandler : HttpClientHandler
    {

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            UriBuilder uriBuilder;
            Regex regex = new Regex(@"(https?)://([^/:]+)(:\d+)?/(.*)");
            Match match = regex.Match(GraphOpenAIOption.EndPoint);

            var mediaType = request.Content.Headers.ContentType.MediaType;
            string requestBody = (await request.Content.ReadAsStringAsync()).Unescape();
            var uncaseBody = new StringContent(requestBody, Encoding.UTF8, mediaType);
            request.Content = uncaseBody;

            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development" && request.Content != null)
            {
                // Удобно для просмотра запроса при отладке
                Console.WriteLine(requestBody);
            }
            if (match.Success)
            {
                string xieyi = match.Groups[1].Value;
                string host = match.Groups[2].Value;
                string port = match.Groups[3].Value; // Необязательный номер порта
                string route = match.Groups[4].Value;
                // Если port не пуст, он содержит двоеточие, его нужно убрать
                port = string.IsNullOrEmpty(port) ? port : port.Substring(1);
                // Объединить хост и порт
                var hostnew = string.IsNullOrEmpty(port) ? host : $"{host}:{port}";

                switch (request.RequestUri.LocalPath)
                {
                    case "/v1/chat/completions":
                        // Замена прокси
                        uriBuilder = new UriBuilder(request.RequestUri)
                        {
                            // URL, который нужно изменить
                            Scheme = $"{xieyi}://{hostnew}/",
                            Host = host,
                            Path = route + "v1/chat/completions",
                        };
                        if (port.ConvertToInt32() != 0)
                        {
                            uriBuilder.Port = port.ConvertToInt32();
                        }

                        request.RequestUri = uriBuilder.Uri;

                        break;
                    case "/v1/embeddings":
                        uriBuilder = new UriBuilder(request.RequestUri)
                        {
                            // URL, который нужно изменить
                            Scheme = $"{xieyi}://{host}/",
                            Host = host,
                            Path = route + "v1/embeddings",
                        };
                        if (port.ConvertToInt32() != 0)
                        {
                            uriBuilder.Port = port.ConvertToInt32();
                        }
                        request.RequestUri = uriBuilder.Uri;
                        break;
                }
            }

            // Затем вызвать базовый метод SendAsync для отправки измененного запроса
            HttpResponseMessage response = await base.SendAsync(request, cancellationToken);

            return response;
        }
    }

}
