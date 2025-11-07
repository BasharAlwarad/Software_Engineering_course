using System;
using System.Collections.Generic;

namespace CollectionExamples
{
    public static class DictionaryExample
    {
        public static void Run()
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

            // More dictionary methods
            Console.WriteLine("\nBasic dictionary methods demo:");
            Dictionary<string, int> counts = new Dictionary<string, int>();
            counts["apple"] = 3; // add or set
            counts.Add("banana", 5);
            Console.WriteLine($"ContainsKey 'apple'? {counts.ContainsKey("apple")} ");
            if (counts.TryGetValue("banana", out int bCount))
            {
                Console.WriteLine($"TryGetValue 'banana': {bCount}");
            }
            else
            {
                Console.WriteLine("TryGetValue 'banana': not found");
            }

            Console.WriteLine("Iterating keys and values separately:");
            foreach (var key in counts.Keys)
            {
                Console.WriteLine($"Key: {key}");
            }
            foreach (var val in counts.Values)
            {
                Console.WriteLine($"Value: {val}");
            }

            Console.WriteLine("Remove 'apple':");
            counts.Remove("apple");
            Console.WriteLine($"After Remove, ContainsKey 'apple'? {counts.ContainsKey("apple")} ");
            Console.WriteLine($"Count: {counts.Count}");
        }
    }
}