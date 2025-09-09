using System;

class Program
{
    public static void Main(string[] args)
    {
        // Example: Get user input as string
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine($"Hello, {name}!");

        // Example: Get user input as integer
        Console.Write("Enter your age: ");
        string ageInput = Console.ReadLine();
        int age = int.Parse(ageInput); // Convert string to int
        Console.WriteLine($"You are {age} years old.");

        // Example: Get user input as double
        Console.Write("Enter your height in meters: ");
        string heightInput = Console.ReadLine();
        double height = double.Parse(heightInput); // Convert string to double
        Console.WriteLine($"Your height is {height} meters.");

        // Example: Read a single character
        Console.Write("Press any key to continue: ");
        int charCode = Console.Read();
        char character = (char)charCode;
        Console.WriteLine($"You pressed: {character}");
        // Note: Read() does not wait for Enter, reads next char from buffer

        // Example: Read a key press
        Console.Write("Press any key (ReadKey): ");
        ConsoleKeyInfo keyInfo = Console.ReadKey();
        Console.WriteLine($"\nYou pressed: {keyInfo.KeyChar}");
        // ReadKey() is useful for menus, passwords, etc.

        // Example: Using ReadLine in a while loop for password check
        Console.WriteLine("Enter password (type 'exit' to quit):");
        string input;
        while (true)
        {
            Console.Write("Password: ");
            input = Console.ReadLine();
            if (input == "exit")
            {
                Console.WriteLine("Exiting...");
                break;
            }
            if (input == "123456")
            {
                Console.WriteLine("Correct password!");
                break;
            }
            else
            {
                Console.WriteLine("Incorrect password. Try again or type 'exit' to quit.");
            }
        }
    }
}