#!/usr/bin/env python3
"""
Simple launcher for FoodReview API
Just run: python start.py
"""

import subprocess
import sys
import os


def main():
    print("🚀 Starting FoodReview API...")

    # Change to the script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    # Use virtual environment Python
    if os.name == 'nt':  # Windows
        python_path = 'venv\\Scripts\\python.exe'
    else:  # Mac/Linux
        python_path = 'venv/bin/python'

    if not os.path.exists(python_path):
        print("❌ Virtual environment not found!")
        print("Please run: python -m venv venv")
        print("Then: pip install -r requirements.txt")
        return 1

    # Run the Flask app
    try:
        subprocess.run([python_path, 'app.py'], check=True)
    except KeyboardInterrupt:
        print("\n👋 Goodbye!")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {e}")
        return 1

    return 0


if __name__ == '__main__':
    sys.exit(main())
