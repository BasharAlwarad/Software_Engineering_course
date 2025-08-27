// See https://aka.ms/new-console-template for more information
using System;

// Value parameter example
void PrintValue(int x)
{
    Console.WriteLine($"Value: {x}");
}
PrintValue(10);

// Reference parameter (ref)
void Increment(ref int x)
{
    ++x;
}
int n = 1;
Increment(ref n);
Console.WriteLine($"After Increment: {n}");


// // Out parameter
void GetValues(out int x, out int y)
{
    x = 10;
    y = 20;
}
int a;
int b;
GetValues(out a, out b);
Console.WriteLine($"a = {a}, b = {b}");

// In parameter (read-only reference)
void PrintIn(in int x)
{
    Console.WriteLine($"in parameter: {x}");
    // x = 5; // Error: cannot assign to in parameter
}
int z = 42;
PrintIn(z);

// Optional parameter
double Power(double x, double y = 2)
{
    return Math.Pow(x, y);
}
Console.WriteLine($"Power(3): {Power(3)}");
Console.WriteLine($"Power(3, 3): {Power(3, 3)}");

// Named arguments
void DisplayInfo(string name, int age = 18, string city = "Unknown")
{
    Console.WriteLine($"Name: {name}, Age: {age}, City: {city}");
}
DisplayInfo(name:"Alice", city: "Paris",age:15); // Skips age, uses default
DisplayInfo("Alice", city: "Paris"); // Skips age, uses default

// Params keyword
void PrintNumbers(params int[] numbers)
{
    foreach (int num in numbers)
        Console.WriteLine($"params: {num}");
}
PrintNumbers(1, 2, 3, 4,5,6,7);

// Parameter modifier rules
void RefOutInExamples(ref int a, out int b, in int c)
{
    a++;
    b = c + 1;
    // c++; // Error: cannot modify in parameter
}
int refVal = 5, outVal, inVal = 7;
RefOutInExamples(ref refVal, out outVal, in inVal);
Console.WriteLine($"refVal: {refVal}, outVal: {outVal}, inVal: {inVal}");
