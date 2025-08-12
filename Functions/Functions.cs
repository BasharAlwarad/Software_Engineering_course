using System;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Functions
{
    public static class FunctionsExamples
    {
        static string greeting_message = "Hello and welcome!!";
        
        public static void Functions_fundamentals(string[]? args = null)
        {
            args ??= new string[] { "hey there" };
            System.Console.WriteLine(args);
            Change_state(ref greeting_message);
            // Change_state(out greeting_message);
            System.Console.WriteLine(Greeting(a:greeting_message));
            System.Console.WriteLine(User_answer_question("How old are you"));
        }
        

        static string Greeting(string a = "Hello and welcome!", int b=default)
        {
            return a;
        }

        static string User_answer_question(string user_input)
        {
            System.Console.Write($"{user_input}: ");
            return Console.ReadLine() ?? string.Empty;
        }

        static void Change_state(ref string message)
        // static void Change_state(out string message)
        {
            message = "hey there welcome!!!";
        }
    }
}
