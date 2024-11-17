﻿using System.Reflection;
using GraphRag.Net.Options;
using GraphRag.Net.Repositories;
using SqlSugar;

namespace GraphRag.Net.Base;

public class SqlSugarHelper
{
    /// <summary>
    ///     sqlserver连接
    /// </summary>
    public static SqlSugarScope SqlScope()
    {
        var DBType = GraphDBConnectionOption.DbType;
        var ConnectionString = GraphDBConnectionOption.DBConnection;

        if (string.IsNullOrEmpty(ConnectionString))
        {
            throw new Exception("数据库连接字符串为空");
        }

        if (string.IsNullOrEmpty(DBType))
        {
            throw new Exception("数据库类型为空");
        }

        var config = new ConnectionConfig
        {
            ConnectionString = ConnectionString,
            InitKeyType = InitKeyType.Attribute, //从特性读取主键和自增列信息
            IsAutoCloseConnection = true,
            ConfigureExternalServices = new ConfigureExternalServices
            {
                //注意:  这儿AOP设置不能少
                EntityService = (c, p) =>
                {
                    p.IfTable<Nodes>()
                        .UpdateProperty((nodes => nodes.Id), (it =>
                        {
                            it.IsPrimarykey = true;
                        }));

                    p.IfTable<Edges>()
                        .UpdateProperty((edges => edges.Id), (it =>
                        {
                            it.IsPrimarykey = true;
                        }));
                    
                    /***高版C#写法***/
                    //支持string?和string  
                    if (p.IsPrimarykey == false && new NullabilityInfoContext()
                            .Create(c).WriteState is NullabilityState.Nullable)
                        p.IsNullable = true;
                }
            }
        };
        var dbType = (DbType)Enum.Parse(typeof(DbType), DBType);
        config.DbType = dbType;
        var scope = new SqlSugarScope(config, Db => { });
        return scope;
    }
}