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
            Console.WriteLine("2. Dictionary Examples");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    CollectionExamplesDemo.ArrayExamples();
                    break;
                case "2":
                    CollectionExamplesDemo.DictionaryExamples();
                    break;
                case "0":
                    CollectionExamplesDemo.ArrayExamples();
                    CollectionExamplesDemo.DictionaryExamples();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running Array Examples by default.");
                    CollectionExamplesDemo.ArrayExamples();
                    break;
            }
        }
    }
}
