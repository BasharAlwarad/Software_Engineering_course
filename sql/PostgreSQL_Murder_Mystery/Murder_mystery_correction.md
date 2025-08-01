# PostgreSQL Murder Mystery - Solution Guide

## Setup (Mac)

1. **Install PostgreSQL:**

   ```bash
   brew install postgresql
   ```

2. **Create Neon Database:**

   - Go to [neon.tech](https://neon.tech) and create account
   - Create new project called `murder_mystery`
   - Copy your connection string (looks like):
     ```
     postgresql://username:password@ep-xxxxx.us-east-1.aws.neon.tech/murder_mystery?sslmode=require
     ```

3. **Download and prepare murder_mystery.sql:**

   - Download the `murder_mystery.sql` file from the course materials
   - Save it in your project directory

4. **Import data to Neon database:**

   ```bash
   psql -d "postgresql://your_connection_string_here" -f ./murder_mystery.sql
   ```

   You should see output like:

   ```
   CREATE TABLE
   CREATE TABLE
   ...
   COPY 1228
   COPY 10007
   ...
   ```

## Investigation Steps

### Step 1: Find the Crime Scene Report

```sql
SELECT * FROM crime_scene_report
WHERE date = 20180115 AND city = 'SQL City' AND type = 'murder';
```

**Result:** 2 witnesses - one at last house on Northwestern Dr, another named Annabel on Franklin Ave.

### Step 2: Find the Witnesses

```sql
-- First witness (last house on Northwestern Dr)
SELECT * FROM person
WHERE address_street_name = 'Northwestern Dr'
ORDER BY address_number DESC LIMIT 1;

-- Second witness (Annabel on Franklin Ave)
SELECT * FROM person
WHERE name LIKE '%Annabel%' AND address_street_name = 'Franklin Ave';
```

**Result:** Morty Schapiro (ID: 14887) and Annabel Miller (ID: 16371)

### Step 3: Get Witness Interviews

```sql
SELECT person_id, transcript
FROM interview
WHERE person_id IN (14887, 16371);
```

**Key Clues:**

- Killer had gym bag with membership starting "48Z" (gold member)
- Car plate included "H42W"
- Annabel saw killer at gym on January 9th

### Step 4: Find Gym Suspects

```sql
SELECT * FROM get_fit_now_member
WHERE id LIKE '48Z%' AND membership_status = 'gold';
```

**Result:** Joe Germuska (48Z7A) and Jeremy Bowers (48Z55)

### Step 5: Check License Plates

```sql
SELECT p.name, p.id, dl.plate_number, dl.car_make, dl.car_model
FROM person p
JOIN drivers_license dl ON p.license_id = dl.id
WHERE p.id IN (28819, 67318);
```

**Result:** Jeremy Bowers has plate "0H42W2" (contains H42W)

### Step 6: Verify Gym Attendance

```sql
SELECT * FROM get_fit_now_check_in
WHERE membership_id = '48Z55' AND check_in_date = 20180109;
```

**Result:** Jeremy was at gym on January 9th ✓

### Step 7: Submit the Murderer

```sql
INSERT INTO solution VALUES (1, 'Jeremy Bowers');
```

### Step 8: Find the Mastermind

```sql
-- Get Jeremy's confession
SELECT transcript FROM interview WHERE person_id = 67318;
```

**Clues:** Hired by woman, 5'5"-5'7", red hair, Tesla Model S, attended SQL Symphony Concert 3x in Dec 2017

### Step 9: Find the Mastermind

```sql
-- Find suspects matching description
SELECT p.id, p.name, dl.height, dl.hair_color, dl.car_make, dl.car_model
FROM person p
JOIN drivers_license dl ON p.license_id = dl.id
WHERE dl.gender = 'female' AND dl.height BETWEEN 65 AND 67
  AND dl.hair_color = 'red' AND dl.car_make = 'Tesla' AND dl.car_model = 'Model S';

-- Check concert attendance
SELECT person_id, COUNT(*) as concert_count
FROM facebook_event_checkin
WHERE event_name = 'SQL Symphony Concert'
  AND date BETWEEN 20171201 AND 20171231
  AND person_id IN (78881, 90700, 99716)
GROUP BY person_id HAVING COUNT(*) = 3;
```

## Final Answer

- **Murderer:** Jeremy Bowers
- **Mastermind:** Miranda Priestly (attended concert 3x, $310k income)

## Key SQL Concepts Used

- JOINs (INNER JOIN)
- WHERE clauses with multiple conditions
- LIKE operator with wildcards
- ORDER BY and LIMIT
- GROUP BY and HAVING
- Aggregate functions (COUNT)
- Date range filtering
- Pattern matching
