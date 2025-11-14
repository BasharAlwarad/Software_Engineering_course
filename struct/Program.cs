using System;

class Program
{
	static void Main()
	{
		// Creating and using a struct
		Point p1 = new Point(2, 3);
		p1.Print(); // Point(X=2, Y=3)

		// Copying a struct produces a separate copy (value semantics)
		Point p2 = p1; // copy
		p2.Translate(5, 0);
		Console.WriteLine("After translating p2:");
		p1.Print(); // still Point(X=2, Y=3)
		p2.Print(); // Point(X=7, Y=3)

		// Immutable struct
		ImmutablePoint ip = new ImmutablePoint(10, 20);
		Console.WriteLine($"ImmutablePoint: X={ip.X}, Y={ip.Y}");

		Console.WriteLine("Struct examples complete.");
	}
}
