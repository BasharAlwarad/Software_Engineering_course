# 28_access_modifiers

## Access Modifiers in C#

Access modifiers control the visibility and accessibility of classes, methods, and members. They help enforce encapsulation and protect data.

### Types of Access Modifiers

- **public**: Accessible from anywhere.
- **private**: Accessible only within the same class.
- **protected**: Accessible within the same class and by derived classes.
- **internal**: Accessible within the same assembly (project).
- **protected internal**: Accessible within the same assembly or by derived classes.
- **private protected**: Accessible within the same class or derived classes in the same assembly.

### Example

```csharp
class Person
{
    public string Name; // Accessible everywhere
    private int age;    // Accessible only in Person
    protected string Address; // Accessible in Person and subclasses
    internal string Email;    // Accessible in the same assembly

    public void SetAge(int a)
    {
        age = a;
    }

    public int GetAge()
    {
        return age;
    }
}
```

---
