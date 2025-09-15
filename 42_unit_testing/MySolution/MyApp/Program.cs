using System;
using System.Collections.Generic;

namespace MyApp
{
    // Program: Demonstrates usage of all example classes
    class Program
    {
        public static void Main(string[] args)
        {
            // MathUtils: Calculate average
            Console.WriteLine("A. MathUtils Example");
            var nums = new List<int> { 2, 4, 6 };
            Console.WriteLine($"Average: {A_MathUtils.Average(nums)}");

            // StringTools: Reverse and palindrome check
            Console.WriteLine("\nB. StringTools Example");
            Console.WriteLine($"Reverse('abc'): {B_StringTools.Reverse("abc")}");
            Console.WriteLine($"IsPalindrome('racecar'): {B_StringTools.IsPalindrome("racecar")}");

            // Inventory: Add and list items
            Console.WriteLine("\nC. Inventory Example");
            var inv = new C_Inventory();
            inv.Add("apple");
            inv.Add("banana");
            Console.WriteLine($"Inventory: {string.Join(", ", inv.GetAll())}");

            // Point: Value and reference equality
            Console.WriteLine("\nD. Point Example");
            var p1 = new D_Point(1, 2);
            var p2 = new D_Point(1, 2);
            Console.WriteLine($"p1 == p2: {p1 == p2}");
            Console.WriteLine($"ReferenceEquals(p1, p2): {ReferenceEquals(p1, p2)}");

            // TemperatureConverter: Celsius to Fahrenheit
            Console.WriteLine("\nE. TemperatureConverter Example");
            Console.WriteLine($"20C to F: {E_TemperatureConverter.CelsiusToFahrenheit(20)}");

            // Notifier: Event publishing
            Console.WriteLine("\nF. Notifier Example");
            var notifier = new F_Notifier();
            notifier.MessagePublished += (s, msg) => Console.WriteLine($"Received: {msg}");
            notifier.Publish("Hello from Notifier!");
        }
    }
}