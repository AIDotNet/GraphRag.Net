using Newtonsoft.Json;
using System.ComponentModel;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web;

namespace GraphRag.Net.Utils
{
    internal static class ConvertUtils
    {
        /// <summary>
        /// Проверяет, является ли значение пустым; возвращает true, если пусто
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool IsNull(this object data)
        {
            // Если null
            if (data == null)
            {
                return true;
            }

            // Если ""
            if (data.GetType() == typeof(String))
            {
                if (string.IsNullOrEmpty(data.ToString().Trim()))
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Проверяет, является ли значение пустым; возвращает true, если пусто
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool IsNotNull(this object data)
        {
            // Если null
            if (data == null)
            {
                return false;
            }

            // Если ""
            if (data.GetType() == typeof(String))
            {
                if (string.IsNullOrEmpty(data.ToString().Trim()))
                {
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// Проверяет, является ли значение пустым; возвращает true, если пусто
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static bool IsNull(string data)
        {
            // Если null
            if (data == null)
            {
                return true;
            }

            // Если ""
            if (data.GetType() == typeof(String))
            {
                if (string.IsNullOrEmpty(data.ToString().Trim()))
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Преобразует объект в строку
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static string ConvertToString(this object s)
        {
            if (s == null)
            {
                return "";
            }
            else
            {
                return Convert.ToString(s);
            }
        }

        /// <summary>
        /// Преобразует объект в int32
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static Int32 ConvertToInt32(this object s)
        {
            int i = 0;
            if (s == null)
            {
                return 0;
            }
            else
            {
                int.TryParse(s.ToString(), out i);
            }
            return i;
        }

        /// <summary>
        /// Преобразует объект в int64
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static Int64 ConvertToInt64(this object s)
        {
            long i = 0;
            if (s == null)
            {
                return 0;
            }
            else
            {
                long.TryParse(s.ToString(), out i);
            }
            return i;
        }

        /// <summary>
        /// Преобразует строку в double
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static double ConvertToDouble(this object s)
        {
            double i = 0;
            if (s == null)
            {
                return 0;
            }
            else
            {
                double.TryParse(s.ToString(), out i);
            }
            return i;
        }

        /// <summary>
        /// Преобразует в тип DateTime
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static DateTime ConvertToDateTime(this string s)
        {
            DateTime dt = new DateTime();
            if (s == null || s == "")
            {
                return DateTime.Now;
            }
            DateTime.TryParse(s, out dt);
            return dt;
        }

        /// <summary>
        /// Преобразует в строку формата DateTime
        /// </summary>
        /// <param name="s">Объект для преобразования</param>
        /// <param name="y">Строка формата</param>
        /// <returns></returns>
        public static string ConvertToDateTime(this string s, string y)
        {
            DateTime dt = new DateTime();
            DateTime.TryParse(s, out dt);
            return dt.ToString(y);
        }

        /// <summary>
        /// Преобразует строку в decimal
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static decimal ConvertToDecimal(this object s)
        {
            decimal d = 0;
            if (s == null || s == "")
            {
                return 0;
            }

            Decimal.TryParse(s.ToString(), out d);

            return d;
        }

        /// <summary>
        /// Decimal с двумя знаками после запятой
        /// </summary>
        public static decimal DecimalFraction(this decimal num)
        {
            return Convert.ToDecimal(num.ToString("f2"));
        }

        /// <summary>
        /// Заменяет специальные символы в HTML
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static string ReplaceHtml(this string s)
        {
            return s.Replace("&lt;", "<").Replace("&gt;", ">").Replace("&amp;", "&").Replace("&quot;", "\"");
        }

        /// <summary>
        /// Преобразовать поток в массив байтов
        /// </summary>
        /// <param name="stream"></param>
        /// <returns></returns>
        public static byte[] StreamToByte(this Stream stream)
        {
            byte[] bytes = new byte[stream.Length];
            stream.Read(bytes, 0, bytes.Length);
            // Установить позицию потока в начало
            stream.Seek(0, SeekOrigin.Begin);
            return bytes;
        }

        public static string JsonToMarkDown(this string s)
        {
            return $"{Environment.NewLine}```json{Environment.NewLine}{s}{Environment.NewLine}```{Environment.NewLine}";
        }

        /// <summary>
        /// Преобразует параметры JSON в параметры querystring
        /// </summary>
        /// <param name="parameters"></param>
        /// <returns></returns>
        public static string ToQueryString(this Dictionary<string, string> parameters)
        {
            var nameValueCollection = HttpUtility.ParseQueryString(string.Empty);

            foreach (var param in parameters)
            {
                nameValueCollection[param.Key] = param.Value;
            }

            return nameValueCollection.ToString();
        }

        /// <summary>
        /// Сопоставление без учета регистра
        /// </summary>
        /// <param name="s"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static bool ComparisonIgnoreCase(this string s, string value)
        {
            return s.Equals(value, StringComparison.OrdinalIgnoreCase);
        }

        public static string GetDescription(this Enum value)
        {
            FieldInfo field = value.GetType().GetField(value.ToString());

            if (field != null)
            {
                DescriptionAttribute attribute = (DescriptionAttribute)field.GetCustomAttribute(typeof(DescriptionAttribute));

                if (attribute != null)
                {
                    return attribute.Description;
                }
            }

            return value.ToString();
        }

        /// <summary>
        /// Является ли запрос потоковым
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static bool IsStream(this string value)
        {
            // Регулярное выражение игнорирует пробелы
            string pattern = @"\s*""stream""\s*:\s*true\s*";

            // Сопоставление с помощью регулярного выражения
            bool contains = Regex.IsMatch(value, pattern);
            return contains;
        }

        /// <summary>
        /// Преобразует \uxxxx в китайские символы, сохраняя переводы строк
        /// </summary>
        /// <param name="unicodeString"></param>
        /// <returns></returns>
        public static string Unescape(this string value)
        {
            if (value.IsNull())
            {
                return "";
            }

            try
            {
                Formatting formatting = Formatting.None;

                object jsonObj = JsonConvert.DeserializeObject(value);
                string unescapeValue = JsonConvert.SerializeObject(jsonObj, formatting);
                return unescapeValue;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return "";
            }
        }

    }
}
