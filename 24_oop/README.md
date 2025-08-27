# 24_oop

## Object-Oriented Programming (OOP) in C#

OOP is a programming paradigm based on the concept of "objects", which can contain data (fields/properties) and code (methods). C# is an object-oriented language.

### Four Main Principles of OOP

- **Encapsulation**: Bundling data and methods that operate on that data within one unit (class), and restricting access to some components.
- **Abstraction**: Hiding complex implementation details and showing only the necessary features.
- **Inheritance**: Creating new classes based on existing ones, inheriting fields and methods.
- **Polymorphism**: Allowing objects to be treated as instances of their parent class, enabling one interface to be used for different types.

### Example

```csharp
// Base class
class Animal
{
    public string Name;
    public virtual void Speak()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

// Derived class
class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}

Animal myDog = new Dog { Name = "Buddy" };
myDog.Speak(); // Output: Woof!
```

---
