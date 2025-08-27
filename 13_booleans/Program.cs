// See https://aka.ms/new-console-template for more information
using System;

// Declaring booleans
bool isActive = true;
bool isComplete = false;
Console.WriteLine($"isActive: {isActive}");
Console.WriteLine($"isComplete: {isComplete}");

// Boolean expressions
int a = 5, b = 10;
bool result = a < b;
Console.WriteLine($"a < b: {result}");

// Logical operators
bool x = true;
bool y = false;
Console.WriteLine($"x && y: {x && y}"); // AND
Console.WriteLine($"x || y: {x || y}"); // OR
Console.WriteLine($"!x: {!x}");         // NOT

// Booleans in conditions
if (isActive)
{
    Console.WriteLine("Active!");
}

if (!isComplete)
{
    Console.WriteLine("Not complete!");
}
