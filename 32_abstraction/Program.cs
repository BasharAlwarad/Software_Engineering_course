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
    public override void Speak() { Console.WriteLine("Woof!"); }
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
        Animal a = new Dog();
        a.Speak(); // Output: Woof!
        a.Eat();   // Output: Eating...

        IMovable m = new Car();
        m.Move(); // Output: Car is moving
    }
}
