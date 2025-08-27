# 13_booleans

## Booleans in C#

A boolean (`bool`) is a data type that can hold one of two values: `true` or `false`. Booleans are commonly used for logical operations, conditions, and control flow.

### Declaring Booleans

```csharp
bool isActive = true;
bool isComplete = false;
```

### Boolean Expressions

Boolean values are often the result of comparisons or logical operations:

```csharp
int a = 5, b = 10;
bool result = a < b; // true
```

### Logical Operators

- `&&` (AND)
- `||` (OR)
- `!` (NOT)

### Example

```csharp
bool x = true;
bool y = false;
Console.WriteLine(x && y); // False
Console.WriteLine(x || y); // True
Console.WriteLine(!x);     // False
```

### Booleans in Conditions

Booleans are used in `if`, `while`, and other control statements:

```csharp
if (isActive)
{
    Console.WriteLine("Active!");
}
```

---
