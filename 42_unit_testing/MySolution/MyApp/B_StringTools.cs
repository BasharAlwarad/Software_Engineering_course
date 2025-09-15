public static class B_StringTools
{
    // B_StringTools: Demonstrates string reversal and palindrome checking

    public static string Reverse(string s) => new string(s.Reverse().ToArray());
    // Returns the reverse of the input string

    public static bool IsPalindrome(string s)
        => string.Equals(s, Reverse(s), StringComparison.OrdinalIgnoreCase);
    // Returns true if the input string is a palindrome (case-insensitive)
}
