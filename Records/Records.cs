using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace Records
{
    class RecordsExamples
    {
        public static void RecordsDetails()
        {
            System.Console.WriteLine("=== Records vs Classes Comparison ===\n");
            
            Record1 r1a = new(First_name: "John", Last_name: "Doe");
            Record1 r1b = new(First_name: "John", Last_name: "Doe");
            Record1 r1c = new(First_name: "Jane", Last_name: "Jackson");

            Class1 c1a = new(First_name: "John", Last_name: "Doe");
            Class1 c1b = new(First_name: "John", Last_name: "Doe");
            Class1 c1c = new(First_name: "Jane", Last_name: "Jackson");

            System.Console.WriteLine("Record Type:");
            System.Console.WriteLine($"ToString: {r1a}");
            System.Console.WriteLine($"Are they equal: {Equals(r1a, r1b)}");
            System.Console.WriteLine($"== operator: {r1a == r1b}");
            System.Console.WriteLine($"!= operator: {r1a != r1b}");
            System.Console.WriteLine($"ReferenceEquals: {ReferenceEquals(r1a, r1b)}");
            System.Console.WriteLine($"Hash code for r1a: {r1a.GetHashCode()}");
            System.Console.WriteLine($"Hash code for r1b: {r1b.GetHashCode()}");
            System.Console.WriteLine($"Hash code for r1c: {r1c.GetHashCode()}");
            
            System.Console.WriteLine("\n##################################\n");
            
            System.Console.WriteLine("Class Type:");
            System.Console.WriteLine($"ToString: {c1a}");
            System.Console.WriteLine($"Are they equal: {Equals(c1a, c1b)}");
            System.Console.WriteLine($"== operator: {c1a == c1b}");
            System.Console.WriteLine($"!= operator: {c1a != c1b}");
            System.Console.WriteLine($"ReferenceEquals: {ReferenceEquals(c1a, c1b)}");
            System.Console.WriteLine($"Hash code for c1a: {c1a.GetHashCode()}");
            System.Console.WriteLine($"Hash code for c1b: {c1b.GetHashCode()}");
            System.Console.WriteLine($"Hash code for c1c: {c1c.GetHashCode()}");
            
            System.Console.WriteLine("\n##################################\n");
            
            // Deconstruction
            var (r_fn, r_ln) = r1a;
            var (c_fn, c_ln) = c1a;
            System.Console.WriteLine($"Record deconstruction - First: {r_fn}, Last: {r_ln}");
            System.Console.WriteLine($"Class deconstruction - First: {c_fn}, Last: {c_ln}");

            // With expression (Records only)
            Record1 r1d = r1a with { First_name = "Mike" };
            System.Console.WriteLine($"Modified record with 'with' expression: {r1d}");
            
            System.Console.WriteLine("\n##################################\n");

            // Advanced record features
            Record2 r2a = new(First_name: "John", Last_name: "Doe");
            System.Console.WriteLine($"Advanced record toString: {r2a}");
            System.Console.WriteLine($"First name: {r2a.First_name}");
            System.Console.WriteLine($"Full name: {r2a.FullName}");
            
            System.Console.WriteLine("\n############## Inherited Record ####################\n");
            
            User1 u1a = new(Id: 123, First_name: "John", Last_name: "Doe");
            System.Console.WriteLine($"Inherited record: {u1a}");
        }

        public record Record1(string First_name, string Last_name);
        
        public record Record2(string First_name, string Last_name)
        {
            internal string First_name { get; init; } = First_name;
            public string FullName { get => $"{First_name} {Last_name}"; }
        }

        public record User1(int Id, string First_name, string Last_name) : Record1(First_name, Last_name);

        public class Class1
        {
            public string First_name { get; init; }
            public string Last_Name { get; init; }
            
            public Class1(string First_name, string Last_name)
            {
                this.First_name = First_name;
                this.Last_Name = Last_name;
            }

            public void Deconstruct(out string First_name, out string Last_Name)
            {
                First_name = this.First_name;
                Last_Name = this.Last_Name;
            }
        }
    }
}
