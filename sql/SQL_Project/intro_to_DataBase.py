"""
Simple Introduction to Databases
Very basic example for beginners
No classes, no joining, no complex operations
"""

import sqlite3

# Create a database in the same folder as this file
print("📚 Learning Databases - Simple Example")
print("=" * 40)

# Connect to database (creates file if it doesn't exist)
connection = sqlite3.connect("students.db")
cursor = connection.cursor()

# Create a simple table
print("Creating students table...")
cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER,
        grade TEXT
    )
''')

# Add some students (CREATE)
print("Adding students to database...")
cursor.execute(
    "INSERT INTO students (name, age, grade) VALUES ('John', 20, 'A')")
cursor.execute(
    "INSERT INTO students (name, age, grade) VALUES ('Alice', 19, 'B')")
cursor.execute(
    "INSERT INTO students (name, age, grade) VALUES ('Bob', 21, 'A')")

# Save changes
connection.commit()

# Read all students (READ)
print("\nAll students in database:")
cursor.execute("SELECT * FROM students")
all_students = cursor.fetchall()
for student in all_students:
    print(
        f"ID: {student[0]}, Name: {student[1]}, Age: {student[2]}, Grade: {student[3]}")

# Find students with grade A (READ with condition)
print("\nStudents with grade A:")
cursor.execute("SELECT name, age FROM students WHERE grade = 'A'")
a_students = cursor.fetchall()
for student in a_students:
    print(f"Name: {student[0]}, Age: {student[1]}")

# Update a student's grade (UPDATE)
print("\nUpdating John's grade to A+...")
cursor.execute("UPDATE students SET grade = 'A+' WHERE name = 'John'")
connection.commit()

# Check the update
cursor.execute("SELECT name, grade FROM students WHERE name = 'John'")
john = cursor.fetchone()
print(f"John's new grade: {john[1]}")

# Delete a student (DELETE)
print("\nRemoving Bob from database...")
cursor.execute("DELETE FROM students WHERE name = 'Bob'")
connection.commit()

# Show remaining students
print("\nRemaining students:")
cursor.execute("SELECT name FROM students")
remaining = cursor.fetchall()
for student in remaining:
    print(f"- {student[0]}")

# Close database connection
connection.close()
print("\n✅ Database operations completed!")
print("Check 'students.db' file - your data is saved there!")
