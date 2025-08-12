using System;
using System.Threading;

namespace StringExamples
{
    public static class StringExamplesDemo
    {
        public static void String_Examples()
        {
            Console.WriteLine("\n=== String Examples ===");
            
            // Verbatim string literal
            string speech = "He said: \"hello\"";
            string path = "https://www.google.com\\something";
            string he_said = $"{speech} the url is {path}";
            string i_said = "Is that what you said? " + $"{he_said}";
            string his_verbatim = @$"No I didn't say {path} I said: https://www.google.com\\something";
            string full_dialog = @$"""I will ask you again:"" {i_said}" + $"\n{his_verbatim}";
            Console.WriteLine(full_dialog);
            
            // String formatting and interpolation
            string name = "John";
            int age = 30;
            Console.WriteLine("String concatenation: " + name + " age: " + age);
            Console.WriteLine("String formatting: name: {0}, age: {1}", name, age);
            Console.WriteLine($"String interpolation: name: {name}, age: {age}");
            
            // String manipulation
            string[] names = new string[] { "John ", "Jane " };
            Console.WriteLine($"Concatenated: {string.Concat(names)}");
            Console.WriteLine($"Contains John: {string.Concat(names).Contains("John")}");
            
            // Reverse string with animation
            if (!string.IsNullOrEmpty(name))
            {
                Console.Write("Reversing name: ");
                for (int i = name.Length - 1; i >= 0; i--)
                {
                    Console.Write(name[i]);
                    if (name[i].Equals('J'))
                        Console.WriteLine($" (Found J at position {i})");
                    Thread.Sleep(250);
                }
                Console.WriteLine();
            }
        }
    }
}
