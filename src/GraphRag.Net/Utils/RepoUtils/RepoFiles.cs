// Copyright (c) Microsoft. All rights reserved.

namespace GraphRag.Net.Utils;

internal static class RepoFiles
{
    /// <summary>
    ///     Scan the local folders from the repo, looking for "samples/plugins" folder.
    /// </summary>
    /// <returns>The full path to samples/plugins</returns>
    public static string SamplePluginsPath()
    {
        var baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        var folderName = "graphPlugins";

        string FindPluginsDirectory(string startDir, string targetFolder)
        {
            var currDir = Path.GetFullPath(startDir);
            const int maxAttempts = 10;

            for (var i = 0; i < maxAttempts; i++)
            {
                var potentialPath = Path.Combine(currDir, targetFolder);
                if (Directory.Exists(potentialPath)) return potentialPath;

                currDir = Path.GetFullPath(Path.Combine(currDir, ".."));
            }

            return null; // Not found after max attempts.
        }

        // Check in the BaseDirectory and its parent directories
        var path = FindPluginsDirectory(baseDirectory, folderName)
                   ?? FindPluginsDirectory(baseDirectory + Path.DirectorySeparatorChar + folderName, folderName);

        if (string.IsNullOrEmpty(path))
            throw new AppException("Plugins directory not found. The app needs the plugins from the repo to work.");
        return path;
    }
}