# 36_exceptions

## Exceptions in C#

Exceptions are errors that occur during program execution. C# uses exceptions to handle and respond to runtime errors in a controlled way.

### Try-Catch Block

```csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    // Code to handle the exception
    Console.WriteLine(ex.Message);
}
```

### Finally Block

- The `finally` block runs after try/catch, whether or not an exception was thrown.

```csharp
try
{
    // Code
}
catch (Exception ex)
{
    // Handle
}
finally
{
    // Always runs
}
```

### Throwing Exceptions

```csharp
throw new Exception("Something went wrong!");
```

### Common Exception Types

- `Exception` (base type)
- `ArgumentException`
- `NullReferenceException`
- `IndexOutOfRangeException`
- `FileNotFoundException`
- `DivideByZeroException`

### Why Use Exceptions?

- To handle errors gracefully
- To separate error handling from normal code

---

For more, see [w3schools C# Exceptions](https://www.w3schools.com/cs/cs_exceptions.php).
