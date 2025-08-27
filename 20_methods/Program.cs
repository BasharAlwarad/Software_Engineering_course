// See https://aka.ms/new-console-template for more information
using System;

// Methods inside a namespace and class
namespace MyApp
{
    class Program
    {
        static void Main()
        {
            Greet("Alice");
            Greet("Bob");
            int sum = Add(3, 4);
            Console.WriteLine($"Sum: {sum}");
            SayHello();
            Console.WriteLine($"Product: {Multiply(2.5, 4)}");
        }

        static void Greet(string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }

        static int Add(int a, int b)
        {
            return a + b;
        }

        static void SayHello()
        {
            Console.WriteLine("Hello from a method with no parameters!");
        }

        static double Multiply(double x, double y)
        {
            return x * y;
        }
    }
}
