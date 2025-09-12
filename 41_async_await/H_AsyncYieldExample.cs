using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;



// H. Using yield with async fetch requests
// This example demonstrates how to use async streams (IAsyncEnumerable) and yield to fetch data from multiple URLs.
//
// Why use yield?
// - yield allows you to return results one at a time, as soon as they are available, instead of waiting for all results before returning.
// - With yield, the caller can start processing each result immediately, improving responsiveness and memory usage for large data sets.
// - In contrast, return only returns a single value (or a complete collection), so the caller must wait until all work is done.
//
// How is yield different from return?
// - return ends the method and provides a single value (or collection).
// - yield return produces a sequence of values, pausing the method after each value and resuming when the caller requests the next item.
// - With async streams (IAsyncEnumerable), yield return works with await, so you can produce results asynchronously as they arrive.
//
// Benefits:
// - Efficient for streaming or large data sets
// - Responsive: caller can process items as soon as they are ready
// - Works naturally with async/await for non-blocking data pipelines

public static class H_AsyncYieldExample
{
    // Entry point for the async yield example
    public static async Task Run()
    {
        string[] urls = {
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/posts/1"
        };
        Console.WriteLine("Fetching multiple URLs and yielding results...");
        await foreach (var result in FetchAllAsync(urls))
        {
            // Print the first 100 characters of each result
            Console.WriteLine($"Yielded data:\n{result.Substring(0, Math.Min(result.Length, 100))}...");
        }
    }

    // Asynchronously fetches data from each URL and yields results one by one
    // Instead of building a list and returning it at the end, yield return streams each result as soon as it's ready
    public static async IAsyncEnumerable<string> FetchAllAsync(IEnumerable<string> urls)
    {
        using var client = new HttpClient();
        foreach (var url in urls)
        {
            var response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            // yield return streams the result to the caller immediately
            yield return await response.Content.ReadAsStringAsync();
        }
    }
}
