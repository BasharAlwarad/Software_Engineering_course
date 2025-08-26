// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// break and continue in for loop
for (int i = 0; i < 5; i++)
{
    if (i == 3)
        break; // exits the loop when i == 3
    Console.WriteLine($"for loop, i = {i}");
}

for (int i = 0; i < 5; i++)
{
    if (i == 2)
        continue; // skips printing 2
    Console.WriteLine($"for loop, i = {i}");
}

// break and continue in while loop
int j = 0;
while (j < 5)
{
    if (j == 3)
        break;
    Console.WriteLine($"while loop, j = {j}");
    j++;
}

j = 0;
while (j < 5)
{
    j++;
    if (j == 2)
        continue;
    Console.WriteLine($"while loop, j = {j}");
}

// break in switch
int day = 2;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}

// break and continue in a method with a loop
void PrintUntil(int stop)
{
    for (int i = 0; i < 10; i++)
    {
        if (i == stop)
            break;
        if (i % 2 == 0)
            continue;
        Console.WriteLine($"method, i = {i}");
    }
}
PrintUntil(5);

// break and continue in if (only valid inside loops or switch)
for (int k = 0; k < 5; k++)
{
    if (k == 1)
        continue;
    if (k == 4)
        break;
    Console.WriteLine($"if in for, k = {k}");
}
