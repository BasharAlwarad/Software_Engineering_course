"""
Student Exercise: Extend the Ecommerce Database
==============================================

Your task is to extend the basic ecommerce database with additional functionality.
Complete the exercises below to practice your database skills.

INSTRUCTIONS:
1. Run the main demo first: python intro_to_DataBase_simple.py
2. Complete the exercises below
3. Test your code to make sure it works

"""

import psycopg2
from psycopg2.extras import RealDictCursor


class StudentExercise:
    def __init__(self):
        """Initialize database connection - Same as main project"""
        self.connection_string = "postgresql://neondb_owner:npg_46gcwfbKjlae@ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
        self.conn = None
        self.cursor = None

    def connect(self):
        """Establish connection to database"""
        try:
            self.conn = psycopg2.connect(self.connection_string)
            self.cursor = self.conn.cursor(cursor_factory=RealDictCursor)
            print("✅ Connected to database")
            return True
        except Exception as e:
            print(f"❌ Connection error: {e}")
            return False

    def close_connection(self):
        """Close database connection"""
        if self.cursor:
            self.cursor.close()
        if self.conn:
            self.conn.close()
        print("🔒 Connection closed")

    # ========================================
    # EXERCISE 1: Find Popular Products
    # ========================================
    def find_most_popular_products(self):
        """
        TODO: Write a query to find the most popular products

        Requirements:
        - Show product name and total quantity sold
        - Order by quantity sold (highest first)
        - Include products with 0 sales (show 0)

        Hint: Use LEFT JOIN and SUM with GROUP BY
        """
        try:
            # TODO: Write your SQL query here
            query = """
            -- YOUR SQL QUERY GOES HERE
            -- Hint: JOIN products with orders, SUM the quantities
            """

            self.cursor.execute(query)
            results = self.cursor.fetchall()

            print("\n🏆 MOST POPULAR PRODUCTS:")
            print("-" * 50)
            for product in results:
                # TODO: Print the results in a nice format
                pass

        except Exception as e:
            print(f"❌ Error: {e}")

    # ========================================
    # EXERCISE 2: Customer Statistics
    # ========================================
    def get_customer_statistics(self):
        """
        TODO: Create a report showing customer spending

        Requirements:
        - Show customer name and total amount spent
        - Show number of orders per customer
        - Order by total spent (highest first)

        Hint: JOIN users with orders, use SUM and COUNT
        """
        try:
            # TODO: Write your SQL query here
            query = """
            -- YOUR SQL QUERY GOES HERE
            -- Hint: JOIN users with orders, use SUM(total_price) and COUNT(*)
            """

            # TODO: Execute query and display results
            pass

        except Exception as e:
            print(f"❌ Error: {e}")

    # ========================================
    # EXERCISE 3: Add New Customer
    # ========================================
    def add_new_customer(self, username, email, first_name, last_name):
        """
        TODO: Add a new customer to the database

        Requirements:
        - Insert into users table
        - Handle duplicate usernames/emails gracefully
        - Return the new user_id if successful

        Hint: Use INSERT with RETURNING clause
        """
        try:
            # TODO: Write your INSERT query here
            query = """
            -- YOUR INSERT QUERY GOES HERE
            """

            # TODO: Execute the query and return user_id
            return None

        except Exception as e:
            print(f"❌ Error adding customer: {e}")
            self.conn.rollback()
            return None

    # ========================================
    # EXERCISE 4: Update Product Stock
    # ========================================
    def update_product_stock(self, product_id, new_stock):
        """
        TODO: Update the stock quantity for a product

        Requirements:
        - Update the stock_quantity in products table
        - Make sure product exists before updating
        - Return True if successful, False otherwise
        """
        try:
            # TODO: Write your UPDATE query here
            pass

        except Exception as e:
            print(f"❌ Error updating stock: {e}")
            self.conn.rollback()
            return False

    # ========================================
    # EXERCISE 5: Advanced Query - Low Stock Alert
    # ========================================
    def get_low_stock_products(self, threshold=10):
        """
        TODO: Find products with low stock

        Requirements:
        - Show products with stock_quantity <= threshold
        - Show product name, current stock, and category
        - Order by stock quantity (lowest first)
        """
        try:
            # TODO: Write your query here
            pass

        except Exception as e:
            print(f"❌ Error: {e}")

    # ========================================
    # BONUS EXERCISE: Create a New Table
    # ========================================
    def create_categories_table(self):
        """
        BONUS: Create a separate categories table

        Requirements:
        - Create a categories table with: category_id, category_name, description
        - Insert some sample categories
        - This is preparation for normalizing the database further
        """
        try:
            # TODO: Write CREATE TABLE query
            create_query = """
            -- YOUR CREATE TABLE QUERY GOES HERE
            """

            # TODO: Insert sample data
            pass

        except Exception as e:
            print(f"❌ Error creating categories table: {e}")
            self.conn.rollback()


def run_exercises():
    """Run all the exercises"""
    print("🎓 Student Database Exercises")
    print("=" * 40)

    exercise = StudentExercise()

    if not exercise.connect():
        return

    try:
        print("\n1. Finding most popular products...")
        exercise.find_most_popular_products()

        print("\n2. Getting customer statistics...")
        exercise.get_customer_statistics()

        print("\n3. Adding a new customer...")
        user_id = exercise.add_new_customer(
            "test_student", "student@email.com", "Test", "Student")
        if user_id:
            print(f"✅ New customer created with ID: {user_id}")

        print("\n4. Updating product stock...")
        success = exercise.update_product_stock(1, 15)
        if success:
            print("✅ Stock updated successfully")

        print("\n5. Checking low stock products...")
        exercise.get_low_stock_products(20)

        print("\n6. BONUS: Creating categories table...")
        exercise.create_categories_table()

    except Exception as e:
        print(f"❌ Exercise error: {e}")

    finally:
        exercise.close_connection()


if __name__ == "__main__":
    print("📚 INSTRUCTIONS:")
    print("1. Complete the TODO sections in each method")
    print("2. Test your code by running: python student_exercises.py")
    print("3. Check that your queries return the expected results")
    print("\n" + "="*50)

    # Uncomment the line below when you're ready to test your solutions
    # run_exercises()
