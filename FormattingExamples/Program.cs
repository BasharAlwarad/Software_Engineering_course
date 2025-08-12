using FormattingExamples;

namespace FormattingExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== String Formatting Examples ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. Numeric Formatting");
            Console.WriteLine("2. Money Culture Info");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    FormattingExamplesDemo.NumericFormatting();
                    break;
                case "2":
                    FormattingExamplesDemo.MoneyCultureInfo();
                    break;
                case "0":
                    FormattingExamplesDemo.NumericFormatting();
                    FormattingExamplesDemo.MoneyCultureInfo();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running numeric formatting by default.");
                    FormattingExamplesDemo.NumericFormatting();
                    break;
            }
        }
    }
}
