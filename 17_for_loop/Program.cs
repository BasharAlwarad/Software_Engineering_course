// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// Example 1: Basic for loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"for loop i = {i}");
}

// Example 2: for loop with custom step
for (int i = 10; i >= 0; i -= 2)
{
    Console.WriteLine($"for loop i = {i}");
}

// Example 3: foreach loop with array
string[] colors = { "red", "green", "blue" };
foreach (string color in colors)
{
    Console.WriteLine($"foreach color: {color}");
}

// Example 4: foreach loop with List
var numbers = new System.Collections.Generic.List<int> { 1, 2, 3 };
foreach (int num in numbers)
{
    Console.WriteLine($"foreach number: {num}");
}
