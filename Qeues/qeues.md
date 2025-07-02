# 🧑‍🏫 Lecture: **Queues in Python**

---

## 📌 1. Why Queues?

### 🔹 Definition

A **Queue** is a linear data structure that uses the **FIFO** (First In, First Out) principle.

### 🔹 Real-Life Analogy

- Think of a **line at a supermarket**:
  The first customer in line is the first to be served.

### 🔹 Why Use Queues?

- They **preserve order**.
- Useful in **scenarios with waiting or processing**.
- Simplify **task management**, **communication**, and **fair access**.

---

## 📌 2. Queues in Python & Programming Concepts

### ✅ Where Are Queues Used?

| Use Case                       | Description                             |
| ------------------------------ | --------------------------------------- |
| **Task scheduling**            | OS runs programs in order               |
| **Message queues**             | Systems like Kafka, RabbitMQ            |
| **Breadth-first search (BFS)** | Graph traversal algorithms              |
| **Multithreading**             | Thread-safe queues in parallel programs |
| **Web servers**                | Handling HTTP requests                  |

### ✅ Python Modules with Queues

- `collections.deque` → Fast and flexible
- `queue.Queue` → Thread-safe queues for concurrency

---

## 📌 3. Building Queues in Python

### 🛠 Option 1: Using `collections.deque` (Recommended)

```python
from collections import deque

queue = deque()

# Enqueue
queue.append("Alice")
queue.append("Bob")

# Dequeue
served = queue.popleft()
print(f"Served: {served}")  # Output: Alice

# Peek
print(f"Next: {queue[0]}")  # Output: Bob
```

---

### 🛠 Option 2: Custom Queue Class

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[0] if not self.is_empty() else None

    def __str__(self):
        return f"{self.items}"
```

### ✅ Example Usage

```python

q = Queue()
q.enqueue("Task 1")
q.enqueue("Task 2")
print(q)
print(q.dequeue())
print(q.peek())

```

---

## 📌 4. Real-Life Example: Queue at a Coffee Shop

### ☕ Scenario:

- Customers arrive and wait for coffee.
- Each customer is served in the order they arrived.

```python
from collections import deque

coffee_queue = deque()

# Customers arriving
coffee_queue.append("Sarah")
coffee_queue.append("John")
coffee_queue.append("Emma")

# Serving
while coffee_queue:
    person = coffee_queue.popleft()
    print(f"Serving coffee to {person}")
```

### 🖥 Output:

```
Serving coffee to Sarah
Serving coffee to John
Serving coffee to Emma
```

---

## 📚 Recap

| Concept      | Key Point                                  |
| ------------ | ------------------------------------------ |
| FIFO         | First in, first out                        |
| Uses         | Scheduling, networking, multithreading     |
| Python Tools | `deque`, `queue.Queue`, custom class       |
| Real Example | Coffee shop, customer service, print queue |

---
