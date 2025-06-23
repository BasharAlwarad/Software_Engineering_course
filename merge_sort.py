def merge_sort(list):
    """
    Merge Sort Algorithm sort a list in ascending order
    returns the new sorted list
    Divide: Find the midpoint of the list a into sub lists
    Conquer: Recursively sort the sub lists created in the pervious step
    Combine: Merge the sorted sub lists created in the previous step
    """
    if len(list) <= 1:
        return list
    left_half, right_half = split(list)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left, right)


def split(list):
    """
    Split the list into two halves and return them
    """
    mid = len(list)//2
    left_half = list[:mid]
    right_half = list[mid:]
    return (left_half, right_half)


def merge(left, right):
    """
    Merge two lists into one list and sorting them in the process
    """
    l = []
    i = 0
    j = 0
    while i <= len(left) and j < len(right):
        if left[i] < right[j]:
            l.append(left[i])
            i += 1
        else:
            l.append(right[j])
            j += 1
    while i < len(left):
        l.append(left[i])
        i += 1
    while j < len(right):
        l.append(right[j])
        j += 1

    return l


someList = ["3", "2", "1", "5"]

print(merge_sort(someList))
