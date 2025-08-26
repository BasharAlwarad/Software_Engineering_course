// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// Example 1: Basic switch statement
int day = 3;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}

// Example 2: Grouping similar cases
char grade = 'B';
switch (grade)
{
    case 'A':
    case 'B':
        Console.WriteLine("Good job!"); // Both A and B print this
        break;
    case 'C':
        Console.WriteLine("Passed");
        break;
    default:
        Console.WriteLine("Try again");
        break;
}

// Example 3: switch inside a loop with continue
for (int i = 0; i < 5; i++)
{
    switch (i)
    {
        case 2:
            // continue here skips to next loop iteration, not just switch
            continue;
        default:
            Console.WriteLine($"Loop value: {i}");
            break;
    }
}

// Example 4: switch expression (C# 8.0+)
int number = 2;
string result = number switch
{
    1 => "One",
    2 => "Two",
    3 => "Three",
    _ => "Other"
};
Console.WriteLine($"Switch expression result: {result}");

// Example 5: switch vs if-else
if (day == 1)
    Console.WriteLine("Monday (if-else)");
else if (day == 2)
    Console.WriteLine("Tuesday (if-else)");
else if (day == 3)
    Console.WriteLine("Wednesday (if-else)");
else
    Console.WriteLine("Other day (if-else)");
