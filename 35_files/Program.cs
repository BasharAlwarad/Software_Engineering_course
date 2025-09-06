// See https://aka.ms/new-console-template for more information
using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

Console.WriteLine("Hello, World!");

// TXT CHAPTER: CRUD for index.txt
static void CreateTxt(string text) => File.WriteAllText("index.txt", text);
static string ReadTxt() => File.ReadAllText("index.txt");
static void UpdateTxt(string newText) => File.WriteAllText("index.txt", newText);
static void DeleteTxt() { if (File.Exists("index.txt")) File.Delete("index.txt"); }
static void AppendTxt(string text) => File.AppendAllText("index.txt", text);

// CSV CHAPTER: CRUD for data.csv
static void CreateCsv(string csv) => File.WriteAllText("data.csv", csv);
static string ReadCsv() => File.ReadAllText("data.csv");
static void UpdateCsv(string newCsv) => File.WriteAllText("data.csv", newCsv);
static void DeleteCsv() { if (File.Exists("data.csv")) File.Delete("data.csv"); }
static void AppendCsv(string row) => File.AppendAllText("data.csv", "\n" + row);

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
