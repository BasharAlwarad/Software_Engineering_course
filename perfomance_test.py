
import time
import tracemalloc


def can_attend_meetings(intervals):
    intervals.sort()
    return all(intervals[i][0] >= intervals[i-1][1] for i in range(1, len(intervals)))


# print(can_attend_meetings([[0, 30], [5, 10], [15, 20]]))


def dest_city(paths):
    starts = set(cityA for cityA, _ in paths)
    for _, cityB in paths:
        if cityB not in starts:
            return cityB


def dest_city(paths):
    starts = {cityA for cityA, _ in paths}
    return next(cityB for _, cityB in paths if cityB not in starts)


# print(dest_city([["London", "New York"], [
#       "New York", "Lima"], ["Lima", "Sao Paulo"]]))


def performance_test(func, *args, **kwargs):
    tracemalloc.start()
    start_time = time.perf_counter()
    result = func(*args, **kwargs)
    exec_time = time.perf_counter() - start_time
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    peak_memory = peak / 1024

    print(f"Execution Time: {exec_time:.6f} seconds")
    print(f"Peak Memory Usage: {peak_memory:.2f} KB")

    return result, exec_time, peak_memory


def example_function(n):
    return [i**2 for i in range(n)]


performance_test(dest_city, [["London", "New York"], [
                 "New York", "Lima"], ["Lima", "Sao Paulo"]])
performance_test(can_attend_meetings, [[0, 30], [5, 10], [15, 20]])

performance_test(example_function, 10**6)
