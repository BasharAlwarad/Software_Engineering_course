// See https://aka.ms/new-console-template for more information
using System;
using System.IO;
using System.Text.Json;
// using System.Collections.Generic;


Console.WriteLine("Hello, World!");

// TXT CHAPTER: CRUD for index.txt
static void BasharCreateTxt(string text) => File.WriteAllText("index.txt", text);
static string ReadTxt() => File.ReadAllText("index.txt");
static void UpdateTxt(string newText) => File.WriteAllText("index.txt", newText);
static void DeleteTxt() { if (File.Exists("index.txt")) File.Delete("index.txt"); }
static void AppendTxt(string text) => File.AppendAllText("index.txt", text);

// // TXT CRUD Example
BasharCreateTxt("First line in txt file.");
Console.WriteLine($"ReadTxt: {ReadTxt()}");
AppendTxt("\nAppended line.");
Console.WriteLine($"After append: {ReadTxt()}");
UpdateTxt("Updated content in txt file.");
Console.WriteLine($"After update: {ReadTxt()}");
DeleteTxt();
Console.WriteLine($"After delete: {(File.Exists("index.txt") ? ReadTxt() : "File deleted")}");

// CSV CHAPTER: CRUD for data.csv
static void CreateCsv(string csv) => File.WriteAllText("data.csv", csv);
static string ReadCsv() => File.ReadAllText("data.csv");
static void UpdateCsv(string newCsv) => File.WriteAllText("data.csv", newCsv);
static void DeleteCsv() { if (File.Exists("data.csv")) File.Delete("data.csv"); }
static void AppendCsv(string row) => File.AppendAllText("data.csv", "\n" + row);

// CSV CRUD Example
CreateCsv("Name,Age\nAlice,30");
Console.WriteLine($"ReadCsv: {ReadCsv()}");
AppendCsv("Bob,25");
Console.WriteLine($"After append: {ReadCsv()}");
UpdateCsv("Name,Age\nCharlie,22");
Console.WriteLine($"After update: {ReadCsv()}");
DeleteCsv();
Console.WriteLine($"After delete: {(File.Exists("data.csv") ? ReadCsv() : "File deleted")}");


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


// JSON CRUD Example
var people = new List<Person> { new Person { Name = "Alice", Age = 30 },new Person { Name = "John", Age = 25 } };
CreateJson(people);
Console.WriteLine($"ReadJson: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
AppendJson(new Person { Name = "Bob", Age = 40 });
Console.WriteLine($"After append: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
UpdateJson(new List<Person> { new Person { Name = "Charlie", Age = 22 } });
Console.WriteLine($"After update: {string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}"))}");
DeleteJson();
Console.WriteLine($"After delete: {(File.Exists("person.json") ? string.Join(", ", ReadJson().ConvertAll(p => $"{p.Name}:{p.Age}")) : "File deleted")}");


// Person class for JSON example
public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}
