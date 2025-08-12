using Files;

namespace Files
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== File Operations Examples ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. Basic File Creation");
            Console.WriteLine("2. Advanced File Operations");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    FileExamples.CreateFile();
                    break;
                case "2":
                    FileExamples.AdvancedFileOperations();
                    break;
                case "0":
                    FileExamples.CreateFile();
                    Console.WriteLine("\n" + new string('=', 40) + "\n");
                    FileExamples.AdvancedFileOperations();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running basic file creation by default.");
                    FileExamples.CreateFile();
                    break;
            }
        }
    }
}
