def linear_search(list, target):
    for i in list:
        print(i)
        if list[i] == target:
            return i
    return None


myList = [i for i in range(0, 10)]

print(linear_search(myList, 5))
