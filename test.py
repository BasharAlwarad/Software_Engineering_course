class MyBox:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return


box = MyBox([1, 2, 3])
print(len(box))  # 3

# =========================================================================================================================================
# fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
# print([(i, x) for i, x in enumerate(fruits)])

# Original approach - lambda in list comprehension with inline dict
# print("Method 1 - Original:")
# print("\n".join(
#     [(lambda item: f"{str(item[1]+1)}: {item[0]}")(i) for i in {fruits[i]: i for i in range(len(fruits))}.items()]))

# print("\n" + "="*50 + "\n")

# Method 2 - Using enumerate directly
# print("Method 2 - Using enumerate:")
# print("\n".join([f"{i+1}: {fruit}" for i, fruit in enumerate(fruits)]))

# print("\n" + "="*50 + "\n")

# Method 3 - Using map with lambda
# print("Method 3 - Using map with lambda:")
# print(list(map(lambda x: f"{x[0]+1}: {x[1]}", enumerate(fruits))))
# print("\n".join(map(lambda x: f"{x[0]+1}: {x[1]}", enumerate(fruits))))

# print("\n" + "="*50 + "\n")

# Method 4 - Using range and indexing
# print("Method 4 - Using range and indexing:")
# print("\n".join([f"{i+1}: {fruits[i]}" for i in range(len(fruits))]))

# print("\n" + "="*50 + "\n")

# Method 5 - Using zip with range
# print("Method 5 - Using zip with range:")
# print(list(zip(range(1, len(fruits)+1), fruits)))
# print("\n".join([f"{i}: {fruit}" for i, fruit in zip(
#     range(1, len(fruits)+1), fruits)]))

# print("\n" + "="*50 + "\n")

# Method 6 - Using dictionary comprehension then lambda
# print("Method 6 - Dict comprehension then lambda:")
# fruit_dict = {fruit: i for i, fruit in enumerate(fruits)}
# print("\n".join([(lambda k, v: f"{v+1}: {k}")(k, v)
#       for k, v in fruit_dict.items()]))

# print("\n" + "="*50 + "\n")

# Method 7 - Using format() method with lambda
# print("Method 7 - Using format() with lambda:")
# def formatter(idx, name): return "{}: {}".format(idx+1, name)


# print("\n".join([formatter(i, fruit) for i, fruit in enumerate(fruits)]))

# print("\n" + "="*50 + "\n")

# Method 8 - Using enumerate with start parameter
# print("Method 8 - Enumerate with start:")
# print("\n".join([f"{i}: {fruit}" for i, fruit in enumerate(fruits, 1)]))
