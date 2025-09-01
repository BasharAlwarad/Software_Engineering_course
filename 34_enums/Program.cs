// See https://aka.ms/new-console-template for more information
using System;

// Declaring enums
enum Day : byte // Underlying type can be specified
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}


// Simple eCommerce example: OrderStatus enum
enum OrderStatus
{
    Pending,
    Processing,
    Shipped,
    Delivered,
    Cancelled
}

class Order
{
    public int Id { get; set; }
    public OrderStatus Status { get; set; }
    public Order(int id, OrderStatus status)
    {
        Id = id;
        Status = status;
    }
}

enum ErrorCode
{
    None = 0,
    NotFound = 404,
    ServerError = 500
}

// Using enums in a class
class Task
{
    public string Title { get; set; }
    public TaskStatus Status { get; set; }
    public Task(string title, TaskStatus status)
    {
        Title = title;
        Status = status;
    }
}

enum TaskStatus { NotStarted, InProgress, Completed, Cancelled }

// Using enums in an interface
interface IStateful
{
    TaskStatus Status { get; set; }
    void ChangeStatus(TaskStatus newStatus);
}

class StatefulTask : IStateful
{
    public TaskStatus Status { get; set; }
    public void ChangeStatus(TaskStatus newStatus) => Status = newStatus;
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

        // Enum underlying type
        Console.WriteLine($"Underlying type of Day: {Enum.GetUnderlyingType(typeof(Day))}");


        // eCommerce OrderStatus enum usage
        Order order = new Order(1001, OrderStatus.Pending);
        Console.WriteLine($"Order {order.Id} status: {order.Status}");
        order.Status = OrderStatus.Processing;
        Console.WriteLine($"Order {order.Id} status updated: {order.Status}");
        if (order.Status == OrderStatus.Processing)
            Console.WriteLine("Order is being processed.");

        // Enum methods
        Console.WriteLine("All days:");
        foreach (var d in Enum.GetValues(typeof(Day)))
            Console.WriteLine($"- {d} ({(byte)d})");

        // Parsing enums
        string input = "Friday";
        if (Enum.TryParse(input, out Day parsedDay))
            Console.WriteLine($"Parsed day: {parsedDay}");

        // Using enums in a class
        Task t = new Task("Write docs", TaskStatus.InProgress);
        Console.WriteLine($"Task: {t.Title}, Status: {t.Status}");

        // Using enums in an interface
        StatefulTask st = new StatefulTask { Status = TaskStatus.NotStarted };
        st.ChangeStatus(TaskStatus.Completed);
        Console.WriteLine($"StatefulTask status: {st.Status}");

        // ErrorCode example
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
