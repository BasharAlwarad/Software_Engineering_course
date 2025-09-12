using System;
using System.Threading;



// A. The Problem: Blocking Function Without Async/Await
// This example demonstrates a blocking scenario: making coffee and a sandwich sequentially.
// Each task blocks the main thread, so you must wait for one to finish before starting the next.
public static class A_BlockingProblem
{
    // Entry point for the blocking example
    public static void Run()
    {
        Console.WriteLine("Start making coffee...");
        MakeCoffee(); // Blocks until coffee is ready
        Console.WriteLine("Now start making a sandwich...");
        MakeSandwich(); // Blocks until sandwich is ready
        Console.WriteLine("Finished both tasks!");
    }

    // Simulates making coffee (blocking)
    public static void MakeCoffee()
    {
        Console.WriteLine("Making coffee (takes 3 seconds)...");
        Thread.Sleep(3000); // Blocks the thread for 3 seconds
        Console.WriteLine("Coffee is ready!");
    }

    // Simulates making a sandwich (blocking)
    public static void MakeSandwich()
    {
        Console.WriteLine("Making a sandwich (takes 2 seconds)...");
        Thread.Sleep(2000); // Blocks the thread for 2 seconds
        Console.WriteLine("Sandwich is ready!");
    }
}
