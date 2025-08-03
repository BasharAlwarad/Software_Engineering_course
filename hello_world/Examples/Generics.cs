using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Hello_World.Examples
{
    class Generics<T>
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
                // numbers.Add(i);
                myObjects.Add(i);
            }
            sw.Stop();
            System.Console.WriteLine(sw.ElapsedMilliseconds);

        }

        public class GenericsInner<X>
        {
            private List<X> data = [];
            public void AddToList(X value)
            {
                data.Add(value);
                System.Console.WriteLine($"value: {data}");
            }


        }
        // public GenericsInner<int> GenericsInnerInstance = new();
    }
}
