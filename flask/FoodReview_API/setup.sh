#!/bin/bash

echo "🧩 FoodReview API Setup Script"
echo "==============================="

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

echo "✅ Python 3 found"

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install requirements
echo "📚 Installing requirements..."
pip install -r requirements.txt

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Set your PostgreSQL connection string:"
echo "   export PG_URI='postgresql://user:password@host:port/database?sslmode=require'"
echo ""
echo "2. Run the database setup script (setup.sql) in your PostgreSQL database"
echo ""
echo "3. Start the application:"
echo "   python app.py"
echo ""
echo "4. Test the API at http://localhost:8080"
