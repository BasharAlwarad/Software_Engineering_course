using System.Threading.Tasks;

// Program.cs: Host for all async/await lecture examples
// Each example demonstrates a key concept in asynchronous programming in C#
class Program
{
    public static async Task Main(string[] args)
    {
        // A. Blocking Problem: Sequential, blocking operations
        Console.WriteLine("A. Blocking Problem\n------------------------------");
        A_BlockingProblem.Run();

        // B. Async/Await Solution: Parallel, non-blocking operations
        Console.WriteLine("\nB. Async/Await Solution\n------------------------------");
        await B_AsyncSolution.Run();

        // C. Fetch Request Example: Async HTTP request
        Console.WriteLine("\nC. Fetch Request Example\n------------------------------");
        await C_FetchRequest.Run();

        // D. Exception Handling in Async Methods
        Console.WriteLine("\nD. Exception Handling in Async Methods\n------------------------------");
        await D_AsyncExceptionHandling.Run();

        // E. Returning Values from Async Methods
        Console.WriteLine("\nE. Returning Values from Async Methods\n------------------------------");
        await E_AsyncReturnValue.Run();

        // F. Composing Multiple Tasks: Task.WhenAll
        Console.WriteLine("\nF. Composing Multiple Tasks\n------------------------------");
        await F_AsyncComposition.Run();

        // G. Best Practices & Constraints
        Console.WriteLine("\nG. Best Practices & Constraints\n------------------------------");
        await G_AsyncBestPractices.Run();

        // H. Async Yield Example: Using IAsyncEnumerable and yield
        Console.WriteLine("\nH. Async Yield Example\n------------------------------");
        await H_AsyncYieldExample.Run();
    }
}