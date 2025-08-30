// See https://aka.ms/new-console-template for more information
using System;

// Abstract class example
abstract class Animal
{
    public abstract void Speak(); // Abstract method
    public void Eat() { Console.WriteLine("Eating..."); } // Non-abstract method
}

class Dog : Animal
{
    // Property with private setter
    public string Name { get; private set; }
    public Dog(string name) { Name = name; }
    public override void Speak() { Console.WriteLine($"{Name} says Woof!"); }
}

// Interface example
interface IMovable
{
    void Move();
}

class Car : IMovable
{
    public void Move() { Console.WriteLine("Car is moving"); }
}

// Main program
class Program
{
    static void Main()
    {
        Animal a = new Dog("Buddy");
        a.Speak(); // Output: Buddy says Woof!
        a.Eat();   // Output: Eating...

        // Accessing property with private setter
        Dog d = new Dog("Max");
        Console.WriteLine(d.Name); // Output: Max
        // d.Name = "Charlie"; // Error: set is private

        IMovable m = new Car();
        m.Move(); // Output: Car is moving
    }
}
