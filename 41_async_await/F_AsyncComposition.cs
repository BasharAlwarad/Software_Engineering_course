using System;
using System.Net.Http;
using System.Threading.Tasks;


// F. Composing Multiple Tasks with Task.WhenAll
// This example demonstrates running multiple async fetch requests in parallel and awaiting all results.
public static class F_AsyncComposition
{
    // Entry point for the composition example
    public static async Task Run()
    {
        string[] urls = {
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/posts/1"
        };
        Console.WriteLine("Fetching multiple URLs in parallel...");
        var tasks = new Task<string>[urls.Length];
        for (int i = 0; i < urls.Length; i++)
            tasks[i] = FetchDataAsync(urls[i]); // Start all fetches
        var results = await Task.WhenAll(tasks); // Await all results
        for (int i = 0; i < results.Length; i++)
            Console.WriteLine($"Result {i + 1}:\n{results[i]}");
    }

    // Asynchronously fetches data from a URL
    public static async Task<string> FetchDataAsync(string url)
    {
        using var client = new HttpClient();
        var response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}
