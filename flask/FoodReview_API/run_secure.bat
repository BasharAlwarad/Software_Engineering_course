@echo off
REM Secure run script for FoodReview API (Windows)

echo 🔐 FoodReview API - Secure Startup
echo ==================================

REM Check if .env file exists
if not exist .env (
    echo ❌ .env file not found!
    echo.
    echo Please create a .env file with your database credentials:
    echo 1. Copy .env.example to .env
    echo 2. Edit .env with your actual database URL
    echo.
    echo Example:
    echo copy .env.example .env
    echo # Then edit .env with your credentials
    pause
    exit /b 1
)

REM Load environment variables from .env file
for /f "usebackq tokens=*" %%i in (".env") do set %%i

REM Check if PG_URI is set
if "%PG_URI%"=="" (
    echo ❌ PG_URI not set in .env file!
    echo Please add your database URL to the .env file
    pause
    exit /b 1
)

echo ✅ Environment variables loaded
echo 🚀 Starting Flask application...
echo.

REM Run the application
if exist venv\Scripts\python.exe (
    venv\Scripts\python.exe app.py
) else (
    echo ❌ Virtual environment not found. Please run setup first.
    pause
)

pause
