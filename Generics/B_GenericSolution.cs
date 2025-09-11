using System;

// Example: Fixing the problem with generics
public static class GenericSolution {
    // Generic method
    public static void Print<T>(T value) {
        Console.WriteLine($"Value: {value}");
    }
    public static void Run() {
        Print(42);         // int
        Print("Hello");   // string
        Print(3.14);      // double
        Print(true);      // bool
        // Solution: One method works for any type
    }
}
