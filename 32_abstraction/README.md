# 32_abstraction

## Abstraction in C#

Abstraction means hiding complex implementation details and showing only the necessary features. In C#, abstraction is achieved using abstract classes and interfaces.

### Why Use Abstraction?

- To reduce complexity
- To focus on what an object does instead of how it does it

### Abstract Classes

- Cannot be instantiated directly
- Can have abstract (no implementation) and non-abstract members

```csharp
abstract class Animal
{
    public abstract void Speak(); // Abstract method
    public void Eat() { Console.WriteLine("Eating..."); } // Non-abstract method
}

class Dog : Animal
{
    public override void Speak() { Console.WriteLine("Woof!"); }
}

Animal a = new Dog();
a.Speak(); // Output: Woof!
a.Eat();   // Output: Eating...
```

### Interfaces

- Define a contract (what must be done)
- Cannot have implementation (until C# 8 default interface methods)

```csharp
interface IMovable
{
    void Move();
}

class Car : IMovable
{
    public void Move() { Console.WriteLine("Car is moving"); }
}

IMovable m = new Car();
m.Move(); // Output: Car is moving
```

---

For more, see [w3schools C# Abstraction](https://www.w3schools.com/cs/cs_abstract.php).
