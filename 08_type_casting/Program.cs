// See https://aka.ms/new-console-template for more information
using System;

// Implicit casting example
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
Console.WriteLine($"Implicit casting: int {myInt} to double {myDouble}");

// Explicit casting example
myDouble = 9.78;
myInt = (int)myDouble; // Manual casting: double to int
Console.WriteLine($"Explicit casting: double 9.78 to int {myInt}");

// Using Convert class
int anotherInt = 10;
double anotherDouble = 5.25;
bool myBool = true;
Console.WriteLine($"Convert.ToString(anotherInt): {Convert.ToString(anotherInt)}");
Console.WriteLine($"Convert.ToDouble(anotherInt): {Convert.ToDouble(anotherInt)}");
Console.WriteLine($"Convert.ToInt32(anotherDouble): {Convert.ToInt32(anotherDouble)}");
Console.WriteLine($"Convert.ToString(myBool): {Convert.ToString(myBool)}");
