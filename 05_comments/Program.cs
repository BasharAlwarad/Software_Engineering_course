using System;

namespace CommentsExample
{
	class Program
	{
		// Single-line comment: This prints a message
		static void Main(string[] args)
		{
			Console.WriteLine("Hello, World!");

			/*
			 Multi-line comment:
			 The following function adds two numbers
			*/

			// Using the Add function
			Console.WriteLine(Add(2, 3));
		}

		/// <summary>
		/// Adds two integers and returns the result.
		/// </summary>
		/// <param name="a">First integer</param>
		/// <param name="b">Second integer</param>
		/// <returns>The sum of a and b</returns>
		static int Add(int a, int b)
		{
			return a + b;
		}
	}
}
