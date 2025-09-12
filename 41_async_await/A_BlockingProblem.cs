using System;
using System.Threading;



// A. The Problem: Blocking Function Without Async/Await
// This example demonstrates a blocking scenario: making coffee and a sandwich sequentially.
// Each task blocks the main thread, so you must wait for one to finish before starting the next.

public static class A_BlockingProblem
{
    // Top-level variable to track if breakfast is ready to serve
    private static bool readyToServe = false;

    // Entry point for the blocking example
    public static void Run()
    {
        Console.WriteLine("Start making coffee and sandwich...");
        MakeCoffee(); // Blocks until coffee is ready
        MakeSandwich(); // Instantly completes (but still blocking in order)
        ServingBreakfast();
        Console.WriteLine("Finished both tasks!");
    }

    // Simulates making coffee (blocking)
    public static void MakeCoffee()
    {
        Console.WriteLine("Making coffee (takes 3 seconds)...");
        Thread.Sleep(3000); // Blocks the thread for 3 seconds
        Console.WriteLine("Coffee is ready!");
        readyToServe = true; // Set flag when coffee is ready
    }

    // Simulates making a sandwich instantly (but called after coffee)
    // Simulates making a sandwich (takes 2 seconds, blocking)
    public static void MakeSandwich()
    {
        Console.WriteLine("Making a sandwich (takes 2 seconds, blocking)...");
        Thread.Sleep(2000); // Blocks the thread for 2 seconds
        Console.WriteLine("Sandwich is ready!");
    }

    // Function to serve breakfast if ready
    public static void ServingBreakfast()
    {
        if (readyToServe)
        {
            Console.WriteLine("Serving breakfast!");
        }
        else
        {
            Console.WriteLine("Breakfast not ready yet.");
        }
    }
}
