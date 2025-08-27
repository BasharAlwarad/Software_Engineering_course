# 27_constructors

## Constructors in C#

A constructor is a special method that is called automatically when an object is created. It is used to initialize the object's data.

### Declaring a Constructor

- The constructor has the same name as the class.
- It does not have a return type (not even void).

### Example

```csharp
class Person
{
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

Person p = new Person("Alice", 30);
Console.WriteLine($"{p.Name}, {p.Age}"); // Output: Alice, 30
```

### Default and Overloaded Constructors

- If you do not define a constructor, C# provides a default one.
- You can overload constructors by defining multiple constructors with different parameters.

### Example: Overloaded Constructors

```csharp
class Car
{
    public string Brand;
    public int Year;

    // Default constructor
    public Car() { }

    // Overloaded constructor
    public Car(string brand, int year)
    {
        Brand = brand;
        Year = year;
    }
}

Car car1 = new Car();
Car car2 = new Car("Toyota", 2020);
```

---

For more, see [w3schools C# Constructors](https://www.w3schools.com/cs/cs_constructors.php).
