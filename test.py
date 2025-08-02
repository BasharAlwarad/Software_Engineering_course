import random
from collections import defaultdict


def assign_tasks_evenly(students, tasks):
    if not students:
        return {}

    random.shuffle(tasks)
    task_distribution = defaultdict(list)

    for i, task in enumerate(tasks):
        student = students[i % len(students)]
        task_distribution[student].append(task)

    return dict(task_distribution)


students = ['Josh', 'Lukasz', 'Mohamed', 'Oksana', 'Oualid', 'Tim']
tasks = [
    "📚Intro to Python",
    "📚Syntax and Comments",
    "📚Variables",
    "🧩Variables",
    "📚Data Types",
    "📚Numbers",
    "📚Strings",
    "🧩Strings",
    "📚Booleans",
    "📚Operators",
    "📚Collections of Data",
    "📚Lists",
    "📚Lists: accessing, adding and removing items",
    "📚List comprehension",
    "📚Lists: sorting, copying and joining",
    "📚Lists: methods",
    "🧩Lists: exercises",
    "📚Tuples",
    "📚Tuples: accessing",
    "📚Tuples: unpacking",
    "📚Tuples: joining",
    "📚Tuples: methods",
    "🧩Tuples: exercises",
    "📚Sets",
    "📚Sets: accessing, adding and removing items",
    "📚Sets: joining",
    "📚Sets: methods",
    "🧩Sets: exercises",
    "📚Dictionaries",
    "📚Dictionaries: accessing, changing, adding and removing items",
    "📚Control Structures",
    "📚Comparisons",
    "📚If…Else",
    "📚While Loops",
    "📚For…Loops",
    "📚Pattern matching",
    "📚Intro to Functions",
    "📚Parameters and Arguments",
    "📚Try…Except",
    "📚Lambda",
    "📚Intro to Classes",
    "📚__init__()",
    "📚__str__()",
    "📚Object Methods",
    "📚self",
]

result = assign_tasks_evenly(students, tasks)

for student, assigned_tasks in result.items():
    print(f"{student}: {assigned_tasks}")
