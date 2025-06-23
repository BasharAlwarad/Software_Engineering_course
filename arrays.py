# train analogy and the the train cars
# in C swift and java array are homogeneous
# in python array are heterogeneous
# arrays are contiguous structure

import sys
import random
import time
from array import array

x = array("i", (1, 2, 3, 4))
for i in x:
    print(f"value: {i} | address: {id(i)}")
print(x)
print(isinstance(x, array))
print(isinstance(x, list))
print(type(x))
print(id(x))

my_list = [1, 2, 3, 4]
my_list.insert(0, 0)
my_list.insert(3, 9)

my_list.append(5)
for i in my_list:
    print(f"value: {i} | address: {id(i)}")
print(140736048006088-140736048006056)
print(140736048006120-140736048006088)
print(140736048006152-140736048006120)


# Create a large list and dictionary with the same data
size = 1_000_000
data_list = list(range(size))
data_dict = {i: True for i in range(size)}

# Pick a random number to search for
search_item = random.randint(0, size - 1)

# --- Search in list ---
start_time = time.time()
found = search_item in data_list
end_time = time.time()
list_time = end_time - start_time
print(f"List search: Found={found} | Time taken={list_time:.6f} seconds")

# --- Search in dictionary ---
start_time = time.time()
found = search_item in data_dict
end_time = time.time()
dict_time = end_time - start_time
print(f"Dict search: Found={found} | Time taken={dict_time:.6f} seconds")

# --- Comparison ---
print("\nDictionary search is faster by about {:.2f}x".format(
    list_time / dict_time if dict_time > 0 else float('inf')))


a = []
print(sys.getsizeof(a))  # size in bytes
a.append(1)
print(sys.getsizeof(a))
a.append(2)
print(sys.getsizeof(a))
