using System;
using System.Collections.Generic;

namespace CollectionExamples
{
    public static class ListExample
    {
        public static void Run()
        {
            Console.WriteLine("\n=== List<T> Examples ===");

            // Creating lists
            List<int> numbers = new List<int>();
            Console.WriteLine("Add numbers 1,2,3 to list using Add():");
            numbers.Add(1);
            numbers.Add(2);
            numbers.Add(3);
            Console.WriteLine($"List contents: [{string.Join(", ", numbers)}]");

            // AddRange
            Console.WriteLine("AddRange with [4,5]:");
            numbers.AddRange(new int[] { 4, 5 });
            Console.WriteLine($"After AddRange: [{string.Join(", ", numbers)}]");

            // Insert
            Console.WriteLine("Insert 100 at index 2:");
            numbers.Insert(2, 100);
            Console.WriteLine($"After Insert: [{string.Join(", ", numbers)}]");

            // Remove, RemoveAt
            Console.WriteLine("Remove value 100:");
            numbers.Remove(100);
            Console.WriteLine($"After Remove: [{string.Join(", ", numbers)}]");

            Console.WriteLine("RemoveAt index 0:");
            numbers.RemoveAt(0);
            Console.WriteLine($"After RemoveAt: [{string.Join(", ", numbers)}]");

            // Basic queries
            Console.WriteLine($"Contains 3? {numbers.Contains(3)}");
            Console.WriteLine($"IndexOf 3: {numbers.IndexOf(3)}");
            Console.WriteLine($"Count: {numbers.Count}");

            // Sorting and reversing
            Console.WriteLine("Sort the list:");
            numbers.Sort();
            Console.WriteLine($"Sorted: [{string.Join(", ", numbers)}]");
            numbers.Reverse();
            Console.WriteLine($"Reversed: [{string.Join(", ", numbers)}]");

            // Convert to array and copy
            Console.WriteLine("Convert to array and show CopyTo:");
            int[] asArray = numbers.ToArray();
            Console.WriteLine($"Array from list: [{string.Join(", ", asArray)}]");
            int[] dest = new int[asArray.Length + 2];
            asArray.CopyTo(dest, 1); // copy into dest starting at index 1
            Console.WriteLine($"Copied into dest (with offset 1): [{string.Join(", ", dest)}]");

            // Clear
            numbers.Clear();
            Console.WriteLine($"After Clear, Count: {numbers.Count}");
        }
    }
}