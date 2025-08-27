// See https://aka.ms/new-console-template for more information
using System;

// Declaring and initializing strings
string greeting = "Hello, World!";
string name = "Alice";

// String concatenation
string fullGreeting = greeting + " My name is " + name + ".";
Console.WriteLine(fullGreeting);

// String interpolation
string message = $"Hello, {name}!";
Console.WriteLine(message);

// Common string methods
string s = "  Hello, C#!  ";
Console.WriteLine($"Length: {s.Length}");
Console.WriteLine($"Trim: '{s.Trim()}'");
Console.WriteLine($"ToUpper: {s.ToUpper()}");
Console.WriteLine($"Contains 'C#': {s.Contains("C#")}");
Console.WriteLine($"Replace: {s.Replace("C#", "World")}");
Console.WriteLine($"IndexOf 'C': {s.IndexOf('C')}");
Console.WriteLine($"Substring(2, 5): '{s.Substring(2, 5)}'");
Console.WriteLine($"StartsWith ' ': {s.StartsWith(" ")}");
Console.WriteLine($"EndsWith '!  ': {s.EndsWith("!  ")}");

// Splitting a string
string csv = "red,green,blue";
string[] colors = csv.Split(',');
foreach (string color in colors)
{
    Console.WriteLine($"Color: {color}");
}
