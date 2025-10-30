# 07_data_types

## Common Data Types in C#

| Type    | Example                | Description                        |
| ------- | ---------------------- | ---------------------------------- |
| int     | int age = 30;          | Whole numbers                      |
| double  | double pi = 3.14;      | Decimal numbers (double precision) |
| float   | float temp = 36.6f;    | Decimal numbers (single precision) |
| decimal | decimal money = 9.99m; | High-precision decimals (money)    |
| bool    | bool isOpen = true;    | True/false values                  |
| char    | char letter = 'A';     | Single character                   |
| string  | string name = "John";  | Text (sequence of characters)      |
| byte    | byte b = 255;          | 8-bit unsigned integer             |
| short   | short s = -1000;       | 16-bit signed integer              |
| long    | long big = 123456789L; | 64-bit signed integer              |
| uint    | uint u = 42U;          | 32-bit unsigned integer            |
| ulong   | ulong ul = 99UL;       | 64-bit unsigned integer            |
| ushort  | ushort us = 65000;     | 16-bit unsigned integer            |
| object  | object o = "anything"; | Base type for all types            |

---

---

## Memory Allocation and Usage

- **Value types** (int, double, bool, etc.) are stored on the stack. Fast access, but limited lifetime (local scope).
- **Reference types** (string, arrays, classes, object) are stored on the heap. The variable holds a reference (pointer) on the stack, but the actual data is on the heap.

### Corner Cases & Errors

- **Overflow:** Value types like byte, short, int, etc. have fixed ranges. Exceeding them causes overflow.
  ```c#
  byte b = 256; // Error: 256 is out of range for byte (0-255)
  int i = 2147483647 + 1; // Wraps around to negative (overflow)
  ```
- **Precision Loss:** float and double can lose precision with large or very small numbers.
  ```c#
  double d = 1.0 / 3.0; // 0.333333... (not exact)
  ```
- **Null Reference:** Reference types can be null. Accessing members of a null object causes a runtime error.
  ```c#
  string s = null;
  Console.WriteLine(s.Length); // NullReferenceException
  ```

## Why So Many Types in C#?

Unlike Python and JavaScript, which are dynamically typed and use a few general-purpose types, C# is statically typed. This means:

- The compiler checks types at compile time for safety and performance.
- Each type is optimized for memory and speed (e.g., int vs long, float vs double).
- You get better error checking and IDE (Integrated Development Environment) support.

## When to Use Each Type

- **int**: Most whole numbers (age, count, index)
- **long**: Very large whole numbers (file sizes, timestamps)
- **float/double**: Decimal numbers (measurements, scientific data). Use double for most cases; float for memory-sensitive cases.
- **decimal**: Money and financial calculations (high precision, no rounding errors)
- **bool**: True/false flags
- **char**: Single characters (A, B, C)
- **string**: Text
- **byte/short/ushort/uint/ulong**: When you need specific memory size or unsigned values
- **object**: When you need to store any type (rare in modern C#)
- **array/class**: Collections or custom data structures

---

**Tip:** Use the simplest type that fits your data. For most numbers, use int or double. For text, use string. For true/false, use bool.
