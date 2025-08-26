# 03_syntax

## C# Program Syntax: Classic vs Modern

In C#, you may see two ways to write a simple program:

### 1. Classic Structure

```c#
using System;

namespace HelloWorld
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Hello World!");
		}
	}
}
```

**Key parts:**

- `using System;` — Imports the System namespace (for Console, etc.)
- `namespace` — Groups related code (like a folder for classes)
- `class` — Blueprint for objects; all code must be inside a class
- `static void Main(string[] args)` — The entry point of the program (where execution starts)

### 2. Modern (Top-level Statements)

```c#
Console.WriteLine("Hello, World!");
```

Since C# 9, you can write code directly without a class or Main method for simple programs. The compiler adds the boilerplate for you.

---

## When to Use Each Style

- **Use top-level statements** for small, simple programs, demos, or scripts.
- **Use the classic structure** for larger projects, when you need multiple classes, namespaces, or more control over the program structure.

## Why Use Top-level Statements?

They make it easier and faster to get started, especially for beginners or quick tests. For real-world apps, you'll usually use the classic structure.

## Syntax Similarities: C#, JavaScript, TypeScript

All three languages use curly braces `{}` for blocks, semicolons `;` to end statements, and similar control flow (if, for, while, etc.).

**C#:**

```c#
if (x > 0) {
	Console.WriteLine("Positive");
}
```

**JavaScript/TypeScript:**

```js
if (x > 0) {
  console.log('Positive');
}
```

---

In summary: C# lets you write quick scripts or full applications. The syntax is familiar if you know JS/TS, but C# is statically typed and usually more structured.
