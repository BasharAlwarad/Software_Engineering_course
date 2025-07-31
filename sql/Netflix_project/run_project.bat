@echo off
echo 🎬 Starting Netflix SQL Learning Project...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo Please install Python 3.6+ and try again
    pause
    exit /b 1
)

REM Check if required files exist
if not exist "netflix.sql" (
    echo ❌ netflix.sql file not found
    echo Please ensure netflix.sql is in the same directory as this script
    pause
    exit /b 1
)

if not exist "index.py" (
    echo ❌ index.py file not found
    echo Please ensure index.py is in the same directory as this script
    pause
    exit /b 1
)

REM Run the project
python index.py

echo.
echo 👋 Thanks for using the Netflix SQL Learning Project!
pause
