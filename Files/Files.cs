using System;
using System.IO;

namespace Files
{
    public static class FileExamples
    {
        public static void CreateFile()
        {
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
            System.Console.WriteLine($"Content written to file: {readText}");
        }

        public static void AdvancedFileOperations()
        {
            string fileName = "example.txt";
            
            // Writing multiple lines
            string[] lines = { "Line 1", "Line 2", "Line 3" };
            File.WriteAllLines(fileName, lines);
            
            // Reading all lines
            string[] readLines = File.ReadAllLines(fileName);
            Console.WriteLine("File contents:");
            foreach (string line in readLines)
            {
                Console.WriteLine($"- {line}");
            }
            
            // Append to file
            File.AppendAllText(fileName, "\nAppended line");
            
            // Check if file exists
            if (File.Exists(fileName))
            {
                Console.WriteLine($"File {fileName} exists!");
                FileInfo fileInfo = new FileInfo(fileName);
                Console.WriteLine($"File size: {fileInfo.Length} bytes");
                Console.WriteLine($"Created: {fileInfo.CreationTime}");
            }
        }
    }
}
