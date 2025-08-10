using GraphRag.Net.Options;
using SqlSugar;
using System.Reflection;

namespace GraphRag.Net.Base
{
    public class SqlSugarHelper()
    {

        /// <summary>
        /// Подключение к SQL Server
        /// </summary>
        public static SqlSugarScope SqlScope()
        {

            string DBType = GraphDBConnectionOption.DbType;
            string ConnectionString = GraphDBConnectionOption.DBConnection;

            var config = new ConnectionConfig()
            {
                ConnectionString = ConnectionString,
                InitKeyType = InitKeyType.Attribute,// Извлекает информацию о первичных ключах и автоинкременте из атрибутов
                IsAutoCloseConnection = true,
                ConfigureExternalServices = new ConfigureExternalServices
                {
                    // Важно: здесь настройка AOP обязательна
                    EntityService = (c, p) =>
                    {
                        /*** Стиль высокого уровня C# ***/
                        // Поддерживает string? и string
                        if (p.IsPrimarykey == false && new NullabilityInfoContext()
                         .Create(c).WriteState is NullabilityState.Nullable)
                        {
                            p.IsNullable = true;
                        }
                    }
                }
            };
            DbType dbType = (DbType)Enum.Parse(typeof(DbType), DBType);
            config.DbType = dbType;
            var scope = new SqlSugarScope(config, Db =>
            {

            });
            return scope;
        }
    }
}
