# 12_strings

## Strings in C#

A string is a sequence of characters used to represent text. In C#, strings are objects of the `System.String` class and offer many useful methods.

### Declaring and Initializing Strings

```csharp
string greeting = "Hello, World!";
string name = "Alice";
```

### String Concatenation

```csharp
string fullGreeting = greeting + " My name is " + name + ".";
```

### String Interpolation

```csharp
string message = $"Hello, {name}!";
```

### Common String Methods

- `Length` — Gets the number of characters
- `ToUpper()`, `ToLower()` — Changes case
- `Contains()` — Checks for substring
- `IndexOf()` — Finds the position of a substring
- `Substring(start, length)` — Extracts part of the string
- `Replace(old, new)` — Replaces text
- `Trim()` — Removes whitespace from both ends
- `Split()` — Splits string into an array
- `StartsWith()`, `EndsWith()` — Checks start/end

### Example

```csharp
string s = "  Hello, C#!  ";
Console.WriteLine(s.Length); // 13
Console.WriteLine(s.Trim()); // "Hello, C#!"
Console.WriteLine(s.ToUpper()); // "  HELLO, C#!  "
Console.WriteLine(s.Contains("C#")); // True
Console.WriteLine(s.Replace("C#", "World")); // "  Hello, World!  "
```

---
