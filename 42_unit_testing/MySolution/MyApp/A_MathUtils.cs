// A_MathUtils: Demonstrates calculating the average of a list and handling invalid input
public static class A_MathUtils
{
    // Returns the average of a sequence of integers
    // Throws ArgumentNullException if input is null
    // Throws ArgumentException if input is empty
    public static double Average(IEnumerable<int> values)
    {
        // Defensive: convert to list and check for null/empty
        var list = values?.ToList() ?? throw new ArgumentNullException(nameof(values));
        if (list.Count == 0)
            throw new ArgumentException("Sequence is empty", nameof(values));
        // Use LINQ to calculate average
        return list.Average();
    }
}
