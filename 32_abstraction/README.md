# 32_abstraction

Abstraction means hiding complex implementation details and showing only the necessary features. In C#, abstraction is achieved using abstract classes and interfaces.

### Why Use Abstraction?

- To reduce complexity
- To focus on what an object does instead of how it does it

### Abstract Classes

- Cannot be instantiated directly
- Can have abstract (no implementation) and non-abstract members

````csharp
abstract class Animal
{
    public abstract void Speak(); // Abstract method
    public void Eat() { Console.WriteLine("Eating..."); } // Non-abstract method

### Abstract Classes

- Cannot be instantiated directly
- Can have abstract (no implementation) and non-abstract members
- Used when you want to provide a common base with some shared code and some required overrides

```csharp
abstract class Animal
{
    public abstract void Speak(); // Abstract method
    public void Eat() { Console.WriteLine("Eating..."); } // Non-abstract method
}

class Dog : Animal
{
    // Property with private setter (encapsulation)
    public string Name { get; private set; }
    public Dog(string name) { Name = name; }
    public override void Speak() { Console.WriteLine($"{Name} says Woof!"); }
}

// Usage
Animal a = new Dog("Buddy");
a.Speak(); // Output: Buddy says Woof!
a.Eat();   // Output: Eating...

Dog d = new Dog("Max");
Console.WriteLine(d.Name); // Output: Max
// d.Name = "Charlie"; // Error: set is private
````

#### When/Why/How to Use Abstract Classes

- Use when you want to force derived classes to implement certain methods, but also provide shared code.
- Abstract classes can have both abstract and concrete (implemented) members.
- You cannot create an instance of an abstract class directly.

---

### Encapsulation with `{ get; private set; }`

- Properties with a private setter allow read-only access from outside the class, but can be set from within the class.
- This is useful for protecting the integrity of the data while still allowing it to be set during construction or by class methods.

```csharp
public string Name { get; private set; }
public Dog(string name) { Name = name; }
```

// Usage
Dog d = new Dog("Max");
Console.WriteLine(d.Name); // Output: Max
// d.Name = "Charlie"; // Error: set is private

}

    public override void Speak() { Console.WriteLine("Woof!"); }

}

Animal a = new Dog();
a.Speak(); // Output: Woof!
a.Eat(); // Output: Eating...

````

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
````

---
