using System;
using System.Collections.Generic;

// Example 1: Generic Linked List
public class GenericList<T>
{
    private class Node
    {
        public T Data { get; set; }
        public Node? Next { get; set; }
        public Node(T t) { Data = t; }
    }
    private Node? head;
    public void AddHead(T t)
    {
        Node n = new Node(t);
        n.Next = head;
        head = n;
    }
    public IEnumerator<T> GetEnumerator()
    {
        Node? current = head;
        while (current != null)
        {
            yield return current.Data;
            current = current.Next;
        }
    }
}

// Example 2: Generic Method
public static class GenericUtils
{
    public static void Swap<T>(ref T lhs, ref T rhs)
    {
        (lhs, rhs) = (rhs, lhs);
    }
}



public static class GenericExamples
{
    public static void Run()
    {
        // GenericList usage
        var stringList = new GenericList<string>();
        stringList.AddHead("C#");
        stringList.AddHead("from");
        stringList.AddHead("World");
        stringList.AddHead("Hello");
        Console.WriteLine("GenericList<string>:");
        foreach (string s in stringList)
            Console.WriteLine(s);

        var numberList = new GenericList<int>();
        numberList.AddHead(4);
        numberList.AddHead(3);
        numberList.AddHead(2);
        numberList.AddHead(1);
        Console.WriteLine("GenericList<int>:");
        foreach (int i in numberList)
            Console.WriteLine(i);

        // Generic method usage
        int a = 1, b = 2;
        GenericUtils.Swap(ref a, ref b);
        Console.WriteLine($"After swap: a = {a}, b = {b}");
        string x = "hello", y = "world";
        GenericUtils.Swap(ref x, ref y);
        Console.WriteLine($"After swap: x = {x}, y = {y}");
    }
}
