# 34_enums

## Enums in C#

An enum (enumeration) is a special value type that lets you define a group of named integer constants. Enums make your code more readable and less error-prone when working with sets of related values.

### Declaring an Enum

```csharp
enum Day
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
```

### Using Enums

```csharp
Day today = Day.Monday;
Console.WriteLine(today); // Output: Monday
int dayValue = (int)today; // Output: 1
```

### Setting Enum Values

- By default, the first value is 0, the next is 1, etc.
- You can assign custom values:

```csharp
enum ErrorCode
{
    None = 0,
    NotFound = 404,
    ServerError = 500
}
```

### Why Use Enums?

- To represent a fixed set of related constants
- To improve code clarity and safety

---

For more, see [w3schools C# Enums](https://www.w3schools.com/cs/cs_enums.php).
