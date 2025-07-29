using System;
using System.IO;
using System.Reflection.Metadata;

namespace Hello_World.Examples
{
    public static class Files
    {
        public static void CreateFile()
        {
            // string txt ="Hello"
            // System.Console.WriteLine(txt.Length);
            int time = 22;
            if (time < 10)
{
  Console.WriteLine("Good morning.");
}
else if (time < 20)
{
  Console.WriteLine("Good day.");
}
else
{
  Console.WriteLine("Good evening.");
}
            System.Console.Write("Name: ");
            string? input = Console.ReadLine();
            string userInput = input ?? string.Empty;

            File.WriteAllText("users.txt", userInput);

            string readText = File.ReadAllText("users.txt");
            System.Console.WriteLine(readText);
        }
    }
}