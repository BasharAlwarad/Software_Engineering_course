// C_Inventory: Demonstrates adding, removing, and retrieving items from a collection
namespace MyApp;

public sealed class C_Inventory
{
    // Internal list to store items
    private readonly List<string> _items = new();

    // Adds an item to the inventory
    public void Add(string item) => _items.Add(item);

    // Removes an item from the inventory, returns true if removed
    public bool Remove(string item) => _items.Remove(item);

    // Returns all items in the inventory as a read-only list
    public IReadOnlyList<string> GetAll() => _items;
}
