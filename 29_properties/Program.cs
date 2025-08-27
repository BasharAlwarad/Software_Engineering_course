// See https://aka.ms/new-console-template for more information
using System;

// Property with backing field
class Person
{
    private string name;
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}

// Auto-implemented properties
class Car
{
    public string Brand { get; set; }
    public int Year { get; set; }
}

// Read-only property
class Book
{
    public string Title { get; }
    public Book(string title)
    {
        Title = title;
    }
}

// Main program
class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Alice";
        Console.WriteLine($"Person: {p.Name}");

        Car car = new Car { Brand = "Toyota", Year = 2020 };
        Console.WriteLine($"Car: {car.Brand}, {car.Year}");

        Book book = new Book("C# in Depth");
        Console.WriteLine($"Book: {book.Title}");
    }
}
