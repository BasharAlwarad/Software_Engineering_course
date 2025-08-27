// See https://aka.ms/new-console-template for more information
using System;

// Declaring enums
enum Day
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum ErrorCode
{
    None = 0,
    NotFound = 404,
    ServerError = 500
}

// Main program
class Program
{
    static void Main()
    {
        // Using enums
        Day today = Day.Monday;
        Console.WriteLine($"Today is: {today}"); // Output: Monday
        int dayValue = (int)today;
        Console.WriteLine($"Numeric value: {dayValue}"); // Output: 1

        ErrorCode code = ErrorCode.NotFound;
        Console.WriteLine($"Error code: {code} ({(int)code})"); // Output: NotFound (404)

        // Enum in switch
        switch (today)
        {
            case Day.Saturday:
            case Day.Sunday:
                Console.WriteLine("It's the weekend!");
                break;
            default:
                Console.WriteLine("It's a weekday.");
                break;
        }
    }
}
