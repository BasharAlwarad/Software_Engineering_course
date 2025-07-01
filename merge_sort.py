# from tabulate import tabulate

# merge_steps = []


def merge_sort(lst):
    if len(lst) <= 1:
        return lst

    mid = len(lst) // 2
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])

    result = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result += left[i:]
    result += right[j:]

    # Record this step
    # merge_steps.append([
    #     str(lst),
    #     str(left),
    #     str(right),
    #     str(result)
    # ])

    return result


# Example usage
unsorted = [3, 2, 1, 5, 7, 3, 8, 8, 4]
sorted_result = merge_sort(unsorted)

# Print final result
print("\nunsorted List:", unsorted)
print("\nSorted List:", sorted_result)

# Print steps table
# headers = ["Original", "Left", "Right", "Merged"]
# print("\nMerge Sort Steps:")
# print(tabulate(merge_steps, headers=headers, tablefmt="fancy_grid"))
