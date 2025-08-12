using System;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Exceptions
{
    public static class ExceptionExamples
    {
        static int user_age;
        
        public static void Create_exception(string[]? args = null)
        {
            int attempts = 3;
            while (attempts >= 0)
            {
                attempts--;
                try
                {
                    user_age = Prompt_for_age();
                    System.Console.WriteLine($"Great! Your age is: {user_age}");
                    break; // Exit the loop if successful
                }
                catch (ArgumentOutOfRangeException exceptionDetails)
                {
                    System.Console.WriteLine($"Error: {exceptionDetails.Message}");
                    System.Console.WriteLine("Please try again.");
                }
                catch (FormatException exceptionDetails)
                {
                    System.Console.WriteLine($"Error: {exceptionDetails.Message}");
                    System.Console.WriteLine("Please try again.");
                }
                catch (System.Exception exceptionDetails)
                {
                    System.Console.WriteLine($"Unexpected error: {exceptionDetails.Message}");
                    System.Console.WriteLine("Please try again.");
                }
                finally
                {
                    string final_message = $"you have {attempts + 1} attempts left.";
                    if (attempts >= 0)
                    {
                        Console.WriteLine(final_message);
                    }
                    else
                    {
                        Console.WriteLine("Sorry no more attempts!");
                    }
                }
            }
        }
        
        static int Prompt_for_age()
        {
            System.Console.Write("How old are you? ");
            string? input = Console.ReadLine();
            
            if (string.IsNullOrWhiteSpace(input))
            {
                throw new FormatException("Input cannot be empty. Please enter a valid age.");
            }
            
            if (int.TryParse(input, out int age))
            {
                if (age <= 0 || age >= 150)
                {
                    throw new ArgumentOutOfRangeException("age", $"Age must be between 1 and 149. You entered: {age}");
                }
                return age;
            }
            else
            {
                throw new FormatException($"'{input}' is not a valid number. Please enter a valid age.");
            }
        }
    }
}
