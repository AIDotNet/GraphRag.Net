﻿// Copyright (c) Microsoft. All rights reserved.

using System.Reflection;

namespace GraphRag.Net.Utils;

internal static class RepoFiles
{
    /// <summary>
    /// Scan the local folders from the repo, looking for "samples/plugins" folder.
    /// </summary>
    /// <returns>The full path to samples/plugins</returns>
    public static string SamplePluginsPath()
    {
        string Parent = System.IO.Directory.GetCurrentDirectory();
        string Folder = "graphPlugins";

        bool SearchPath(string pathToFind, out string result, int maxAttempts = 10)
        {
            var currDir = Path.GetFullPath(Assembly.GetExecutingAssembly().Location);
            bool found;
            do
            {
                result = Path.Join(currDir, pathToFind);
                found = Directory.Exists(result);
                currDir = Path.GetFullPath(Path.Combine(currDir, ".."));
            } while (maxAttempts-- > 0 && !found);

            return found;
        }

        if (!SearchPath(Parent + Path.DirectorySeparatorChar + Folder, out string path)
            && !SearchPath(Folder, out path))
        {
            throw new AppException("Plugins directory not found. The app needs the plugins from the repo to work.");
        }

        return path;
    }
}
