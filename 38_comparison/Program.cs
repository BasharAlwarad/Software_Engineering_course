class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- Section 1: Value vs Reference Types ---");
        // Value type example
        int a = 5;
        int b = a;
        b++;
        Console.WriteLine($"Value types: a={a}, b={b}"); // a=5, b=6

        // Reference type example
        int[] arr1 = { 1, 2, 3 };
        int[] arr2 = arr1;
        arr2[0] = 99;
        Console.WriteLine($"Reference types: arr1[0]={arr1[0]}, arr2[0]={arr2[0]}"); // both 99

        // Memory handling
        // "Value types are stored on the stack, reference types on the heap.";
        // "Use value types for small, simple data. Use reference types for objects and collections.";

        Console.WriteLine("--- Section 2: Enumerations and Structs ---");
        // Enum example
        Day today = Day.Monday;
        Console.WriteLine($"Enum value: {today}");

        // Struct example
        Point p1 = new Point(1, 2);
        Point p2 = p1;
        p2.X = 10;
        Console.WriteLine($"Structs: p1.X={p1.X}, p2.X={p2.X}"); // p1.X=1, p2.X=10

        // Memory handling
        // "Enums and structs are value types, stored on the stack.";
        // "Use enums for named constants, structs for small data objects.";

        Console.WriteLine("--- Section 3: Records, Classes, and Interfaces ---");
        // Record example
        Person r1 = new Person("Alice", 30);
        Person r2 = r1 with { Age = 31 };
        Console.WriteLine($"Records: r1={r1}, r2={r2}");

        // Class example
        Student s1 = new Student { Name = "Bob", Age = 20 };
        Student s2 = s1;
        s2.Age = 21;
        Console.WriteLine($"Classes: s1.Age={s1.Age}, s2.Age={s2.Age}"); // both 21

        // Interface example
        IGreeter greeter = new Student { Name = "Charlie", Age = 22 };
        greeter.Greet();

        // Memory handling
        // "Records, classes, and interfaces are reference types, stored on the heap.";
        // "Use records for immutable data, classes for general objects, interfaces for abstraction.";

    }
}

// Section 2: Enum and Struct
public enum Day { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday }
public struct Point {
    public int X;
    public int Y;
    public Point(int x, int y) { X = x; Y = y; }
}

// Section 3: Record, Class, Interface
public record Person(string Name, int Age);
public class Student : IGreeter {
    public string Name { get; set; }
    public int Age { get; set; }
    public void Greet() => Console.WriteLine($"Hello, I'm {Name} and I'm {Age} years old.");
}
public interface IGreeter {
    void Greet();
}