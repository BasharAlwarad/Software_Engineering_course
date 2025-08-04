-- FoodReview API Database Schema
-- Run this script to set up the required tables

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    owner_id INTEGER NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    restaurant_id INTEGER NOT NULL REFERENCES restaurants(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_restaurants_owner ON restaurants(owner_id);
CREATE INDEX IF NOT EXISTS idx_reviews_restaurant ON reviews(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);

-- Insert sample data (optional)
INSERT INTO users (username, email, password) VALUES 
    ('admin', 'admin@foodreview.com', 'admin123'),
    ('john_doe', 'john@example.com', 'password123')
ON CONFLICT (email) DO NOTHING;

INSERT INTO restaurants (name, description, owner_id) VALUES 
    ('Pizza Palace', 'Best pizza in town with authentic Italian flavors', 1),
    ('Burger Junction', 'Gourmet burgers made with fresh ingredients', 2),
    ('Sushi Master', 'Traditional Japanese sushi and sashimi', 1)
ON CONFLICT DO NOTHING;

INSERT INTO reviews (user_id, restaurant_id, rating, comment) VALUES 
    (2, 1, 5, 'Amazing pizza! The crust was perfect and toppings were fresh.'),
    (1, 2, 4, 'Great burgers, but could use more seasoning on the fries.'),
    (2, 3, 5, 'Authentic sushi experience. The fish was incredibly fresh!')
ON CONFLICT DO NOTHING;
