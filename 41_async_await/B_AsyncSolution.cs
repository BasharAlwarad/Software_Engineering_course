using System;
using System.Threading.Tasks;



// B. The Solution: Async/Await and Task
// This example demonstrates running two tasks (making coffee and a sandwich) in parallel using async/await.
// The main thread is not blocked; both tasks run concurrently.
public static class B_AsyncSolution
{
    // Entry point for the async example
    public static async Task Run()
    {
        Console.WriteLine("Start making coffee and sandwich in parallel...");
        var coffeeTask = MakeCoffeeAsync(); // Start making coffee asynchronously
        var sandwichTask = MakeSandwichAsync(); // Start making sandwich asynchronously
        await Task.WhenAll(coffeeTask, sandwichTask); // Wait for both to finish
        Console.WriteLine("Finished both tasks!");
    }

    // Simulates making coffee asynchronously
    public static async Task MakeCoffeeAsync()
    {
        Console.WriteLine("Making coffee (takes 3 seconds)...");
        await Task.Delay(3000); // Non-blocking wait for 3 seconds
        Console.WriteLine("Coffee is ready!");
    }

    // Simulates making a sandwich asynchronously
    public static async Task MakeSandwichAsync()
    {
        Console.WriteLine("Making a sandwich (takes 2 seconds)...");
        await Task.Delay(2000); // Non-blocking wait for 2 seconds
        Console.WriteLine("Sandwich is ready!");
    }
}
