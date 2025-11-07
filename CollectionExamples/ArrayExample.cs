using System;
using System.Collections.Generic;

namespace CollectionExamples
{
    public static class ArrayExample
    {
        public static void Run()
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

            // Length
            int[] arr_numbers = new int[3] { 1, 2, 3 };
            Console.WriteLine($"Array length: {arr_numbers.Length}");

            // Copying and resizing examples
            int[] copy = new int[arr_numbers.Length];
            Array.Copy(arr_numbers, copy, arr_numbers.Length);
            Console.WriteLine($"Copied array: [{string.Join(", ", copy)}]");

            Array.Resize(ref arr_numbers, 5);
            Console.WriteLine($"Resized array length: {arr_numbers.Length}");
        }
    }
}