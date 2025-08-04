import psycopg
from .config import BaseConfig


def get_connection():
    return psycopg.connect(BaseConfig.PG_URI)


def init_database():
    """Initialize the database with required tables"""
    try:
        conn = get_connection()
        cur = conn.cursor()

        # Create tables if they don't exist
        cur.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)

        cur.execute("""
            CREATE TABLE IF NOT EXISTS restaurants (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT,
                owner_id INTEGER NOT NULL REFERENCES users(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)

        cur.execute("""
            CREATE TABLE IF NOT EXISTS reviews (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                restaurant_id INTEGER NOT NULL REFERENCES restaurants(id),
                rating INTEGER CHECK (rating >= 1 AND rating <= 5),
                comment TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)

        # Create indexes for better performance
        cur.execute(
            "CREATE INDEX IF NOT EXISTS idx_restaurants_owner ON restaurants(owner_id);")
        cur.execute(
            "CREATE INDEX IF NOT EXISTS idx_reviews_restaurant ON reviews(restaurant_id);")
        cur.execute(
            "CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);")

        conn.commit()
        cur.close()
        conn.close()
        print("✅ Database tables initialized successfully!")
        return True

    except Exception as e:
        print(f"❌ Database initialization failed: {str(e)}")
        return False
