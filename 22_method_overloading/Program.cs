// See https://aka.ms/new-console-template for more information
using System;

// Method overloading examples

namespace MyApp
{
    class Program
    {
        static void Main()
        {
            Print("Hi", 3);
            Print(42);
        }
static void Print(string message, int times)
{
    for (int i = 0; i < times; i++)
        Console.WriteLine(message);
}

static void Print(int number)
{
    Console.WriteLine($"Number: {number}");
}

    }
}
