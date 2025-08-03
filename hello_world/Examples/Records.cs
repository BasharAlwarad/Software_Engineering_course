using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;


namespace Hello_World.Examples
{
    class Records
    {
        public static void RecordsDetails()
        {
            System.Console.WriteLine("Hello!");
            Record1 r1a = new(First_name: "John", Last_name: "Doe");
            Record1 r1b = new(First_name: "John", Last_name: "Doe");
            Record1 r1c = new(First_name: "Jane", Last_name: "Jackson");

            Class1 c1a = new(First_name: "John", Last_name: "Doe");
            Class1 c1b = new(First_name: "John", Last_name: "Doe");
            Class1 c1c = new(First_name: "Jane", Last_name: "Jackson");


            System.Console.WriteLine(value: "Record Type");
            System.Console.WriteLine(value: $"To Sting:{r1a}");
            System.Console.WriteLine(value: $"are they equal: {Equals(r1a, r1b)}");
            System.Console.WriteLine(value: $"double equal: {r1a == r1b}");
            System.Console.WriteLine(value: $"!= not equal: {r1a != r1b}");
            System.Console.WriteLine(value: $"ReferenceEquals: {ReferenceEquals(r1a, r1b)}");
            System.Console.WriteLine(value: $"Has code for r1a: {r1a.GetHashCode()}");
            System.Console.WriteLine(value: $"Has code for r1b: {r1b.GetHashCode()}");
            System.Console.WriteLine(value: $"Has code for r1c: {r1c.GetHashCode()}");
            System.Console.WriteLine();
            System.Console.WriteLine(value: "##################################");
            System.Console.WriteLine();
            System.Console.WriteLine(value: "Class Type");
            System.Console.WriteLine(value: $"To Sting:{c1a}");
            System.Console.WriteLine(value: $"are they equal: {Equals(c1a, c1b)}");
            System.Console.WriteLine(value: $"double equal: {c1a == c1b}");
            System.Console.WriteLine(value: $"!= not equal: {c1a != c1b}");
            System.Console.WriteLine(value: $"ReferenceEquals: {ReferenceEquals(c1a, c1b)}");
            System.Console.WriteLine(value: $"Has code for c1a: {c1a.GetHashCode()}");
            System.Console.WriteLine(value: $"Has code for c1b: {c1b.GetHashCode()}");
            System.Console.WriteLine(value: $"Has code for c1c: {c1c.GetHashCode()}");
            System.Console.WriteLine();
            System.Console.WriteLine(value: "##################################");
            System.Console.WriteLine();
            var (r_fn, r_ln) = r1a;
            var (c_fn, c_ln) = c1a;
            System.Console.WriteLine($"the value of r_fn {r_fn} || the value of r_ln {r_ln}");
            System.Console.WriteLine($"the value of c_fn {c_fn} || the value of c_ln {c_ln}");

            Record1 r1d = r1a with { First_name = "Mike"};
            System.Console.WriteLine(r1d);
            System.Console.WriteLine(value: "##################################");
            System.Console.WriteLine();

            Record2 r2a = new(First_name: "John", Last_name: "Doe");
            System.Console.WriteLine(value: $"To Sting:{r2a}");
            System.Console.WriteLine(value: $"r2a First_name:{r2a.First_name}");
            System.Console.WriteLine(value: $"r2a full name:{r2a.FullName}");
            System.Console.WriteLine();
            System.Console.WriteLine(value: "############## inherit record####################");
            System.Console.WriteLine();
            User1 u1a = new(Id: 123, First_name: "John", Last_name: "Doe");
            System.Console.WriteLine($"u1a: {u1a}");

        }

        public record Record1(string First_name, string Last_name);
        public record Record2(string First_name, string Last_name)
        {
            internal string First_name { get; init; } = First_name;
            public string FullName{ get => $"{First_name} {Last_name}"; }
        }

        public record User1(int Id, string First_name, string Last_name): Record1(First_name,Last_name);


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