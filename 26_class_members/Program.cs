// See https://aka.ms/new-console-template for more information
using System;


// Main program
class Program
{
    static void Main()
    {
        // Field vs. Property
        Person p = new Person();
        p.Age = 25;
        Console.WriteLine($"Person age (property): {p.Age}");

        // Method example
        Calculator calc = new Calculator();
        Console.WriteLine($"Add method: {calc.Add(2, 3)}");

        // Constructor example
        Book myBook = new Book("C# in Depth");
        myBook.PrintTitle();

        // Event example
        Alarm alarm = new Alarm();
        alarm.OnRing += () => Console.WriteLine("Wake up!");
        alarm.Ring();

        // Class with all members
        Lamp lamp = new Lamp(false);
        lamp.OnSwitch += () => Console.WriteLine($"Lamp is now {(lamp.IsOn ? "On" : "Off")}");
        lamp.Switch();
    }
}

// Example: Field vs. Property
class Person
{
    // Field
    private int age;

    // Property
    public int Age
    {
        get { return age; }
        set { if (value >= 0) age = value; }
    }
}

// Example: Method (all functions in C# are methods)
class Calculator
{
    public int Add(int a, int b) // Method
    {
        return a + b;
    }
}

// Example: Constructor
class Book
{
    public string Title;

    // Constructor
    public Book(){    }
    public Book(string title)
    {
        Title = title;
    }

    // Method
    public void PrintTitle()
    {
        Console.WriteLine($"Title: {Title}");
    }
}

// Example: Event
class Alarm
{
    public event Action OnRing;

    public void Ring()
    {
        Console.WriteLine("Alarm ringing!");
        OnRing?.Invoke();
    }
}

// Example: Class with all members
class Lamp
{
    private bool isOn;
    public bool IsOn
    {
        get { return isOn; }
        set { isOn = value; }
    }
    public event Action OnSwitch;
    public Lamp(bool initialState)
    {
        isOn = initialState;
    }
    public void Switch()
    {
        isOn = !isOn;
        OnSwitch?.Invoke();
    }
}
