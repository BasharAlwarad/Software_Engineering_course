// See https://aka.ms/new-console-template for more information
using System;

// Class with constructors
class Person
{
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

// Class with default and overloaded constructors
class Car
{
    public string Brand;
    public int Year;

    // Default constructor
    public Car() { }

    // Overloaded constructor
    public Car(string brand, int year)
    {
        Brand = brand;
        Year = year;
    }
}

// Main program
class Program
{
    static void Main()
    {
        Person p = new Person("Alice", 30);
        Console.WriteLine($"{p.Name}, {p.Age}");

        Car car1 = new Car();
        Car car2 = new Car("Toyota", 2020);
        Console.WriteLine($"car2: {car2.Brand}, {car2.Year}");
    }
}
