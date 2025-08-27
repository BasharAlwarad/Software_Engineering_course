# 33_interface

## Interfaces in C#

An interface defines a contract that classes can implement. It specifies what methods, properties, events, or indexers a class must provide, but not how they are implemented.

### Why Use Interfaces?

- To achieve abstraction
- To support multiple inheritance (a class can implement multiple interfaces)
- To define common behavior for unrelated classes

### Declaring and Implementing an Interface

```csharp
interface IAnimal
{
    void Speak();
}

class Dog : IAnimal
{
    public void Speak() { Console.WriteLine("Woof!"); }
}

class Cat : IAnimal
{
    public void Speak() { Console.WriteLine("Meow"); }
}

IAnimal animal = new Dog();
animal.Speak(); // Output: Woof!
```

### Multiple Interfaces

```csharp
interface IMovable { void Move(); }
interface IStoppable { void Stop(); }

class Car : IMovable, IStoppable
{
    public void Move() { Console.WriteLine("Car is moving"); }
    public void Stop() { Console.WriteLine("Car stopped"); }
}
```

---

For more, see [w3schools C# Interfaces](https://www.w3schools.com/cs/cs_interface.php).
