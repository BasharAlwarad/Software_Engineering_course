# 💻 Neon SQL E-Commerce Schema Task

In this task, you will create a basic e-commerce database using Neon (PostgreSQL) with three tables: `users`, `products`, and `orders`. Your goal is to define the schema with proper relationships, using foreign keys.

---

## 🎯 Objectives

- Create tables with proper `id` primary keys that auto-increment.
- Add automatic `created_at` and `updated_at` timestamps.
- Create a foreign key in the `orders` table referencing the `users` table.
- Create a list (array) of product IDs in the `orders` table as foreign keys.

---

## 📦 Tables Schema

### 🧑 users

| Column     | Type                    | Description           |
| ---------- | ----------------------- | --------------------- |
| id         | SERIAL PRIMARY KEY      | Auto-incrementing ID  |
| name       | TEXT                    | Full name of the user |
| email      | TEXT UNIQUE             | User's email address  |
| age        | INTEGER                 | User's age            |
| created_at | TIMESTAMP DEFAULT now() | Time of creation      |
| updated_at | TIMESTAMP DEFAULT now() | Last update time      |

---

### 🛒 products

| Column     | Type                    | Description          |
| ---------- | ----------------------- | -------------------- |
| id         | SERIAL PRIMARY KEY      | Auto-incrementing ID |
| name       | TEXT                    | Product name         |
| price      | NUMERIC(10, 2)          | Product price        |
| created_at | TIMESTAMP DEFAULT now() | Time of creation     |
| updated_at | TIMESTAMP DEFAULT now() | Last update time     |

---

### 📃 orders

| Column      | Type                    | Description                                      |
| ----------- | ----------------------- | ------------------------------------------------ |
| id          | SERIAL PRIMARY KEY      | Auto-incrementing ID                             |
| user_id     | INTEGER                 | Foreign key referencing `users(id)`              |
| product_ids | INTEGER[ ]              | Array of foreign keys referencing `products(id)` |
| created_at  | TIMESTAMP DEFAULT now() | Time of creation                                 |
| updated_at  | TIMESTAMP DEFAULT now() | Last update time                                 |

---

## ✅ Instructions

1. Use Neon or any PostgreSQL-compatible environment.
2. Write the SQL statements to create the tables and relationships.
3. Make sure all constraints and data types are set correctly.
4. Insert some sample data to test your schema (e.g., 5 users, 10 products, 15 orders).
5. Write an SQL query to list all orders along with the user's name and email who placed each order.
6. Write an SQL query to find all products that have been included in at least one order.
7. Write an SQL query to calculate the total value of all products in each order and display it along with the order ID and user name.
8. Write an SQL query to fetch users who have placed at least one order and are older than 18.
9. Write SQL queries to demonstrate the relationships between the tables, including:
   - Fetching all orders with user details.
   - Listing products in each order.
   - Counting total orders per user.
10. Perform all **four types of SQL joins** (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`) using your tables.

---

## 💡 Hints

- `SERIAL PRIMARY KEY` auto-generates unique IDs.
- `TIMESTAMP DEFAULT now()` sets a timestamp when the row is created, but it won’t auto-update on changes—manually set `updated_at = now()` in your `UPDATE` queries.
- Use `JOIN` to combine data from multiple tables:
  - `INNER JOIN`: Only rows with matches in both tables.
  - `LEFT JOIN`: All rows from the left table, even if no match on the right.
  - `RIGHT JOIN`: All rows from the right table, even if no match on the left.
  - `FULL OUTER JOIN`: All rows from both sides, with NULLs where there's no match.
- Use `ANY()` to check if a value exists in an array (e.g., `WHERE product.id = ANY(order.product_ids)`).
- Use `UNNEST()` to break apart an array into multiple rows (e.g., to join products to each order).
- Use `GROUP BY` with `COUNT()`, `SUM()`, or `AVG()` for aggregates like:
  - Total orders per user
  - Total revenue per order
- To test joins, start with small example queries and check intermediate results.
- If something doesn't work as expected, try breaking your query into steps using **CTEs** (`WITH` statements).
- Add an `age` column to `users` so you can filter users who are above 18.
- For sample data, insert:
  - 5 users (make sure some are older than 18)
  - 10 products with different prices
  - 15 orders with various combinations of products
