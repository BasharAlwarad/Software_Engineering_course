using System;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Hello_World.Examples
{
    public static class Debugging
    {
        static readonly int user_age = 40;
        public static void Debugging_example()
        {
            
            System.Console.WriteLine(Age_message());

        }

        static string Age_message()
        {
            if (user_age>18)
            {
                return $"User is above 18 you can join";
            }else if (user_age>21)
            {
                return $"User is above 21 you can join and drink";
            }else
            {
                return "";
            }
        }
    }
}