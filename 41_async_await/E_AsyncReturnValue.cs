using System;
using System.Threading.Tasks;


// E. Returning Values from Async Methods
// This example demonstrates how to return values from async methods using Task<T>.
public static class E_AsyncReturnValue
{
    // Entry point for the return value example
    public static async Task Run()
    {
        int result = await CalculateAsync(); // Await the result
        Console.WriteLine($"Calculation result: {result}");
    }

    // Asynchronously calculates and returns an integer value
    public static async Task<int> CalculateAsync()
    {
        await Task.Delay(500); // Simulate work
        return 42; // Return result
    }
}
