// See https://aka.ms/new-console-template for more information
using System;

// Main program logic
class Program
{
    static void Main()
    {
        Person p1 = new Person();
        p1.Name = "Alice";
        p1.Age = 30;
        p1.Greet();

        Person p2 = new Person();
        p2.Name = "Bob";
        p2.Age = 25;
        p2.Greet();
    }
}


// Declaring a class
class Person
{
    public string Name;
    public int Age;

    public void Greet()
    {
        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
    }
}
