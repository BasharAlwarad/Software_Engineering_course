using System;
using Hello_World.Examples;

namespace Hello_World
{
    class Program
    {
        // static string name = "Bashar";

        static void Main(string[] args)
        {
            // Console.Title = name;


            Functions.Functions_fundamentals(["Hello"]);

            /* using input to run files*/
            /*
            Console.WriteLine("=== C# Learning Examples ===");
            Console.WriteLine("Choose which example to run:");
            Console.WriteLine("1. Basic Input/Output");
            Console.WriteLine("2. User Info with Age Validation");
            Console.WriteLine("3. Basic Math Operations");
            Console.WriteLine("4. Switch Statements (Day of Week)");
            Console.WriteLine("5. For Loops");
            Console.WriteLine("6. While Loops");
            Console.WriteLine("7. Password Validation");
            Console.WriteLine("8. Numeric Formatting");
            Console.WriteLine("9. Money Culture Info");
            Console.WriteLine("10. TryParse Function");
            Console.WriteLine("11. String Examples");
            Console.WriteLine("12. Arrays");
            Console.WriteLine("13. Dictionaries");
            Console.WriteLine("14. Times Table Exercise");
            Console.WriteLine("15. FizzBuzz Exercise");
            
            Console.Write("\nEnter your choice (1-15): ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    BasicConcepts.BasicInputOutput();
                    break;
                case "2":
                    BasicConcepts.UserInfoWithAgeValidation();
                    break;
                case "3":
                    BasicConcepts.BasicMathOperations();
                    break;
                case "4":
                    BasicConcepts.SwitchStatements();
                    break;
                case "5":
                    LoopExamples.ForLoops();
                    break;
                case "6":
                    LoopExamples.WhileLoops();
                    break;
                case "7":
                    Exercises.PasswordValidation();
                    break;
                case "8":
                    FormattingExamples.NumericFormatting();
                    break;
                case "9":
                    FormattingExamples.MoneyCultureInfo();
                    break;
                case "10":
                    BasicConcepts.TryParseFunction();
                    break;
                case "11":
                    StringExamples.String_Examples();
                    break;
                case "12":
                    CollectionExamples.ArrayExamples();
                    break;
                case "13":
                    CollectionExamples.DictionaryExamples();
                    break;
                case "14":
                    Exercises.TimesTableExercise();
                    break;
                case "15":
                    Exercises.FizzBuzzExercise();
                    break;
                default:
                    Console.WriteLine("Invalid choice!");
                    break;
            }
            */
        }
    }
}