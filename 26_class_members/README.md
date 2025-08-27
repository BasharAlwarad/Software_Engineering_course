# 26_class_members

## Class Members in C#

Class members are the components that make up a class. They include fields, properties, methods, and events.

### Types of Class Members

- **Fields**: Variables that hold data.
- **Properties**: Special methods for getting and setting field values.
- **Methods**: Functions that define behavior.
- **Events**: Mechanisms for communication between objects.
- **Constructors**: Special methods for initializing objects.

### Example

```csharp
class Book
{
    // Field
    private string title;

    // Property
    public string Title
    {
        get { return title; }
        set { title = value; }
    }

    // Method
    public void PrintTitle()
    {
        Console.WriteLine($"Title: {Title}");
    }
}
```

### Using Class Members

```csharp
Book myBook = new Book();
myBook.Title = "C# in Depth";
myBook.PrintTitle(); // Output: Title: C# in Depth
```

---
