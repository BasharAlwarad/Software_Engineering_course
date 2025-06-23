# from array import array
# import sys
# import random
# import time

# # array.array is typed and contiguous
# # x = array("i", (1, 2, 3, 4))
# # for i in x:
# #     print(f"value: {i} | address: {id(i)}")
# # print(type(x), isinstance(x, array), isinstance(x, list), id(x))

# # Python list is flexible and dynamic
# # my_list = [1, 2, 3, 4]
# # my_list.insert(0, 0)
# # my_list.insert(3, 9)
# # my_list.append(5)
# # print(my_list)
# # for i in my_list:
# #     print(f"value: {i} | address: {id(i)}")
# # print(140736397509576-140736397509544)
# # print(140736397509608-140736397509576)
# # Memory over-allocation in list
# # a = []
# # print(sys.getsizeof(a))  # bytes
# # a.append(1)
# # print(sys.getsizeof(a))
# # a.append(2)
# # a.append(3)
# # a.append(4)
# # a.append(5)
# # a.append(5)
# # a.append(5)
# # a.append(5)
# # print(sys.getsizeof(a))

# # Performance comparison: list vs dict

# size = 1_000_000
# data_list = list(range(size))
# data_dict = {i: True for i in range(size)}
# # search_item = random.randint(0, size - 1)
# search_item = 1
# # O(n)
# print(search_item)

# start_time = time.time()
# found = search_item in data_list
# print(f"List search: {found} | Time: {time.time() - start_time:.6f}s")

# start_time = time.time()
# found = search_item in data_dict
# print(f"Dict search: {found} | Time: {time.time() - start_time:.6f}s")

import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr, arr.dtype, arr.shape)
