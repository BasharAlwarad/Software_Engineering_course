// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        // Using enums
        // Get today's Day value from the system date
        Day today = (Day)DateTime.Today.DayOfWeek;
        Console.WriteLine($"Today is: {today}"); // Output: Monday
        int dayValue = (int)today;
        Console.WriteLine($"Numeric value: {dayValue}"); // Output: 1

        // Enum underlying type
        Console.WriteLine($"Underlying type of Day: {Enum.GetUnderlyingType(typeof(Day))}");

        // Enum methods
        Console.WriteLine("All days:");
        foreach (var d in Enum.GetValues(typeof(Day)))
            Console.WriteLine($"- {d} ({(byte)d})");

        // Parsing enums
        string input = "Friday";
        if (Enum.TryParse(input, out Day parsedDay))
            Console.WriteLine($"Parsed day: {parsedDay}");

        // Using Task class
        Task t = new Task("Write docs", TaskStatus.InProgress);
        Console.WriteLine($"Task: {t.Title}, Status: {t.Status}");

        // Simple example 
        Task st = new Task("Refactor code", TaskStatus.NotStarted);
        Console.WriteLine($"Before: Task '{st.Title}' status: {st.Status}");
        st.ChangeStatus(TaskStatus.Completed);
        Console.WriteLine($"After: Task '{st.Title}' status: {st.Status}");

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

        // --------------------
        // Struct usage examples
        // --------------------

        // Creating and using a struct
        Point p1 = new Point(2, 3);
        p1.Print(); // Point(X=2, Y=3)

        // Copying a struct produces a separate copy (value semantics)
        Point p2 = p1; // copy
        p2.Translate(5, 0);
        Console.WriteLine("After translating p2:");
        p1.Print(); // still Point(X=2, Y=3)
        p2.Print(); // Point(X=7, Y=3)

        // Immutable struct
        ImmutablePoint ip = new ImmutablePoint(10, 20);
        Console.WriteLine($"ImmutablePoint: X={ip.X}, Y={ip.Y}");

        Console.WriteLine("Struct examples complete.");
    }
}
