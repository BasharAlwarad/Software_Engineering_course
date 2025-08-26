// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// Example 1: Basic if, else if, else
int number = 10;
if (number > 10)
{
    Console.WriteLine("Greater than 10");
}
else if (number == 10)
{
    Console.WriteLine("Equal to 10");
}
else
{
    Console.WriteLine("Less than 10");
}

// Example 2: Nested if
int age = 16;
if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
else
{
    if (age >= 13)
    {
        Console.WriteLine("You are a teenager.");
    }
    else
    {
        Console.WriteLine("You are a child.");
    }
}

// Example 3: Multiple else if
string color = "yellow";
if (color == "red")
{
    Console.WriteLine("Stop");
}
else if (color == "yellow")
{
    Console.WriteLine("Caution");
}
else if (color == "green")
{
    Console.WriteLine("Go");
}
else
{
    Console.WriteLine("Unknown color");
}
