import psycopg2

# Neon PostgreSQL connection - Replace with your actual Neon connection string

CONNECTION_STRING = "postgresql://username:password@your-neon-host/dbname"


def execute_sql(query):
    """Simple function to run SQL queries"""
    # Connect to database
    conn = psycopg2.connect(CONNECTION_STRING)
    cursor = conn.cursor()

    # Run the query
    cursor.execute(query)

    # Get results if it's a SELECT
    if query.upper().startswith('SELECT'):
        results = cursor.fetchall()
        for row in results:
            print(row)
    else:
        conn.commit()
        print("Done!")

    # Close connection
    conn.close()


# Example usage:
if __name__ == "__main__":
    # Test connection
    execute_sql("SELECT 1 as test;")

    # Practice with queries:
    execute_sql("SELECT * FROM users;")
    # execute_sql("SELECT * FROM products;")
    # execute_sql("SELECT * FROM orders;")
