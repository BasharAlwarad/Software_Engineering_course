using System;

namespace LoopExamples
{
    public static class LoopExamplesDemo
    {
        public static void ForLoops()
        {
            Console.WriteLine("\n=== For Loops ===");
            
            Console.Write("How many tries do you want? ");
            int times = Convert.ToInt16(Console.ReadLine());
            Console.Write("What is your name? ");
            string? name = Console.ReadLine();

            for (int i = 0; i < times; i++)
            {
                Console.WriteLine($"Try {i + 1}: What is your name?");
                if (name == "Bashar") 
                {
                    Console.WriteLine("Special user detected!");
                    break;
                }
            }
        }

        public static void WhileLoops()
        {
            Console.WriteLine("\n=== While Loops ===");
            
            Console.Write("Enter a number to count down from: ");
            int your_number = Convert.ToInt32(Console.ReadLine());
            
            Console.WriteLine("\nWhile loop countdown:");
            int temp = your_number;
            while (temp > 0)
            {
                Console.WriteLine(temp);
                temp--;
            }
            
            Console.WriteLine("\nDo-while loop countdown:");
            temp = your_number;
            do
            {
                Console.WriteLine(temp);
                temp--;
            }
            while (temp > 0);
        }
    }
}
