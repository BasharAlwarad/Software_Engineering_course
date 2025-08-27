// See https://aka.ms/new-console-template for more information
using System;

// Base class
class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating...");
    }
    public virtual void Speak()
    {
        Console.WriteLine("Animal sound");
    }
}

// Derived class
class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Woof!");
    }
    public override void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}

// Another derived class
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
        Dog d = new Dog();
        d.Eat();  // Inherited from Animal
        d.Bark(); // Defined in Dog
        d.Speak(); // Overridden in Dog

        Animal a = new Cat();
        a.Speak(); // Output: Meow (polymorphism)
    }
}
