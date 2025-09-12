using System;
using System.Net.Http;
using System.Threading.Tasks;


// D. Exception Handling in Async Methods
// This example demonstrates how to handle exceptions in async methods using try/catch.
public static class D_AsyncExceptionHandling
{
    // Entry point for the exception handling example
    public static async Task Run()
    {
        try
        {
            string url = "https://jsonplaceholder.typicode.com/invalid-url";
            Console.WriteLine($"Trying to fetch: {url}");
            string result = await FetchDataAsync(url); // This will throw
            Console.WriteLine($"Fetched data: {result}");
        }
        catch (Exception ex)
        {
            // Exception is caught here
            Console.WriteLine($"Error: {ex.Message}");
        }
    }

    // Asynchronously fetches data and throws if the request fails
    public static async Task<string> FetchDataAsync(string url)
    {
        using var client = new HttpClient();
        var response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode(); // Throws if not successful
        return await response.Content.ReadAsStringAsync();
    }
}
