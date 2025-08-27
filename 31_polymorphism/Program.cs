// See https://aka.ms/new-console-template for more information
using System;

// Base class
class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal sound");
    }
}

// Derived classes
class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}
class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Meow");
    }
}

// Main program
class Program
{
    static void Main()
    {
        Animal[] animals = { new Dog(), new Cat() };
        foreach (Animal a in animals)
        {
            a.Speak(); // Output: Woof! Meow
        }
    }
}
