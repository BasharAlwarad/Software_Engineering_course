using Debugging;

namespace Debugging
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Debugging Examples ===");
            Console.WriteLine("This example demonstrates debugging techniques.");
            Console.WriteLine("Note: There's a logical bug in the age validation - can you spot it?");
            
            DebuggingExamples.Debugging_example();
            
            Console.WriteLine("\nDebug Challenge:");
            Console.WriteLine("The logic has a bug: if user_age > 18 is true, the else if (user_age > 21) will never execute!");
            Console.WriteLine("This is because 21 > 18, so the first condition catches all cases >= 19.");
            Console.WriteLine("The correct logic should check age > 21 first, then age > 18.");
        }
    }
}
