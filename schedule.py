import time
import datetime

# Define schedule for each day
weekly_schedule = {
    "Monday": [
        ("08:00", "Wake up"),
        ("09:00", "Team meeting"),
        ("10:00", "Work on project"),
        ("13:00", "Lunch"),
        ("14:00", "Client call"),
        ("17:00", "Gym"),
        ("20:00", "Dinner")
    ],
    "Tuesday": [
        ("08:00", "Wake up"),
        ("09:00", "Coding practice"),
        ("11:00", "Work on side project"),
        ("13:00", "Lunch"),
        ("15:00", "Study"),
        ("18:00", "Free time"),
        ("21:00", "Sleep")
    ],
    "Wednesday": [
        ("08:00", "Wake up"),
        ("10:00", "Team sprint review"),
        ("13:00", "Lunch"),
        ("14:00", "Documentation"),
        ("18:00", "Yoga"),
        ("20:00", "Dinner")
    ],
    # Add schedules for other days...
    "Thursday": [],
    "Friday": [],
    "Saturday": [],
    "Sunday": []
}

# Get today's day name
today = datetime.datetime.now().strftime("%A")

# Print today's schedule
print(f"📅 Today is: {today}")
if today in weekly_schedule and weekly_schedule[today]:
    print("🗓️ Schedule:")
    for time_str, activity in weekly_schedule[today]:
        time_obj = time.strptime(time_str, "%H:%M")
        print(f"  🕒 {time.strftime('%I:%M %p', time_obj)} - {activity}")
else:
    print("🛌 No scheduled tasks for today. Enjoy your free time!")
