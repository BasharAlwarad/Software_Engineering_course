# 35_files

## Working with Files in C#

C# provides classes in the `System.IO` namespace to work with files and directories. You can read, write, create, and delete files easily.

### Common Classes

- `File` and `FileInfo`: For file operations
- `StreamReader` and `StreamWriter`: For reading and writing text files
- `Directory` and `DirectoryInfo`: For directory operations

### Writing to a File

```csharp
using System.IO;
File.WriteAllText("example.txt", "Hello, file!");
```

### Reading from a File

```csharp
string content = File.ReadAllText("example.txt");
Console.WriteLine(content);
```

### Appending to a File

```csharp
File.AppendAllText("example.txt", "\nAppended line.");
```

### Reading Lines

```csharp
string[] lines = File.ReadAllLines("example.txt");
foreach (string line in lines)
{
    Console.WriteLine(line);
}
```

---

For more, see [w3schools C# Files](https://www.w3schools.com/cs/cs_files.php).
