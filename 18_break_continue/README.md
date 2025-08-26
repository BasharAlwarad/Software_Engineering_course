# 18_break_continue

## break and continue Statements in C#

### What is break?

- The `break` statement is used to exit a loop or a switch statement immediately.

### What is continue?

- The `continue` statement skips the current iteration of a loop and moves to the next iteration.

---

### break and continue in Loops

#### In a for loop

```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 3)
        break; // exits the loop when i == 3
    Console.WriteLine(i);
}

for (int i = 0; i < 5; i++)
{
    if (i == 2)
        continue; // skips printing 2
    Console.WriteLine(i);
}
```

#### In a while loop

```csharp
int j = 0;
while (j < 5)
{
    if (j == 3)
        break;
    Console.WriteLine(j);
    j++;
}

j = 0;
while (j < 5)
{
    j++;
    if (j == 2)
        continue;
    Console.WriteLine(j);
}
```

---

### break in switch

```csharp
int day = 2;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}
```

---

### break and continue in methods (with loops)

```csharp
void PrintUntil(int stop)
{
    for (int i = 0; i < 10; i++)
    {
        if (i == stop)
            break;
        if (i % 2 == 0)
            continue;
        Console.WriteLine(i);
    }
}
PrintUntil(5);
```

---

### break and continue in if statements

- `break` and `continue` cannot be used directly in a standalone `if` statement; they must be inside a loop or switch. However, you can use them inside an `if` block within a loop or switch.

---
