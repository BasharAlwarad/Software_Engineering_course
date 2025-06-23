def recursive_binary_search(list, target):
    print(list.index(target))
    print(list)
    if len(list) == 0:
        return False
    else:
        midpoint = len(list)//2
        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive_binary_search(list[midpoint+1:], target)
            else:
                return recursive_binary_search(list[:midpoint], target)


numbers = [i for i in range(1, 100)]

# print(numbers)
# print(numbers.index(target))
# print(recursive_binary_search(numbers, "4"))
# print(recursive_binary_search(numbers, "11"))
print(recursive_binary_search(numbers, 66))
