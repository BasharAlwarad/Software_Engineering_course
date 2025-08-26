# 04_output

## Output in C#: Console.WriteLine and More

### What is Console?

`Console` is a class in the `System` namespace that lets you interact with the command line (terminal). You use it to display output and read input in console applications.

### Output Methods

- `Console.WriteLine()` — Prints text and moves to a new line.
- `Console.Write()` — Prints text and stays on the same line.
- `Console.WriteLine($"...")` — Supports string interpolation.
- `Console.WriteLine("{0}", value)` — Supports composite formatting.

### Escape Sequences

You can use special characters in strings:

- `\n` — New line
- `\t` — Tab
- `\\` — Backslash
- `\"` — Double quote

### Examples

```c#
Console.WriteLine("Hello, World!"); // Prints with a new line
Console.Write("Hello, ");
Console.Write("World!"); // Continues on the same line
Console.WriteLine(); // Prints just a new line
Console.WriteLine("Line1\nLine2"); // New line in output
Console.WriteLine("Column1\tColumn2"); // Tab in output
Console.WriteLine($"The answer is {42}"); // String interpolation
Console.WriteLine("She said, \"Hi!\""); // Double quotes in output
```

---

Use these methods to control how your program displays information to the user.
