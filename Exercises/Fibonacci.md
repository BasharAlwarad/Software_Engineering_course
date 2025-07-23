# 🧠 Understanding Fibonacci Algorithms: Five Approaches

## 📌 What is the Fibonacci Sequence?

The Fibonacci sequence is a series where each number is the sum of the two preceding ones:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

It has applications in mathematics, computer science, biology, and finance.

---

## 1. 🚫 Naive Recursion

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

### 📜 Reason

- This is the most intuitive and educational approach.
- Mimics the mathematical definition of Fibonacci.
- Used historically to introduce recursion.

### ⏱ Complexity

- **Time:** O(2^n)
- **Space:** O(n) (call stack depth)

### ✅ Pros

- Very simple and elegant
- Great for learning recursion

### ❌ Cons

- Extremely inefficient
- Exponential growth leads to long runtimes and stack overflows for large `n`

---

## 2. 🧠 Memoization (Top-Down Dynamic Programming)

```python
cache = {0: 0, 1: 1}
def fib(n):
    if n in cache:
        return cache[n]
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
```

### 📜 Reason

- Improves naive recursion by caching intermediate results.
- Inspired by the principle of avoiding repeated work.
- Introduced in the 1960s by Richard Bellman (Dynamic Programming).

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(n)

### ✅ Pros

- Much faster than naive recursion
- Easy to implement

### ❌ Cons

- Still uses recursion and cache memory
- Not as space-efficient as iterative methods

---

## 3. 🔁 Iterative (Bottom-Up Dynamic Programming)

```python
def fib(n):
    if n <= 1:
        return n
    prev2, prev1 = 0, 1
    for _ in range(2, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    return prev1
```

### 📜 Reason

- Avoids recursion entirely.
- Computes results from the ground up.
- Typical approach in efficient dynamic programming.

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(1)

### ✅ Pros

- Very fast
- Minimal memory usage
- Easy to understand and maintain

### ❌ Cons

- Slightly less intuitive than recursive methods

---

## 4. 🧮 Matrix Exponentiation

```python
def matrix_multiply(A, B):
    return [
        [A[0][0]*B[0][0] + A[0][1]*B[1][0], A[0][0]*B[0][1] + A[0][1]*B[1][1]],
        [A[1][0]*B[0][0] + A[1][1]*B[1][0], A[1][0]*B[0][1] + A[1][1]*B[1][1]]
    ]

def matrix_power(matrix, n):
    result = [[1, 0], [0, 1]]
    while n > 0:
        if n % 2 == 1:
            result = matrix_multiply(result, matrix)
        matrix = matrix_multiply(matrix, matrix)
        n //= 2
    return result

def fib(n):
    if n == 0:
        return 0
    base = [[1, 1], [1, 0]]
    return matrix_power(base, n - 1)[0][0]
```

### 📜 Reason

- Based on linear algebra and matrix identities.
- Fibonacci numbers follow a closed-form recurrence that can be represented with matrices.
- Ideal for reducing time complexity.

### ⏱ Complexity

- **Time:** O(log n)
- **Space:** O(1)

### ✅ Pros

- Extremely fast for large `n`
- Very memory efficient

### ❌ Cons

- More complex to implement and understand
- Involves matrix math

---

## 5. 🧮 Binet's Formula (Closed-form expression)

```python
import math

def fib(n):
    sqrt_5 = math.sqrt(5)
    phi = (1 + sqrt_5) / 2
    return round((phi ** n) / sqrt_5)
```

### 📜 Reason

- Derived by Jacques Philippe Marie Binet in 1843.
- Provides a direct mathematical formula to compute Fibonacci numbers.

### ⏱ Complexity

- **Time:** O(1)
- **Space:** O(1)

### ✅ Pros

- Constant time computation
- Elegant mathematical approach

### ❌ Cons

- Floating point errors for large `n`
- Not reliable beyond \~70 due to precision limitations

---

## 📊 Summary Table

| Method                | Time Complexity | Space Complexity | Pros                       | Cons                        |
| --------------------- | --------------- | ---------------- | -------------------------- | --------------------------- |
| Naive Recursion       | O(2^n)          | O(n)             | Simple, intuitive          | Very slow for large `n`     |
| Memoization           | O(n)            | O(n)             | Fast, avoids recomputation | Uses memory                 |
| Iterative             | O(n)            | O(1)             | Fast, memory-efficient     | Less elegant than recursion |
| Matrix Exponentiation | O(log n)        | O(1)             | Super fast, scalable       | Complex implementation      |
| Binet's Formula       | O(1)            | O(1)             | Instant computation        | Inaccurate for large `n`    |

---

## 🧩 Conclusion

Each method has its own use case:

- **For learning**: Start with recursion.
- **For coding interviews**: Use memoization or iteration.
- **For high-performance needs**: Use matrix exponentiation.
- **For quick approximate answers**: Use Binet’s formula.
