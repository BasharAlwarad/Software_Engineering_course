// See https://aka.ms/new-console-template for more information
using System;

// Interface declaration
interface IAnimal
{
    void Speak();
}

// Implementing the interface
class Dog : IAnimal
{
    public void Speak() { Console.WriteLine("Woof!"); }
}
class Cat : IAnimal
{
    public void Speak() { Console.WriteLine("Meow"); }
}

// Multiple interfaces
interface IMovable { void Move(); }
interface IStoppable { void Stop(); }

class Car : IMovable, IStoppable
{
    public void Move() { Console.WriteLine("Car is moving"); }
    public void Stop() { Console.WriteLine("Car stopped"); }
}

// Main program
class Program
{
    static void Main()
    {
        IAnimal animal = new Dog();
        animal.Speak(); // Output: Woof!

        animal = new Cat();
        animal.Speak(); // Output: Meow

        Car car = new Car();
        car.Move();
        car.Stop();
    }
}
