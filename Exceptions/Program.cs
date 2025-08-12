using Exceptions;

namespace Exceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Exception Handling Examples ===");
            Console.WriteLine("This demonstrates try-catch-finally blocks with different exception types.");
            Console.WriteLine("You have 3 attempts to enter a valid age (1-149).\n");
            
            ExceptionExamples.Create_exception(args);
        }
    }
}
