# AVL Tree Rotations – Fixing Unbalanced Trees

AVL Trees are **self-balancing Binary Search Trees**. When nodes are inserted or deleted, the tree may become **unbalanced**. To restore balance, **rotations** are applied.

Each case includes:

- Trees with multiple levels
- Realistic subtrees (instead of placeholders)
- Edge weights labeled by level (`|0|` at leaves, incrementing upward)

---

## 1. LL (Left-Left) Imbalance

### 🔴 Problem:

Inserting a node into the **left subtree of the left child** creates a left-heavy imbalance.

### 🧠 Before Insertion:

```mermaid
graph TD
    A[50]
    B[30]
    C[20]
    D[10]
    E[25]
    F[35]
    G[45]
    A -- "|2|" --> B
    B -- "|1|" --> C
    C -- "|0|" --> D
    C -- "|0|" --> E
    B -- "|0|" --> F
    A -- "|0|" --> G
```

- Node `20` inserted → imbalance at `50` (balance factor > 1)

### ✅ Solution: **Right Rotation on 50**

```mermaid
graph TD
    B[30]
    C[20]
    A[45]
    D[10]
    E[25]
    F[35]
    G[50]
    B -- "|1|" --> C
    B -- "|1|" --> A
    C -- "|0|" --> D
    C -- "|0|" --> E
    A -- "|0|" --> F
    A -- "|0|" --> G
```

---

## 2. RR (Right-Right) Imbalance

### 🔴 Problem:

Inserting a node into the **right subtree of the right child** creates a right-heavy imbalance.

### 🧠 Before Insertion:

```mermaid
graph TD
    A[10]
    G[20]
    B[30]
    D[35]
    E[45]
    F[25]
    C[40]
    A -- "|2|" --> B
    B -- "|1|" --> C
    C -- "|0|" --> D
    C -- "|0|" --> E
    B -- "|0|" --> F
    A -- "|0|" --> G
```

- Node `40` inserted → imbalance at `10` (balance factor < -1)

### ✅ Solution: **Left Rotation on 10**

```mermaid
graph TD
    B[30]
    A[10]
    C[40]
    F[25]
    G[20]
    D[35]
    E[45]
    B -- "|1|" --> A
    B -- "|1|" --> C
    A -- "|0|" --> G
    A -- "|0|" --> F
    C -- "|0|" --> D
    C -- "|0|" --> E
```

---

## 3. LR (Left-Right) Imbalance

### 🔴 Problem:

A node is inserted into the **right subtree of the left child**, forming a zig-zag.

### 🧠 Before Insertion:

```mermaid
graph TD
    A[50]
    B[30]
    D[35]
    E[45]
    F[25]
    C[40]
    G[20]
    A -- "|2|" --> B
    B -- "|1|" --> C
    B -- "|0|" --> F
    C -- "|0|" --> D
    C -- "|0|" --> E
    A -- "|0|" --> G
```

- Node `40` inserted → imbalance at `50`

### ✅ Solution:

#### Step 1: **Left Rotation on 30**

```mermaid
graph TD
    A[50]
    C[40]
    B[30]
    D[35]
    E[45]
    F[25]
    G[20]
    A -- "|2|" --> C
    C -- "|1|" --> B
    C -- "|0|" --> E
    B -- "|0|" --> F
    B -- "|0|" --> D
    A -- "|0|" --> G
```

#### Step 2: **Right Rotation on 50**

```mermaid
graph TD
    C[40]
    B[30]
    A[50]
    D[35]
    E[45]
    F[25]
    G[20]
    C -- "|1|" --> B
    C -- "|1|" --> A
    B -- "|0|" --> F
    B -- "|0|" --> D
    A -- "|0|" --> E
    A -- "|0|" --> G
```

---

## 4. RL (Right-Left) Imbalance

### 🔴 Problem:

A node is inserted into the **left subtree of the right child**, forming a mirrored zig-zag.

### 🧠 Before Insertion:

```mermaid
graph TD
    A[10]
    B[30]
    C[20]
    D[15]
    E[22]
    F[35]
    G[40]
    A -- "|2|" --> B
    B -- "|1|" --> C
    B -- "|0|" --> F
    C -- "|0|" --> D
    C -- "|0|" --> E
    F -- "|0|" --> G
```

- Node `20` inserted → imbalance at `10`

### ✅ Solution:

#### Step 1: **Right Rotation on 30**

```mermaid
graph TD
    A[10]
    C[20]
    B[30]
    D[15]
    E[22]
    F[35]
    G[40]
    A -- "|2|" --> C
    C -- "|1|" --> D
    C -- "|1|" --> B
    B -- "|0|" --> E
    B -- "|0|" --> F
    F -- "|0|" --> G
```

#### Step 2: **Left Rotation on 10**

```mermaid
graph TD
    C[20]
    A[10]
    B[30]
    D[15]
    E[22]
    F[35]
    G[40]
    C -- "|1|" --> A
    C -- "|1|" --> B
    A -- "|0|" --> D
    B -- "|0|" --> E
    B -- "|0|" --> F
    F -- "|0|" --> G
```

```mermaid
%% graph TD
%%     C((20))
%%     A[10]
%%     B[30]
%%     D[15]
%%     E[22]
%%     F[35]
%%     G([40])

%%     C --|1| --> A
%%     C --|1| --> B
%%     A --|0| --> D
%%     B --|0| --> E
%%     B --|0| --> F
%%     F --|0| --> G

%%     linkStyle 0 stroke:#ff0000,stroke-width:5px
%%     linkStyle 5 stroke:#0000ff,stroke-width:2px
```

---

## 🌳 Summary of Rotations

| Imbalance | Tree Shape           | Fix                       |
| --------- | -------------------- | ------------------------- |
| LL        | Heavy on left-left   | **Right Rotation**        |
| RR        | Heavy on right-right | **Left Rotation**         |
| LR        | Zig-zag left-right   | **Left → Right Rotation** |
| RL        | Zig-zag right-left   | **Right → Left Rotation** |

AVL Trees guarantee **O(log n)** operations for **search, insert, delete** by keeping the height difference between subtrees at most **1** through timely rebalancing.
