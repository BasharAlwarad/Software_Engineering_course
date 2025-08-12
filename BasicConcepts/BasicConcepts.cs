using System;

namespace BasicConcepts
{
    public static class BasicConceptsExamples
    {
        public static void BasicInputOutput()
        {
            Console.WriteLine("\n=== Basic Input/Output ===");

            // Simple input/output
            Console.Write("What is your name: ");
            string? name = Console.ReadLine();
            Console.WriteLine($"Welcome {name}");

            // Multiple inputs
            Console.Write("What is your age: ");
            string? age = Console.ReadLine();
            Console.WriteLine($"Welcome {name}\nAge: {age}");
        }

        public static void UserInfoWithAgeValidation()
        {
            Console.WriteLine("\n=== User Info with Age Validation ===");

            Console.Write("What is your name: ");
            string? user_name = Console.ReadLine();
            Console.Write("What is your age: ");
            int age = Convert.ToInt32(Console.ReadLine());

            if (age < 18 || age > 150 && user_name != "Bashar")
            {
                Console.WriteLine($"{age} is an invalid age\nSorry {user_name} you can't join the club");
            }
            else
            {
                Console.WriteLine($"Welcome to the club {user_name}");
                if (age < 21 && user_name != "Bashar")
                {
                    Console.WriteLine($"{age} is a valid age. You can join but you can't drink");
                }
                else if (age >= 21 || user_name == "Bashar")
                {
                    Console.WriteLine($"{age} is a valid age. You can join and drink");
                }
            }
        }

        public static void BasicMathOperations()
        {
            Console.WriteLine("\n=== Basic Math Operations ===");

            Console.Write("First Number: ");
            int first = Convert.ToInt32(Console.ReadLine());
            Console.Write("Second Number: ");
            int second = Convert.ToInt32(Console.ReadLine());
            int result = first * second;
            Console.WriteLine($"{first} x {second} = {result}");

            // Discount calculation
            Console.Write("Enter price for discount calculation: ");
            double price = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine($"After 50% discount: ${price * 0.5}");
        }

        public static void SwitchStatements()
        {
            Console.WriteLine("\n=== Switch Statements (Day of Week) ===");

            Console.Write("What day is today (1-7): ");
            int today = Convert.ToInt32(Console.ReadLine());

            switch (today)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("Work day");
                    break;
                case 6:
                case 7:
                    Console.WriteLine("Weekend");
                    break;
                default:
                    Console.WriteLine("Invalid day");
                    break;
            }
        }

        public static void TryParseFunction()
        {
            Console.WriteLine("\n=== TryParse Function ===");

            while (true)
            {
                Console.Write("Enter your number: ");
                string? user_input = Console.ReadLine();

                if (int.TryParse(user_input, out int number))
                {
                    Console.WriteLine($"Your value: {number}");
                    break;
                }
                else
                {
                    Console.WriteLine($"{user_input} is an invalid value");
                }
            }
        }

        public static void Casting()
        {
            // Explicit casting
            object obj = "Hello, World!";
            int user_age = 34;
            string userAge = Convert.ToString(user_age);

            string str = (string)obj;

            Console.WriteLine(str + user_age);

            // Implicit casting
            int intValue = 123;
            double doubleValue = intValue; // Implicit conversion from int to double
            Console.WriteLine(doubleValue);
        }

        public static void Operators()
        {
            int x = 5;
            int y = 3;
            bool z = !(x > y && x != 2 || x < 0);
            System.Console.WriteLine(z);

            string name = "John Doe";
            char fromName = name[name.IndexOf('J')];
            string surName = name.Substring(name.IndexOf('D'));
            // string surName = name[name.IndexOf('D')..];

            System.Console.WriteLine(fromName);
            System.Console.WriteLine(surName);
            System.Console.WriteLine(name.IndexOf('J'));
            System.Console.WriteLine(!(x > y && x != 2 || x < 0) ? "yes" : x == 5 ? "5" : "no");
            System.Console.WriteLine(!(x > y && x != 2 || x < 0) ? "yes" : null);
        }
        
        public static void MyArray()
        {
            int[,,] numbers = { {{1, 4, 2,5}, {1, 4, 2,5}, {1, 4, 2,5}}, {{1, 4, 2,5}, {1, 4, 2,5}, {1, 4, 2,5}} };
     
            System.Console.WriteLine(numbers.GetLength(0));
            System.Console.WriteLine(numbers.GetLength(1));
            System.Console.WriteLine(numbers.GetLength(2));

            //   for (int i = 0; i < numbers.GetLength(0); i++) 
            //   {  
            //     for (int j = 0; j < numbers.GetLength(1); j++) 
            //     {  
            //       Console.WriteLine(numbers[i, j]);  
            //     }  
            //   }  
        }
    }
}
