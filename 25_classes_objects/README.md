# 25_classes_objects

## Classes and Objects in C#

A class is a blueprint for creating objects. An object is an instance of a class. Classes define the structure and behavior, while objects hold actual data.

### Declaring a Class

```csharp
class Car
{
    public string Brand;
    public int Year;

    public void Honk()
    {
        Console.WriteLine($"{Brand} goes beep!");
    }
}
```

### Creating Objects

```csharp
Car myCar = new Car();
myCar.Brand = "Toyota";
myCar.Year = 2020;
myCar.Honk(); // Output: Toyota goes beep!
```

### Multiple Objects

```csharp
Car car1 = new Car { Brand = "Ford", Year = 2018 };
Car car2 = new Car { Brand = "BMW", Year = 2022 };
car1.Honk();
car2.Honk();
```

### Why Use Classes and Objects?

- To model real-world entities
- To organize code and data
- To enable code reuse and encapsulation

---

For more, see [w3schools C# Classes and Objects](https://www.w3schools.com/cs/cs_classes_objects.php).
