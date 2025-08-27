// See https://aka.ms/new-console-template for more information
using System;

// Class demonstrating access modifiers
class Person
{
    public string Name; // Accessible everywhere
    private int age;    // Accessible only in Person
    protected string Address; // Accessible in Person and subclasses
    internal string Email;    // Accessible in the same assembly
    protected internal string Phone; // Accessible in same assembly or derived classes
    private protected string Secret; // Accessible in same class or derived classes in same assembly

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
        Address = addr; // Allowed: protected
    }
}

// Main program
class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Alice";
        p.SetAge(30);
        p.Email = "alice@example.com";
        p.Phone = "123-4567";
        Console.WriteLine($"Name: {p.Name}, Age: {p.GetAge()}, Email: {p.Email}, Phone: {p.Phone}");
    }
}
