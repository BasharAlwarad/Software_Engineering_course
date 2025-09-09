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

## Custom Exceptions vs. Built-in Exceptions

### Built-in Exceptions

- Provided by the .NET framework (e.g., `NullReferenceException`, `DivideByZeroException`).
- Used for common error scenarios.
- Help identify specific problems in code.

### Custom Exceptions

- Defined by the developer for application-specific error cases.
- Inherit from `System.Exception` or another exception type.
- Allow you to provide more meaningful error messages and context for your application.

#### Example: Custom Exception

```csharp
public class BankAccountException : Exception
{
    public BankAccountException(string message) : base(message) { }
}
```

#### When to Use Custom Exceptions

- When built-in exceptions do not accurately describe the error.
- To provide more details or context for errors in your own classes or business logic.
- To distinguish your application's errors from system errors.

---
