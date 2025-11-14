# Records (C# Lecture)

A `record` is a concise way to define an immutable, value-like reference type (or value type with `record struct`) that focuses on data and equality.

## Key points (very short)

- Records provide value-based equality by default (two records with the same data are equal).
- Use `record` for simple data-carrying types where immutability and structural equality are useful.
- You can create positional records for brevity or full records for more control.

## Examples

Positional record:

```csharp
public record Person(string FirstName, string LastName);

var p1 = new Person("Sam", "Lee");
var p2 = new Person("Sam", "Lee");
Console.WriteLine(p1 == p2); // True (value equality)
```

With-expression (copy with modification):

```csharp
var p3 = p1 with { LastName = "Smith" };
```

Record struct (value-type record):

```csharp
public record struct Point(int X, int Y);
```

## When to use

- Use records for DTOs, messages, or simple data models where equality and immutability matter.
- Use classes when you need identity, complex lifecycle, or inheritance-based polymorphism.
