# 36_exceptions

## Exceptions in C# — expanded lecture with examples

Exceptions are runtime errors that the CLR signals using objects derived from `System.Exception`. Use exceptions to capture and handle unexpected conditions cleanly, separate error handling logic from normal logic, and provide meaningful messages to callers or logs.

Below are common patterns and concrete examples taken from `Program.cs` in this folder. Each example shows the code pattern and a short explanation of what it does and what output to expect.

### 1) Basic try / catch

Use a `try` block to wrap code that may fail and a `catch` block to handle specific exception types.

Example (division by zero):

```csharp
try
{
    int x = 10;
    int y = 0;
    int z = x / y; // Throws DivideByZeroException
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

What happens: the division throws `DivideByZeroException`. The `catch` prints the error message instead of crashing the program.

### 2) try / catch / finally

The `finally` block always runs whether or not an exception was thrown — useful for cleanup.

Example (array access):

```csharp
try
{
    string[] arr = { "a", "b" };
    Console.WriteLine(arr[2]); // Throws IndexOutOfRangeException
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine($"Index error: {ex.Message}");
}
finally
{
    Console.WriteLine("Finally block always runs.");
}
```

Expected output (conceptually):

- A message describing the index error from the `catch` block
- Then "Finally block always runs." from the `finally` block

### 3) Throwing exceptions explicitly

You can throw exceptions to signal an error condition in your code or to enforce preconditions.

Example:

```csharp
if (user != "John")
{
    throw new FileNotFoundException("Access denied: you are not John!");
}
```

Note: Throwing `FileNotFoundException` for access control is just an example from `Program.cs`; choose semantically correct exception types (e.g., `UnauthorizedAccessException` or custom exceptions) in real code.

### 4) NullReferenceException

Accessing members on `null` will throw `NullReferenceException`:

```csharp
try
{
    string s = null;
    Console.WriteLine(s.Length); // Throws NullReferenceException
}
catch (NullReferenceException ex)
{
    Console.WriteLine($"Null reference error: {ex.Message}");
}
```

### 5) Catching the base `Exception`

You can catch `Exception` to handle unexpected errors, but prefer catching specific exceptions to avoid hiding bugs.

```csharp
try
{
    throw new Exception("General system exception!");
}
catch (Exception ex)
{
    Console.WriteLine($"System exception: {ex.Message}");
}
```

### 6) ApplicationException

`ApplicationException` can be used for non-fatal application-level errors — however, it's not commonly extended in modern .NET. Custom exceptions inheriting from `Exception` are often preferred.

```csharp
try
{
    throw new ApplicationException("Application exception occurred!");
}
catch (ApplicationException ex)
{
    Console.WriteLine($"Application exception: {ex.Message}");
}
```

### 7) Custom exceptions — BankAccount example (from `Program.cs`)

Custom exceptions make application-specific error cases explicit and allow callers to handle them separately.

`Program.cs` defines two custom exceptions and a `BankAccount` class. The exceptions:

```csharp
public class BankAccountException : Exception
{
    public BankAccountException(string message) : base(message) { }
}

public class JulienException : Exception
{
    public JulienException(string message) : base(message) { }
}
```

`BankAccount` and how it's used:

```csharp
public class BankAccount
{
    public decimal Balance { get; private set; }
    public BankAccount(decimal initialBalance)
    {
        Balance = initialBalance;
    }
    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
            throw new BankAccountException("Insufficient funds.");
        Balance -= amount;
    }
    public void Add(decimal amount, string name)
    {
        System.Console.WriteLine(amount + Balance);
    }
}
```

Usage from `Main` (simplified):

```csharp
public static void Main()
    {
        try
{
    BankAccount account = new BankAccount(100);
    account.Withdraw(50);
    account.Add(5, "John");
    account.Withdraw(100);
}
catch (BankAccountException ex)
{
    Console.WriteLine($"BankAccount error: {ex.Message}");
}
    }
```

### 8) StackOverflowException (unbounded recursion)

`StackOverflowException` occurs when the execution stack overflows, typically due to unbounded recursion or extremely deep call chains. Important runtime note: in modern .NET the runtime will typically terminate the process when a `StackOverflowException` occurs — it is not reliably catchable with a `try/catch` block. Because of that, you should avoid letting this happen and apply defensive programming instead of relying on catching it.

Example (DO NOT run in production — this will crash the process):

```csharp
// Warning: the following recursive method will cause a StackOverflowException
// by endlessly calling itself. The process will likely terminate.
void CauseStackOverflow()
{
    CauseStackOverflow();
}
// Calling it will overflow the stack:
// CauseStackOverflow();
```

Why this is dangerous:

- The runtime cannot reliably recover from a `StackOverflowException`.
- A `try/catch` around the call will not prevent process termination in most cases.

Safer alternatives and mitigations:

- Replace deep recursion with an iterative algorithm where possible (use loops or an explicit stack data structure).
- Add recursion depth checks and throw a controlled exception (e.g., `InvalidOperationException`) before you hit the system stack limit:

```csharp
void SafeRecursive(int depth, int maxDepth)
{
    if (depth > maxDepth)
        throw new InvalidOperationException("Recursion depth exceeded safe limit");
    // recursive work
    SafeRecursive(depth + 1, maxDepth);
}
```

- Where appropriate, redesign algorithms to be tail-recursive only if you can guarantee tail-call optimization (C# does not guarantee it), or better, use iterative approaches.

Use these preventative patterns rather than relying on catching `StackOverflowException`.

### Edge cases and best practices

- Prefer specific exception types in `catch` blocks (avoid catching `Exception` unless you need a last-resort handler).
- Use `finally` for deterministic cleanup (closing streams, releasing handles).
- Don't use exceptions for control flow — they're expensive compared to regular checks.
- Throw exceptions that accurately represent the error (semantic types make handling easier).
