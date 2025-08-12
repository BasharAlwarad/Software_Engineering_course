using Exercises;

namespace Exercises
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Programming Exercises ===");
            Console.WriteLine("Choose an exercise to run:");
            Console.WriteLine("1. Password Validation");
            Console.WriteLine("2. Times Table");
            Console.WriteLine("3. FizzBuzz");
            Console.WriteLine("0. Run All Exercises");
            
            Console.Write("\nEnter your choice: ");
            string? choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    ExercisesDemo.PasswordValidation();
                    break;
                case "2":
                    ExercisesDemo.TimesTableExercise();
                    break;
                case "3":
                    ExercisesDemo.FizzBuzzExercise();
                    break;
                case "0":
                    ExercisesDemo.PasswordValidation();
                    Console.WriteLine("\n" + new string('=', 40));
                    ExercisesDemo.TimesTableExercise();
                    Console.WriteLine("\n" + new string('=', 40));
                    ExercisesDemo.FizzBuzzExercise();
                    break;
                default:
                    Console.WriteLine("Invalid choice. Running password validation by default.");
                    ExercisesDemo.PasswordValidation();
                    break;
            }
        }
    }
}
