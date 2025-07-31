# Simple Ecommerce Database Project

## 📚 Learning Goals

- Connect to Neon PostgreSQL database
- Create tables with foreign key relationships
- Insert and query data
- Use JOIN queries to combine data from multiple tables

## 🗄️ Database Structure

```
users (user_id, name, email)
products (product_id, name, price, stock)
orders (order_id, user_id, product_id, quantity, total_price)
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pip install psycopg2-binary python-dotenv
```

### 2. Setup Environment Variables

Create a `.env` file with your database connection:

```
DATABASE_URL=your_neon_connection_string_here
```

**Note:** The `.env` file is already provided for this demo.

### 3. Run the Demo

```bash
python index.py
```

### 4. Try Exercises

```bash
python exercises.py
```

### 3. Try Exercises

```bash
python exercises.py
```

## 📋 What You'll Learn

### Demo Script (`simple_demo.py`)

- ✅ Connect to cloud database
- ✅ Create 3 related tables
- ✅ Insert sample data
- ✅ Query with JOINs
- ✅ Display results

### Student Exercises (`exercises.py`)

1. Add new customers
2. Find expensive products
3. Show customer orders
4. Calculate total sales

## 🎯 Key Concepts

**Database Connection:**

```python
# Load from environment variables (secure!)
load_dotenv()
CONNECTION_STRING = os.getenv('DATABASE_URL')
conn = psycopg2.connect(CONNECTION_STRING)
cursor = conn.cursor()
```

**Create Table with Foreign Key:**

```sql
CREATE TABLE orders (
    user_id INTEGER REFERENCES users(user_id)
);
```

**JOIN Query:**

```sql
SELECT u.name, p.name, o.quantity
FROM orders o
JOIN users u ON o.user_id = u.user_id
JOIN products p ON o.product_id = p.product_id
```

## 🔐 Security Best Practices

- ✅ **Environment Variables**: Database credentials stored in `.env` file
- ✅ **Parameterized Queries**: Using `%s` placeholders to prevent SQL injection
- ✅ **Connection Management**: Always close connections properly
- ✅ **Error Handling**: Graceful error handling for database operations

Perfect for learning database fundamentals! 🎓
