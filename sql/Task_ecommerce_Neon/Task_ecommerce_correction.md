Here’s a correction for your Neon SQL e-commerce task. It includes:

- Table creation with proper relationships
- Sample data insertion
- SQL queries for all the listed instructions

---

# ✅ SQL Correction – E-Commerce Task

This file contains the SQL commands to build and test the e-commerce schema described in the assignment.

---

## 🔧 1. Create Tables

**Description:** This section creates the foundational database schema with three related tables. We define primary keys for unique identification, foreign key relationships to maintain data integrity, and use appropriate data types. The `SERIAL` type auto-increments IDs, `REFERENCES` creates foreign key constraints, and `INTEGER[]` stores arrays of product IDs in orders.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_ids INTEGER[] NOT NULL,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);
```

---

## 🧪 2. Insert Sample Data

**Description:** This section populates our tables with test data to demonstrate queries. We insert users with varying ages, products with different prices, and orders that reference existing users and products. The `ARRAY[]` syntax creates arrays of product IDs, simulating a shopping cart with multiple items.

```sql
INSERT INTO users (name, email, age) VALUES
('Alice', 'alice@example.com', 25),
('Bob', 'bob@example.com', 30),
('Charlie', 'charlie@example.com', 17),
('Dana', 'dana@example.com', 19),
('Eli', 'eli@example.com', 22);

INSERT INTO products (name, price) VALUES
('Laptop', 1200.00),
('Headphones', 150.00),
('Keyboard', 70.00),
('Mouse', 50.00),
('Monitor', 300.00),
('Chair', 180.00),
('Desk', 250.00),
('USB Cable', 10.00),
('Webcam', 90.00),
('Microphone', 110.00);

INSERT INTO orders (user_id, product_ids) VALUES
(1, ARRAY[1, 2]),
(1, ARRAY[3]),
(2, ARRAY[4, 5, 6]),
(2, ARRAY[1, 3]),
(3, ARRAY[2, 7]),
(4, ARRAY[1, 2, 3]),
(4, ARRAY[8]),
(5, ARRAY[9, 10]),
(1, ARRAY[5]),
(2, ARRAY[6]),
(5, ARRAY[3, 7]),
(3, ARRAY[8, 9]),
(2, ARRAY[1]),
(4, ARRAY[10]),
(5, ARRAY[2, 4]);
```

---

## 🔍 3. Queries

### 3.1 List all orders with user name and email

**Description:** This demonstrates a basic INNER JOIN operation. We're combining data from two tables (orders and users) using the foreign key relationship. The JOIN connects orders to their corresponding users, allowing us to display order IDs alongside user information.

```sql
SELECT
    orders.id AS order_id,
    users.name,
    users.email
FROM orders
JOIN users ON orders.user_id = users.id;
```

---

### 3.2 Find all products that have been included in at least one order

**Description:** This query demonstrates working with arrays and the UNNEST function. Since product_ids is stored as an array, we use UNNEST to expand each array into individual rows, then JOIN with the products table. DISTINCT ensures each product appears only once, even if ordered multiple times.

```sql
SELECT DISTINCT p.*
FROM products p
JOIN (
    SELECT UNNEST(product_ids) AS product_id FROM orders
) AS o ON p.id = o.product_id;
```

---

### 3.3 Total value of products in each order, with order ID and user name

**Description:** This complex query combines multiple JOINs with aggregation. We UNNEST the product array, JOIN with both users and products tables, then use SUM() with GROUP BY to calculate total order values. This demonstrates how to perform calculations across related tables.

```sql
SELECT
    o.id AS order_id,
    u.name AS user_name,
    SUM(p.price) AS total_value
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN UNNEST(o.product_ids) AS pid ON TRUE
JOIN products p ON p.id = pid
GROUP BY o.id, u.name;
```

---

### 3.4 Fetch users who have placed at least one order and are older than 18

**Description:** This query combines JOIN operations with WHERE clause filtering. We use DISTINCT to avoid duplicate users (since a user might have multiple orders), and the WHERE clause filters by age. This shows how to apply business logic constraints to relational data.

```sql
SELECT DISTINCT u.*
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.age > 18;
```

---

### 3.5 Demonstrate relationships between tables

#### a) All orders with user details

**Description:** This query retrieves comprehensive order information by joining orders with complete user profiles. It demonstrates how foreign keys enable us to access related data across tables.

```sql
SELECT o.id AS order_id, u.*
FROM orders o
JOIN users u ON o.user_id = u.id;
```

#### b) Listing products in each order

**Description:** This query expands order details by showing individual products within each order. We UNNEST the product array and JOIN with product details, then ORDER BY to group products by order. This creates a detailed order breakdown.

```sql
SELECT
    o.id AS order_id,
    p.name AS product_name,
    p.price
FROM orders o
JOIN UNNEST(o.product_ids) AS pid ON TRUE
JOIN products p ON p.id = pid
ORDER BY o.id;
```

#### c) Counting total orders per user

**Description:** This query demonstrates aggregation with GROUP BY. We count how many orders each user has placed using COUNT() function. This type of query is useful for analytics and understanding customer behavior patterns.

```sql
SELECT u.name, COUNT(o.id) AS total_orders
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name;
```

---

## 🔁 4. Demonstrate All Types of SQL Joins

**Description:** This section teaches the four main types of SQL JOINs by showing practical examples. Each JOIN type returns different result sets, helping students understand when to use each approach based on their data requirements.

#### INNER JOIN (users with matching orders)

**Description:** INNER JOIN returns only rows where there's a match in both tables. This shows users who have actually placed orders, excluding users with no orders.

```sql
SELECT u.name, o.id AS order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

#### LEFT JOIN (all users, even those with no orders)

**Description:** LEFT JOIN returns all records from the left table (users) and matching records from the right table (orders). Users without orders will show NULL for order_id, helping identify inactive customers.

```sql
SELECT u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

#### RIGHT JOIN (all orders, even if user is missing)

**Description:** RIGHT JOIN returns all records from the right table (orders) and matching records from the left table (users). This would show orders even if user data is missing (though this scenario is unlikely with proper foreign key constraints).

```sql
SELECT u.name, o.id AS order_id
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
```

#### FULL OUTER JOIN (all users and all orders, matched where possible)

**Description:** FULL OUTER JOIN returns all records from both tables, showing matches where they exist and NULL values where they don't. This provides a complete view of all users and all orders, whether they're related or not.

```sql
SELECT u.name, o.id AS order_id
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
```

---
