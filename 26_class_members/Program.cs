// See https://aka.ms/new-console-template for more information
using System;

// Class with different members
class Book
{
    // Field
    private string title;

    // Property
    public string Title
    {
        get { return title; }
        set { title = value; }
    }

    // Method
    public void PrintTitle()
    {
        Console.WriteLine($"Title: {Title}");
    }
}

// Main program
class Program
{
    static void Main()
    {
        Book myBook = new Book();
        myBook.Title = "C# in Depth";
        myBook.PrintTitle();
    }
}
