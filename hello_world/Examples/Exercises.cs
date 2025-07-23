using System;
using System.Text;

namespace Hello_World.Examples
{
    public static class Exercises
    {
        public static void PasswordValidation()
        {
            Console.WriteLine("\n=== Password Validation ===");
            
            int password = 0;
            int attempts = 3;

            while (attempts > 0)
            {
                Console.Write("What is your password? ");
                password = Convert.ToInt32(Console.ReadLine());

                if (password == 123)
                {
                    break;
                }

                attempts--;

                if (attempts > 0)
                {
                    Console.WriteLine($"Incorrect. You have {attempts} attempt(s) left.");
                }
                else
                {
                    Console.WriteLine("No attempts left. Access denied.");
                }
            }

            Console.WriteLine(password == 123 ? "Correct password!" : "Incorrect password");
        }

        public static void TimesTableExercise()
        {
            Console.WriteLine("\n=== Times Table Exercise ===");
            
            Console.Write("Enter a number for the times table: ");
            string? input = Console.ReadLine();

            if (int.TryParse(input, out int number))
            {
                Console.WriteLine($"\nTimes table for {number}:");
                for (int i = 1; i <= 10; i++)
                {
                    Console.WriteLine("{0} X {1} = {2}", i, number, i * number);
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
            }
        }

        public static void FizzBuzzExercise()
        {
            Console.WriteLine("\n=== FizzBuzz Exercise ===");
            
            Console.Write("Enter a number for FizzBuzz: ");
            string? input = Console.ReadLine();

            if (int.TryParse(input, out int number) && number > 0)
            {
                Console.WriteLine($"\nFizzBuzz from 1 to {number}:");
                var sb = new StringBuilder();
                for (int i = 1; i <= number; i++)
                {
                    bool divisibleBy3 = i % 3 == 0;
                    bool divisibleBy5 = i % 5 == 0;

                    if (divisibleBy3 && divisibleBy5)
                        sb.AppendLine("fizzbuzz");
                    else if (divisibleBy3)
                        sb.AppendLine("fizz");
                    else if (divisibleBy5)
                        sb.AppendLine("buzz");
                    else
                        sb.AppendLine(i.ToString());
                }
                Console.Write(sb.ToString());
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a positive number.");
            }
        }
    }
}
