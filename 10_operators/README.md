# 10_operators

## Operators in C#

### What are Operators?

Operators are special symbols or keywords that perform operations on operands (variables and values). C# includes many types of operators:

- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Comparison Operators:** `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical Operators:** `&&`, `||`, `!`
- **Bitwise Operators:** `&`, `|`, `^`, `~`, `<<`, `>>`
- **Conditional Operator:** `?:` (ternary)
- **Null-coalescing Operator:** `??`, `??=`

### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations:

```csharp
int a = 10, b = 3;
Console.WriteLine(a + b); // 13
Console.WriteLine(a - b); // 7
Console.WriteLine(a * b); // 30
Console.WriteLine(a / b); // 3
Console.WriteLine(a % b); // 1
```

### Assignment Operators

Assignment operators assign values and can combine with arithmetic:

```csharp
int c = 5;
c += 2; // c = c + 2
c *= 3; // c = c * 3
```

### Comparison Operators

Used to compare values:

```csharp
Console.WriteLine(a == b); // False
Console.WriteLine(a > b);  // True
```

### Logical Operators

Used to combine boolean expressions:

```csharp
bool x = true, y = false;
Console.WriteLine(x && y); // False
Console.WriteLine(x || y); // True
Console.WriteLine(!x);     // False
```

### Bitwise Operators

Operate on bits:

```csharp
int bitA = 5; // 0101
int bitB = 3; // 0011
Console.WriteLine(bitA & bitB); // 1
Console.WriteLine(bitA | bitB); // 7
Console.WriteLine(bitA ^ bitB); // 6
Console.WriteLine(~bitA);       // -6
Console.WriteLine(bitA << 1);   // 10
Console.WriteLine(bitA >> 1);   // 2
```

### Conditional (Ternary) Operator

Shorthand for if-else:

```csharp
int age = 18;
string result = (age >= 18) ? "Adult" : "Minor";
Console.WriteLine(result); // Adult
```

### Null-coalescing Operator

Provides a default value if null:

```csharp
string name = null;
string displayName = name ?? "Guest";
Console.WriteLine(displayName); // Guest
```
