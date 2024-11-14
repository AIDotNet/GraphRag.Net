﻿using AntDesign;

namespace GraphRag.Net.Web.Models;

public class LayoutModel
{
    public static FormItemLayout _formItemLayout = new()
    {
        LabelCol = new ColLayoutParam
        {
            Xs = new EmbeddedProperty { Span = 24 },
            Sm = new EmbeddedProperty { Span = 7 }
        },

        WrapperCol = new ColLayoutParam
        {
            Xs = new EmbeddedProperty { Span = 24 },
            Sm = new EmbeddedProperty { Span = 12 },
            Md = new EmbeddedProperty { Span = 10 }
        }
    };

    public static FormItemLayout _submitFormLayout = new()
    {
        WrapperCol = new ColLayoutParam
        {
            Xs = new EmbeddedProperty { Span = 24, Offset = 0 },
            Sm = new EmbeddedProperty { Span = 10, Offset = 7 }
        }
    };

    public static ListGridType _listGridType = new()
    {
        Gutter = 16,
        Xs = 1,
        Sm = 2,
        Md = 3,
        Lg = 3,
        Xl = 4,
        Xxl = 4
    };
}