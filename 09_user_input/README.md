# 09_user_input

## Handling User Input in C#

C# provides several ways to get input from the user in the terminal:

### 1. Console.ReadLine()

Reads a whole line as a string.

```csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();
```

### 2. Console.Read()

Reads the next character from the input stream (returns its ASCII code as int).

```csharp
Console.Write("Press any key: ");
int charCode = Console.Read();
char character = (char)charCode;
Console.WriteLine($"You pressed: {character}");
```

### 3. Console.ReadKey()

Reads a single key press and returns a ConsoleKeyInfo object.

```csharp
Console.Write("Press any key: ");
ConsoleKeyInfo keyInfo = Console.ReadKey();
Console.WriteLine($"\nYou pressed: {keyInfo.KeyChar}");
```

---

## Changing Data Types

- Use `int.Parse()` to convert a string to an integer.
- Use `double.Parse()` to convert a string to a double.
- You can use other methods like `bool.Parse()`, `DateTime.Parse()`, etc.
- Use `TryParse()` for safer conversion.

---

## Live Example

See `Program.cs` for working examples of all input methods and type conversions.

---

## Summary Table

| Method             | Reads          | Returns        | Use Case               |
| ------------------ | -------------- | -------------- | ---------------------- |
| Console.ReadLine() | Whole line     | string         | General input          |
| Console.Read()     | Next character | int (ASCII)    | Single char, buffer    |
| Console.ReadKey()  | Key press      | ConsoleKeyInfo | Menus, passwords, keys |
