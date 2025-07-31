"""
SOLUTIONS: Student Database Exercises
===================================

This file contains the solutions to all student exercises.
Use this for grading and to help students who are stuck.

"""

import psycopg2
from psycopg2.extras import RealDictCursor


class ExerciseSolutions:
    def __init__(self):
        self.connection_string = "postgresql://neondb_owner:npg_46gcwfbKjlae@ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
        self.conn = None
        self.cursor = None

    def connect(self):
        try:
            self.conn = psycopg2.connect(self.connection_string)
            self.cursor = self.conn.cursor(cursor_factory=RealDictCursor)
            print("✅ Connected to database")
            return True
        except Exception as e:
            print(f"❌ Connection error: {e}")
            return False

    def close_connection(self):
        if self.cursor:
            self.cursor.close()
        if self.conn:
            self.conn.close()
        print("🔒 Connection closed")

    # SOLUTION 1: Find Popular Products
    def find_most_popular_products(self):
        """Solution: Query to find most popular products"""
        try:
            query = """
            SELECT 
                p.product_name,
                COALESCE(SUM(o.quantity), 0) as total_sold
            FROM products p
            LEFT JOIN orders o ON p.product_id = o.product_id
            GROUP BY p.product_id, p.product_name
            ORDER BY total_sold DESC
            """

            self.cursor.execute(query)
            results = self.cursor.fetchall()

            print("\n🏆 MOST POPULAR PRODUCTS:")
            print("-" * 50)
            for product in results:
                print(
                    f"Product: {product['product_name']} | Sold: {product['total_sold']} units")

        except Exception as e:
            print(f"❌ Error: {e}")

    # SOLUTION 2: Customer Statistics
    def get_customer_statistics(self):
        """Solution: Customer spending and order statistics"""
        try:
            query = """
            SELECT 
                u.first_name,
                u.last_name,
                u.username,
                COUNT(o.order_id) as total_orders,
                COALESCE(SUM(o.total_price), 0) as total_spent
            FROM users u
            LEFT JOIN orders o ON u.user_id = o.user_id
            GROUP BY u.user_id, u.first_name, u.last_name, u.username
            ORDER BY total_spent DESC
            """

            self.cursor.execute(query)
            results = self.cursor.fetchall()

            print("\n💰 CUSTOMER STATISTICS:")
            print("-" * 70)
            for customer in results:
                print(f"Customer: {customer['first_name']} {customer['last_name']} "
                      f"({customer['username']}) | Orders: {customer['total_orders']} | "
                      f"Total Spent: ${customer['total_spent']}")

        except Exception as e:
            print(f"❌ Error: {e}")

    # SOLUTION 3: Add New Customer
    def add_new_customer(self, username, email, first_name, last_name):
        """Solution: Add new customer with error handling"""
        try:
            query = """
            INSERT INTO users (username, email, first_name, last_name) 
            VALUES (%s, %s, %s, %s) 
            RETURNING user_id
            """

            self.cursor.execute(
                query, (username, email, first_name, last_name))
            result = self.cursor.fetchone()
            user_id = result['user_id']
            self.conn.commit()

            print(f"✅ Customer {username} added with ID: {user_id}")
            return user_id

        except psycopg2.IntegrityError as e:
            print(f"❌ Customer already exists: {e}")
            self.conn.rollback()
            return None
        except Exception as e:
            print(f"❌ Error adding customer: {e}")
            self.conn.rollback()
            return None

    # SOLUTION 4: Update Product Stock
    def update_product_stock(self, product_id, new_stock):
        """Solution: Update product stock with validation"""
        try:
            # First check if product exists
            check_query = "SELECT product_name FROM products WHERE product_id = %s"
            self.cursor.execute(check_query, (product_id,))
            product = self.cursor.fetchone()

            if not product:
                print(f"❌ Product with ID {product_id} not found")
                return False

            # Update the stock
            update_query = "UPDATE products SET stock_quantity = %s WHERE product_id = %s"
            self.cursor.execute(update_query, (new_stock, product_id))
            self.conn.commit()

            print(
                f"✅ Stock for {product['product_name']} updated to {new_stock}")
            return True

        except Exception as e:
            print(f"❌ Error updating stock: {e}")
            self.conn.rollback()
            return False

    # SOLUTION 5: Low Stock Alert
    def get_low_stock_products(self, threshold=10):
        """Solution: Find products with low stock"""
        try:
            query = """
            SELECT product_name, stock_quantity, category
            FROM products 
            WHERE stock_quantity <= %s
            ORDER BY stock_quantity ASC
            """

            self.cursor.execute(query, (threshold,))
            results = self.cursor.fetchall()

            print(f"\n⚠️ LOW STOCK ALERT (≤ {threshold} units):")
            print("-" * 60)

            if results:
                for product in results:
                    print(f"Product: {product['product_name']} | "
                          f"Stock: {product['stock_quantity']} | "
                          f"Category: {product['category']}")
            else:
                print("✅ All products have sufficient stock!")

        except Exception as e:
            print(f"❌ Error: {e}")

    # BONUS SOLUTION: Create Categories Table
    def create_categories_table(self):
        """Bonus Solution: Create and populate categories table"""
        try:
            # Create categories table
            create_query = """
            CREATE TABLE IF NOT EXISTS categories (
                category_id SERIAL PRIMARY KEY,
                category_name VARCHAR(50) UNIQUE NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """

            self.cursor.execute(create_query)
            print("✅ Categories table created")

            # Insert sample categories
            categories_data = [
                ('Electronics', 'Electronic devices and gadgets'),
                ('Office Supplies', 'Items for office and workplace'),
                ('Accessories', 'Various accessories and add-ons'),
                ('Books', 'Educational and entertainment books'),
                ('Clothing', 'Apparel and fashion items')
            ]

            for category in categories_data:
                insert_query = """
                INSERT INTO categories (category_name, description) 
                VALUES (%s, %s) 
                ON CONFLICT (category_name) DO NOTHING
                """
                self.cursor.execute(insert_query, category)

            self.conn.commit()
            print("✅ Sample categories inserted")

            # Show the created categories
            self.cursor.execute(
                "SELECT * FROM categories ORDER BY category_id")
            categories = self.cursor.fetchall()

            print("\n📁 CATEGORIES:")
            print("-" * 50)
            for cat in categories:
                print(f"ID: {cat['category_id']} | Name: {cat['category_name']} | "
                      f"Description: {cat['description']}")

        except Exception as e:
            print(f"❌ Error creating categories table: {e}")
            self.conn.rollback()

    def run_all_solutions(self):
        """Run all solutions to demonstrate correct answers"""
        print("📚 EXERCISE SOLUTIONS DEMO")
        print("=" * 50)

        print("\n1. Most Popular Products:")
        self.find_most_popular_products()

        print("\n2. Customer Statistics:")
        self.get_customer_statistics()

        print("\n3. Adding New Customer:")
        user_id = self.add_new_customer(
            "solution_test", "solution@test.com", "Solution", "Test")

        print("\n4. Updating Product Stock:")
        self.update_product_stock(1, 25)

        print("\n5. Low Stock Products:")
        self.get_low_stock_products(15)

        print("\n6. BONUS - Categories Table:")
        self.create_categories_table()


if __name__ == "__main__":
    print("🎯 INSTRUCTOR SOLUTIONS")
    print("This file contains all the correct solutions for student exercises.")
    print("=" * 60)

    solutions = ExerciseSolutions()

    if solutions.connect():
        try:
            solutions.run_all_solutions()
        finally:
            solutions.close_connection()
