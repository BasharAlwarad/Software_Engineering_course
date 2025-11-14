using System;

// Small printable interface used by struct examples
interface IPrintable { void Print(); }

// Simple struct: value type, typically used for small immutable or logically-value types
struct Point : IPrintable
{
    public int X { get; set; }
    public int Y { get; set; }

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void Translate(int dx, int dy)
    {
        X += dx;
        Y += dy;
    }

    public void Print() => Console.WriteLine($"Point(X={X}, Y={Y})");
}

// Readonly struct (immutable pattern)
readonly struct ImmutablePoint
{
    public int X { get; }
    public int Y { get; }
    public ImmutablePoint(int x, int y) { X = x; Y = y; }
}

// Small struct used for examples
struct PersonStruct
{
    public string Name { get; set; }
    public int Age { get; set; }
    public PersonStruct(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
