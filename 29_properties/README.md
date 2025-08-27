# 29_properties

## Properties in C#

Properties are special class members that provide a flexible way to read, write, or compute the values of private fields. They are used to encapsulate data and control access.

### Declaring Properties

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

### Auto-Implemented Properties

```csharp
class Car
{
    public string Brand { get; set; }
    public int Year { get; set; }
}
```

### Read-Only and Write-Only Properties

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

### Why Use Properties?

- To control access to fields
- To add validation or logic when getting/setting values
- To encapsulate data

---
