// Storing different types in arrays, lists, and dictionaries

// Array of object
object[] mixedArray = { 1, "hello", 3.14, true };
foreach (var item in mixedArray)
    Console.WriteLine($"mixedArray: {item} ({item.GetType()})");

// List<object>
var mixedList = new List<object> { 42, "world", 2.71, false };
mixedList.Add(DateTime.Now);
foreach (var item in mixedList)
    Console.WriteLine($"mixedList: {item} ({item.GetType()})");

// Dictionary<object, object>
var mixedDict = new Dictionary<object, object>
{
    { 1, "one" },
    { "two", 2 },
    { 3.0, true }
};
foreach (var kvp in mixedDict)
    Console.WriteLine($"mixedDict: {kvp.Key} ({kvp.Key.GetType()}) → {kvp.Value} ({kvp.Value.GetType()})");
// ...existing code...
// See https://aka.ms/new-console-template for more information

// Arrays
int[] numbers = { 10, 20, 30 };
Console.WriteLine($"Array Length: {numbers.Length}"); // Get the number of elements
Array.Sort(numbers); // Sort the array in ascending order
Console.WriteLine($"Sorted: {string.Join(", ", numbers)}");
Array.Reverse(numbers); // Reverse the array
Console.WriteLine($"Reversed: {string.Join(", ", numbers)}");
Console.WriteLine($"Index of 20: {Array.IndexOf(numbers, 20)}"); // Find the index of 20

// Shallow copy (for arrays of value types, this is a true copy; for reference types, references are copied)
int[] shallowCopy = numbers;
shallowCopy[0] = 99;
Console.WriteLine($"Shallow copy numbers[0]: {numbers[0]}"); // Shows 99, same reference

// Deep copy (new array, values copied)
int[] deepCopy = new int[numbers.Length];
Array.Copy(numbers, deepCopy, numbers.Length);
deepCopy[0] = 42;
Console.WriteLine($"Deep copy deepCopy[0]: {deepCopy[0]}, numbers[0]: {numbers[0]}"); // Different values

bool allAboveZero = Array.TrueForAll(numbers, n => n > 0); // Check if all elements are above zero
Console.WriteLine($"All above zero? {allAboveZero}");
int found = Array.Find(numbers, n => n < 25); // Find first element less than 25
Console.WriteLine($"First < 25: {found}");
foreach (var n in numbers)
    Console.WriteLine($"Array item: {n}"); // Iterate and print each item

// Lists
var shoppingList = new List<string> { "Milk", "Bread", "Eggs" };
shoppingList.Add("Butter"); // Add an item
shoppingList.Remove("Bread"); // Remove an item by value
shoppingList.Insert(1, "Juice"); // Insert at index 1
Console.WriteLine($"Contains Milk? {shoppingList.Contains("Milk")}"); // Check if list contains "Milk"
shoppingList.Sort(); // Sort the list alphabetically
shoppingList.ForEach(item => Console.WriteLine($"List item: {item}")); // Print all items
shoppingList.RemoveAt(0); // Remove item at index 0
Console.WriteLine($"After RemoveAt(0): {string.Join(", ", shoppingList)}");

// Shallow copy (reference copy)
var shallowList = shoppingList;
shallowList[0] = "Changed";
Console.WriteLine($"Shallow copy shoppingList[0]: {shoppingList[0]}"); // Shows "Changed"

// Deep copy (new list, values copied)
var deepList = new List<string>(shoppingList);
deepList[0] = "DeepCopy";
Console.WriteLine($"Deep copy deepList[0]: {deepList[0]}, shoppingList[0]: {shoppingList[0]}"); // Different values

// Copy a list (standard way)
var shoppingListCopy = new List<string>(shoppingList); // Create a shallow copy
Console.WriteLine($"Copied list: {string.Join(", ", shoppingListCopy)}");
shoppingList.Clear(); // Remove all items
Console.WriteLine($"List cleared. Count: {shoppingList.Count}");
shoppingList.AddRange(new[] { "Tea", "Coffee" }); // Add multiple items at once
Console.WriteLine($"After AddRange: {string.Join(", ", shoppingList)}");

// Dictionaries
var capitals = new Dictionary<string, string>
{
    { "Germany", "Berlin" },
    { "France", "Paris" },
    { "Japan", "Tokyo" }
};
capitals.Remove("Japan"); // Remove entry by key
Console.WriteLine($"Contains France? {capitals.ContainsKey("France")}"); // Check if key exists
if (capitals.TryGetValue("France", out var city))
    Console.WriteLine($"France → {city}"); // Try to get value for key
foreach (var kvp in capitals)
    Console.WriteLine($"{kvp.Key} → {kvp.Value}"); // Iterate and print all key-value pairs
Console.WriteLine($"Keys: {string.Join(", ", capitals.Keys)}"); // Print all keys
Console.WriteLine($"Values: {string.Join(", ", capitals.Values)}"); // Print all values

// Shallow copy (reference copy, both variables point to the same dictionary)
var shallowDict = capitals;
shallowDict["France"] = "Changed";
Console.WriteLine($"Shallow copy capitals[\"France\"]: {capitals["France"]}"); // Shows "Changed"

// Deep copy (new dictionary, values copied)
var deepDict = new Dictionary<string, string>(capitals);
deepDict["France"] = "DeepCopy";
Console.WriteLine($"Deep copy deepDict[\"France\"]: {deepDict["France"]}, capitals[\"France\"]: {capitals["France"]}"); // Different values

// Copy a dictionary (standard way)
var capitalsCopy = new Dictionary<string, string>(capitals); // Create a shallow copy
Console.WriteLine($"Copied dictionary: {string.Join(", ", capitalsCopy)}");
capitals.Clear(); // Remove all entries
Console.WriteLine($"Dictionary cleared. Count: {capitals.Count}");
