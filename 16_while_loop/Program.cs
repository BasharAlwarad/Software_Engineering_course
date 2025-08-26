// See https://aka.ms/new-console-template for more information
using System;

Console.WriteLine("Hello, World!");

// Example 1: Basic while loop
int i = 0;
while (i < 5)
{
    Console.WriteLine($"i = {i}");
    i++;
}

Console.WriteLine(); // Just to separate the outputs

// Example 2: Infinite loop with break
int count = 0;
while (true)
{
    if (count >= 3)
        break; // exit the loop
    Console.WriteLine($"count = {count}");
    count++;
}

Console.WriteLine(); // Just to separate the outputs

// Example 3: Using continue in a while loop
int n = 0;
while (n < 5)
{
    n++;
    if (n % 2 == 0)
        continue; // skip even numbers
    Console.WriteLine($"Odd n = {n}");
}

Console.WriteLine(); // Just to separate the outputs

// Example 4: Basic do-while loop
int j = 0;
do
{
    Console.WriteLine($"j = {j}");
    j++;
} while (j < 5);

Console.WriteLine(); // Just to separate the outputs

// Example 5: do-while always runs at least once
int k = 10;
do
{
    Console.WriteLine($"This will print once even though k >= 5 (k = {k})");
    k++;
} while (k < 5);
