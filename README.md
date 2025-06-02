```pgsql
+-------------------------------+
|           STACK               |  ← Fast, small, automatic
+-------------------------------+
| make_order() call             |
| ├── burger: "Cheeseburger"    |  ← Stored directly in stack or points to string in heap
| └── ingredients: [Ref ID#123] |  ← Reference to a list in heap
+-------------------------------+

           ↓ (references)

+-------------------------------+
|           HEAP                |  ← Large, slower, dynamic
+-------------------------------+
| ID#123: ["bun", "patty",      |
|         "cheese"]             |  ← Actual list object in memory
+-------------------------------+

```

```pgsql
+------------------------------+
|   Program Instructions       | ← Code section (binary code)
+------------------------------+
|   Global / Static Variables  |
+------------------------------+
|   Stack                      | ← Grows **downward**
|   (Function calls, local vars)|
+------------------------------+
|                              |
|           FREE SPACE         |
|                              |
+------------------------------+
|   Heap                       | ← Grows **upward**
|   (Dynamic objects, lists)   |
+------------------------------+

```

## 📥 1. Diagram for Stack (Function Calls)

```mermaid
graph TD
    Start[Start Program]
    A["main()"]
    B["make_order()"]
    C["burger = "Cheeseburger""]
    D[ingredients = reference to list in heap]
    End["Function Returns (stack cleared)"]

    Start --> A --> B --> C --> D --> End


```

## 📦 2.Diagram for Heap (Objects Stored)

```mermaid
graph TD
    A["ingredients reference (from stack)"]
    B["List Object ID#123"]
    B1["'bun'"]
    B2["'patty'"]
    B3["'cheese'"]

    A --> B
    B --> B1
    B --> B2
    B --> B3


```

## 🧠 3. Diagram for RAM Memory Layout

```mermaid
graph TD
    A["Program Instructions (binary code)"]
    B["Global / Static Variables"]
    C["Stack (function frames)"]
    D["Free Memory (unallocated)"]
    E["Heap (objects, dynamic memory)"]

    A --> B --> C
    C -. grows downward .-> D
    E -. grows upward .-> D


```
