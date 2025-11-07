using CollectionExamples;

namespace CollectionExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Collection Examples Demo ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. Array Examples");
            Console.WriteLine("2. List Examples");
            Console.WriteLine("3. Dictionary Examples");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    ArrayExample.Run();
                    break;
                case "2":
                    ListExample.Run();
                    break;
                case "3":
                    DictionaryExample.Run();
                    break;
                case "0":
                    ArrayExample.Run();
                    ListExample.Run();
                    DictionaryExample.Run();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running all examples by default.");
                    ArrayExample.Run();
                    ListExample.Run();
                    DictionaryExample.Run();
                    break;
            }
        }
    }
}
