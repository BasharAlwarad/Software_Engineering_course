// See https://aka.ms/new-console-template for more information
using System;

// Base class demonstrating encapsulation and abstraction
class Animal
{
    public string Name;
    public virtual void Speak()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

// Derived class demonstrating inheritance and polymorphism
class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}

// Main program
class Program
{
    static void Main()
    {
        Animal myDog = new Dog { Name = "Buddy" };
        myDog.Speak(); // Output: Woof!
    }
}
