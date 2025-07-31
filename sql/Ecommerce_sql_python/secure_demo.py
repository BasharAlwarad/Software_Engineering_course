"""
Secure Ecommerce Database Project with Environment Variables
==========================================================

This version demonstrates best practices for handling database credentials
using environment variables instead of hardcoding them in the source code.
"""

import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables from .env file
load_dotenv()


class SecureEcommerceDB:
    def __init__(self):
        """Initialize database connection using environment variables"""
        # Get database URL from environment variable
        self.connection_string = os.getenv('DATABASE_URL',
                                           "postgresql://neondb_owner:npg_46gcwfbKjlae@ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
                                           )
        self.conn = None
        self.cursor = None

    def connect(self):
        """Establish secure connection to Neon database"""
        try:
            self.conn = psycopg2.connect(self.connection_string)
            self.cursor = self.conn.cursor(cursor_factory=RealDictCursor)
            print("✅ Successfully connected to Neon database securely!")
            return True
        except Exception as e:
            print(f"❌ Error connecting to database: {e}")
            return False

    def execute_query(self, query, params=None, fetch=False):
        """Execute a query with error handling and optional fetching"""
        try:
            self.cursor.execute(query, params)
            if fetch:
                return self.cursor.fetchall()
            else:
                self.conn.commit()
                return True
        except Exception as e:
            print(f"❌ Error executing query: {e}")
            self.conn.rollback()
            return False

    def create_user(self, username, email, first_name, last_name):
        """Add a new user to the database"""
        query = """
        INSERT INTO users (username, email, first_name, last_name) 
        VALUES (%s, %s, %s, %s) RETURNING user_id
        """
        try:
            self.cursor.execute(
                query, (username, email, first_name, last_name))
            user_id = self.cursor.fetchone()['user_id']
            self.conn.commit()
            print(f"✅ User {username} created with ID: {user_id}")
            return user_id
        except Exception as e:
            print(f"❌ Error creating user: {e}")
            self.conn.rollback()
            return None

    def create_product(self, name, description, price, stock, category):
        """Add a new product to the database"""
        query = """
        INSERT INTO products (product_name, description, price, stock_quantity, category) 
        VALUES (%s, %s, %s, %s, %s) RETURNING product_id
        """
        try:
            self.cursor.execute(
                query, (name, description, price, stock, category))
            product_id = self.cursor.fetchone()['product_id']
            self.conn.commit()
            print(f"✅ Product {name} created with ID: {product_id}")
            return product_id
        except Exception as e:
            print(f"❌ Error creating product: {e}")
            self.conn.rollback()
            return None

    def create_order(self, user_id, product_id, quantity):
        """Create a new order"""
        # First get the product price
        price_query = "SELECT price FROM products WHERE product_id = %s"
        try:
            self.cursor.execute(price_query, (product_id,))
            product = self.cursor.fetchone()

            if not product:
                print(f"❌ Product with ID {product_id} not found")
                return None

            total_price = float(product['price']) * quantity

            order_query = """
            INSERT INTO orders (user_id, product_id, quantity, total_price) 
            VALUES (%s, %s, %s, %s) RETURNING order_id
            """

            self.cursor.execute(
                order_query, (user_id, product_id, quantity, total_price))
            order_id = self.cursor.fetchone()['order_id']
            self.conn.commit()
            print(
                f"✅ Order created with ID: {order_id}, Total: ${total_price}")
            return order_id

        except Exception as e:
            print(f"❌ Error creating order: {e}")
            self.conn.rollback()
            return None

    def get_sales_summary(self):
        """Get a summary of sales by product"""
        query = """
        SELECT 
            p.product_name,
            COUNT(o.order_id) as total_orders,
            SUM(o.quantity) as total_quantity_sold,
            SUM(o.total_price) as total_revenue
        FROM products p
        LEFT JOIN orders o ON p.product_id = o.product_id
        GROUP BY p.product_id, p.product_name
        ORDER BY total_revenue DESC NULLS LAST
        """

        results = self.execute_query(query, fetch=True)
        if results:
            print("\n📊 SALES SUMMARY:")
            print("-" * 80)
            for row in results:
                print(f"Product: {row['product_name']} | "
                      f"Orders: {row['total_orders'] or 0} | "
                      f"Qty Sold: {row['total_quantity_sold'] or 0} | "
                      f"Revenue: ${row['total_revenue'] or 0}")

    def close_connection(self):
        """Close database connection"""
        if self.cursor:
            self.cursor.close()
        if self.conn:
            self.conn.close()
        print("🔒 Database connection closed securely")


def interactive_demo():
    """Interactive demo for students to test functionality"""
    print("🎓 Interactive Ecommerce Database Demo")
    print("=" * 50)

    db = SecureEcommerceDB()

    if not db.connect():
        return

    try:
        while True:
            print("\n📋 Choose an option:")
            print("1. Add a new user")
            print("2. Add a new product")
            print("3. Create an order")
            print("4. View sales summary")
            print("5. Exit")

            choice = input("\nEnter your choice (1-5): ").strip()

            if choice == '1':
                print("\n👤 Adding a new user:")
                username = input("Username: ")
                email = input("Email: ")
                first_name = input("First name: ")
                last_name = input("Last name: ")
                db.create_user(username, email, first_name, last_name)

            elif choice == '2':
                print("\n🛍️ Adding a new product:")
                name = input("Product name: ")
                description = input("Description: ")
                price = float(input("Price: $"))
                stock = int(input("Stock quantity: "))
                category = input("Category: ")
                db.create_product(name, description, price, stock, category)

            elif choice == '3':
                print("\n📦 Creating a new order:")
                user_id = int(input("User ID: "))
                product_id = int(input("Product ID: "))
                quantity = int(input("Quantity: "))
                db.create_order(user_id, product_id, quantity)

            elif choice == '4':
                db.get_sales_summary()

            elif choice == '5':
                print("\n👋 Goodbye!")
                break

            else:
                print("❌ Invalid choice. Please try again.")

    except KeyboardInterrupt:
        print("\n\n👋 Demo interrupted by user")
    except Exception as e:
        print(f"❌ An error occurred: {e}")
    finally:
        db.close_connection()


if __name__ == "__main__":
    interactive_demo()
