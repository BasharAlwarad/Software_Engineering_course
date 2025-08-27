// See https://aka.ms/new-console-template for more information
using System;
using System.IO;

Console.WriteLine("Hello, World!");

// Writing to a file
File.WriteAllText("example.txt", "Hello, file!");

// Reading from a file
string content = File.ReadAllText("example.txt");
Console.WriteLine($"File content: {content}");

// Appending to a file
File.AppendAllText("example.txt", "\nAppended line.");

// Reading all lines
string[] lines = File.ReadAllLines("example.txt");
foreach (string line in lines)
{
    Console.WriteLine($"Line: {line}");
}
