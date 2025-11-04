# 28_access_modifiers

## Full Example

```csharp
class Person
{
    public string Name; // Anyone can access
    private int age;    // Only Person can access
    protected string Address; // Person and subclasses
    internal string Email;    // Same project
    protected internal string Phone; // Same project or subclasses
    private protected string Secret; // Same class or subclasses in same project

    public void SetAge(int a) { age = a; }
    public int GetAge() { return age; }
}

class Student : Person
{
    public void SetAddress(string addr) { Address = addr; } // Allowed
}

// Usage
Person p = new Person();
p.Name = "Alice";
p.SetAge(30);
p.Email = "alice@example.com";
p.Phone = "123-4567";
// p.Address, p.Secret are not accessible here
```

## Access Modifiers in C#

Access modifiers control the visibility and accessibility of classes, methods, and members. They help enforce encapsulation and protect data.

### Types of Access Modifiers (with Explanations and Examples)

#### public

- Accessible from anywhere in your code and from other assemblies.
- When you want a member to be available to all other code, such as APIs or libraries.
- Enables sharing and reusing code across projects.

```csharp
public string Name;
// Example: Anyone can access or modify Name
```

#### private

- Accessible only within the same class.
- When you want to hide implementation details and protect data from outside changes.
- Supports encapsulation and prevents accidental misuse.

```csharp
private int age;
// Example: Only methods inside the class can access age
```

#### protected

- Accessible within the same class and by derived (child) classes.
- When you want to allow subclasses to use or modify a member, but not outside code.
- Supports inheritance and code reuse while keeping data hidden from unrelated code.

```csharp
protected string Address;
// Example: Only Person and classes that inherit from Person can access Address
```

#### internal

- Accessible anywhere in the same assembly (project), but not from other assemblies.
- When you want to share code within a project but hide it from outside consumers.
- Helps organize code and control visibility in larger solutions.

```csharp
internal string Email;
// Example: Any code in the same project can access Email
```

#### protected internal

- Accessible within the same assembly or by derived classes in other assemblies.
- When you want to allow access for subclasses and for code in the same project.
- Provides flexible access for inheritance and internal collaboration.

```csharp
protected internal string Phone;
// Example: Accessible in the same project or by subclasses elsewhere
```

#### private protected

- Accessible within the same class or derived classes, but only if they are in the same assembly.
- When you want to restrict access to subclasses within the same project only.
- Offers fine-grained control for advanced encapsulation scenarios.

```csharp
private protected string Secret;
// Example: Only Person and its subclasses in the same project can access Secret
```

---

## Why Access Modifiers?

Access modifiers were created to support encapsulation, a core principle of object-oriented programming. They help you:

- Hide implementation details
- Protect data from accidental or malicious changes
- Expose only what is necessary for other code to use
- Organize and maintain large codebases

---
