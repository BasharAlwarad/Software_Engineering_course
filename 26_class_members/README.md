# 26_class_members

## Class Members in C#

Class members are the components that make up a class. They include fields, properties, methods, events, and constructors.

### Types of Class Members

- **Fields**: Variables that hold data for each object.
- **Properties**: Special members that provide controlled access to fields (getters/setters).
- **Methods**: Functions that define behavior or actions for the class.
- **Events**: Mechanisms for communication between objects, often used for notifications (e.g., button clicks).
- **Constructors**: Special methods called when an object is created, used to initialize fields or set up the object.

---

## Fields vs. Properties

- **Fields** are variables that store data directly. They are usually private.
- **Properties** provide a way to read, write, or compute the value of a field. They can include logic for validation or transformation.

**Example:**

```csharp
class Person
{
    // Field
    private int age;

    // Property
    public int Age
    {
        get { return age; }
        set { if (value >= 0) age = value; }
    }
}
```

---

## Methods vs. Functions

- **Method**: A function that is a member of a class (has access to class data and can be called on objects).
- **Function**: A general term for a block of code that performs a task. In C#, all functions are methods because they must belong to a class.

**Example:**

```csharp
class Calculator
{
    public int Add(int a, int b) // This is a method
    {
        return a + b;
    }
}
```

---

## Constructors

- Constructors have the same name as the class and no return type.
- They are called automatically when you create a new object.
- You can have multiple constructors (overloading) with different parameters.

**Example:**

```csharp
class Book
{
    public string Title;

    // Constructor
    public Book(string title)
    {
        Title = title;
    }
}

// Usage:
Book b = new Book("C# in Depth");
```

---

## Events

- Events allow a class to notify other classes or objects when something happens.
- Commonly used in GUI programming (e.g., button clicks).
- Declared using the `event` keyword and a delegate type.

**Example:**

```csharp
class Alarm
{
    public event Action OnRing;

    public void Ring()
    {
        Console.WriteLine("Alarm ringing!");
        OnRing?.Invoke();
    }
}

// Usage:
Alarm alarm = new Alarm();
alarm.OnRing += () => Console.WriteLine("Wake up!");
alarm.Ring();
```

---

## Full Example: Class with All Members

```csharp
class Lamp
{
    // Field
    private bool isOn;

    // Property
    public bool IsOn
    {
        get { return isOn; }
        set { isOn = value; }
    }

    // Event
    public event Action OnSwitch;

    // Constructor
    public Lamp(bool initialState)
    {
        isOn = initialState;
    }

    // Method
    public void Switch()
    {
        isOn = !isOn;
        OnSwitch?.Invoke();
    }
}

// Usage:
Lamp lamp = new Lamp(false);
lamp.OnSwitch += () => Console.WriteLine($"Lamp is now {(lamp.IsOn ? "On" : "Off")}");
lamp.Switch();
```

---
