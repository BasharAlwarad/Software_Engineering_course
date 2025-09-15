# Unit Testing in C# with xUnit

## Lecture Overview

Unit testing verifies that small, isolated pieces of code (units) work as expected. In .NET, xUnit is a popular, open-source framework for writing and running tests. This lecture demonstrates:

- Why unit testing matters
- How to structure projects for testing
- How to write and run tests for real code examples

## Why Unit Testing?

- **Confidence:** Catch bugs early by verifying your code does what you expect.
- **Refactoring safety:** Tests act as a safety net when you change code.
- **Documentation:** Tests show how code is intended to be used.

## Project Structure

In .NET, projects are organized inside a solution (`.sln`). It's common to keep your tests in a dedicated project next to your application project.

**Example layout:**

```
MySolution/
  MyApp/                # Application project
  Program.cs
  A_MathUtils.cs
  B_StringTools.cs
  C_Inventory.cs
  D_Point.cs
  E_TemperatureConverter.cs
  F_Notifier.cs
  MyApp.Tests/          # Test project (xUnit)
  A_Equality_and_boolean_checks.cs
  B_Equality_and_boolean_checks.cs
  C_Collections_contains_order_counts.cs
  D_Reference_vs_value_equality.cs
  E_Ranges_prefixes_null_checks.cs
  F_Event_subscription_assertions.cs
  MySolution.sln        # Solution file
```

**Setup commands:**

```bash
mkdir -p MySolution && cd MySolution
dotnet new console -o MyApp
dotnet new xunit -o MyApp.Tests
dotnet new sln -n MySolution
dotnet sln MySolution.sln add MyApp/MyApp.csproj
dotnet sln MySolution.sln add MyApp.Tests/MyApp.Tests.csproj
dotnet add MyApp.Tests/MyApp.Tests.csproj reference MyApp/MyApp.csproj
```

## Example Classes and Their Tests

### A. MathUtils

testing the `Average` method to ensure it correctly calculates the average of a list of integers, and properly handles invalid input (null or empty sequences).

This test case demonstrates:

- How to check for correct results (expected average)
- How to verify that exceptions are thrown for invalid input
- The importance of validating edge cases and error handling

**Class:**

```csharp
public static class A_MathUtils {
  public static double Average(IEnumerable<int> values) { /* ... */ }
}
```

**Test:**

```csharp
[Fact]
public void Average_Throws_OnNullOrEmpty() {
  Assert.Throws<ArgumentNullException>(() => A_MathUtils.Average(null!));
  Assert.Throws<ArgumentException>(() => A_MathUtils.Average(Array.Empty<int>()));
}
[Fact]
public void Average_ReturnsExpected() {
  var result = A_MathUtils.Average(new[] { 2, 4, 6 });
  Assert.Equal(4.0, result, precision: 5);
}
```

### B. StringTools

Testing string manipulation methods: reversing a string and checking if a string is a palindrome.

This test case demonstrates:

- How to verify correct output for string operations
- How to use parameterized tests to check multiple inputs
- The value of testing both positive and negative cases

**Class:**

```csharp
public static class B_StringTools {
  public static string Reverse(string s) { /* ... */ }
  public static bool IsPalindrome(string s) { /* ... */ }
}
```

**Test (B_Equality_and_boolean_checks.cs):**

```csharp
[Fact]
public void Reverse_ReturnsExpected() {
  Assert.Equal("cba", B_StringTools.Reverse("abc"));
  Assert.NotEqual("abc", B_StringTools.Reverse("abc"));
}
[Theory]
[InlineData("racecar", true)]
[InlineData("RaceCar", true)]
[InlineData("hello", false)]
public void IsPalindrome_Works(string input, bool expected) {
  Assert.Equal(expected, B_StringTools.IsPalindrome(input));
  Assert.IsType<bool>(B_StringTools.IsPalindrome(input));
}
```

### C. Inventory

Testing the ability to add items to an inventory, retrieve them in the correct order, and remove items.

This test case demonstrates:

- How to verify collection contents and order
- How to check for presence and absence of items
- The importance of testing state changes and retrieval

**Class:**

```csharp
public sealed class C_Inventory {
  public void Add(string item) { /* ... */ }
  public bool Remove(string item) { /* ... */ }
  public IReadOnlyList<string> GetAll() { /* ... */ }
}
```

**Test (C_Collections_contains_order_counts.cs):**

```csharp
[Fact]
public void AddAndGetAll_ContainsItems_InOrder() {
  var inv = new C_Inventory();
  inv.Add("apple");
  inv.Add("banana");
  var all = inv.GetAll();
  Assert.Equal(2, all.Count);
  Assert.Contains("apple", all);
  Assert.Collection(all,
    first => Assert.Equal("apple", first),
    second => Assert.Equal("banana", second));
}

[Fact]
public void Remove_Item_RemovesSuccessfully() {
  var inv = new C_Inventory();
  inv.Add("apple");
  Assert.True(inv.Remove("apple"));
  Assert.DoesNotContain("apple", inv.GetAll());
}
```

### D. Point

testing record types for value equality and reference equality.

This test case demonstrates:

- The difference between value equality (records with same data) and reference equality (same object)
- How C# records behave in comparisons
- The importance of understanding equality semantics in .NET

**Class:**

```csharp
public record D_Point(int X, int Y);
```

**Test:**

```csharp
[Fact]
public void Records_CompareByValue_ButReferencesDiffer() {
  var a = new D_Point(1, 2);
  var b = new D_Point(1, 2);
  Assert.Equal(a, b);          // value equality
  Assert.NotSame(a, b);        // different references
  var c = a;
  Assert.Same(a, c);           // same reference
}
```

### E. TemperatureConverter

testing the conversion from Celsius to Fahrenheit for known values and value ranges.

This test case demonstrates:

- How to verify mathematical calculations
- How to use range assertions for floating-point results
- The value of testing with both specific and general cases

**Class:**

```csharp
public static class E_TemperatureConverter {
  public static double CelsiusToFahrenheit(double c) { /* ... */ }
}
```

**Test:**

```csharp
[Theory]
[InlineData(0, 32)]
[InlineData(100, 212)]
public void CelsiusToFahrenheit_KnownPoints(double c, double f) {
  Assert.Equal(f, E_TemperatureConverter.CelsiusToFahrenheit(c), precision: 5);
}
[Fact]
public void CelsiusToFahrenheit_InRange() {
  var f = E_TemperatureConverter.CelsiusToFahrenheit(20);
  Assert.InRange(f, 67.9, 68.1);
}
```

### F. Notifier

testing event subscription and notification behavior.

This test case demonstrates:

- How to verify that events are raised and handled correctly
- How to test event unsubscription and ensure handlers do not receive notifications
- The importance of testing event-driven code for reliability

**Class:**

```csharp
public class F_Notifier {
  public event EventHandler<string>? MessagePublished;
  public void Publish(string message) { /* ... */ }
}
```

**Test:**

```csharp
[Fact]
public void Publish_RaisesMessagePublishedEvent() {
  var notifier = new F_Notifier();
  string? received = null;
  notifier.MessagePublished += (s, msg) => received = msg;
  notifier.Publish("Hello");
  Assert.Equal("Hello", received);
}
[Fact]
public void Unsubscribe_Handler_DoesNotReceiveEvent() {
  var notifier = new F_Notifier();
  string? received = null;
  EventHandler<string> handler = (s, msg) => received = msg;
  notifier.MessagePublished += handler;
  notifier.MessagePublished -= handler;
  notifier.Publish("Hello");
  Assert.Null(received);
}
```

## Test Attributes

- `[Fact]`: Marks a simple test with no parameters.
- `[Theory]`: Marks a test that runs with multiple data sets.
- `[InlineData]`: Provides values for a `[Theory]` test.
- `Assert.*`: Verifies outcomes (Equal, True, Throws, etc.).

## Running Tests

Run from the solution root or test project folder:

```bash
dotnet test
```

This builds both projects and runs all tests, showing a summary of results.

## Common xUnit Assertions

- `Assert.Equal(expected, actual)`
- `Assert.NotEqual(expected, actual)`
- `Assert.True(condition)`
- `Assert.False(condition)`
- `Assert.Throws<T>(action)`
- `Assert.Contains(item, collection)`
- `Assert.Collection(collection, ...)`
- `Assert.Same(expected, actual)`
- `Assert.NotSame(expected, actual)`
- `Assert.InRange(value, min, max)`
- `Assert.StartsWith(prefix, string)`
- `Assert.EndsWith(suffix, string)`
- `Assert.NotNull(object)`

## Summary

- Place tests in a separate project (e.g., `MyApp.Tests`).
- Reference the app project from the test project.
- Use `[Fact]` for simple tests, `[Theory]` for parameterized ones.
- Run with `dotnet test` to verify all tests.
