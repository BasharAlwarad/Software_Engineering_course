using MyApp;
using Xunit;

// Tests for C_Inventory: adding, removing, and retrieving items
public class C_Collections_contains_order_counts
{
    // Test adding and retrieving items
    [Fact]
    public void AddAndGetAll_ContainsItems_InOrder()
    {
        var inv = new C_Inventory();
        inv.Add("apple");
        inv.Add("banana");
        var all = inv.GetAll();
        Assert.Equal(2, all.Count);
        Assert.Contains("apple", all);
        Assert.Collection(all,
            first => Assert.Equal("apple", first),
            second => Assert.Equal("banana", second));
    }

    // Test removing items
    [Fact]
    public void Remove_Item_RemovesSuccessfully()
    {
        var inv = new C_Inventory();
        inv.Add("apple");
        Assert.True(inv.Remove("apple"));
        Assert.DoesNotContain("apple", inv.GetAll());
    }
}
