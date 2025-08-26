# 08_type_casting

## Type Casting in C#

### What is Type Casting?

Type casting is when you convert a variable from one data type to another. In C#, there are two main types of casting:

- **Implicit Casting (automatically):**

  - From a smaller type to a larger type size (e.g., `int` to `double`).
  - Safe because there is no data loss.
  - Example:
    ```csharp
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double
    Console.WriteLine(myDouble); // Output: 9
    ```

- **Explicit Casting (manually):**
  - From a larger type to a smaller type size (e.g., `double` to `int`).
  - You need to specify the type in parentheses. Data might be lost.
  - Example:
    ```csharp
    double myDouble = 9.78;
    int myInt = (int)myDouble; // Manual casting: double to int
    Console.WriteLine(myInt); // Output: 9
    ```

### Convert Class

You can also use methods from the `Convert` class to convert between types:

```csharp
int myInt = 10;
double myDouble = 5.25;
bool myBool = true;

Console.WriteLine(Convert.ToString(myInt));    // "10"
Console.WriteLine(Convert.ToDouble(myInt));    // 10.0
Console.WriteLine(Convert.ToInt32(myDouble));  // 5
Console.WriteLine(Convert.ToString(myBool));   // "True"
```

---

Use type casting to safely convert between types as needed in your programs. For more, see [w3schools C# Type Casting](https://www.w3schools.com/cs/cs_type_casting.php).
