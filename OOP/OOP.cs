using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace OOP
{
    public struct Person
    {
        private string name;
        public int age;

        public Person(string name = "", int age = 0)
        {
            this.name = name;
            this.age = age;
        }

        public string Name
        {
            readonly get
            {
                return name;
            }
            set
            {
                name = !string.IsNullOrEmpty(value) ? value : "Invalid name";
            }
        }

        public readonly string Person_details()
        {
            if (Name == string.Empty || Name == "Invalid name")
            {
                throw new Exception("error");
            }
            return $"name: {Name}\nage: {age}";
        }

        public readonly override string ToString()
        {
            return Person_details();
        }
    }

    public static class OOPExamples
    {
        public static void Classes()
        {
            Person john = new("john", 22);
            System.Console.WriteLine(john);
            john.age = 23;
            john.Name = "mike";
            System.Console.WriteLine(john.Person_details());
            System.Console.WriteLine(john.Name);
        }
    }
}
