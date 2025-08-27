# 30_inheritance

## Inheritance in C#

Inheritance allows you to create a new class (derived class) based on an existing class (base class). The derived class inherits fields and methods from the base class and can add its own members or override base members.

### Why Use Inheritance?

- To promote code reuse
- To model "is-a" relationships
- To enable polymorphism

### Declaring Inheritance

```csharp
class Animal
{
    public void Eat() { Console.WriteLine("Eating..."); }
}

class Dog : Animal
{
    public void Bark() { Console.WriteLine("Woof!"); }
}
```

### Example

```csharp
Dog d = new Dog();
d.Eat();  // Inherited from Animal
d.Bark(); // Defined in Dog
```

### Overriding Methods

```csharp
class Animal
{
    public virtual void Speak() { Console.WriteLine("Animal sound"); }
}
class Cat : Animal
{
    public override void Speak() { Console.WriteLine("Meow"); }
}
Animal a = new Cat();
a.Speak(); // Output: Meow
```

---

For more, see [w3schools C# Inheritance](https://www.w3schools.com/cs/cs_inheritance.php).
