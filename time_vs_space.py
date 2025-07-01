# """
# O(n)       : Linear Time – Simple search through all elements.
# O(log n)   : Logarithmic Time – Binary search on sorted list.
# O(n log n) : Linearithmic Time – First sort, then binary search.
# """

# import time
# from memory_profiler import memory_usage


# # O(n) - Linear search
# def linear_search(boxes, target):
#     for box in boxes:
#         if box == target:
#             return True
#     return False


# # O(log n) - Binary search (assumes sorted input)
# def binary_search(boxes, target):
#     left = 0
#     right = len(boxes) - 1
#     while left <= right:
#         mid = (left + right) // 2
#         if boxes[mid] == target:
#             return True
#         elif boxes[mid] < target:
#             left = mid + 1
#         else:
#             right = mid - 1
#     return False


# # O(n log n) - Sort first, then binary search
# def sort_then_binary_search(boxes, target):
#     sorted_boxes = sorted(boxes)  # O(n log n)
#     return binary_search(sorted_boxes, target)  # O(log n)


# # Function to measure time and memory
# def measure(func, *args):
#     start_time = time.time()
#     mem_usage = memory_usage((func, args))
#     end_time = time.time()
#     duration = end_time - start_time
#     memory_used = max(mem_usage) - min(mem_usage)
#     return duration, memory_used


# if __name__ == "__main__":
#     print("Measuring time and memory usage for each function...\n")

#     boxes = list(range(100000))[::-1]  # Unsorted list
#     target = 123  # Value to search for

#     # O(n)
#     time_n, mem_n = measure(linear_search, boxes, target)
#     print(f"O(n)       -> Time: {time_n:.6f}s | Memory: {mem_n:.6f} MiB")

#     # O(log n) - binary search on sorted list
#     sorted_boxes = sorted(boxes)
#     time_log, mem_log = measure(binary_search, sorted_boxes, target)
#     print(f"O(log n)   -> Time: {time_log:.6f}s | Memory: {mem_log:.6f} MiB")

#     # O(n log n) - sort + binary search
#     time_nlogn, mem_nlogn = measure(sort_then_binary_search, boxes, target)
#     print(
#         f"O(n log n) -> Time: {time_nlogn:.6f}s | Memory: {mem_nlogn:.6f} MiB")


# =====================================================================================================


import time
import array
import sys

# Create a large list and array of integers
N = 10_000_000
list_data = list(range(N))
array_data = array.array('i', range(N))  # 'i' = signed integer

# Measure memory usage
list_memory = sys.getsizeof(list_data) + sum(sys.getsizeof(i)
                                             for i in list_data[:1000]) * (N // 1000)
array_memory = sys.getsizeof(array_data)

# Measure loop time for list
start_time = time.time()
for item in list_data:
    x = item * 2
list_time = time.time() - start_time

# Measure loop time for array
start_time = time.time()
for item in array_data:
    x = item * 2
array_time = time.time() - start_time

# Print results
print("📊 Performance & Memory Comparison")
print("----------------------------------")
print(
    f"List:  Time = {list_time:.4f} sec | Approx. Memory = {list_memory / (1024**2):.2f} MB")
print(
    f"Array: Time = {array_time:.4f} sec | Memory = {array_memory / (1024**2):.2f} MB")
