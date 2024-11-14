using System.ComponentModel;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Web;
using Newtonsoft.Json;

namespace GraphRag.Net.Utils;

internal static class ConvertUtils
{
    /// <summary>
    ///     判断是否为空，为空返回true
    /// </summary>
    /// <param name="data"></param>
    /// <returns></returns>
    public static bool IsNull(this object data)
    {
        //如果为null
        if (data == null) return true;

        //如果为""
        if (data.GetType() == typeof(string))
            if (string.IsNullOrEmpty(data.ToString().Trim()))
                return true;

        return false;
    }

    /// <summary>
    ///     判断是否为空，为空返回true
    /// </summary>
    /// <param name="data"></param>
    /// <returns></returns>
    public static bool IsNotNull(this object data)
    {
        //如果为null
        if (data == null) return false;

        //如果为""
        if (data.GetType() == typeof(string))
            if (string.IsNullOrEmpty(data.ToString().Trim()))
                return false;

        return true;
    }

    /// <summary>
    ///     判断是否为空，为空返回true
    /// </summary>
    /// <param name="data"></param>
    /// <returns></returns>
    public static bool IsNull(string data)
    {
        //如果为null
        if (data == null) return true;

        //如果为""
        if (data.GetType() == typeof(string))
            if (string.IsNullOrEmpty(data.Trim()))
                return true;

        return false;
    }

    /// <summary>
    ///     将obj类型转换为string
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static string ConvertToString(this object s)
    {
        if (s == null) return "";

        return Convert.ToString(s);
    }

    /// <summary>
    ///     object 转int32
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static int ConvertToInt32(this object s)
    {
        var i = 0;
        if (s == null) return 0;

        int.TryParse(s.ToString(), out i);
        return i;
    }

    /// <summary>
    ///     object 转int32
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static long ConvertToInt64(this object s)
    {
        long i = 0;
        if (s == null) return 0;

        long.TryParse(s.ToString(), out i);
        return i;
    }

    /// <summary>
    ///     将字符串转double
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static double ConvertToDouble(this object s)
    {
        double i = 0;
        if (s == null) return 0;

        double.TryParse(s.ToString(), out i);
        return i;
    }

    /// <summary>
    ///     转换为datetime类型
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static DateTime ConvertToDateTime(this string s)
    {
        var dt = new DateTime();
        if (s == null || s == "") return DateTime.Now;
        DateTime.TryParse(s, out dt);
        return dt;
    }

    /// <summary>
    ///     转换为datetime类型的格式字符串
    /// </summary>
    /// <param name="s">要转换的对象</param>
    /// <param name="y">格式化字符串</param>
    /// <returns></returns>
    public static string ConvertToDateTime(this string s, string y)
    {
        var dt = new DateTime();
        DateTime.TryParse(s, out dt);
        return dt.ToString(y);
    }

    /// <summary>
    ///     将字符串转换成decimal
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static decimal ConvertToDecimal(this object s)
    {
        decimal d = 0;
        if (s == null || s == "") return 0;

        decimal.TryParse(s.ToString(), out d);

        return d;
    }

    /// <summary>
    ///     decimal保留2位小数
    /// </summary>
    public static decimal DecimalFraction(this decimal num)
    {
        return Convert.ToDecimal(num.ToString("f2"));
    }

    /// <summary>
    ///     替换html种的特殊字符
    /// </summary>
    /// <param name="s"></param>
    /// <returns></returns>
    public static string ReplaceHtml(this string s)
    {
        return s.Replace("&lt;", "<").Replace("&gt;", ">").Replace("&amp;", "&").Replace("&quot;", "\"");
    }

    /// <summary>
    ///     流转byte
    /// </summary>
    /// <param name="stream"></param>
    /// <returns></returns>
    public static byte[] StreamToByte(this Stream stream)
    {
        var bytes = new byte[stream.Length];
        stream.Read(bytes, 0, bytes.Length);
        // 设置当前流的位置为流的开始
        stream.Seek(0, SeekOrigin.Begin);
        return bytes;
    }

    public static string JsonToMarkDown(this string s)
    {
        return $"{Environment.NewLine}```json{Environment.NewLine}{s}{Environment.NewLine}```{Environment.NewLine}";
    }

    /// <summary>
    ///     json参数转化querystring参数
    /// </summary>
    /// <param name="parameters"></param>
    /// <returns></returns>
    public static string ToQueryString(this Dictionary<string, string> parameters)
    {
        var nameValueCollection = HttpUtility.ParseQueryString(string.Empty);

        foreach (var param in parameters) nameValueCollection[param.Key] = param.Value;

        return nameValueCollection.ToString();
    }

    /// <summary>
    ///     忽略大小写匹配
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
        var field = value.GetType().GetField(value.ToString());

        if (field != null)
        {
            var attribute = (DescriptionAttribute)field.GetCustomAttribute(typeof(DescriptionAttribute));

            if (attribute != null) return attribute.Description;
        }

        return value.ToString();
    }

    /// <summary>
    ///     是否为流式请求
    /// </summary>
    /// <param name="value"></param>
    /// <returns></returns>
    public static bool IsStream(this string value)
    {
        // 正则表达式忽略空格的情况
        var pattern = @"\s*""stream""\s*:\s*true\s*";

        // 使用正则表达式匹配
        var contains = Regex.IsMatch(value, pattern);
        return contains;
    }

    /// <summary>
    ///     \uxxxx转中文,保留换行符号
    /// </summary>
    /// <param name="unicodeString"></param>
    /// <returns></returns>
    public static string Unescape(this string value)
    {
        if (value.IsNull()) return "";

        try
        {
            var formatting = Formatting.None;

            var jsonObj = JsonConvert.DeserializeObject(value);
            var unescapeValue = JsonConvert.SerializeObject(jsonObj, formatting);
            return unescapeValue;
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
            return "";
        }
    }
}