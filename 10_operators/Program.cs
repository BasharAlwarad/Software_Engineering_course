// See https://aka.ms/new-console-template for more information
using System;

// Arithmetic Operators
int a = 10, b = 3;
Console.WriteLine($"a + b = {a + b}"); // Addition
Console.WriteLine($"a - b = {a - b}"); // Subtraction
Console.WriteLine($"a * b = {a * b}"); // Multiplication
Console.WriteLine($"a / b = {a / b}"); // Integer division
Console.WriteLine($"a % b = {a % b}"); // Modulus (remainder)

// Increment and Decrement Operators
int x = 5;
Console.WriteLine($"x++ = {x++}"); // Post-increment: prints 5, then x becomes 6
Console.WriteLine($"++x = {++x}"); // Pre-increment: x becomes 7, prints 7
Console.WriteLine($"x-- = {x--}"); // Post-decrement: prints 7, then x becomes 6
Console.WriteLine($"--x = {--x}"); // Pre-decrement: x becomes 5, prints 5

// Assignment Operators
int c = 5;
c += 2; // c = c + 2
Console.WriteLine($"c += 2: {c}");
c *= 3; // c = c * 3
Console.WriteLine($"c *= 3: {c}");

// Comparison Operators
Console.WriteLine($"a == b: {a == b}"); // Equal to
Console.WriteLine($"a != b: {a != b}"); // Not equal to
Console.WriteLine($"a > b: {a > b}");   // Greater than
Console.WriteLine($"a < b: {a < b}");   // Less than
Console.WriteLine($"a >= b: {a >= b}"); // Greater than or equal to
Console.WriteLine($"a <= b: {a <= b}"); // Less than or equal to

// Logical Operators
bool y = true, z = false;
Console.WriteLine($"y && z: {y && z}"); // Logical AND
Console.WriteLine($"y || z: {y || z}"); // Logical OR
Console.WriteLine($"!y: {!y}");         // Logical NOT

// Bitwise Operators
int bitA = 5; // 0101 in binary
int bitB = 3; // 0011 in binary
Console.WriteLine($"bitA & bitB: {bitA & bitB}"); // Bitwise AND
Console.WriteLine($"bitA | bitB: {bitA | bitB}"); // Bitwise OR
Console.WriteLine($"bitA ^ bitB: {bitA ^ bitB}"); // Bitwise XOR
Console.WriteLine($"~bitA: {~bitA}");             // Bitwise NOT
Console.WriteLine($"bitA << 1: {bitA << 1}");     // Left shift
Console.WriteLine($"bitA >> 1: {bitA >> 1}");     // Right shift

// Conditional (Ternary) Operator
int age = 18;
string result = (age >= 18) ? "Adult" : "Minor";
Console.WriteLine($"Ternary: {result}");

// Null-coalescing Operator
string name = null;
string displayName = name ?? "Guest";
Console.WriteLine($"Null-coalescing: {displayName}");
