# 31_polymorphism

## Polymorphism in C#

Polymorphism means "many forms". In C#, it allows you to use a single interface to represent different types of objects. The most common use is with method overriding in inheritance.

### Why Use Polymorphism?

- To write flexible and reusable code
- To treat objects of different classes in a uniform way

### Example: Method Overriding

```csharp
class Animal
{
    public virtual void Speak() { Console.WriteLine("Animal sound"); }
}
class Dog : Animal
{
    public override void Speak() { Console.WriteLine("Woof!"); }
}
class Cat : Animal
{
    public override void Speak() { Console.WriteLine("Meow"); }
}

Animal[] animals = { new Dog(), new Cat() };
foreach (Animal a in animals)
{
    a.Speak(); // Output: Woof! Meow
}
```

### Types of Polymorphism

- **Compile-time (static)**: Method overloading, operator overloading
- **Run-time (dynamic)**: Method overriding (as shown above)

---

For more, see [w3schools C# Polymorphism](https://www.w3schools.com/cs/cs_polymorphism.php).
