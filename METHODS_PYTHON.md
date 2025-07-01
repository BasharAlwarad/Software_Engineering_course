Here is a comprehensive table of common **Python methods** grouped by **data type** and **operation type** (like sorting, reversing, etc.). It includes the most widely used built-in data types: `list`, `tuple`, `str`, `set`, and `dict`.

---

### 🧮 Python Methods by Data Type and Operation Type

| **Operation Type**    | **List (`list`)**              | **Tuple (`tuple`)** | **String (`str`)**                       | **Set (`set`)**                  | **Dictionary (`dict`)**              |     |
| --------------------- | ------------------------------ | ------------------- | ---------------------------------------- | -------------------------------- | ------------------------------------ | --- |
| **Sorting**           | `sort()`, `sorted()`           | `sorted()`          | `sorted()`                               | `sorted()`                       | `sorted()`                           |     |
| **Reversing**         | `reverse()`, `reversed()`      | `reversed()`        | `[::-1]`, `reversed()`                   | `reversed()` _(on sorted set)_   | `reversed()` _(on sorted dict keys)_ |     |
| **Inserting**         | `insert()`, `append()`         | ❌ (immutable)      | ❌ (use concatenation or slicing)        | `add()`                          | `update()` _(for adding key-value)_  |     |
| **Deleting/Removing** | `remove()`, `pop()`, `clear()` | ❌ (immutable)      | `replace()`, `strip()`, `lstrip()`, etc. | `remove()`, `discard()`, `pop()` | `pop()`, `popitem()`, `clear()`      |     |
| **Adding/Merging**    | `extend()`, `+`, `*`           | `+`, `*`            | `+`, `join()`                            | `update()`, `union()`            | `update()`, \`                       | =\` |
| **Indexing/Search**   | `index()`, `in`                | `index()`, `in`     | `index()`, `find()`, `in`                | `in`                             | `get()`, `in`, `keys()`, `values()`  |     |
| **Counting**          | `count()`                      | `count()`           | `count()`                                | `len()`, custom loop             | `len()`, custom loop                 |     |
| **Copying**           | `copy()`, `list()`             | `tuple()`           | `str()`                                  | `copy()`, `set()`                | `copy()`, `dict()`                   |     |
| **Iteration**         | `for x in list`                | `for x in tuple`    | `for x in str`                           | `for x in set`                   | `for k, v in dict.items()`           |     |
| **Conversion**        | `list()`, `str()`, `tuple()`   | `tuple()`, `list()` | `list()`, `split()`, `join()`            | `list()`, `tuple()`, `set()`     | `list(dict.items())`, `json.dumps()` |     |
| **Length**            | `len()`                        | `len()`             | `len()`                                  | `len()`                          | `len()`                              |     |
| **Joining**           | ❌ _(use `+` or `extend()`)_   | `+`                 | `'sep'.join(seq)`                        | `set.union()`                    | `dict.update()`                      |     |
| **Slicing**           | `list[start:stop:step]`        | `tuple[start:stop]` | `str[start:stop]`                        | ❌ _(use conversion to list)_    | ❌ _(not indexable)_                 |     |
