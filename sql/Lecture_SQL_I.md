# SQL for Python Developers - Introduction

## Table of Contents

- [SQL Intro (Why learn SQL when you know Python?)](#sql-intro-why-learn-sql-when-you-know-python)
- [SQL Environment (Setting up your data workspace)](#sql-environment-setting-up-your-data-workspace)
- [SQL Commands (Python lists vs SQL tables)](#sql-commands-python-lists-vs-sql-tables)
- [SQL Conditionals (Like Python if statements, but for data)](#sql-conditionals-like-python-if-statements-but-for-data)
- [SQL LIMIT (Like Python slicing)](#sql-limit-like-python-slicing)
- [SQL ORDER (Like Python sorted())](#sql-order-like-python-sorted)

## SQL Intro (Why learn SQL when you know Python?)

### Why SQL when you already know Python?

You might be thinking: "I can handle data with Python lists, dictionaries, and pandas. Why do I need SQL?" Great question!

1. **Standardization**: Before SQL, each database system had its own unique language for managing data, making it difficult to work with multiple systems or migrate data between them.

2. **Performance**: While Python is great for data processing, SQL databases are **optimized** for storing and retrieving large amounts of data much faster than Python lists.

3. **Scale**: Two IBM engineers Donald Chamberlin and Raymond Boyce invented SQL in the early 1970s to provide a standardized language for interacting with relational databases that could handle enterprise-scale data.

4. **Integration**: Most applications use databases, and SQL is the universal language to communicate with them.

### Python vs SQL: A practical comparison

Let's say you want to merge user data with their email information. Here's how you'd do it in Python:

```python
# Python approach - works great for small datasets
userData = [
  { "id": 1, "first_name": "John", "last_name": "Doe", "age": 25 },
  { "id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30 },
  { "id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25 },
]

relationalData = [
  { "user_id": 1, "email": "john@example.com" },
  { "user_id": 2, "email": "bob@example.com" },
  { "user_id": 3, "email": "jane@example.com" },
]

def merge_user_data(users, relational_data):
    """
    This works fine for small datasets, but imagine doing this
    with millions of records - it would be very slow!
    """
    user_map = {}

    # Create a lookup dictionary - O(n) time complexity
    for user in users:
        user_map[user["id"]] = user.copy()

    # Merge the data - O(m) time complexity
    for data in relational_data:
        user_id = data["user_id"]
        if user_id in user_map:
            user_map[user_id].update(data)

    return list(user_map.values())

merged_data = merge_user_data(userData, relationalData)
print(merged_data)
# Output: [{'id': 1, 'first_name': 'John', 'last_name': 'Doe', 'age': 25, 'user_id': 1, 'email': 'john@example.com'}, ...]
```

**The same operation in SQL** (much simpler and faster for large datasets):

```sql
-- SQL approach - optimized for large datasets, runs in milliseconds even with millions of records
SELECT u.id, u.first_name, u.last_name, u.age, r.email
FROM users u
JOIN relational_data r ON u.id = r.user_id;
```

**Key advantages of SQL over Python for data operations:**

- **Performance**: Database engines are optimized for these operations
- **Memory efficiency**: Doesn't load everything into RAM at once
- **Simplicity**: One line vs many lines of Python code
- **Declarative**: You say "what" you want, not "how" to get it

## SQL Environment (Setting up your data workspace)

### RDBMS: Like Python's data ecosystem, but for persistent storage

Just like Python has different libraries (pandas, NumPy, etc.), there are many **RDBMS** (Relational Database Management Systems) like MySQL, PostgreSQL, Oracle, SQLite. They all use SQL but have slight variations - similar to how different Python frameworks have similar concepts but different syntax.

**Think of RDBMS as:**

- Python lists/dictionaries = temporary storage in memory
- RDBMS = permanent storage on disk with superpowers

#### Key RDBMS features (Python equivalent in parentheses):

1. **Data Organization**: RDBMS organizes data into tables with rows and columns.
   - **Rows** = individual records (like Python dictionaries)
   - **Columns** = data fields (like dictionary keys)
   - **Tables** = collection of similar records (like lists of dictionaries)

**Abstract representation:**
| Column (Attribute) | Column (Attribute) | Column (Attribute) | Column (Attribute) |
|--------------------|--------------------|--------------------|------------------- |
| Row (Record) | Row (Record) | Row (Record) | Row (Record) |
| Row (Record) | Row (Record) | Row (Record) | Row (Record) |
| Row (Record) | Row (Record) | Row (Record) | Row (Record) |

**Real example (like a Python list of dictionaries):**

```python
# This Python structure...
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25}
]
```

**...is represented in SQL as:**
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |
| 2 | Bob | Dylan | 30 |
| 3 | Jane | Doe | 25 |

2. **Data Integrity**: Like Python type hints but enforced! Constraints ensure data quality.
3. **ACID Properties**: Atomicity, Consistency, Isolation, and Durability (like Python's `with` statements for files, but for data).
4. **Relationships**: Connect tables through foreign keys (like Python object references).
5. **Normalization**: Organize data efficiently (like avoiding duplicate code in Python).
6. **Indexing**: Speed up searches (like Python dictionaries vs lists for lookups).
7. **Concurrency Control**: Multiple users can access data safely (like Python's threading locks).
8. **Backup and Recovery**: Protect against data loss (better than manually copying Python pickle files).
9. **Scalability**: Handle millions of records efficiently (way beyond what Python lists can handle in memory).

## SQL Commands (Python lists vs SQL tables)

### From Python data structures to SQL tables

Think of creating SQL tables like defining a Python class or dataclass - you're specifying the structure before adding data.

```mermaid
graph LR;
    A[Start] --> B[Create Database];
    B --> C[Create Table];
    C --> D[Insert Data];
    D --> E[Query Data];
    E --> F[End];
```

### Python lists vs SQL tables

**In previous projects**, you've worked with data from APIs that returns JSON (like Python dictionaries):

```python
# API response - unstructured, can vary
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 25},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25},
]

# Problem: What if someone adds inconsistent data?
users.append({"user_id": "four", "name": "Alice", "years": 28})  # Breaks everything!
```

**The challenge**: In Python, there's no built-in way to enforce data structure. You might use type hints:

```python
from dataclasses import dataclass
from typing import List

@dataclass
class User:
    id: int
    first_name: str
    last_name: str
    age: int

# But Python won't stop you from doing:
users = [User(1, "John", "Doe", 25), {"invalid": "data"}]  # Mixed types!
```

**SQL solves this** by enforcing structure upfront with **CREATE TABLE** (like defining a strict Python class):

```sql
-- Like defining a Python dataclass, but ENFORCED
CREATE TABLE users (
    id SERIAL PRIMARY KEY,        -- Like: id: int (auto-incrementing)
    first_name VARCHAR(255),      -- Like: first_name: str (max 255 chars)
    last_name VARCHAR(255),       -- Like: last_name: str
    age INT                       -- Like: age: int
);
```

This creates an empty table structure (like an empty Python list, but with rules):

| id                       | first_name | last_name | age |
| ------------------------ | ---------- | --------- | --- |
| (empty - ready for data) |            |           |     |

[Learn more about SQL data types](https://www.sqltutorial.org/sql-cheat-sheet/)

### Adding data: Python append() vs SQL INSERT

**Python way** (list.append() or list.extend()):

```python
users = []  # Start with empty list
users.append({"id": 1, "first_name": "John", "last_name": "Doe", "age": 18})
```

**SQL way** (INSERT INTO):

```sql
-- Like: users.append({"first_name": "John", "last_name": "Doe", "age": 18})
INSERT INTO users (first_name, last_name, age)
VALUES ('John', 'Doe', 18);
```

**Result** (SQL automatically generates the ID):
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |

**SQL Best Practices** (like Python PEP 8):

- Use UPPERCASE for SQL keywords (`INSERT`, `INTO`, `VALUES`)
- Use new lines for readability
- Use single quotes for strings
- End statements with semicolons

### Bulk operations: Python extend() vs SQL bulk INSERT

**Python way**:

```python
new_users = [
    {"first_name": "John", "last_name": "Doe", "age": 18},
    {"first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"first_name": "Jane", "last_name": "Doe", "age": 25}
]
users.extend(new_users)  # Add multiple items
```

**SQL way** (much more efficient for large datasets):

```sql
-- Like: users.extend([...]) but optimized for databases
INSERT INTO users (first_name, last_name, age)
VALUES ('John', 'Doe', 18),
       ('Bob', 'Dylan', 30),
       ('Jane', 'Doe', 25);
```

**Result**:
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |
| 2 | Bob | Dylan | 30 |
| 3 | Jane | Doe | 25 |

### CRUD in Python vs SQL

**CRUD** = Create, Read, Update, Delete (the four basic operations on data)

You already know CRUD in Python:

```python
# CREATE
users.append(new_user)

# READ
found_users = [u for u in users if u['age'] > 18]

# UPDATE
for user in users:
    if user['id'] == 1:
        user['age'] = 26

# DELETE
users = [u for u in users if u['id'] != 1]
```

**SQL equivalent** (we'll focus on READ for now):

```sql
-- READ: Get all users (like: return users)
SELECT *
FROM users;
```

**Returns exactly like a Python API response**:
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |
| 2 | Bob | Dylan | 30 |
| 3 | Jane | Doe | 25 |

**To your Python application, this looks like**:

```python
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25},
]
```

### Selecting specific columns (like Python dictionary comprehension)

**Python way**:

```python
# Get only first names: [u['first_name'] for u in users]
first_names = [{"first_name": user["first_name"]} for user in users]
```

**SQL way**:

```sql
-- Like: [{"first_name": u["first_name"]} for u in users]
SELECT first_name
FROM users;
```

**Result**:
| first_name |
| ---------- |
| John |
| Bob |
| Jane |

**Multiple columns** (like selecting specific dictionary keys):

```python
# Python: [{k: u[k] for k in ['first_name', 'last_name']} for u in users]
```

```sql
-- SQL: Much simpler!
SELECT first_name, last_name
FROM users;
```

| first_name | last_name |
| ---------- | --------- |
| John       | Doe       |
| Bob        | Dylan     |
| Jane       | Doe       |

**The result integrates seamlessly with your Python frontend** - it's just like calling an API!

## SQL Conditionals - Filtering data like Python list comprehensions

### Filtering data: Python filter() vs SQL WHERE

You already know how to filter data in Python:

```python
# Python: Filter users by condition
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25}
]

# Get users above 18 - like your if statements!
adults = [user for user in users if user["age"] > 18]
# OR using filter(): list(filter(lambda u: u["age"] > 18, users))
```

**SQL does the same thing, but MUCH faster on large datasets**:

```sql
-- Like: [user for user in users if user["age"] > 18]
SELECT *
FROM users
WHERE age > 18;  -- This is your Python "if" condition!
```

**Result** (identical to your Python filter):
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 2 | Bob | Dylan | 30 |
| 3 | Jane | Doe | 25 |

**To your Python application**:

```python
adults = [
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25}
]
```

### Comparison operators: Same as Python!

SQL comparison operators work exactly like Python:

| Python | SQL          | SQL Example       | Python Equivalent      |
| ------ | ------------ | ----------------- | ---------------------- |
| `==`   | `=`          | `WHERE age = 25`  | `if user["age"] == 25` |
| `!=`   | `!=` or `<>` | `WHERE age != 25` | `if user["age"] != 25` |
| `<`    | `<`          | `WHERE age < 30`  | `if user["age"] < 30`  |
| `>`    | `>`          | `WHERE age > 18`  | `if user["age"] > 18`  |
| `<=`   | `<=`         | `WHERE age <= 25` | `if user["age"] <= 25` |
| `>=`   | `>=`         | `WHERE age >= 21` | `if user["age"] >= 21` |

### Get a specific user by ID (like finding in a Python list)

**Python way**:

```python
# Find user by ID (common in web development)
target_user = [user for user in users if user["id"] == 1]
# OR: next((u for u in users if u["id"] == 1), None)
```

**SQL way**:

```sql
-- Like: [user for user in users if user["id"] == 1]
SELECT *
FROM users
WHERE id = 1;
```

**Result**:
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |

**Perfect for your REST API**:

```python
# GET /users/1 endpoint returns:
user = {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18}
```

### Pattern matching: SQL LIKE vs Python string methods

**Python way**:

```python
# Find names starting with 'Jo'
jo_users = [u for u in users if u["first_name"].startswith("Jo")]
```

**SQL way** (more powerful with wildcards):

```sql
-- Like: [u for u in users if u["first_name"].startswith("Jo")]
SELECT *
FROM users
WHERE first_name LIKE 'Jo%';  -- % means "any characters after Jo"
```

**SQL LIKE patterns** (more flexible than Python):

- `'Jo%'` = starts with "Jo" (like Python `startswith("Jo")`)
- `'%son'` = ends with "son" (like Python `endswith("son")`)
- `'%oh%'` = contains "oh" anywhere (like Python `"oh" in name`)
- `'J_ne'` = J + any single character + ne (like regex `J.ne`)

### List membership: Python 'in' vs SQL IN

**Python way**:

```python
# Get users with specific IDs (like bulk operations)
target_ids = [1, 3]
selected_users = [u for u in users if u["id"] in target_ids]
```

**SQL way** (identical logic):

```sql
-- Like: [u for u in users if u["id"] in [1, 3]]
SELECT *
FROM users
WHERE id IN (1, 3);
```

### Complex logic: Python 'and'/'or' vs SQL AND/OR

**Python way**:

```python
# Get users over 20 with last name 'Doe'
result = [u for u in users
          if u["age"] > 20 and u["last_name"] == "Doe"]
```

**SQL way** (identical logic):

```sql
-- Like: [u for u in users if u["age"] > 20 and u["last_name"] == "Doe"]
SELECT *
FROM users
WHERE age > 20 AND last_name = 'Doe';
```

**Result**:
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 3 | Jane | Doe | 25 |

### Logical operators: Exact same as Python!

| Python | SQL   | SQL Example                              |
| ------ | ----- | ---------------------------------------- |
| `and`  | `AND` | `WHERE age > 18 AND first_name = 'John'` |
| `or`   | `OR`  | `WHERE age < 20 OR age > 25`             |
| `not`  | `NOT` | `WHERE NOT age = 25`                     |

**Python**:

```python
# Users under 20 OR over 25
result = [u for u in users if u["age"] < 20 or u["age"] > 25]
```

**SQL**:

```sql
-- Same logic as Python
SELECT *    -- will return all rows
FROM users  -- from table users
WHERE age < 20 OR age > 25;   -- filter out columns with age value > 18
```

**The key insight**: SQL WHERE is just like Python list comprehensions, but optimized for millions of records!

| id  | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 2   | Bob        | Dylan     | 30  |
| 3   | Jane       | Doe       | 25  |

Data to the frontend will be as follows:

```py
const users = [
  { "id": 2, 2: 'Bob', "last_name": 'Dylan', "age": '30' },
  { "id": 3, 2: 'Jane', "last_name": 'Doe', "age": '25' },
]
```

### Using AND

1. We can filter the data further more by using **AND**

```sql
SELECT *                --  will return all rows
FROM users              --  from table users
WHERE age > 18          --  filter out rows with age value > 18
AND last_name = 'Doe';  --  only keep rows where column "last_name" = 'Doe'
```

| id  | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 3   | Jane       | Doe       | 25  |

Data to the frontend will be as follows:

```py
const users = [{ "id": 3, "first_name": 'Jane', "last_name": 'Doe', "age": '25' }];
```

## SQL LIMIT - Like Python list slicing [:n]

### Pagination: Python list[:n] vs SQL LIMIT

You know how to limit results in Python:

```python
# Python: Get first 2 users (pagination)
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25}
]

first_two = users[:2]  # Slice: get first 2 items
```

**SQL does the same thing** (essential for web apps with large datasets):

```sql
-- Like: users[:2] - get first 2 records
SELECT *
FROM users
LIMIT 2;
```

**Result** (identical to Python slice):
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 1 | John | Doe | 18 |
| 2 | Bob | Dylan | 30 |

**Perfect for your REST API pagination**:

```python
# GET /users?page=1&limit=2
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30}
]
```

### Why LIMIT matters for Python developers

**Without LIMIT** (dangerous with large datasets):

```python
# This could return millions of records!
# Your Python app would crash with memory issues
all_users = database.execute("SELECT * FROM users")
```

**With LIMIT** (safe for production):

```python
# Safe pagination - only loads what you need
page_users = database.execute("SELECT * FROM users LIMIT 10")
```

**Common use cases** (you've probably seen these):

- **Search results**: "Showing 1-10 of 1,547 results"
- **Social media feeds**: Load 20 posts at a time
- **Product listings**: Show 12 products per page
- **API responses**: Limit to prevent timeouts

```sql
-- Mobile app: Load 10 posts for faster loading
SELECT * FROM posts LIMIT 10;

-- Admin dashboard: Load 50 users per page
SELECT * FROM users LIMIT 50;
```

## SQL ORDER BY - Like Python sorted() function

### Sorting data: Python sorted() vs SQL ORDER BY

You already know how to sort lists in Python:

```python
# Python: Sort users by age
users = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18},
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25}
]

# Sort by age (ascending)
sorted_users = sorted(users, key=lambda u: u["age"])

# Sort by age (descending)
sorted_desc = sorted(users, key=lambda u: u["age"], reverse=True)
```

**SQL does the same thing, but faster on large datasets**:

```sql
-- Like: sorted(users, key=lambda u: u["age"], reverse=True)
SELECT *
FROM users
ORDER BY age DESC;  -- DESC = descending (highest first)
```

**Result** (identical to Python sorted with reverse=True):
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 2 | Bob | Dylan | 30 |
| 3 | Jane | Doe | 25 |
| 1 | John | Doe | 18 |

**To your Python application**:

```python
sorted_users = [
    {"id": 2, "first_name": "Bob", "last_name": "Dylan", "age": 30},
    {"id": 3, "first_name": "Jane", "last_name": "Doe", "age": 25},
    {"id": 1, "first_name": "John", "last_name": "Doe", "age": 18}
]
```

### Sort directions: Python reverse parameter vs SQL ASC/DESC

| Python                    | SQL             | SQL Example         | Python Equivalent                                     |
| ------------------------- | --------------- | ------------------- | ----------------------------------------------------- |
| `reverse=False` (default) | `ASC` (default) | `ORDER BY age ASC`  | `sorted(users, key=lambda u: u["age"])`               |
| `reverse=True`            | `DESC`          | `ORDER BY age DESC` | `sorted(users, key=lambda u: u["age"], reverse=True)` |

### Multiple sort criteria: Python tuple keys vs SQL multiple columns

**Python way** (complex nested sorting):

```python
# Sort by last_name first, then by age
sorted_users = sorted(users, key=lambda u: (u["last_name"], u["age"]))
```

**SQL way** (much cleaner syntax):

```sql
-- Like: sorted(users, key=lambda u: (u["last_name"], u["age"]))
SELECT *
FROM users
ORDER BY last_name ASC, age DESC;  -- Multiple criteria
```

**Result** (Doe family first, then by age descending within each family):
| id | first_name | last_name | age |
| --- | ---------- | --------- | --- |
| 3 | Jane | Doe | 25 |
| 1 | John | Doe | 18 |
| 2 | Bob | Dylan | 30 |

### Real-world examples (you've seen these!)

**E-commerce product listing**:

```python
# Python (inefficient for large catalogs)
products = sorted(products, key=lambda p: p["price"], reverse=True)
```

```sql
-- SQL (optimized for databases)
SELECT * FROM products ORDER BY price DESC;
```

**Social media feed**:

```python
# Python (memory-intensive)
posts = sorted(posts, key=lambda p: p["created_at"], reverse=True)
```

```sql
-- SQL (efficient with database indexes)
SELECT * FROM posts ORDER BY created_at DESC LIMIT 20;
```

**Combined with filtering and pagination**:

```sql
-- Get top 10 adult users by age (common web app pattern)
SELECT *
FROM users
WHERE age >= 18          -- Filter: adults only
ORDER BY age DESC        -- Sort: oldest first
LIMIT 10;                -- Paginate: top 10 only
```

**The pattern you'll use everywhere**:

```python
# Your Flask/Django API endpoint
@app.route('/users')
def get_users():
    page_size = request.args.get('limit', 10)
    sort_by = request.args.get('sort', 'age')

    # This SQL replaces complex Python sorting/filtering
    query = f"""
        SELECT * FROM users
        WHERE age >= 18
        ORDER BY {sort_by} DESC
        LIMIT {page_size}
    """
    return database.execute(query)
```

**SQL ORDER BY is just like Python sorted(), but optimized for huge datasets!**
