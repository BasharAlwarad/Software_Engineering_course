"""
Student Exercise - Simple Database Practice
==========================================

Complete the TODO sections to practice database skills.
Run index.py first to see how it works!
"""

import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get database connection from environment variable (secure way!)
CONNECTION_STRING = os.getenv('DATABASE_URL')

if not CONNECTION_STRING:
    raise ValueError(
        "DATABASE_URL not found in environment variables. Check your .env file!")


def exercise_1_add_customer():
    """TODO: Add a new customer to the database"""
    print("\n📝 Exercise 1: Add New Customer")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # TODO: Insert a new user with your name and email
    # Hint: INSERT INTO users (name, email) VALUES (%s, %s)
    # your_name = "Your Name"
    # your_email = "your@email.com"
    # cursor.execute("INSERT INTO...", (your_name, your_email))

    print("✅ Exercise 1 completed!")

    conn.commit()
    cursor.close()
    conn.close()


def exercise_2_find_expensive_products():
    """TODO: Find products that cost more than $50"""
    print("\n📝 Exercise 2: Find Expensive Products")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # TODO: Write a query to find products with price > 50
    # Hint: SELECT * FROM products WHERE price > %s
    # cursor.execute("SELECT...", (50,))
    # results = cursor.fetchall()
    # for product in results:
    #     print(f"Expensive: {product[1]} - ${product[2]}")

    print("✅ Exercise 2 completed!")

    cursor.close()
    conn.close()


def exercise_3_customer_orders():
    """TODO: Show all orders for a specific customer"""
    print("\n📝 Exercise 3: Customer Orders")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # TODO: Show all orders for "John Doe"
    # Hint: Use JOIN to connect orders, users, and products tables
    # SELECT u.name, p.name, o.quantity, o.total_price
    # FROM orders o
    # JOIN users u ON o.user_id = u.user_id
    # JOIN products p ON o.product_id = p.product_id
    # WHERE u.name = %s

    print("✅ Exercise 3 completed!")

    cursor.close()
    conn.close()


def exercise_4_total_sales():
    """TODO: Calculate total sales amount"""
    print("\n📝 Exercise 4: Total Sales")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # TODO: Calculate the sum of all order total_price
    # Hint: SELECT SUM(total_price) FROM orders
    # cursor.execute("SELECT SUM...")
    # total = cursor.fetchone()[0]
    # print(f"Total Sales: ${total}")

    print("✅ Exercise 4 completed!")

    cursor.close()
    conn.close()


def run_exercises():
    """Run all exercises"""
    print("🎓 Database Exercises")
    print("=" * 25)

    exercise_1_add_customer()
    exercise_2_find_expensive_products()
    exercise_3_customer_orders()
    exercise_4_total_sales()

    print("\n🎉 All exercises completed!")


if __name__ == "__main__":
    print("📚 Complete the TODO sections in each function")
    print("Then uncomment the line below to test:")
    print()
    # Uncomment when ready to test:
    # run_exercises()
