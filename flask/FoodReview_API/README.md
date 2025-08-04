# FoodReview API 🧩

A RESTful API built with Flask and PostgreSQL that allows users to share restaurant experiences, add restaurants, and submit reviews.

## Features

- User registration and authentication
- Restaurant management (create, list)
- Review system with ratings (1-5 stars)
- RESTful API design with proper HTTP status codes
- **Neon PostgreSQL cloud database integration**
- **Automatic database table creation**
- **Cross-platform support (Windows, Mac, Linux)**

## Requirements

- **Python 3.8+** (tested with Python 3.9-3.13)
- **Internet connection** (for cloud database)
- **Neon PostgreSQL account** (free): https://neon.tech/
- **Dependencies:**
  - Flask 2.3.3
  - psycopg[binary] 3.2.9 (PostgreSQL adapter)
  - requests 2.31.0 (for testing)
  - python-dotenv 1.0.0 (for environment variables)

## Project Structure

```
FoodReview_API/
├── app.py                                    # Main application entry point
├── start.py                                 # Simple launcher script
├── requirements.txt                          # Python dependencies
├── README.md                                # This file
├── .env                                     # Environment variables (create this)
├── .env.example                             # Environment variables template
├── .gitignore                               # Git ignore file (protects .env)
├── setup.sql                               # Database schema setup (optional)
├── run_app.bat                             # Windows batch file to run app
├── setup.sh                               # Setup script for Unix/Mac systems
├── test_api.py                             # API testing script
├── FoodReview_API.postman_collection.json  # Postman collection for testing
└── foodreview/                             # Main Python package
    ├── __init__.py                         # Flask app factory
    ├── config.py                           # Configuration management
    ├── db.py                               # Database connection & auto-setup
    ├── routes/                             # API endpoints
    │   ├── __init__.py
    │   ├── auth.py                         # Authentication routes
    │   └── restaurants.py                  # Restaurant and review routes
    └── utils/
        └── auth_utils.py                   # Authentication utilities
```

## Database Setup

### **🚀 Quick Start with Neon (Recommended)**

This project uses **Neon PostgreSQL** - a serverless, cloud-based PostgreSQL database that's perfect for development and production.

#### **Step 1: Create Neon Account**

1. Go to https://neon.tech/
2. Click **"Sign Up"** (it's free!)
3. Choose **"GitHub"** or **"Google"** for quick signup

#### **Step 2: Create Database**

1. After signup, click **"Create Project"**
2. Choose a **Project Name** (e.g., "FoodReview API")
3. Select **Region** (choose closest to you)
4. Click **"Create Project"**

#### **Step 3: Get Connection String**

1. In your Neon dashboard, go to **"Connection Details"**
2. Select **"Pooled connection"**
3. Copy the **connection string** that looks like:
   ```
   postgresql://username:password@ep-xxxxx-xxxxx.region.aws.neon.tech/database?sslmode=require
   ```

#### **Step 4: Create .env File**

1. In your project folder, create a file called **`.env`** (note the dot at the beginning)
2. Add your database connection:

   ```env
   PG_URI=your_connection_string_here
   ```

   **Example:**

   ```env
   PG_URI=postgresql://neondb_owner:npg_abc123@ep-cool-art-123456.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

#### **Step 5: Verify Setup**

- ✅ Your `.env` file should contain one line with `PG_URI=...`
- ✅ The connection string should start with `postgresql://`
- ✅ The `.env` file should be in the same folder as `app.py`

### **🔒 Security Note**

- ✅ The `.env` file is automatically ignored by Git (protected by `.gitignore`)
- ✅ Never share your `.env` file or commit it to version control
- ✅ Each developer should have their own `.env` file

### **🎉 Automatic Database Setup**

Once your `.env` file is configured, the application will automatically:

- Connect to your Neon database
- Create all required tables on first startup
- Set up proper indexes for performance

**You don't need to run any SQL scripts manually!**

### **Alternative: Manual Database Setup**

If you prefer to use your own PostgreSQL database or want to set up tables manually:

```sql
-- Optional: Manual database setup (only if using your own database)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    owner_id INTEGER NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    restaurant_id INTEGER NOT NULL REFERENCES restaurants(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Installation & Setup

### **Quick Start (All Platforms)**

1. **Clone or download the project**
2. **Navigate to the project directory**
3. **Set up your database connection (see Database Setup section above)**
4. **Choose your platform setup below:**

### **🌟 Super Quick Start (Recommended)**

After setting up your `.env` file with the Neon database connection:

**Windows:**

```cmd
# 1. Create virtual environment
python -m venv venv

# 2. Install dependencies
venv\Scripts\pip.exe install -r requirements.txt

# 3. Run the app (choose one):
run_app.bat                    # Double-click or run in terminal
python start.py                # Simple launcher
venv\Scripts\python.exe app.py # Direct method
```

**Mac/Linux:**

```bash
# 1. Create virtual environment
python3 -m venv venv

# 2. Install dependencies
venv/bin/pip install -r requirements.txt

# 3. Run the app (choose one):
python start.py                # Simple launcher
python app.py                  # Direct method
./setup.sh                     # Full setup script
```

### **Windows Setup:**

1. **Create a virtual environment:**

   ```cmd
   python -m venv venv
   ```

2. **Activate virtual environment:**

   ```cmd
   # Using Command Prompt:
   venv\Scripts\activate

   # Using PowerShell:
   venv\Scripts\Activate.ps1

   # Using Git Bash/WSL:
   source venv/Scripts/activate
   ```

3. **Install dependencies:**

   ```cmd
   pip install -r requirements.txt
   ```

4. **Run the application:**

   ```cmd
   # Direct method (recommended):
   venv\Scripts\python.exe app.py

   # Or with activated environment:
   python app.py

   # Or using the batch file:
   run_app.bat
   ```

### **Mac/Linux Setup:**

1. **Create a virtual environment:**

   ```bash
   python3 -m venv venv
   ```

2. **Activate virtual environment:**

   ```bash
   source venv/bin/activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**

   ```bash
   python app.py

   # Or using Flask CLI:
   flask --app foodreview run --debug --port 8080

   # Or using the setup script:
   chmod +x setup.sh
   ./setup.sh
   ```

### **Automatic Setup Script (Mac/Linux):**

For a one-command setup:

```bash
chmod +x setup.sh && ./setup.sh
```

### **Environment Variables Setup:**

#### **✅ Using .env File (Recommended)**

1. **Copy the template:**

   ```bash
   cp .env.example .env
   ```

2. **Edit .env file with your Neon database URL:**
   ```env
   PG_URI=postgresql://your_user:your_password@your_host/your_database?sslmode=require
   ```

#### **Alternative: Manual Environment Variables**

If you prefer not to use a `.env` file:

**Windows:**

```cmd
set PG_URI=postgresql://user:password@host:port/database?sslmode=require
```

**Mac/Linux:**

```bash
export PG_URI=postgresql://user:password@host:port/database?sslmode=require
```

#### **🔍 How to Get Your Neon Database URL:**

1. **Login to Neon:** https://console.neon.tech/
2. **Select your project**
3. **Go to "Connection Details"**
4. **Copy the "Pooled connection" string**
5. **Paste it in your `.env` file**

#### **✅ Quick Verification:**

To verify your setup is correct:

1. **Check your `.env` file exists:**

   ```bash
   # Should show your .env file
   ls -la .env     # Mac/Linux
   dir .env        # Windows
   ```

2. **Check .env file content:**

   ```bash
   # Should show: PG_URI=postgresql://...
   cat .env        # Mac/Linux
   type .env       # Windows
   ```

3. **Test database connection:**
   ```bash
   # Should show: ✅ Database tables initialized successfully!
   python start.py
   ```

#### **📋 .env File Example:**

```env
# Your Neon PostgreSQL connection
PG_URI=postgresql://neondb_owner:npg_abc123DEF@ep-cool-art-123456-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

# Optional: Flask configuration
FLASK_ENV=development
FLASK_DEBUG=True
```

#### **🚨 Important Security Notes:**

- ✅ Never commit `.env` to Git (it's in `.gitignore`)
- ✅ Each developer should have their own `.env` file
- ✅ Keep your database credentials secure
- ✅ Don't share your `.env` file in chat/email

## API Endpoints

### Authentication

#### Register User

- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
  ```

#### Login

- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "X-API-Key": "MQ=="
  }
  ```

### Restaurants

#### Get All Restaurants

- **GET** `/restaurants`
- **Headers:** `X-API-Key: MQ==`
- **Response:** `200 OK`
  ```json
  [
    {
      "id": 1,
      "name": "Pizza Palace",
      "description": "Best pizza in town",
      "owner_id": 1,
      "total_reviews": 2,
      "average_rating": 4.5,
      "reviews_url": "http://localhost:8080/restaurants/1/reviews"
    }
  ]
  ```

#### Create Restaurant

- **POST** `/restaurants`
- **Headers:** `X-API-Key: MQ==`
- **Body:**
  ```json
  {
    "name": "Pizza Palace",
    "description": "Best pizza in town"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": 1,
    "name": "Pizza Palace",
    "description": "Best pizza in town",
    "owner_id": 1
  }
  ```

### Reviews

#### Create Review

- **POST** `/restaurants/{restaurant_id}/reviews`
- **Headers:** `X-API-Key: MQ==`
- **Body:**
  ```json
  {
    "rating": 5,
    "comment": "Excellent pizza!"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": 1,
    "restaurant_id": 1,
    "user_id": 1,
    "rating": 5,
    "comment": "Excellent pizza!"
  }
  ```

#### Get Restaurant Reviews

- **GET** `/restaurants/{restaurant_id}/reviews`
- **Headers:** `X-API-Key: MQ==`
- **Response:** `200 OK`
  ```json
  {
    "restaurant_id": 1,
    "restaurant_name": "Pizza Palace",
    "total_reviews": 2,
    "average_rating": 4.5,
    "reviews": [
      {
        "review_id": 1,
        "rating": 5,
        "comment": "Excellent pizza!",
        "reviewed_by": "john_doe"
      }
    ]
  }
  ```

## HTTP Status Codes

- **200 OK** - Request succeeded
- **201 Created** - Resource created successfully
- **400 Bad Request** - Invalid client input
- **401 Unauthorized** - Authentication failed
- **404 Not Found** - Resource not found
- **409 Conflict** - Resource already exists
- **500 Internal Server Error** - Unexpected server error

## Authentication

The API uses a simple authentication system with API keys:

1. Register a user account
2. Login to receive an `X-API-Key`
3. Include this key in the header of protected requests

⚠️ **Note:** This authentication system is for educational purposes only and should not be used in production without proper security enhancements.

## Troubleshooting

### **Common Issues & Solutions:**

#### **Issue: "Import psycopg could not be resolved"**

**Solution:** Make sure you're using the virtual environment and have installed the dependencies:

```bash
# Windows:
venv\Scripts\python.exe -m pip install -r requirements.txt

# Mac/Linux:
source venv/bin/activate && pip install -r requirements.txt
```

#### **Issue: Virtual environment activation fails on Windows**

**Solutions:**

```bash
# Try different activation methods:
venv\Scripts\activate.bat          # Command Prompt
venv\Scripts\Activate.ps1          # PowerShell
source venv/Scripts/activate       # Git Bash
venv\Scripts\python.exe app.py     # Direct Python execution
```

#### **Issue: "psycopg2-binary failed to build"**

**Solution:** We use psycopg3 instead:

```bash
pip install psycopg[binary]==3.2.9
```

#### **Issue: Database connection fails**

**Solutions:**

- Check internet connection (using cloud database)
- Verify your `.env` file exists and contains `PG_URI=...`
- Ensure your Neon database is not paused (visit Neon dashboard)
- Check firewall settings
- Verify the connection string format is correct

#### **Issue: "PG_URI environment variable is required"**

**Solution:** Create or fix your `.env` file:

1. Create `.env` file in project root (same folder as `app.py`)
2. Add your Neon connection string:
   ```env
   PG_URI=postgresql://your_neon_connection_string_here
   ```
3. Make sure there are no extra spaces or quotes

#### **Issue: ".env file not found" or "python-dotenv not installed"**

**Solution:**

```bash
# Install python-dotenv:
venv\Scripts\pip.exe install python-dotenv  # Windows
venv/bin/pip install python-dotenv          # Mac/Linux

# Create .env file:
cp .env.example .env    # Then edit with your database URL
```

#### **Issue: Neon database connection string format**

**Correct format:**

```env
PG_URI=postgresql://username:password@ep-xxxxx-xxxxx.region.aws.neon.tech/database?sslmode=require
```

**Common mistakes:**

- ❌ Missing `postgresql://` prefix
- ❌ Using `postgres://` instead of `postgresql://`
- ❌ Missing `?sslmode=require` at the end
- ❌ Extra spaces or quotes around the URL

#### **Issue: "404 Not Found" in browser**

**Solution:** Make sure you visit the correct URL:

- ✅ `http://localhost:8080` or `http://127.0.0.1:8080`
- ❌ `http://localhost:8080/` (extra slash might cause issues in some setups)

#### **Issue: Python version compatibility**

**Supported versions:** Python 3.8+
**Recommended:** Python 3.9 - 3.12
**Note:** Python 3.13 is supported but may require specific package versions

### **Platform-Specific Notes:**

#### **Windows:**

- Use `python` instead of `python3`
- PowerShell may require execution policy changes
- Git Bash provides Unix-like commands

#### **Mac:**

- Use `python3` explicitly
- May need to install Xcode Command Line Tools: `xcode-select --install`
- Use Homebrew for Python installation: `brew install python`

#### **Linux:**

- Install development packages: `sudo apt-get install python3-dev postgresql-dev` (Ubuntu/Debian)
- Use package manager for Python: `sudo apt-get install python3 python3-pip python3-venv`

## Testing

You can test the API using several methods:

### **Method 1: Postman Collection (Recommended)**

1. **Download Postman:** https://www.postman.com/downloads/
2. **Import collection:** `FoodReview_API.postman_collection.json`
3. **Run requests in order:** Register → Login → Create Restaurant → Add Review
4. **API key is automatically saved** after login!

### **Method 2: Python Test Script**

```bash
# Make sure your Flask app is running first
python test_api.py
```

### **Method 3: Manual with curl**

**Register a user:**

```bash
curl -X POST http://localhost:8080/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"password123"}'
```

**Login:**

```bash
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Create a restaurant:** (replace YOUR_API_KEY with the key from login)

```bash
curl -X POST http://localhost:8080/restaurants \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY" \
  -d '{"name":"Test Restaurant","description":"A test restaurant"}'
```

### **Method 4: Browser Testing**

- Visit `http://localhost:8080` to see the API welcome page
- Use browser extensions like "REST Client" for VS Code

### **Other Compatible Tools:**

- [Insomnia](https://insomnia.rest/)
- [HTTPie](https://httpie.io/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
