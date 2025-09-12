using System;
using System.Net.Http;
using System.Threading.Tasks;

// C. Fetch Request Example: Fetching data asynchronously in C#
public static class C_FetchRequest
{
    public static async Task Run()
    {
        string url = "https://jsonplaceholder.typicode.com/todos/1";
        string result = await FetchDataAsync(url);
        Console.WriteLine($"Fetched data:\n{result}");
    }

    public static async Task<string> FetchDataAsync(string url)
    {
        using var client = new HttpClient();
        var response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}
