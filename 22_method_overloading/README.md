# 22_method_overloading

## Method Overloading in C#

Method overloading allows you to define multiple methods with the same name but different parameter lists (type, number, or order of parameters). This makes your code more flexible and readable.

### Why Use Method Overloading?

- To perform similar operations with different types or numbers of inputs.
- To provide default or convenience versions of a method.

### How to Overload Methods

- Change the number of parameters.
- Change the type of parameters.
- Change the order of parameters (if types are different).

### Example

```csharp
void Print(string message)
{
    Console.WriteLine(message);
}

void Print(string message, int times)
{
    for (int i = 0; i < times; i++)
        Console.WriteLine(message);
}

void Print(int number)
{
    Console.WriteLine($"Number: {number}");
}

Print("Hello");
Print("Hi", 3);
Print(42);
```

### Notes

- The return type alone is not enough to overload a method.
- Overloading works with constructors too.

---
