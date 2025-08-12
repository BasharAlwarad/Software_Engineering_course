using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace Generics
{
    class GenericsExamples<T>
    {
        public static readonly List<int> numbers = [1, 2, 3];
        public static readonly List<object> myObjects = [1, 2, 3, "John"];
        
        public static void GenericsDetails()
        {
            TypeChecker(numbers);
            TypeChecker("Hello");
            TypeChecker(1d);
            TypeChecker(1.0F);
            TypeChecker(11110000000000000000L);
        }

        public static void TypeChecker<U>(U value)
        {
            System.Console.WriteLine($"type of {value} is {typeof(U)}");
        }

        record PersonRecord(string FirstName, string LastName);

        public static void SpeedChecker()
        {
            TypeChecker(new PersonRecord("John", "Doe"));
            Stopwatch sw = new();
            sw.Start();
            for (int i = 0; i < 1_000_000; i++)
            {
                myObjects.Add(i);
            }
            sw.Stop();
            System.Console.WriteLine($"Performance test completed in {sw.ElapsedMilliseconds} ms");
        }

        public class GenericsInner<X>
        {
            private List<X> data = [];
            
            public void AddToList(X value)
            {
                data.Add(value);
                System.Console.WriteLine($"Added {value} to list. List now has {data.Count} items.");
            }

            public void ShowAllItems()
            {
                Console.WriteLine("All items in the list:");
                foreach (var item in data)
                {
                    Console.WriteLine($"- {item}");
                }
            }
        }
    }
}
