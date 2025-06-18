def binary_search(list, target):
    first = 0
    last = len(list)-1
    while first <= last:
        midpoint = (first+last)//2
        print(first, last, midpoint)
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint+1
        else:
            last = midpoint-1
    return None


myList = [i for i in range(0, 10)]

print(binary_search(myList, 5))
