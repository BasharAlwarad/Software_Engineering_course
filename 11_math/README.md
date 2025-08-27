# 11_math

## Math in C#

C# provides a rich set of mathematical operations and functions through the `System.Math` class.

### Basic Arithmetic

You can use standard operators for addition (+), subtraction (-), multiplication (\*), division (/), and modulus (%).

### Math Methods

The `Math` class provides many useful methods:

- `Math.Abs(x)` — Absolute value
- `Math.Max(a, b)` — Maximum of two values
- `Math.Min(a, b)` — Minimum of two values
- `Math.Sqrt(x)` — Square root
- `Math.Pow(x, y)` — x raised to the power y
- `Math.Round(x)` — Rounds to nearest integer
- `Math.Floor(x)` — Rounds down
- `Math.Ceiling(x)` — Rounds up
- `Math.Sign(x)` — Returns the sign of a number
- `Math.Truncate(x)` — Removes the fractional part
- `Math.Log(x)` — Natural logarithm
- `Math.Log10(x)` — Base-10 logarithm
- `Math.Exp(x)` — e raised to the power x
- `Math.Sin(x)`, `Math.Cos(x)`, `Math.Tan(x)` — Trigonometric functions (input in radians)

### Example

```csharp
int a = 5, b = 2;
Console.WriteLine(a + b); // 7
Console.WriteLine(a - b); // 3
Console.WriteLine(a * b); // 10
Console.WriteLine(a / b); // 2
Console.WriteLine(a % b); // 1

Console.WriteLine(Math.Max(a, b)); // 5
Console.WriteLine(Math.Sqrt(16)); // 4
Console.WriteLine(Math.Pow(2, 3)); // 8
Console.WriteLine(Math.Round(3.6)); // 4
```

---
