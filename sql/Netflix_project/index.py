"""
Netflix SQL Learning Project
===========================
A simple project to teach SQL concepts using Netflix shows data.
This script creates a local SQLite database and demonstrates basic SQL operations.

Requirements:
- Python 3.6+
- No additional dependencies (uses built-in sqlite3)

Usage:
    python index.py
"""

import sqlite3
import os
import re
from datetime import datetime


class NetflixDatabase:
    def __init__(self, db_name="netflix.db"):
        """Initialize the Netflix database."""
        self.db_name = db_name
        self.conn = None
        self.cursor = None

    def connect(self):
        """Create connection to SQLite database."""
        try:
            self.conn = sqlite3.connect(self.db_name)
            self.cursor = self.conn.cursor()
            print(f"✅ Connected to database: {self.db_name}")
        except sqlite3.Error as e:
            print(f"❌ Error connecting to database: {e}")

    def disconnect(self):
        """Close database connection."""
        if self.conn:
            self.conn.close()
            print("🔐 Database connection closed")

    def create_table(self):
        """Create the netflix_shows table."""
        create_table_sql = """
        CREATE TABLE IF NOT EXISTS netflix_shows (
            show_id TEXT PRIMARY KEY,
            type TEXT,
            title TEXT,
            director TEXT,
            cast_members TEXT,
            country TEXT,
            date_added DATE,
            release_year INTEGER,
            rating TEXT,
            duration TEXT,
            listed_in TEXT,
            description TEXT
        );
        """

        try:
            self.cursor.execute(create_table_sql)
            self.conn.commit()
            print("✅ Table 'netflix_shows' created successfully")
        except sqlite3.Error as e:
            print(f"❌ Error creating table: {e}")

    def parse_sql_file(self, sql_file_path):
        """Parse the SQL file and extract INSERT data."""
        data_rows = []

        try:
            with open(sql_file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # Find the COPY statement and extract data until the next SQL statement
            copy_start = content.find('COPY public.netflix_shows')
            if copy_start == -1:
                print("❌ Could not find COPY statement in SQL file")
                return []

            # Find the start of the data (after FROM stdin;)
            data_start = content.find('FROM stdin;', copy_start)
            if data_start == -1:
                print("❌ Could not find data start in SQL file")
                return []

            data_start = data_start + len('FROM stdin;')

            # Find the end of data (next SQL statement starting with --)
            data_end = content.find('\n--', data_start)
            if data_end == -1:
                # If no -- found, look for ALTER statement or end of file
                data_end = content.find('\nALTER', data_start)
                if data_end == -1:
                    data_end = len(content)

            # Extract data section
            data_section = content[data_start:data_end].strip()
            lines = data_section.split('\n')

            for line in lines:
                line = line.strip()
                if line and not line.startswith('--') and not line.startswith('\\'):
                    # Split by tabs and handle NULL values
                    fields = line.split('\t')
                    if len(fields) >= 12:  # Ensure we have all required fields
                        # Replace \N with None for NULL values
                        processed_fields = [field if field !=
                                            '\\N' else None for field in fields]
                        data_rows.append(tuple(processed_fields))

            print(f"✅ Parsed {len(data_rows)} records from SQL file")
            return data_rows

        except FileNotFoundError:
            print(f"❌ SQL file not found: {sql_file_path}")
            return []
        except Exception as e:
            print(f"❌ Error parsing SQL file: {e}")
            return []

    def insert_data(self, data_rows):
        """Insert data into the netflix_shows table."""
        if not data_rows:
            print("❌ No data to insert")
            return

        insert_sql = """
        INSERT OR REPLACE INTO netflix_shows 
        (show_id, type, title, director, cast_members, country, date_added, 
         release_year, rating, duration, listed_in, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """

        try:
            self.cursor.executemany(insert_sql, data_rows)
            self.conn.commit()
            print(f"✅ Inserted {len(data_rows)} records successfully")
        except sqlite3.Error as e:
            print(f"❌ Error inserting data: {e}")

    def setup_database(self):
        """Complete database setup process."""
        print("🚀 Setting up Netflix database...")

        # Connect to database
        self.connect()

        # Create table
        self.create_table()

        # Parse and insert data from SQL file
        sql_file_path = "netflix.sql"
        if os.path.exists(sql_file_path):
            data_rows = self.parse_sql_file(sql_file_path)
            self.insert_data(data_rows)
        else:
            print(f"❌ SQL file not found: {sql_file_path}")
            print("Please ensure netflix.sql is in the same directory as this script")

    def get_table_info(self):
        """Display basic information about the table."""
        try:
            # Count total records
            self.cursor.execute("SELECT COUNT(*) FROM netflix_shows")
            total_count = self.cursor.fetchone()[0]

            # Count by type
            self.cursor.execute(
                "SELECT type, COUNT(*) FROM netflix_shows GROUP BY type")
            type_counts = self.cursor.fetchall()

            print(f"\n📊 Database Information:")
            print(f"Total shows: {total_count}")
            print(f"Content breakdown:")
            for content_type, count in type_counts:
                print(f"  - {content_type}: {count}")

        except sqlite3.Error as e:
            print(f"❌ Error getting table info: {e}")

    def run_sample_queries(self):
        """Run sample SQL queries to demonstrate SQL concepts."""
        print(f"\n🔍 Running Sample SQL Queries:")
        print("=" * 50)

        queries = [
            {
                "title": "1. Find all Movies released in 2021",
                "sql": """
                SELECT title, director, rating, duration 
                FROM netflix_shows 
                WHERE type = 'Movie' AND release_year = 2021 
                LIMIT 5
                """,
                "concept": "Basic SELECT with WHERE clause and LIMIT"
            },
            {
                "title": "2. Count shows by rating",
                "sql": """
                SELECT rating, COUNT(*) as count 
                FROM netflix_shows 
                GROUP BY rating 
                ORDER BY count DESC
                """,
                "concept": "GROUP BY and ORDER BY clauses"
            },
            {
                "title": "3. Find TV Shows with more than 1 season",
                "sql": """
                SELECT title, duration, country 
                FROM netflix_shows 
                WHERE type = 'TV Show' 
                AND (duration LIKE '%Seasons%' OR duration LIKE '%Season%')
                AND CAST(SUBSTR(duration, 1, 1) AS INTEGER) > 1
                LIMIT 5
                """,
                "concept": "Pattern matching with LIKE and string functions"
            },
            {
                "title": "4. Movies directed by specific directors",
                "sql": """
                SELECT director, COUNT(*) as movie_count
                FROM netflix_shows 
                WHERE type = 'Movie' AND director IS NOT NULL
                GROUP BY director
                HAVING movie_count > 1
                ORDER BY movie_count DESC
                LIMIT 5
                """,
                "concept": "HAVING clause and NULL handling"
            },
            {
                "title": "5. Shows added in recent months of 2021",
                "sql": """
                SELECT title, date_added, type
                FROM netflix_shows 
                WHERE date_added >= '2021-09-01' 
                AND date_added <= '2021-09-30'
                ORDER BY date_added DESC
                LIMIT 5
                """,
                "concept": "Date filtering and sorting"
            }
        ]

        for query in queries:
            print(f"\n{query['title']}")
            print(f"Concept: {query['concept']}")
            print("-" * 40)

            try:
                self.cursor.execute(query['sql'])
                results = self.cursor.fetchall()

                # Get column names
                columns = [description[0]
                           for description in self.cursor.description]

                # Print header
                print(" | ".join(f"{col:15}" for col in columns))
                print("-" * (len(columns) * 18))

                # Print results
                for row in results:
                    formatted_row = []
                    for item in row:
                        if item is None:
                            formatted_row.append("N/A")
                        else:
                            formatted_row.append(str(item)[:15])
                    print(" | ".join(f"{item:15}" for item in formatted_row))

                if not results:
                    print("No results found")

            except sqlite3.Error as e:
                print(f"❌ Error executing query: {e}")

    def interactive_mode(self):
        """Allow users to run custom SQL queries."""
        print(f"\n🔧 Interactive SQL Mode")
        print("=" * 30)
        print("Enter SQL queries (type 'quit' to exit, 'help' for sample queries)")

        while True:
            try:
                query = input("\nSQL> ").strip()

                if query.lower() == 'quit':
                    break
                elif query.lower() == 'help':
                    self.show_help()
                    continue
                elif not query:
                    continue

                # Execute the query
                self.cursor.execute(query)

                if query.lower().startswith('select'):
                    results = self.cursor.fetchall()
                    columns = [description[0]
                               for description in self.cursor.description]

                    # Print results
                    if results:
                        print("\nResults:")
                        print(" | ".join(f"{col:15}" for col in columns))
                        print("-" * (len(columns) * 18))

                        for row in results[:10]:  # Limit to first 10 results
                            formatted_row = []
                            for item in row:
                                if item is None:
                                    formatted_row.append("N/A")
                                else:
                                    formatted_row.append(str(item)[:15])
                            print(" | ".join(
                                f"{item:15}" for item in formatted_row))

                        if len(results) > 10:
                            print(f"... and {len(results) - 10} more rows")
                    else:
                        print("No results found")
                else:
                    self.conn.commit()
                    print("Query executed successfully")

            except sqlite3.Error as e:
                print(f"❌ SQL Error: {e}")
            except KeyboardInterrupt:
                print("\nGoodbye!")
                break
            except Exception as e:
                print(f"❌ Error: {e}")

    def show_help(self):
        """Show help information for interactive mode."""
        help_text = """
        📚 Sample SQL Queries You Can Try:
        
        Basic Queries:
        - SELECT * FROM netflix_shows LIMIT 5;
        - SELECT title, type, rating FROM netflix_shows WHERE type = 'Movie';
        - SELECT COUNT(*) FROM netflix_shows;
        
        Filtering:
        - SELECT * FROM netflix_shows WHERE release_year > 2020;
        - SELECT * FROM netflix_shows WHERE country LIKE '%United States%';
        - SELECT * FROM netflix_shows WHERE rating = 'TV-MA';
        
        Grouping and Sorting:
        - SELECT type, COUNT(*) FROM netflix_shows GROUP BY type;
        - SELECT release_year, COUNT(*) FROM netflix_shows GROUP BY release_year ORDER BY release_year DESC;
        - SELECT rating, COUNT(*) FROM netflix_shows GROUP BY rating ORDER BY COUNT(*) DESC;
        
        Text Search:
        - SELECT title FROM netflix_shows WHERE title LIKE '%Love%';
        - SELECT title FROM netflix_shows WHERE description LIKE '%comedy%';
        
        Table Information:
        - .schema netflix_shows  (Not supported in this interface)
        - PRAGMA table_info(netflix_shows);
        """
        print(help_text)


def main():
    """Main function to run the Netflix SQL learning project."""
    print("🎬 Welcome to the Netflix SQL Learning Project!")
    print("=" * 50)

    # Initialize database
    db = NetflixDatabase()

    try:
        # Setup database
        db.setup_database()

        # Show table information
        db.get_table_info()

        # Run sample queries
        db.run_sample_queries()

        # Ask user if they want interactive mode
        print(f"\n🎯 Would you like to try running your own SQL queries?")
        choice = input(
            "Enter 'y' for interactive mode, any other key to exit: ").strip().lower()

        if choice == 'y':
            db.interactive_mode()

    except Exception as e:
        print(f"❌ An error occurred: {e}")
    finally:
        # Always close the database connection
        db.disconnect()

    print(f"\n🎉 Thank you for using the Netflix SQL Learning Project!")
    print("Happy learning! 📚")


if __name__ == "__main__":
    main()
