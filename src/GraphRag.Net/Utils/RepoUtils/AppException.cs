// Copyright (c) Microsoft. All rights reserved.

using System;

namespace GraphRag.Net.Utils;

public class AppException : Exception
{
    public AppException() : base()
    {
    }

    public AppException(string message) : base(message)
    {
    }

    public AppException(string message, Exception innerException) : base(message, innerException)
    {
    }
}
