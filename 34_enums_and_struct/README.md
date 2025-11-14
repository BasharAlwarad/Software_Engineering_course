# 34_enums

An enum (enumeration) is a special value type that lets you define a group of named integer constants. Enums make your code more readable, less error-prone, and easier to maintain when working with sets of related values.

## What, When, Why, and How

- An enum is a named set of related constants (usually integers).
- Each value in an enum has a name and a numeric value.

**When:**

**Why:**

- Improves code clarity and safety (no magic numbers or strings).
- Enables compiler checks and IDE autocompletion.

**How:**

- Declare with the `enum` keyword.
- Use as a type for variables, properties, parameters, etc.

---

## Declaring and Using Enums

```csharp
enum Day : byte // Underlying type can be specified
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

Day today = Day.Monday;
Console.WriteLine(today); // Output: Monday
int dayValue = (int)today; // Output: 1
```

- **Flags attribute (bitwise enums):**
  ```csharp
  [Flags]
  enum FileAccess { None = 0, Read = 1, Write = 2, Execute = 4, ReadWrite = Read | Write }
  FileAccess access = FileAccess.Read | FileAccess.Write;
  bool canWrite = access.HasFlag(FileAccess.Write);
  ```
- **Enum methods:**
  - `Enum.GetValues(typeof(Day))` — iterate all values
  - `Enum.Parse` / `Enum.TryParse` — convert string to enum
  - `Enum.GetUnderlyingType(typeof(Day))` — get the base type

---

## Enums in Classes and Interfaces

Enums are often used as properties, method parameters, or return types in classes and interfaces.

```csharp
enum TaskStatus { NotStarted, InProgress, Completed, Cancelled }

class Task
{
    public string Title { get; set; }
    public TaskStatus Status { get; set; }
    public Task(string title, TaskStatus status)
    {
        Title = title;
        Status = status;
    }

    // Simple helper to change the task status
    public void ChangeStatus(TaskStatus newStatus) => Status = newStatus;
}
```

---

## Comparison: Enum vs Interface vs Collection

| Feature     | Enum                   | Interface                 | Collection                 |
| ----------- | ---------------------- | ------------------------- | -------------------------- |
| Purpose     | Named constants        | Contract for behavior     | Store multiple values      |
| Members     | Values only            | Methods/properties/events | Items (objects)            |
| Inheritance | Single (no base enum)  | Multiple allowed          | N/A                        |
| Use for     | Options, states, flags | Polymorphism, abstraction | Data storage/iteration     |
| Example     | Day.Monday             | IPredator.Hunt()          | List<int>, Dictionary<K,V> |

---

## Real-World Scenarios for Enums

- Days of the week, months, error/status codes
- State machines (e.g., TaskStatus)
- File permissions (with [Flags])
- Options/settings (e.g., display modes)

---

## Small, focused examples

```csharp
// Day enum mirrors System.DayOfWeek (0 = Sunday)
enum Day { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }

// Minimal Task example using TaskStatus
enum TaskStatus { NotStarted, InProgress, Completed, Cancelled }

class Task
{
    public string Title { get; }
    public TaskStatus Status { get; private set; }
    public Task(string title, TaskStatus status) { Title = title; Status = status; }
    public void ChangeStatus(TaskStatus s) => Status = s;
}

// Usage (see Program.cs):
// Day today = (Day)DateTime.Today.DayOfWeek;
// Task t = new Task("Write docs", TaskStatus.InProgress);
// t.ChangeStatus(TaskStatus.Completed);
```

---

## Enum Best Practices and Limitations

- Use enums for closed sets of related values.
- Use [Flags] for combinable options.
- Avoid using enums for open-ended or unrelated values.
- Enums are value types and cannot inherit from other enums or classes.
- For extensible options, consider classes or interfaces instead.

---

## Structs

A `struct` in C# is a value type that is typically used for small, lightweight objects that represent a single value or a small group of related values (for example, a point, a color, or a small coordinate pair). Structs are allocated on the stack or inlined into containing types, which can make them more efficient for small objects. However, because they are value types, they are copied when assigned or passed to methods (unless passed by `ref`).

When to use `struct`:

- Small data structures that have value semantics (e.g., coordinates, colors, small tuples).
- Immutable data is a good fit (use `readonly struct` and readonly properties for immutability).
- Avoid large structs (large copies can be expensive).

Declaring a struct:

```csharp
struct Point
{
    public int X { get; set; }
    public int Y { get; set; }
    public Point(int x, int y) { X = x; Y = y; }
}

readonly struct ImmutablePoint
{
    public int X { get; }
    public int Y { get; }
    public ImmutablePoint(int x, int y) { X = x; Y = y; }
}
```

Key behaviors and examples:

- Copy semantics: assigning one struct to another copies the data. Modifying the copy does not change the original.

```csharp
Point p1 = new Point(2, 3);
Point p2 = p1; // copy
p2.X = 10; // p1.X stays 2
```

- Passing to methods: structs are passed by value by default (a copy). Use `ref` to pass by reference and allow the callee to modify the caller's instance.

```csharp
void IncrementAge(PersonStruct p) { p.Age++; } // modifies only local copy
void IncrementAgeRef(ref PersonStruct p) { p.Age++; } // modifies caller's instance
```

- Interfaces and boxing: a struct can implement interfaces. Casting a struct to an interface type will box it (create an object on the heap), which has a cost.

- Immutable pattern: using `readonly struct` and readonly properties helps avoid accidental copying/mutation and communicates intent.

Examples (see `Program.cs`):

- `Point` (mutable struct) — demonstrates copy behavior and methods.
- `ImmutablePoint` (readonly struct) — shows immutability pattern.
- `PersonStruct` — small example for pass-by-value vs `ref`.

Best practices for structs:

- Keep structs small and immutable when possible.
- Prefer classes for large or reference-semantic objects.
- Be mindful of boxing when using interfaces or `object` typed APIs.
- Use `readonly struct` for logical immutability and to avoid defensive copies.

---

**Class vs Struct**

- **Value vs Reference:** `struct` is a value type (copied on assignment/pass), `class` is a reference type (variables hold references to the same heap object).
- **Memory / Allocation:** Structs are typically stored inline or on the stack; classes are allocated on the heap and managed by the garbage collector.
- **Copy semantics:** Assigning or returning a struct produces a copy of its data; assigning a class variable copies the reference (aliasing the same object).
- **Inheritance & Polymorphism:** Classes support inheritance and virtual dispatch; structs cannot inherit from other types (they implicitly derive from `System.ValueType`) but they can implement interfaces.
- **Constructors & defaults:** Structs have an implicit parameterless constructor that zero-initializes fields; classes can define any constructors and default to `null` when uninitialized.
- **Mutability & size:** Prefer small, immutable structs (`readonly struct`). Large or mutable data types should be classes to avoid expensive copies and subtle bugs.
- **Boxing cost:** Casting a struct to `object` or an interface causes boxing (heap allocation), which has runtime cost.
- **Common pitfalls:** Mutable structs stored in collections or exposed via properties can behave unexpectedly because operations often work on copies. Passing a struct to a method copies it unless you use `ref`/`out`.
- **When to choose which:** Use structs for small, immutable value-like types (e.g., `Point`, `Color`). Use classes for objects with identity, large state, or when you need inheritance.

Example (behavior difference):

```csharp
// Value type (struct)
struct Point { public int X, Y; public Point(int x,int y){X=x;Y=y;} }

// Reference type (class)
class Person { public int Age; public Person(int a){Age=a;} }

// Value type copy
Point p1 = new Point(1,2);
Point p2 = p1;
p2.X = 10; // p1.X == 1, p2.X == 10

// Reference type aliasing
Person a = new Person(30);
Person b = a;
b.Age = 31; // a.Age == 31, b.Age == 31
```

See `Program.cs` for a minimal demo that prints these differences.
