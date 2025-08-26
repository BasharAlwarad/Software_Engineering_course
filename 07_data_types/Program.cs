
// Integral types (stack, fixed size)
int age = 30; // 32-bit signed integer
byte b = 255; // 8-bit unsigned integer (0-255)
short s = -1000; // 16-bit signed integer
long big = 123456789L; // 64-bit signed integer
uint u = 42U; // 32-bit unsigned integer
ulong ul = 99UL; // 64-bit unsigned integer
ushort us = 65000; // 16-bit unsigned integer
char letter = 'A'; // 16-bit Unicode character

// Floating-point types (stack, may lose precision)
double pi = 3.14; // 64-bit double-precision
float temp = 36.6f; // 32-bit single-precision
decimal money = 9.99m; // 128-bit high-precision (heap)

// Boolean type (stack)
bool isOpen = true;

// Reference types (heap, can be null)
string name = "John"; // reference to string object on heap
object o = "anything"; // can hold any type
int[] numbers = {1, 2, 3}; // array on heap
Person person = new Person(); // class instance on heap

// Corner cases
// int overflow
// int maxInt = 2147483647 + 1; // Uncommenting this will cause overflow

// to avoid the error use checked()
// try
// {
//     int maxInt = checked(2147483647 + 1); // This will throw an OverflowException
// }
// catch (OverflowException)
// {
//     Console.WriteLine("Overflow occurred!");
// }

// float/double precision loss
// use specialized libraries such as System.Numerics.BigInteger
// or third party library such as BigDecimal
// Avoid equality checks with floating-point
double d = 1.0 / 3.0; // 0.333333...
// decimal d = 1.0m / 3.0m;

// Null reference error
string sNull = null;
Console.WriteLine($"sNull: {sNull}");
// Console.WriteLine(s.Length); // Uncommenting this will throw NullReferenceException

Console.WriteLine($"int: {age}, byte: {b}, short: {s}, long: {big}, uint: {u}, ulong: {ul}, ushort: {us}, char: {letter}");
Console.WriteLine($"double: {pi}, float: {temp}, decimal: {money}");
Console.WriteLine($"bool: {isOpen}");
Console.WriteLine($"string: {name}, object: {o}");
Console.WriteLine($"array: {{ {string.Join(", ", numbers)} }}");
Console.WriteLine($"class: {person}");
Console.WriteLine($"double precision loss: {d}");

// Example class for reference type
class Person {}
