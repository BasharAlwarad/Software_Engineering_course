### 📚 **Counting Sort Mermaid Diagram for Lecture**

```mermaid
flowchart TD
    A[🎒 Mixed Student Ages<br/>6, 8, 7, 6, 5, 8, 6, 7] --> B[🏫 Group Students by Class Age<br/>Count how many in each class]

    B --> C5[🧺 Class 5<br/>Count = 1]
    B --> C6[🧺 Class 6<br/>Count = 3]
    B --> C7[🧺 Class 7<br/>Count = 2]
    B --> C8[🧺 Class 8<br/>Count = 2]

    C5 --> D[🧮 Rebuild Sorted List]
    C6 --> D
    C7 --> D
    C8 --> D

    D --> E[✅ Final Sorted Ages<br/>5, 6, 6, 6, 7, 7, 8, 8]

    F["📌 Time Complexity:<br/> O(n + k)<br/>n = number of students:<br/> 8<br/>k = range of ages:<br/> 8 - 5 + 1 = 4"]
    E --> F

    %% style F width:400px;

```

---

### 🧠 **Explanation:**

- `n` is the total **number of students** you're sorting (the input size).
- `k` is the **range of unique ages** (from minimum to maximum), which is the number of **"bins" or classes** needed.

This shows how **Counting Sort is fast when `k` is small compared to `n`**.
