using System;
using System.Threading.Tasks;


// G. Best Practices & Constraints for Async/Await
// This example demonstrates best practices for async/await in C#.
// Avoid blocking async code with .Result or .Wait(), and always use await.
public static class G_AsyncBestPractices
{
    // Entry point for the best practices example
    public static async Task Run()
    {
        // BAD: Blocking async code with .Result or .Wait() can cause deadlocks
        // int result = CalculateAsync().Result; // Don't do this!
        // CalculateAsync().Wait(); // Don't do this!

        // GOOD: Always await async methods
        int value = await CalculateAsync(); // Correct usage
        Console.WriteLine($"Best practice result: {value}");
    }

    // Asynchronously calculates and returns a value
    public static async Task<int> CalculateAsync()
    {
        await Task.Delay(300); // Simulate work
        return 7;
    }
}
