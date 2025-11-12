# 35_files

## Files as a Simple Database — Lecture: File I/O in C#

This lecture walks students through working with files in C# using three common formats: TXT, CSV, and JSON. Each chapter includes a short explanation, the minimal CRUD helper methods (as used in `35_files/Program.cs`), and a small usage example.

Learning goals:

- Understand simple file read/write operations in .NET
- Implement basic CRUD patterns using files as a lightweight data store
- Know when to prefer TXT, CSV, or JSON for small applications

---

## Chapter 1 — TXT (Plain Text)

What this chapter is about

- TXT files are unstructured plain text. They're great for notes, logs, or storing a single blob of text. The code below demonstrates simple create/read/update/append/delete operations using System.IO helpers.

Example helper methods (from `Program.cs`):

```csharp
// TXT CHAPTER: CRUD for index.txt
static void CreateTxt(string text) => File.WriteAllText("index.txt", text);
static string ReadTxt() => File.ReadAllText("index.txt");
static void UpdateTxt(string newText) => File.WriteAllText("index.txt", newText);
static void DeleteTxt() { if (File.Exists("index.txt")) File.Delete("index.txt"); }
static void AppendTxt(string text) => File.AppendAllText("index.txt", text);

// TXT CRUD Example usage
CreateTxt("First line in txt file.");
Console.WriteLine($"ReadTxt: {ReadTxt()}");
AppendTxt("\nAppended line.");
Console.WriteLine($"After append: {ReadTxt()}");
UpdateTxt("Updated content in txt file.");
Console.WriteLine($"After update: {ReadTxt()}");
DeleteTxt();
Console.WriteLine($"After delete: {(File.Exists("index.txt") ? ReadTxt() : "File deleted")}");
```

### StreamWriter example (explicit dispose)

When you need buffered writing, control over encoding, or you want to append efficiently to a file while ensuring resources are released even on errors, use a StreamWriter. The snippet below shows the explicit dispose pattern using try/finally (you can prefer a `using` statement for conciseness):

```csharp
var writer = new StreamWriter("log.txt", append: true);
try
{
    writer.WriteLine($"Log entry at {DateTime.Now}");
}
finally
{
    // Make sure it's disposed even if an error occurs
    if (writer != null)
    {
        writer.Dispose();
    }
}
```

When to use StreamWriter

- Use `StreamWriter` when you need buffered writes (better performance for many writes).
- Use the `append: true` parameter to add to existing files instead of overwriting.
- Prefer `using (var writer = new StreamWriter(...)) { ... }` which automatically disposes the writer.
- For high-throughput or asynchronous scenarios, consider `StreamWriter` with async methods (e.g., `WriteLineAsync`) and `await using` in async contexts.

---

## Chapter 2 — CSV (Comma-Separated Values)

What this chapter is about

- CSV is a simple tabular format useful for spreadsheets and simple row/column data. The example below shows writing a CSV header and rows, reading the file, appending a row, updating the entire file, and deleting it.

Example helper methods (from `Program.cs`):

```csharp
// CSV CHAPTER: CRUD for data.csv
static void CreateCsv(string csv) => File.WriteAllText("data.csv", csv);
static string ReadCsv() => File.ReadAllText("data.csv");
static void UpdateCsv(string newCsv) => File.WriteAllText("data.csv", newCsv);
static void DeleteCsv() { if (File.Exists("data.csv")) File.Delete("data.csv"); }
static void AppendCsv(string row) => File.AppendAllText("data.csv", "\n" + row);

// CSV CRUD Example usage
CreateCsv("Name,Age\nAlice,30");
Console.WriteLine($"ReadCsv: {ReadCsv()}");
AppendCsv("Bob,25");
Console.WriteLine($"After append: {ReadCsv()}");
UpdateCsv("Name,Age\nCharlie,22");
Console.WriteLine($"After update: {ReadCsv()}");
DeleteCsv();
Console.WriteLine($"After delete: {(File.Exists("data.csv") ? ReadCsv() : "File deleted")}");
```

---

## Chapter 3 — JSON (Structured data)

What this chapter is about

- JSON is ideal for structured, nested data. In C# we can use System.Text.Json (or Newtonsoft.Json) to serialize/deserialize objects to files. The example below shows CRUD helper methods working with a list of `Person` objects stored in `person.json`.

Example helper methods and data model (from `Program.cs`):

```csharp
using System.Text.Json;

// JSON CHAPTER: CRUD for person.json
static void CreateJson(List<Person> people)
{
    string json = JsonSerializer.Serialize(people);
    File.WriteAllText("person.json", json);
}
static List<Person> ReadJson()
{
    if (!File.Exists("person.json")) return new List<Person>();
    string json = File.ReadAllText("person.json");
    return JsonSerializer.Deserialize<List<Person>>(json) ?? new List<Person>();
}
static void UpdateJson(List<Person> people)
{
    string json = JsonSerializer.Serialize(people);
    File.WriteAllText("person.json", json);
}
static void DeleteJson() { if (File.Exists("person.json")) File.Delete("person.json"); }
static void AppendJson(Person person)
{
    var people = ReadJson();
    people.Add(person);
    UpdateJson(people);
}

// Person class for JSON example
public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}

// JSON CRUD Example usage
var people = new List<Person> { new Person { Name = "Alice", Age = 30 }, new Person { Name = "John", Age = 25 } };
CreateJson(people);
Console.WriteLine($"ReadJson: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
AppendJson(new Person { Name = "Bob", Age = 40 });
Console.WriteLine($"After append: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
UpdateJson(new List<Person> { new Person { Name = "Charlie", Age = 22 } });
Console.WriteLine($"After update: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
DeleteJson();
Console.WriteLine($"After delete: {(File.Exists("person.json") ? string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}")) : "File deleted")}");
```

---
