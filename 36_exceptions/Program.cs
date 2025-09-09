// See https://aka.ms/new-console-template for more information
using System;
using System.IO;

class Program
{
    static void Main()
    {
        // int x = 10;
        // int y = 0;
        // int z = x / y; // Throws DivideByZeroException
        // Basic try-catch
        // try
        // {
        //     int x = 10;
        //     int y = 0;
        //     int z = x / y; // Throws DivideByZeroException
        // }
        // catch (DivideByZeroException ex)
        // {
        //     Console.WriteLine($"Error: {ex.Message}");
        // }

        // Try-catch-finally
        // try
        // {
        //     string[] arr = { "a", "b" };
        //     Console.WriteLine(arr[1]); // Throws IndexOutOfRangeException

        // }
        // catch (IndexOutOfRangeException ex)
        // {
        //     Console.WriteLine($"Index error: {ex.Message}");

        // }
        // finally
        // {
        //     Console.WriteLine("Finally block always runs.");

        // }

        // Throwing an exception
        // return 123;
        // throw new FileNotFoundException("File not found!");
        // System.Console.WriteLine("Hello");
        // try
        // {
        //     bool x = false;
        //     string user = "Jane";
        //     if (x)
        //     {
        //         throw new FileNotFoundException("hello im bashar!");

        //     }
        //     if (user != "John")
        //     {
        //         throw new FileNotFoundException("Access denied you are not John!");

        //     }
        //     System.Console.WriteLine("Hello from try");
        //     // res.
        // }
        // catch (FileNotFoundException ex)
        // {
        //     Console.WriteLine($"Custom error: {ex.Message}");
        // }

        // NullReferenceException
        // try
        // {
        //     string s = null;
        //     Console.WriteLine(s.Length); // Throws NullReferenceException
        // }
        // catch (NullReferenceException ex)
        // {
        //     Console.WriteLine($"Null reference error: {ex.Message}");
        // }

        // System.Exception
        // try
        // {
        //     throw new Exception("General system exception!");
        // }
        // catch (Exception ex)
        // {
        //     Console.WriteLine($"System exception: {ex.Message}");
        // }

        // ApplicationException
        // try
        // {
        //     throw new ApplicationException("Application exception occurred!");
        // }
        // catch (ApplicationException ex)
        // {
        //     Console.WriteLine($"Application exception: {ex.Message}");
        // }

        // Custom Exception Example: BankAccount
        try
        {
            BankAccount account = new BankAccount(100);
            account.Withdraw(50); // Throws BankAccountException
            account.Add(5, "Bahsar");
        }
        catch (BankAccountException ex)
        {
            Console.WriteLine($"BankAccount error: {ex.Message}");
        }
        catch (JulienException ex)
        {
            Console.WriteLine($"Julien error: {ex.Message}");
        }
    }
}

// Custom exception and class for BankAccount example
public class BankAccountException : Exception
{
    public BankAccountException(string message) : base(message) { }
}
public class JulienException : Exception
{
    public JulienException(string message) : base(message) { }
}

public class BankAccount
{
    public decimal Balance { get; private set; }
    public BankAccount(decimal initialBalance)
    {
        Balance = initialBalance;
    }
    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
            //  throw new Exception("Insufficient funds.");
            throw new BankAccountException("Insufficient funds.");
        Balance -= amount;
    }
    public void Add(decimal amount,string name)
    {
        if (name!="Julien")
            //  throw new Exception("Insufficient funds.");
            throw new JulienException("you are not Julien.");
        // Balance -= amount;
        System.Console.WriteLine(amount + Balance);
    }
}
