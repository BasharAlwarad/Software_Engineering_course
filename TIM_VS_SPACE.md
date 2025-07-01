## 🧠 Lecture: Understanding Time Complexities in Python

In this lesson, we’ll demonstrate three common time complexities using simple Python functions:

- `O(n)` – Linear Time
- `O(log n)` – Logarithmic Time
- `O(n log n)` – Linearithmic Time

We will also **measure the time** and **memory** used by each function.

---

### 📦 Setup

Install `memory_profiler` if you don't have it:

```bash
pip install memory-profiler
```

Also, import the necessary modules:

```python
import time
from memory_profiler import memory_usage
```

---

## 1. 🕒 O(n) — Linear Time

```python
def linear_check(boxes):
    for box in boxes:
        _ = box * 2  # Dummy operation
```

### ▶ Measure Time and Memory

```python
import time
from memory_profiler import memory_usage

boxes = list(range(10**6))  # 1 million items

start_time = time.time()
mem_usage = memory_usage((linear_check, (boxes,)))
end_time = time.time()

print("O(n) Time:", end_time - start_time, "seconds")
print("O(n) Memory:", max(mem_usage) - min(mem_usage), "MiB")
```

---

## 2. 🕒 O(log n) — Logarithmic Time

```python
def log_check(boxes):
    left = 0
    right = len(boxes) - 1
    while left <= right:
        mid = (left + right) // 2
        _ = boxes[mid] * 2
        right = mid - 1  # Only go left for simplicity
```

### ▶ Measure Time and Memory

```python
start_time = time.time()
mem_usage = memory_usage((log_check, (boxes,)))
end_time = time.time()

print("O(log n) Time:", end_time - start_time, "seconds")
print("O(log n) Memory:", max(mem_usage) - min(mem_usage), "MiB")
```

---

## 3. 🕒 O(n log n) — Linearithmic Time

```python
def n_log_n_check(boxes):
    for box in boxes:
        temp = boxes.copy()
        while len(temp) > 1:
            mid = len(temp) // 2
            temp = temp[:mid]  # Cut down
```

### ▶ Measure Time and Memory

```python
start_time = time.time()
mem_usage = memory_usage((n_log_n_check, (boxes,)))
end_time = time.time()

print("O(n log n) Time:", end_time - start_time, "seconds")
print("O(n log n) Memory:", max(mem_usage) - min(mem_usage), "MiB")
```

---

## 📊 Summary Table

| Complexity | Function        | Time (s) | Memory (MiB) |
| ---------- | --------------- | -------- | ------------ |
| O(n)       | `linear_check`  | \~?      | \~?          |
| O(log n)   | `log_check`     | \~?      | \~?          |
| O(n log n) | `n_log_n_check` | \~?      | \~?          |

> You can fill in the actual numbers after running the code.

---

### 🧠 Conclusion

- **O(log n)** is the most efficient when possible, but can’t be used for everything.
- **O(n)** is standard and acceptable for large datasets.
- **O(n log n)** appears in efficient sorting and more complex algorithms.
