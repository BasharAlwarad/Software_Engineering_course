from datetime import datetime


def only_during_work_hours(func):
    def wrapper(*args, **kwargs):
        now = datetime.now()
        weekday = now.weekday()  # 0 = Monday, 6 = Sunday
        hour = now.hour
        if 0 <= weekday <= 4 and 9 <= hour < 17:
            return func(*args, **kwargs)
        else:
            print("❌ Not within working hours (Weekdays 9AM–5PM). Function skipped.")
    return wrapper


@only_during_work_hours
def send_report(msg):
    print(msg)


@only_during_work_hours
def daily_reminder(msg):
    print(msg)


send_report("📤 Report sent to the team!")
send_report("📤 Finance report")
daily_reminder("🔔 Don't forget to stand and stretch!")
daily_reminder("🔔 Meeting!")

# def y(fun):
#     def wrapper():
#         if 5 > 6:
#             return fun
#         else:
#             print("Hello from y")
#     return wrapper


# @y
# def x():
#     print("Hello from x")


# x()

# # y(x)()
