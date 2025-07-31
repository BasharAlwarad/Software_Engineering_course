# Netflix SQL Learning Project 🎬

A hands-on Python project designed to teach SQL concepts using real Netflix shows data. This project creates a local SQLite database and provides interactive SQL learning opportunities.

## 🎯 Learning Objectives

- Understand basic SQL operations (SELECT, WHERE, GROUP BY, ORDER BY)
- Learn data filtering and pattern matching
- Practice aggregation functions and joins
- Work with real-world dataset
- Get comfortable with database interactions

## 📋 Prerequisites

- Python 3.6 or higher
- No additional dependencies required (uses built-in `sqlite3`)

## 🚀 Quick Start

1. **Clone or download the project files**

   ```bash
   # Make sure you have both files in the same directory:
   # - index.py
   # - netflix.sql
   ```

2. **Run the project**

   ```bash
   python index.py
   ```

3. **Follow the interactive prompts**
   - The script will automatically create a local SQLite database
   - It will parse the Netflix SQL data and insert it into the database
   - Run sample queries to demonstrate SQL concepts
   - Optionally enter interactive mode to practice your own queries

## 📊 What's Included

### Database Schema

The project creates a `netflix_shows` table with the following columns:

- `show_id` (TEXT) - Unique identifier
- `type` (TEXT) - Movie or TV Show
- `title` (TEXT) - Show title
- `director` (TEXT) - Director name
- `cast_members` (TEXT) - Cast information
- `country` (TEXT) - Country of origin
- `date_added` (DATE) - Date added to Netflix
- `release_year` (INTEGER) - Year of release
- `rating` (TEXT) - Content rating
- `duration` (TEXT) - Runtime or number of seasons
- `listed_in` (TEXT) - Categories/genres
- `description` (TEXT) - Show description

### Sample Queries Demonstrated

1. **Basic Filtering**: Find movies by release year
2. **Aggregation**: Count shows by rating
3. **Pattern Matching**: Find TV shows with multiple seasons
4. **Grouping**: Directors with multiple movies
5. **Date Filtering**: Shows added in specific time periods

## 🔧 Interactive Mode

In interactive mode, you can practice SQL queries yourself:

```sql
-- Basic queries
SELECT * FROM netflix_shows LIMIT 5;
SELECT title, type, rating FROM netflix_shows WHERE type = 'Movie';

-- Filtering
SELECT * FROM netflix_shows WHERE release_year > 2020;
SELECT * FROM netflix_shows WHERE country LIKE '%United States%';

-- Aggregation
SELECT type, COUNT(*) FROM netflix_shows GROUP BY type;
SELECT rating, COUNT(*) FROM netflix_shows GROUP BY rating ORDER BY COUNT(*) DESC;

-- Text search
SELECT title FROM netflix_shows WHERE title LIKE '%Love%';
SELECT title FROM netflix_shows WHERE description LIKE '%comedy%';
```

## 📚 SQL Concepts Covered

### Basic Operations

- `SELECT` - Retrieve data
- `WHERE` - Filter records
- `LIMIT` - Restrict number of results
- `ORDER BY` - Sort results

### Intermediate Operations

- `GROUP BY` - Group records for aggregation
- `HAVING` - Filter grouped results
- `COUNT()` - Count records
- `LIKE` - Pattern matching
- `IS NULL/IS NOT NULL` - Handle missing data

### Data Types

- TEXT - String data
- INTEGER - Numeric data
- DATE - Date values
- NULL - Missing values

## 🎓 Learning Exercises

Try these exercises to practice your SQL skills:

### Beginner

1. Find all movies with a PG rating
2. Count how many shows were added in 2021
3. List the first 10 TV shows alphabetically

### Intermediate

4. Find the most common content rating
5. List countries with more than 50 shows
6. Find shows with "love" in the title or description

### Advanced

7. Calculate the average number of shows added per month in 2021
8. Find directors who have both movies and TV shows
9. Identify the longest-running TV series

## 🛠️ Troubleshooting

### Common Issues

**"SQL file not found" error:**

- Ensure `netflix.sql` is in the same directory as `index.py`
- Check file permissions

**"Database locked" error:**

- Close any other database connections
- Delete `netflix.db` file and run again

**"No results found" for queries:**

- Check your SQL syntax
- Verify the data exists with `SELECT COUNT(*) FROM netflix_shows;`

## 📁 Project Structure

```
Netflix_project/
│
├── index.py          # Main Python script
├── netflix.sql       # Netflix data in SQL format
├── README.md         # This file
└── netflix.db        # SQLite database (created when you run the script)
```

## 🔄 What Happens When You Run the Script

1. **Database Creation**: Creates `netflix.db` SQLite file
2. **Table Creation**: Sets up the `netflix_shows` table structure
3. **Data Import**: Parses `netflix.sql` and imports data
4. **Sample Queries**: Demonstrates various SQL concepts
5. **Interactive Mode**: Allows you to practice your own queries

## 🎯 Next Steps

After completing this project, consider:

1. **Advanced SQL**: Learn JOINs, subqueries, window functions
2. **Database Design**: Study normalization and relationships
3. **Real Databases**: Try PostgreSQL, MySQL, or SQL Server
4. **Data Analysis**: Use Python pandas with SQL
5. **Web Development**: Connect databases to web applications

## 🤝 Contributing

Feel free to enhance this project by:

- Adding more sample queries
- Creating additional exercises
- Improving the user interface
- Adding data visualization features

## 📄 License

This project is for educational purposes. The Netflix data is used for learning SQL concepts.

---

**Happy Learning! 🚀📚**

Remember: The best way to learn SQL is by practicing. Don't be afraid to experiment with different queries!
