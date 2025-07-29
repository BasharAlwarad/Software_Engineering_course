using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Hello_World.Examples
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
            // return base.ToString();
        }

        // arrow functions for getter and setters
        /*
        public void SetName(string name) => this.name = !string.IsNullOrEmpty(name) ? name : "Invalid name";
        public readonly string GetName() => this.name;
        */

        // getters and setters
        /*
        public void SetName(string name)
        {
            this.name = !string.IsNullOrEmpty(name) ? name : "Invalid name";
        }
        // public readonly string GetName()
        // {
        //     return this.name;
        // }
        */
    }

    public static class OOP
    {
        public static void Classes()
        {
            Person john = new("john", 22);
            System.Console.WriteLine(john);
            john.age = 23;
            john.Name = "mike";
            // john.SetName("");
            // john.name = "John";
            // john.age = 33;
            // System.Console.WriteLine(john.name);
            // john = CreatePerson();
            // john.Name = "";
            System.Console.WriteLine(john.Person_details());
            System.Console.WriteLine(john.Name);
            // Create_person_from_input();
        }

        // static Person CreatePerson()
        // {
        //     Person newPerson;
        //     System.Console.Write("Inter your name: ");
        //     // string? inputName = Console.ReadLine();
        //     // newPerson.name = Console.ReadLine() ?? string.Empty;
        //     newPerson.name = Console.ReadLine() ?? "";

        //     System.Console.Write("Inter your age: ");
        //     newPerson.age = Convert.ToInt32(Console.ReadLine());

        //     return newPerson;
            
        // }

        // Dictionary to store multiple persons with custom variable names
        // private static Dictionary<string, Person> people = new Dictionary<string, Person>();

        // public static void Create_person_from_input()
        // {
        //     Console.Write("Enter a variable name for this person: ");
        //     string? variableName = Console.ReadLine();
            
        //     // Handle null or empty input for variable name
        //     while (string.IsNullOrWhiteSpace(variableName))
        //     {
        //         Console.Write("Please enter a valid variable name: ");
        //         variableName = Console.ReadLine();
        //     }

        //     Console.Write("Enter the person's name: ");
        //     string? inputName = Console.ReadLine();
            
        //     // Handle null or empty input for name
        //     while (string.IsNullOrWhiteSpace(inputName))
        //     {
        //         Console.Write("Please enter a valid name: ");
        //         inputName = Console.ReadLine();
        //     }
            
        //     Console.Write("Enter the person's age: ");
        //     int inputAge;
        //     while (!int.TryParse(Console.ReadLine(), out inputAge))
        //     {
        //         Console.Write("Please enter a valid age (number): ");
        //     }

        //     Person newPerson;
        //     newPerson.name = inputName;
        //     newPerson.age = inputAge;
            
        //     // Store the person with the user-defined variable name
        //     people[variableName] = newPerson;
            
        //     Console.WriteLine($"Created person '{variableName}': {newPerson.name}, Age: {newPerson.age}");
        // }

        // public static void DisplayAllPeople()
        // {
        //     Console.WriteLine("\nAll created people:");
        //     foreach (var kvp in people)
        //     {
        //         Console.WriteLine($"{kvp.Key}: {kvp.Value.name}, Age: {kvp.Value.age}");
        //     }
        // }

        // public static void AccessPersonByVariableName()
        // {
        //     Console.Write("Enter the variable name to access: ");
        //     string? varName = Console.ReadLine();
            
        //     if (!string.IsNullOrWhiteSpace(varName) && people.ContainsKey(varName))
        //     {
        //         Person person = people[varName];
        //         Console.WriteLine($"Found {varName}: {person.name}, Age: {person.age}");
        //     }
        //     else
        //     {
        //         Console.WriteLine("Person not found!");
        //     }
        // }
    }
}