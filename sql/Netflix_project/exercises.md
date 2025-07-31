# Netflix SQL Learning Exercises 🎯

Complete these exercises to practice your SQL skills with the Netflix dataset!

## Beginner Level 🟢

### Exercise 1: Basic Queries

1. Show the first 10 movie titles
2. Count the total number of shows in the database
3. Find all shows with a rating of "PG"

**Solutions:**

```sql
-- 1. First 10 movie titles
SELECT title FROM netflix_shows WHERE type = 'Movie' LIMIT 10;

-- 2. Total number of shows
SELECT COUNT(*) FROM netflix_shows;

-- 3. Shows with PG rating
SELECT title, type FROM netflix_shows WHERE rating = 'PG';
```

### Exercise 2: Filtering

1. Find all movies released in 2020
2. Show TV shows that have "Season" in their duration
3. Find shows from the United States

**Solutions:**

```sql
-- 1. Movies from 2020
SELECT title, director FROM netflix_shows
WHERE type = 'Movie' AND release_year = 2020;

-- 2. TV shows with seasons
SELECT title, duration FROM netflix_shows
WHERE type = 'TV Show' AND duration LIKE '%Season%';

-- 3. Shows from the United States
SELECT title, type FROM netflix_shows
WHERE country LIKE '%United States%';
```

## Intermediate Level 🟡

### Exercise 3: Grouping and Counting

1. Count shows by content type (Movie vs TV Show)
2. Find the most common rating
3. Count shows by release year (top 10 years)

**Solutions:**

```sql
-- 1. Count by type
SELECT type, COUNT(*) as count FROM netflix_shows GROUP BY type;

-- 2. Most common rating
SELECT rating, COUNT(*) as count FROM netflix_shows
GROUP BY rating ORDER BY count DESC;

-- 3. Top 10 years by number of shows
SELECT release_year, COUNT(*) as count FROM netflix_shows
GROUP BY release_year ORDER BY count DESC LIMIT 10;
```

### Exercise 4: Text Search and Pattern Matching

1. Find movies with "love" in the title (case insensitive)
2. Find shows with "comedy" in their description
3. Find shows where the title starts with "The"

**Solutions:**

```sql
-- 1. Movies with "love" in title
SELECT title, release_year FROM netflix_shows
WHERE type = 'Movie' AND LOWER(title) LIKE '%love%';

-- 2. Shows with "comedy" in description
SELECT title, description FROM netflix_shows
WHERE LOWER(description) LIKE '%comedy%';

-- 3. Titles starting with "The"
SELECT title, type FROM netflix_shows
WHERE title LIKE 'The %';
```

## Advanced Level 🔴

### Exercise 5: Complex Filtering

1. Find movies longer than 120 minutes
2. Find TV shows with more than 3 seasons
3. Shows added in the last quarter of 2021

**Solutions:**

```sql
-- 1. Movies longer than 120 minutes
SELECT title, duration FROM netflix_shows
WHERE type = 'Movie'
AND CAST(SUBSTR(duration, 1, INSTR(duration, ' ') - 1) AS INTEGER) > 120;

-- 2. TV shows with more than 3 seasons
SELECT title, duration FROM netflix_shows
WHERE type = 'TV Show'
AND duration LIKE '%Seasons%'
AND CAST(SUBSTR(duration, 1, 1) AS INTEGER) > 3;

-- 3. Shows added in Q4 2021
SELECT title, date_added FROM netflix_shows
WHERE date_added >= '2021-10-01' AND date_added <= '2021-12-31'
ORDER BY date_added DESC;
```

### Exercise 6: Data Analysis

1. Find directors with the most movies
2. Calculate average release year by content type
3. Find countries with the most content

**Solutions:**

```sql
-- 1. Directors with most movies
SELECT director, COUNT(*) as movie_count FROM netflix_shows
WHERE type = 'Movie' AND director IS NOT NULL
GROUP BY director
HAVING movie_count > 1
ORDER BY movie_count DESC;

-- 2. Average release year by type
SELECT type, AVG(release_year) as avg_year,
       MIN(release_year) as oldest,
       MAX(release_year) as newest
FROM netflix_shows
GROUP BY type;

-- 3. Countries with most content
SELECT
    TRIM(country_name) as country,
    COUNT(*) as content_count
FROM (
    SELECT
        CASE
            WHEN country LIKE '%,%' THEN SUBSTR(country, 1, INSTR(country, ',') - 1)
            ELSE country
        END as country_name
    FROM netflix_shows
    WHERE country IS NOT NULL
)
WHERE country_name != ''
GROUP BY country_name
ORDER BY content_count DESC
LIMIT 10;
```

## Expert Level 🔥

### Exercise 7: Advanced Analysis

1. Find shows that are available in multiple countries
2. Analyze content trends by decade
3. Find the longest-running TV series

**Hints for Solutions:**

```sql
-- 1. Multi-country shows
SELECT title, country FROM netflix_shows
WHERE country LIKE '%,%'
ORDER BY title;

-- 2. Content by decade
SELECT
    CASE
        WHEN release_year < 1980 THEN 'Before 1980'
        WHEN release_year < 1990 THEN '1980s'
        WHEN release_year < 2000 THEN '1990s'
        WHEN release_year < 2010 THEN '2000s'
        WHEN release_year < 2020 THEN '2010s'
        ELSE '2020s'
    END as decade,
    COUNT(*) as count
FROM netflix_shows
GROUP BY decade
ORDER BY decade;

-- 3. Longest-running TV series
SELECT title, duration FROM netflix_shows
WHERE type = 'TV Show'
AND duration LIKE '%Seasons%'
ORDER BY CAST(SUBSTR(duration, 1, INSTR(duration, ' ') - 1) AS INTEGER) DESC
LIMIT 10;
```

## Challenge Exercises 💪

### Challenge 1: Genre Analysis

Create a query to find the most popular genres (from the `listed_in` column).

### Challenge 2: Cast Analysis

Find actors/actresses who appear in the most shows.

### Challenge 3: Release Pattern Analysis

Analyze when content is typically added to Netflix (which months/days of the week).

### Challenge 4: Content Duration Trends

Analyze if movie lengths have changed over the decades.

## Tips for Success 💡

1. **Start Simple**: Begin with basic SELECT statements and gradually add complexity
2. **Use LIMIT**: When exploring data, always use LIMIT to avoid overwhelming output
3. **Test Incrementally**: Build complex queries step by step
4. **Read Error Messages**: SQL errors often point you to the exact issue
5. **Practice Regularly**: SQL skills improve with consistent practice

## Common SQL Functions to Practice

- **Text Functions**: UPPER(), LOWER(), SUBSTR(), LENGTH(), LIKE
- **Date Functions**: DATE(), STRFTIME()
- **Aggregation**: COUNT(), AVG(), MIN(), MAX(), SUM()
- **Conditionals**: CASE WHEN, IF (in some databases)
- **Grouping**: GROUP BY, HAVING
- **Sorting**: ORDER BY ASC/DESC

## Next Steps 🚀

After completing these exercises:

1. Try creating your own questions about the data
2. Experiment with combining multiple conditions
3. Learn about JOINs with multiple tables
4. Explore window functions for advanced analytics
5. Try connecting to other database systems (PostgreSQL, MySQL)

Good luck with your SQL learning journey! 🎉
