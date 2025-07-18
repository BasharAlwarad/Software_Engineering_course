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


students = ["Josh", "Lukasz", "Mohamad", "Oksana", "Oualid", "Tim"]
tasks = ["Arrays",
         "Bubble Sort",
         "Selection Sort",
         "Insertion Sort",
         "Quick Sort",
         "Counting Sort",
         "Radix Sort",
         "Merge Sort",
         "Linear Search",
         "Binary Search",
         "Stacks",
         "Queues",
         "Hash Tables",
         "Hash Sets",
         "Hash Maps",
         "Binary Trees",
         "Pre-order Traversal",
         "In-order Traversal",
         "Post-order Traversal",
         "Binary Search Trees",
         "AVL Trees",
         "Graphs I",
         "Graphs II",
         "Graphs Traversals",
         "Cycle Detection",
         "Shortest Path",
         "Dijkstra's",
         "Bellman-Ford",
         ]
result = assign_tasks_evenly(students, tasks)

for student, assigned_tasks in result.items():
    print(f"{student}: {assigned_tasks}")
