// See https://aka.ms/new-console-template for more information
using System;


// Main program
class Program
{
    static void Main()
    {
        // Backing field with validation
        Person p = new Person();
        p.Age = 25;
        Console.WriteLine($"Person Age: {p.Age}");
        // Uncommenting the next line will throw an exception
        // p.Age = -5;
        p.Secret = "myPassword"; // Write-only: cannot read

        // Auto-implemented property
        Car car = new Car { Brand = "Toyota", Year = 2020 };
        Console.WriteLine($"Car: {car.Brand}, {car.Year}");

        // Read-only property
        Book book = new Book("C# in Depth");
        Console.WriteLine($"Book: {book.Title}");
    }
}


// Property with backing field and validation
class Person
{
    private int age;
    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0 && value <= 120)
                age = value;
            else
                throw new ArgumentOutOfRangeException("Age must be between 0 and 120.");
        }
    }
    // Write-only property
    private string _secret;
    public string Secret
    {
        set { _secret = value; }
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
