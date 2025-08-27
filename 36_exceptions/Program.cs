// See https://aka.ms/new-console-template for more information
using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Basic try-catch
        try
        {
            int x = 10;
            int y = 0;
            int z = x / y; // Throws DivideByZeroException
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }

        // Try-catch-finally
        try
        {
            string[] arr = { "a", "b" };
            Console.WriteLine(arr[2]); // Throws IndexOutOfRangeException
        }
        catch (IndexOutOfRangeException ex)
        {
            Console.WriteLine($"Index error: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Finally block always runs.");
        }

        // Throwing an exception
        try
        {
            throw new FileNotFoundException("File not found!");
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"Custom error: {ex.Message}");
        }
    }
}
