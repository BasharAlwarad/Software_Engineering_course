"""
Simple Ecommerce Database - Teaching Version
===========================================

Minimal project to teach database basics with Neon PostgreSQL:
✅ Connect to cloud database
✅ Create 3 related tables
✅ Insert sample data  
✅ Query with JOINs
"""

import psycopg2

# Neon Database Connection
CONNECTION_STRING = "postgresql://neondb_owner:npg_46gcwfbKjlae@ep-snowy-sound-ad5dftxm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"


def create_tables():
    """Step 1: Create three tables with relationships"""
    print("📋 Creating tables...")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # Drop existing tables to start fresh
    cursor.execute("DROP TABLE IF EXISTS orders CASCADE")
    cursor.execute("DROP TABLE IF EXISTS products CASCADE")
    cursor.execute("DROP TABLE IF EXISTS users CASCADE")

    # Users table
    cursor.execute("""
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL
        )
    """)

    # Products table
    cursor.execute("""
        CREATE TABLE products (
            product_id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            stock INTEGER DEFAULT 0
        )
    """)

    # Orders table (with foreign keys)
    cursor.execute("""
        CREATE TABLE orders (
            order_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            product_id INTEGER REFERENCES products(product_id),
            quantity INTEGER NOT NULL,
            total_price DECIMAL(10,2) NOT NULL
        )
    """)

    conn.commit()
    cursor.close()
    conn.close()
    print("✅ Tables created successfully")


def add_sample_data():
    """Step 2: Insert sample data"""
    print("📊 Adding sample data...")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # Add users
    users = [("John Doe", "john@email.com"), ("Jane Smith", "jane@email.com")]
    for user in users:
        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", user)

    # Add products
    products = [("Laptop", 999.99, 5), ("Mouse", 25.99, 10),
                ("Keyboard", 75.50, 8)]
    for product in products:
        cursor.execute(
            "INSERT INTO products (name, price, stock) VALUES (%s, %s, %s)", product)

    # Add orders
    orders = [
        (1, 1, 1, 999.99),  # John bought Laptop
        (2, 2, 2, 51.98),   # Jane bought 2 Mice
        (1, 3, 1, 75.50)    # John bought Keyboard
    ]
    for order in orders:
        cursor.execute(
            "INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES (%s, %s, %s, %s)", order)

    conn.commit()
    cursor.close()
    conn.close()
    print("✅ Sample data added")


def show_data():
    """Step 3: Display all data with JOIN queries"""
    print("📊 Displaying data...")

    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # Show users
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    print("\n👥 USERS:")
    for user in users:
        print(f"  {user[0]}. {user[1]} ({user[2]})")

    # Show products
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    print("\n📦 PRODUCTS:")
    for product in products:
        print(
            f"  {product[0]}. {product[1]} - ${product[2]} (Stock: {product[3]})")

    # Show orders with customer and product names (JOIN query!)
    cursor.execute("""
        SELECT o.order_id, u.name, p.name, o.quantity, o.total_price
        FROM orders o
        JOIN users u ON o.user_id = u.user_id
        JOIN products p ON o.product_id = p.product_id
    """)
    orders = cursor.fetchall()
    print("\n🛒 ORDERS:")
    for order in orders:
        print(
            f"  Order #{order[0]}: {order[1]} bought {order[3]}x {order[2]} = ${order[4]}")

    cursor.close()
    conn.close()


def main():
    """Run the complete demo"""
    print("🚀 Ecommerce Database Demo")
    print("=" * 30)

    try:
        # Test connection first
        conn = psycopg2.connect(CONNECTION_STRING)
        conn.close()
        print("✅ Connected to Neon database")

        # Run the demo
        create_tables()
        add_sample_data()
        show_data()

        print("\n🎉 Demo completed successfully!")

    except Exception as error:
        print(f"❌ Error: {error}")


if __name__ == "__main__":
    main()
