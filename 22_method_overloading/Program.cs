// See https://aka.ms/new-console-template for more information
using System;

// Method overloading examples
void Print(string message)
{
    Console.WriteLine(message);
}

void Print(string message, int times)
{
    for (int i = 0; i < times; i++)
        Console.WriteLine(message);
}

void Print(int number)
{
    Console.WriteLine($"Number: {number}");
}

// Calling overloaded methods
Print("Hello");
Print("Hi", 3);
Print(42);

// Overloading with different parameter order
void Show(string text, double value)
{
    Console.WriteLine($"Text: {text}, Value: {value}");
}

void Show(double value, string text)
{
    Console.WriteLine($"Value: {value}, Text: {text}");
}

Show("Result", 3.14);
Show(2.71, "Pi");

// Note: Overloading by return type only is not allowed
// int Add(int x, int y) { return x + y; }
// double Add(int x, int y) { return x + y; } // Error: same parameter types
