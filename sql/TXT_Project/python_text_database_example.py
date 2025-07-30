#!/usr/bin/env python3
"""
Simple Text File Database Demo - Function Based
Teaching material for understanding file-based data storage
"""

import json
import os
import time
from datetime import datetime

# Database folder setup
DATABASE_FOLDER = "database"
if not os.path.exists(DATABASE_FOLDER):
    os.makedirs(DATABASE_FOLDER)

# Simple helper functions for file operations


def read_file(filename):
    """Read data from a text file"""
    filepath = os.path.join(DATABASE_FOLDER, filename)
    try:
        with open(filepath, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def write_file(filename, data):
    """Write data to a text file"""
    filepath = os.path.join(DATABASE_FOLDER, filename)
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=2)


def get_next_id(data):
    """Generate next available ID"""
    if not data:
        return 1
    return max(item['id'] for item in data) + 1

# CRUD Functions


def measure_performance(func):
    """Decorator to measure function execution time"""
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = (end_time - start_time) * \
            1000  # Convert to milliseconds
        print(f"⏱️  Performance: {func.__name__} took {execution_time:.2f}ms")
        return result
    return wrapper


@measure_performance
def create_user(first_name, last_name, email, age):
    """CREATE: Add a new user"""
    users = read_file("users.txt")

    # Check if email already exists
    for user in users:
        if user['email'] == email:
            print(f"❌ Email {email} already exists!")
            return None

    # Create new user
    new_user = {
        'id': get_next_id(users),
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'age': age
    }

    users.append(new_user)
    write_file("users.txt", users)
    print(f"✅ Created user: {first_name} {last_name}")
    return new_user['id']


@measure_performance
def create_product(name, price, category, stock=0):
    """CREATE: Add a new product"""
    products = read_file("products.txt")

    new_product = {
        'id': get_next_id(products),
        'name': name,
        'price': price,
        'category': category,
        'stock': stock
    }

    products.append(new_product)
    write_file("products.txt", products)
    print(f"✅ Created product: {name}")
    return new_product['id']


def get_all_users():
    """READ: Get all users"""
    return read_file("users.txt")


def get_all_products():
    """READ: Get all products"""
    return read_file("products.txt")


def find_user_by_email(email):
    """READ: Find user by email"""
    users = read_file("users.txt")
    for user in users:
        if user['email'] == email:
            return user
    return None


def update_user_age(user_id, new_age):
    """UPDATE: Change user's age"""
    users = read_file("users.txt")

    for user in users:
        if user['id'] == user_id:
            old_age = user['age']
            user['age'] = new_age
            write_file("users.txt", users)
            print(f"✅ Updated user {user_id}: age {old_age} → {new_age}")
            return True

    print(f"❌ User {user_id} not found!")
    return False


def delete_user(user_id):
    """DELETE: Remove a user"""
    users = read_file("users.txt")

    for i, user in enumerate(users):
        if user['id'] == user_id:
            removed_user = users.pop(i)
            write_file("users.txt", users)
            print(
                f"✅ Deleted user: {removed_user['first_name']} {removed_user['last_name']}")
            return True

    print(f"❌ User {user_id} not found!")
    return False


def performance_test():
    """Test performance with multiple operations"""
    print("\n🚀 PERFORMANCE TESTING...")

    # Test creating multiple users
    print("\n📊 Creating 10 users to test performance:")
    start_time = time.time()

    for i in range(10):
        create_user(f"User{i}", f"Test{i}", f"user{i}@test.com", 20 + i)

    total_time = (time.time() - start_time) * 1000
    print(f"⏱️  Total time for 10 users: {total_time:.2f}ms")
    print(f"⏱️  Average time per user: {total_time/10:.2f}ms")

    # Test reading performance
    print("\n📖 Reading performance test:")
    start_time = time.time()
    users = get_all_users()
    read_time = (time.time() - start_time) * 1000
    print(f"⏱️  Reading {len(users)} users took: {read_time:.2f}ms")


def main():
    """Demo the text file database"""
    print("🚀 Simple Text File Database Demo\n")

    # CREATE operations
    print("📝 CREATING DATA...")
    john_id = create_user("John", "Doe", "john@example.com", 25)
    jane_id = create_user("Jane", "Smith", "jane@example.com", 30)

    laptop_id = create_product("Laptop", 999.99, "Electronics", 5)
    mouse_id = create_product("Mouse", 29.99, "Electronics", 20)

    # READ operations
    print("\n📖 READING DATA...")
    users = get_all_users()
    print("All users:")
    for user in users:
        print(
            f"  • {user['first_name']} {user['last_name']} ({user['email']}) - Age: {user['age']}")

    products = get_all_products()
    print("All products:")
    for product in products:
        print(f"  • {product['name']} - ${product['price']}")

    # UPDATE operations
    print("\n✏️  UPDATING DATA...")
    if john_id:
        update_user_age(john_id, 26)

    # DELETE operations
    print("\n🗑️  DELETING DATA...")
    if jane_id:
        delete_user(jane_id)

    print(f"\n📁 Check these files to see your data:")
    print(f"  • {DATABASE_FOLDER}/users.txt")
    print(f"  • {DATABASE_FOLDER}/products.txt")

    print(f"\n✅ Demo completed!")

    # Run performance tests
    performance_test()


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
