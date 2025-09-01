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

---

## Advanced Enum Features

- **Custom underlying types:**
  ```csharp
  enum Day : byte { Sunday, Monday, ... }
  ```
- **Custom values:**
  ```csharp
  enum ErrorCode { None = 0, NotFound = 404, ServerError = 500 }
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
}

interface IStateful
{
    TaskStatus Status { get; set; }
    void ChangeStatus(TaskStatus newStatus);
}

class StatefulTask : IStateful
{
    public TaskStatus Status { get; set; }
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

## More Enum Examples (Sync with Program.cs)

```csharp
// Enum underlying type
Console.WriteLine($"Underlying type of Day: {Enum.GetUnderlyingType(typeof(Day))}");

// Flags enum
FileAccess access = FileAccess.Read | FileAccess.Write;
Console.WriteLine($"File access: {access}"); // Output: Read, Write
bool canWrite = access.HasFlag(FileAccess.Write);
Console.WriteLine($"Can write? {canWrite}");

// Enum methods
foreach (var d in Enum.GetValues(typeof(Day)))
    Console.WriteLine($"- {d} ({(int)d})");

// Parsing enums
string input = "Friday";
if (Enum.TryParse(input, out Day parsedDay))
    Console.WriteLine($"Parsed day: {parsedDay}");

// Using enums in a class
Task t = new Task("Write docs", TaskStatus.InProgress);
Console.WriteLine($"Task: {t.Title}, Status: {t.Status}");

// Using enums in an interface
StatefulTask st = new StatefulTask { Status = TaskStatus.NotStarted };
st.ChangeStatus(TaskStatus.Completed);
Console.WriteLine($"StatefulTask status: {st.Status}");

// ErrorCode example
ErrorCode code = ErrorCode.NotFound;
Console.WriteLine($"Error code: {code} ({(int)code})");

// Enum in switch
switch (today)
{
    case Day.Saturday:
    case Day.Sunday:
        Console.WriteLine("It's the weekend!");
        break;
    default:
        Console.WriteLine("It's a weekday.");
        break;
}
```

---

## Enum Best Practices and Limitations

- Use enums for closed sets of related values.
- Use [Flags] for combinable options.
- Avoid using enums for open-ended or unrelated values.
- Enums are value types and cannot inherit from other enums or classes.
- For extensible options, consider classes or interfaces instead.
