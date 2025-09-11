using System;

// Example: Problem when not using generics
public static class ProblemWithoutGenerics {
    // Only works for int
    public static void PrintInt(int value) {
        Console.WriteLine($"Int value: {value}");
    }
    // Only works for string
    public static void PrintString(string value) {
        Console.WriteLine($"String value: {value}");
    }
    // Only works for double
    public static void PrintDouble(double value) {
        Console.WriteLine($"Double value: {value}");
    }
    // Only works for boolean
    public static void PrintBool(bool value) {
        Console.WriteLine($"Bool value: {value}");
    }
    public static void Run() {
        PrintInt(42);
        PrintString("Hello");
        PrintDouble(3.14);
        PrintBool(true);
        // Problem: Code duplication, not reusable
    }
}
