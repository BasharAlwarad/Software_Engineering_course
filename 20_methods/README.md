# 20_methods

## Methods in C#

A method is a block of code that performs a specific task. Methods help organize code, promote reuse, and make programs easier to read and maintain.

### Declaring and Calling Methods

```csharp
// Declaration
type MethodName(parameters)
{
    // code block
}

// Example
double Square(double x)
{
    return x * x;
}

// Calling
double result = Square(5);
Console.WriteLine(result); // 25
```

### Method Parameters and Return Values

- Methods can have zero or more parameters.
- Methods can return a value or be `void` (no return value).

### Example

```csharp
void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

Greet("Alice");
```

### Methods in Namespaces and Main

In C#, methods are usually defined inside classes, which can be inside namespaces. The `Main` method is the entry point of a C# program.

```csharp
using System;

namespace MyApp
{
    class Program
    {
        static void Main()
        {
            Greet("World");
        }

        static void Greet(string name)
        {
            Console.WriteLine($"Hello, {name}!");
        }
    }
}
```

- `namespace MyApp` groups related classes.
- `Program` is a class containing the `Main` method.
- `Main` is the entry point; it calls `Greet`.
- `Greet` is a static method in the same class.

---

### Why Use Methods?

- To avoid repeating code
- To break problems into smaller, manageable pieces
- To improve readability and maintainability
