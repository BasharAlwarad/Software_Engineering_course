using System;

namespace Hello_World.Examples
{
    public static class Functions
    {

        public static void Functions_fundamentals(string [] args)
        {

            System.Console.WriteLine(Greeting(args[0]));
        }

        static string Greeting(string a)
        {
            return  a;
        }
        
    }
}
