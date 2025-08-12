using LoopExamples;

namespace LoopExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Loop Examples Demo ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. For Loops");
            Console.WriteLine("2. While Loops");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    LoopExamplesDemo.ForLoops();
                    break;
                case "2":
                    LoopExamplesDemo.WhileLoops();
                    break;
                case "0":
                    LoopExamplesDemo.ForLoops();
                    LoopExamplesDemo.WhileLoops();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running For Loops by default.");
                    LoopExamplesDemo.ForLoops();
                    break;
            }
        }
    }
}
