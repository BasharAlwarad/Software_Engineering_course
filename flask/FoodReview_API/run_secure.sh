#!/bin/bash

# Secure run script for FoodReview API
echo "🔐 FoodReview API - Secure Startup"
echo "=================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo ""
    echo "Please create a .env file with your database credentials:"
    echo "1. Copy .env.example to .env"
    echo "2. Edit .env with your actual database URL"
    echo ""
    echo "Example:"
    echo "cp .env.example .env"
    echo "# Then edit .env with your credentials"
    exit 1
fi

# Load environment variables from .env file
export $(cat .env | xargs)

# Check if PG_URI is set
if [ -z "$PG_URI" ]; then
    echo "❌ PG_URI not set in .env file!"
    echo "Please add your database URL to the .env file"
    exit 1
fi

echo "✅ Environment variables loaded"
echo "🚀 Starting Flask application..."
echo ""

# Activate virtual environment and run
if [ -d "venv" ]; then
    source venv/bin/activate
    python app.py
else
    echo "❌ Virtual environment not found. Please run setup.sh first."
fi
