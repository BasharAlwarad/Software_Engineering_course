@echo off
echo Starting FoodReview API...
echo.

REM Set the database URL
set PG_URI=postgresql://neondb_owner:npg_qBLuR3HAsoF1@ep-cold-art-adl1iukg-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

REM Run the app with virtual environment
venv\Scripts\python.exe app.py

pause
