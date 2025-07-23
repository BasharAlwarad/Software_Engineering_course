using System;
using System.Collections.Generic;
using System.Linq;

namespace Hello_World.Examples
{
    public static class CollectionExamples
    {
        public static void ArrayExamples()
        {
            Console.WriteLine("\n=== Array Examples ===");
            
            // Array input
            int amount = 4;
            int[] numbers = new int[amount];
            Console.WriteLine("Enter 4 numbers:");
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"Number {i + 1}: ");
                numbers[i] = Convert.ToInt32(Console.ReadLine());
            }

            Console.WriteLine("Your numbers:");
            foreach (var num in numbers)
            {
                Console.WriteLine(num);
            }
            
            // Array methods
            int[] sample_numbers = new int[] { 1, 3, 6, 4, 5, 2 };
            Console.WriteLine($"Original array: [{string.Join(", ", sample_numbers)}]");
            Array.Sort(sample_numbers);
            Console.WriteLine($"Sorted array: [{string.Join(", ", sample_numbers)}]");
            Array.Reverse(sample_numbers);
            Console.WriteLine($"Reversed array: [{string.Join(", ", sample_numbers)}]");
            Console.WriteLine($"Index of 1: {Array.IndexOf(sample_numbers, 1)}");
            
            // Lists comparison
            int[] arr_numbers = new int[3] { 1, 2, 3 };
            List<int> list_numbers = new List<int>() { 1, 2, 3 };
            Console.WriteLine($"Array length: {arr_numbers.Length}");
            Console.WriteLine($"List count: {list_numbers.Count}");
        }

        public static void DictionaryExamples()
        {
            Console.WriteLine("\n=== Dictionary Examples ===");
            
            // Dictionary with int keys
            Dictionary<int, string> id_names = new Dictionary<int, string>
            {
                {1, "John"},
                {2, "Jane"},
            };
            
            Console.WriteLine("Dictionary with int keys:");
            foreach (KeyValuePair<int, string> item in id_names)
            {
                Console.WriteLine($"ID: {item.Key}, Name: {item.Value}");
            }
            
            // Dictionary with string keys
            Dictionary<string, string> language_names = new Dictionary<string, string>
            {
                {"python", "john"},
                {"js", "jane"},
                {"c#", "mike"},
            };

            Console.WriteLine("\nDictionary with string keys:");
            Console.Write("Looking for 'python': ");
            if (language_names.TryGetValue("python", out string? name))
            {
                Console.WriteLine($"Found: {name}");
            }
            else
            {
                Console.WriteLine("Not found");
            }
            
            Console.Write("Looking for 'pthon' (typo): ");
            if (language_names.TryGetValue("pthon", out string? typo_name))
            {
                Console.WriteLine($"Found: {typo_name}");
            }
            else
            {
                Console.WriteLine("Not found (this demonstrates the typo issue)");
            }
        }
    }
}
