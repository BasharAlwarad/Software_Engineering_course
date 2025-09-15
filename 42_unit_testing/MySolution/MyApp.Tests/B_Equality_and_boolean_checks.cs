using MyApp;
using Xunit;

// Tests for B_StringTools: string reversal and palindrome checking
public class B_Equality_and_boolean_checks
{
    // Test that Reverse returns the expected reversed string
    [Fact]
    public void Reverse_ReturnsExpected()
    {
        Assert.Equal("cba", B_StringTools.Reverse("abc"));
        Assert.NotEqual("abc", B_StringTools.Reverse("abc"));
    }

    // Test that IsPalindrome works for various cases
    [Theory]
    [InlineData("racecar", true)]
    [InlineData("RaceCar", true)]
    [InlineData("hello", false)]
    public void IsPalindrome_Works(string input, bool expected)
    {
        Assert.Equal(expected, B_StringTools.IsPalindrome(input));
        Assert.IsType<bool>(B_StringTools.IsPalindrome(input));
    }
}
