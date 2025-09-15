using MyApp;
using Xunit;

// Tests for D_Point: value and reference equality
public class D_Reference_vs_value_equality
{
    // Test that records compare by value, but references differ
    [Fact]
    public void Records_CompareByValue_ButReferencesDiffer()
    {
        var a = new D_Point(1, 2);
        var b = new D_Point(1, 2);
        Assert.Equal(a, b);          // value equality (records)
        Assert.NotSame(a, b);        // different references

        var c = a;
        Assert.Same(a, c);           // same reference
    }
}
