from collections import deque

coffee_queue = deque()

# Customers arriving
coffee_queue.append("Sarah")
coffee_queue.append("John")
coffee_queue.append("Emma")

# Serving
while coffee_queue:
    person = coffee_queue.popleft()
    print(f"Serving coffee to {person}")
