// Copyright (c) Microsoft. All rights reserved.

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
        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        string folderName = "graphPlugins";

        string FindPluginsDirectory(string startDir, string targetFolder)
        {
            string currDir = Path.GetFullPath(startDir);
            const int maxAttempts = 10;

            for (int i = 0; i < maxAttempts; i++)
            {
                string potentialPath = Path.Combine(currDir, targetFolder);
                if (Directory.Exists(potentialPath))
                {
                    return potentialPath;
                }

                currDir = Path.GetFullPath(Path.Combine(currDir, ".."));
            }

            return null; // Not found after max attempts.
        }

        // Check in the BaseDirectory and its parent directories
        string path = FindPluginsDirectory(baseDirectory, folderName)
                    ?? FindPluginsDirectory(baseDirectory + Path.DirectorySeparatorChar + folderName, folderName);

        if (string.IsNullOrEmpty(path))
        {
            throw new AppException("Plugins directory not found. The app needs the plugins from the repo to work.");
        }
        return path;
    }
}
