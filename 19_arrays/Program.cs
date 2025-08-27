// See https://aka.ms/new-console-template for more information
using System;

// Declaring and initializing arrays
int[] numbers = new int[3];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

string[] fruits = { "apple", "banana", "cherry" };

// Accessing array elements
Console.WriteLine($"Second number: {numbers[1]}");
Console.WriteLine($"First fruit: {fruits[0]}");

// Array properties and methods
Console.WriteLine($"numbers.Length: {numbers.Length}");
Array.Sort(numbers);
Console.WriteLine($"Sorted numbers: {string.Join(", ", numbers)}");
Array.Reverse(fruits);
Console.WriteLine($"Reversed fruits: {string.Join(", ", fruits)}");

// Looping through arrays
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"numbers[{i}] = {numbers[i]}");
}

foreach (string fruit in fruits)
{
    Console.WriteLine($"fruit: {fruit}");
}

// Multidimensional arrays
int[,] matrix = { {1, 2}, {3, 4} };
Console.WriteLine($"matrix[1, 0]: {matrix[1, 0]}");

// Looping through a multidimensional array
for (int row = 0; row < matrix.GetLength(0); row++)
{
    for (int col = 0; col < matrix.GetLength(1); col++)
    {
        Console.Write($"{matrix[row, col]} ");
    }
    Console.WriteLine();
}
