# 23_classes

## Classes in C#

A class is a blueprint for creating objects. It defines properties (fields) and methods (functions) that describe the behavior and data of the object.

### Declaring a Class

```csharp
class Person
{
    public string Name;
    public int Age;

    public void Greet()
    {
        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
    }
}
```

### Creating Objects

```csharp
Person p = new Person();
p.Name = "Alice";
p.Age = 30;
p.Greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Why Use Classes?

- To model real-world entities
- To organize code using object-oriented programming (OOP)
- To enable code reuse and encapsulation

### Class Members

- **Fields**: Variables that hold data
- **Methods**: Functions that define behavior
- **Properties**: Special methods for getting/setting fields
- **Constructors**: Special methods for initializing objects

---
