# Structs (C# Lecture)

This lecture covers C# `struct` types: what they are, when to use them, common pitfalls, and a focused comparison with `class`.

## Overview

- A `struct` is a value type that holds data directly. It's best for small, lightweight types that have value semantics (for example, a 2D point or a color).
- Structs are copied on assignment and when passed to methods (unless passed by `ref`/`out`).

## When to use structs

- Small data-only types (typically a few primitive fields).
- Types that are logically values and should be copied rather than shared.
- Prefer immutable structs (`readonly struct`) to avoid surprising copies and bugs.

Avoid structs for large mutable objects or types that require inheritance or identity.

## Declaring structs

```csharp
struct Point
{
    public int X { get; set; }
    public int Y { get; set; }
    public Point(int x, int y) { X = x; Y = y; }
}

readonly struct ImmutablePoint
{
    public int X { get; }
    public int Y { get; }
    public ImmutablePoint(int x, int y) { X = x; Y = y; }
}
```

## Key behaviors

- Copy semantics: assigning one struct to another copies the data.
- Passing: structs are passed by value by default; use `ref`/`out` to pass by reference.
- Interfaces & boxing: a struct implementing an interface will be boxed when cast to that interface, causing a heap allocation.
- Default constructor: structs have an implicit parameterless constructor that zero-initializes fields.

### Example: copy semantics

```csharp
Point p1 = new Point(2, 3);
Point p2 = p1; // copy
p2.X = 10; // p1.X == 2, p2.X == 10
```

### Passing by reference vs by value

```csharp
void IncrementAge(PersonStruct p) { p.Age++; } // modifies only local copy
void IncrementAgeRef(ref PersonStruct p) { p.Age++; } // modifies caller's instance
```

## Best practices

- Keep structs small (a few fields) and prefer immutability.
- Use `readonly struct` and readonly properties when possible.
- Avoid mutating structs exposed via properties or stored in collections.
- Be mindful of boxing costs when using interfaces or `object` APIs.

## Class vs Struct (Chapter)

**Value vs Reference:**

- `struct` is a value type (copied on assignment/pass).
- `class` is a reference type (variables hold references to heap objects).

**Memory & allocation:**

- Structs are often allocated inline or on the stack; classes are allocated on the heap (GC-managed).

**Copy semantics vs aliasing:**

- Assigning a struct copies its data; assigning a class variable copies the reference (both refer to the same object).

**Inheritance & polymorphism:**

- Classes support inheritance and virtual dispatch; structs cannot inherit from custom types but can implement interfaces.

**Constructors & defaults:**

- Structs have an implicit parameterless constructor that zero-initializes fields; class instances default to `null` until constructed.

**Boxing cost:**

- Converting a struct to `object` or an interface type causes boxing (heap allocation) and should be avoided in hot paths.

**When to choose which:**

- Use structs for small, immutable, value-like types (e.g., `Point`, `Color`).
- Use classes for objects with identity, large state, or when inheritance/polymorphism is required.

### Compact comparison table

| Aspect        |                               Struct | Class            |
| ------------- | -----------------------------------: | ---------------- |
| Type category |                           Value type | Reference type   |
| Copying       |                          Copies data | Copies reference |
| Inheritance   |           No (implements interfaces) | Yes              |
| Default value |            Zero-initialized instance | null             |
| Boxing        | Occurs when cast to object/interface | N/A              |

## Examples (see `Program.cs`)

- `Point` — mutable small struct to demonstrate copy semantics.
- `ImmutablePoint` — `readonly struct` demonstrating immutability.
