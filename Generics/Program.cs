using Generics;

namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Generics Examples ===");
            Console.WriteLine("Choose an example to run:");
            Console.WriteLine("1. Type Checking with Generics");
            Console.WriteLine("2. Performance Test");
            Console.WriteLine("3. Generic Inner Class Demo");
            Console.WriteLine("0. Run All Examples");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    GenericsExamples<object>.GenericsDetails();
                    break;
                case "2":
                    GenericsExamples<object>.SpeedChecker();
                    break;
                case "3":
                    DemoGenericInnerClass();
                    break;
                case "0":
                    GenericsExamples<object>.GenericsDetails();
                    Console.WriteLine("\n" + new string('=', 40) + "\n");
                    GenericsExamples<object>.SpeedChecker();
                    Console.WriteLine("\n" + new string('=', 40) + "\n");
                    DemoGenericInnerClass();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running type checking by default.");
                    GenericsExamples<object>.GenericsDetails();
                    break;
            }
        }
        
        static void DemoGenericInnerClass()
        {
            Console.WriteLine("=== Generic Inner Class Demo ===");
            
            var stringList = new GenericsExamples<string>.GenericsInner<string>();
            stringList.AddToList("Hello");
            stringList.AddToList("World");
            stringList.ShowAllItems();
            
            Console.WriteLine();
            
            var intList = new GenericsExamples<int>.GenericsInner<int>();
            intList.AddToList(1);
            intList.AddToList(2);
            intList.AddToList(3);
            intList.ShowAllItems();
        }
    }
}
