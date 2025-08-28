// See https://aka.ms/new-console-template for more information
using System;


// Main program
class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Alice"; // public: accessible everywhere
        p.SetAge(30);      // private: must use public method
        p.Email = "alice@example.com"; // internal: accessible in same project
        p.Phone = "123-4567"; // protected internal: accessible in same project
        // p.Address and p.Secret are not accessible here
        Console.WriteLine($"Name: {p.Name}, Age: {p.GetAge()}, Email: {p.Email}, Phone: {p.Phone}");

        Student s = new Student();
        s.Name = "Bob";
        s.SetAddress("123 Main St"); // protected: accessible via method in derived class
    }
}

// Class demonstrating access modifiers
class Person
{
    public string Name; // Accessible everywhere (public)
    private int age;    // Accessible only in Person (private)
    protected string Address; // Accessible in Person and subclasses (protected)
    internal string Email;    // Accessible in the same assembly (internal)
    protected internal string Phone; // Accessible in same assembly or derived classes (protected internal)
    private protected string Secret; // Accessible in same class or derived classes in same assembly (private protected)

    // Why use private? To protect data and enforce encapsulation.
    public void SetAge(int a)
    {
        age = a;
    }

    public int GetAge()
    {
        return age;
    }
}

// Derived class to show protected access
class Student : Person
{
    public void SetAddress(string addr)
    {
        // Why use protected? Allows derived classes to access base class members.
        Address = addr; // Allowed: protected
    }
}
