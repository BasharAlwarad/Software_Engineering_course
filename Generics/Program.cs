using System;
using System.Collections.Generic;

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\nB. Problem Without Generics\n------------------------------");
            ProblemWithoutGenerics.Run();
            Console.WriteLine("\nC. Generic Solution\n------------------------------");
            GenericSolution.Run();
            Console.WriteLine("\nD. Generic Class and Method\n------------------------------");
            GenericClassAndMethod.Run();
            Console.WriteLine("\nE. Problem Solved by Constraints\n------------------------------");
            ConstraintProblem.Run();
            Console.WriteLine("\nF. Solution Using Constraints\n------------------------------");
            ConstraintSolution.Run();
            Console.WriteLine("\nF. Other usability\n------------------------------");
            GenericExamples.Run();
        }
    }
