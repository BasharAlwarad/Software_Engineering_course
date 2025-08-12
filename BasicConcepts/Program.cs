using BasicConcepts;

namespace BasicConcepts
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Basic Concepts Examples ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. Basic Input/Output");
            Console.WriteLine("2. User Info with Age Validation");
            Console.WriteLine("3. Basic Math Operations");
            Console.WriteLine("4. Switch Statements");
            Console.WriteLine("5. TryParse Function");
            Console.WriteLine("6. Casting");
            Console.WriteLine("7. Operators");
            Console.WriteLine("8. MyArray");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    BasicConceptsExamples.BasicInputOutput();
                    break;
                case "2":
                    BasicConceptsExamples.UserInfoWithAgeValidation();
                    break;
                case "3":
                    BasicConceptsExamples.BasicMathOperations();
                    break;
                case "4":
                    BasicConceptsExamples.SwitchStatements();
                    break;
                case "5":
                    BasicConceptsExamples.TryParseFunction();
                    break;
                case "6":
                    BasicConceptsExamples.Casting();
                    break;
                case "7":
                    BasicConceptsExamples.Operators();
                    break;
                case "8":
                    BasicConceptsExamples.MyArray();
                    break;
                case "0":
                    BasicConceptsExamples.BasicInputOutput();
                    BasicConceptsExamples.UserInfoWithAgeValidation();
                    BasicConceptsExamples.BasicMathOperations();
                    BasicConceptsExamples.SwitchStatements();
                    BasicConceptsExamples.TryParseFunction();
                    BasicConceptsExamples.Casting();
                    BasicConceptsExamples.Operators();
                    BasicConceptsExamples.MyArray();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running Basic Input/Output example by default.");
                    BasicConceptsExamples.BasicInputOutput();
                    break;
            }
        }
    }
}
