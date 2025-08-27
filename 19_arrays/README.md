# 19_arrays

## Arrays in C#

An array is a fixed-size collection of elements of the same type. Arrays are useful for storing multiple values in a single variable.

### Declaring and Initializing Arrays

```csharp
int[] numbers = new int[3]; // Declaration with size
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

string[] fruits = { "apple", "banana", "cherry" }; // Declaration with initialization
```

### Accessing Array Elements

```csharp
Console.WriteLine(numbers[1]); // 20
```

### Array Properties and Methods

- `Length` — Number of elements in the array
- `Array.Sort(array)` — Sorts the array
- `Array.Reverse(array)` — Reverses the array

### Looping Through Arrays

```csharp
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}

foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

### Multidimensional Arrays

```csharp
int[,] matrix = { {1, 2}, {3, 4} };
Console.WriteLine(matrix[1, 0]); // 3
```

---
