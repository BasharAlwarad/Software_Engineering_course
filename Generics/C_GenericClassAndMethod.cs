using System;
using System.Collections.Generic;

// Example: Using generics in classes and methods
public class MyGenericList<T>
{
    private readonly List<T> _items = new();
    public void Add(T item) => _items.Add(item);
    public void PrintAll() {
        foreach (var item in _items)
            Console.WriteLine(item);
    }
}

public static class GenericClassAndMethod {
    public static void Run() {
        var intList = new MyGenericList<int>();
        intList.Add(1);
        intList.Add(2);
        intList.Add(3);
        Console.WriteLine("Int list:");
        intList.PrintAll();

        var stringList = new MyGenericList<string>();
        stringList.Add("Hello");
        stringList.Add("World");
        Console.WriteLine("String list:");
        stringList.PrintAll();
    }
}
