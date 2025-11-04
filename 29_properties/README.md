# 29_properties

## Properties in C#

Properties are special class members that provide a flexible way to read, write, or compute the values of private fields. They are used to encapsulate data and control access.

---

### Fields vs. Properties

- **Fields** are variables that store data directly in a class or struct. They are usually private to enforce encapsulation.
- **Properties** provide controlled access to fields. They can include logic in their `get` and `set` accessors, and can be public, private, or protected.
- **When to use fields:** For internal data storage, especially when no logic or validation is needed.
- **When to use properties:** When you want to control how data is accessed, add validation, or expose data to other classes.

**Example:**

```csharp
class Example
{
    private int _field; // Field
    public int Property // Property
    {
        get { return _field; }
        set { _field = value; }
    }
}
```

---

### How get and set Work (In Depth)

- **get**: The accessor that returns the property value. You can add logic here (e.g., logging, transformation).
- **set**: The accessor that assigns a value. You can add validation or trigger other actions.
- You can make a property read-only (only get), write-only (only set), or have different access levels for get/set.

**Example with validation:**

```csharp
class Person
{
    private int age;
    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0 && value <= 120)
                age = value;
            else
                throw new ArgumentOutOfRangeException("Age must be between 0 and 120.");
        }
    }
}
```

---

### Types of Properties

#### 1. Backing Field Property

```csharp
class Person
{
    private string name;
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}
```

- Use when you need to add logic or validation in get/set.

#### 2. Auto-Implemented Property

```csharp
class Car
{
    public string Brand { get; set; }
    public int Year { get; set; }
}
```

- Use for simple storage when no extra logic is needed.

#### 3. Read-Only Property

```csharp
class Book
{
    public string Title { get; }
    public Book(string title)
    {
        Title = title;
    }
}
```

- Use when you want to set a value only at construction and prevent changes later.

#### 4. Write-Only Property

```csharp
class Secret
{
    private string _password;
    public string Password
    {
        set { _password = value; }
    }
}
```

- Use when you want to allow setting a value but not reading it (rare).

---

### Why Use Properties?

- To control access to fields
- To add validation or logic when getting/setting values
- To encapsulate data
- To expose data safely to other classes

---

### Summary Table: Fields vs. Properties

| Feature          | Field           | Property              |
| ---------------- | --------------- | --------------------- |
| Access Control   | Usually private | Any (public, private) |
| Logic/Validation | No              | Yes (in get/set)      |
| Data Storage     | Direct          | Via get/set           |
| Syntax           | Variable        | get/set block         |
| Encapsulation    | No              | Yes                   |

---
