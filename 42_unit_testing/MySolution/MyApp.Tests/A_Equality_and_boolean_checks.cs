using MyApp;
using Xunit;

// Tests for A_MathUtils: average calculation and error handling
public class A_Equality_and_boolean_checks
{
    // Test that Average throws for null or empty input
    [Fact]
    public void Average_Throws_OnNullOrEmpty()
    {
        Assert.Throws<ArgumentNullException>(() => A_MathUtils.Average(null!));
        Assert.Throws<ArgumentException>(() => A_MathUtils.Average(Array.Empty<int>()));
    }

    // Test that Average returns the correct value
    [Fact]
    public void Average_ReturnsExpected()
    {
        var result = A_MathUtils.Average(new[] { 2, 4, 6 });
        Assert.Equal(4.0, result, precision: 5);
    }
}
