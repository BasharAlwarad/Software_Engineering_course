# 02_get_started

## Getting Started with C#

### 1. Installing the Tools

- Install the [.NET SDK](https://dotnet.microsoft.com/download)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- In VS Code, install the official C# extension (by Microsoft)

### 2. Creating Your First C# Project

Open a terminal and run:

```bash
dotnet new console -o HelloWorld
cd HelloWorld
code .
```

### 3. Exploring the Project Structure

- `Program.cs`: Main code file (entry point)
- `<project>.csproj`: Project configuration file

### 4. Running Your First Program

In the project folder, run:

```bash
dotnet run
```

You should see:

```text
Hello, World!
```

### 5. Editing and Re-running

Open `Program.cs`, change the message, save, and run `dotnet run` again to see your changes.

### 6. Troubleshooting

- If you get `dotnet: command not found`, make sure the .NET SDK is installed and added to your PATH.
- If VS Code doesn't recognize C#, check that the C# extension is installed.

### 7. Quick Comparison: Hello World

**C#:**

```c#
Console.WriteLine("Hello, World!");
```

**Python:**

```python
print("Hello, World!")
```

**JavaScript:**

```js
console.log('Hello, World!');
```

**TypeScript:**

```ts
console.log('Hello, World!');
```

---

You are now ready to start coding in C#!
