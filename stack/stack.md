# 🎓 Lecture: Understanding Stacks in Python

---

## 📌 1. **Why Stack?**

> Imagine placing books on a table one by one. You can only remove the **last** one you put down.
> That’s how a **stack** works: **Last In, First Out (LIFO)**.

🔑 We use stacks because they help in:

- Undo/Redo systems
- Function call tracking
- Parsing syntax and expressions
- Backtracking (in games or algorithms)
- Navigating browser history

---

### 🧠 2. **How Python Uses the Stack Internally**

the **call stack**:

Every time a function is called in Python:

- It’s added to the **call stack**
- Python remembers where to return after that function finishes

Example:

```python
def greet():
    print("Hi")

def main():
    greet()

main()
```

Visual stack when `main()` runs:

```text
[call stack]
| greet()     |
| main()      |
| script      |
```

When `greet()` finishes, it’s **popped** from the stack.

Even **recursion** uses the call stack:

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)
```

---

### 🔧 3. **Stack in Python (Implementation)**

Python doesn’t have a built-in `stack` type, but we can use a list:

```python
stack = []

# Push
stack.append("A")

# Pop
last = stack.pop()

# Peek
top = stack[-1]

# Check if empty
print(len(stack) == 0)
```

Or define a simple class:

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return not self.items

    def __str__(self):
        return f"{self.items}"

```

---

### 🧪 4. **Practical Example: File Navigation Using Stack**

Let’s simulate browsing through values saved in a `.txt` file — and use **command-line inputs** to go **back and forth** using two stacks.

#### 🔸 Step 1: Add input values to a file

```python
def save_values():
    with open("data.txt", "w") as file:
        while True:
            val = input("Enter a value (or 'done' to finish): ")
            if val.lower() == "done":
                break
            file.write(val + "\n")

# save_values()
```

---

#### 🔸 Step 2: Load and navigate the values

```python
def navigate_file():
    with open("data.txt", "r") as file:
        lines = [line.strip() for line in file.readlines()]

    back_stack = []
    forward_stack = []
    current = None

    while True:
        cmd = input("\nCommand (next, back, quit): ").strip().lower()

        if cmd == "next":
            if lines:
                if current is not None:
                    back_stack.append(current)
                current = lines.pop(0)
                print(f"Current: {current}")
            else:
                print("No more entries.")

        elif cmd == "back":
            if back_stack:
                forward_stack.append(current)
                current = back_stack.pop()
                print(f"Back to: {current}")
            else:
                print("No previous entries.")

        elif cmd == "quit":
            break

        else:
            print("Unknown command.")
```

Run it like this:

```python
# save_values()      # First time to create the file
# navigate_file()    # Then to browse with back/next
```

---

### 📌 Wrap-Up

- ✅ **Stack** = simple but powerful structure
- 🚀 Used internally in Python and many real-world systems
- 🧠 Helps you manage **history, state, and undo/redo**
- 💻 You just built a file navigator using stack logic!

---
