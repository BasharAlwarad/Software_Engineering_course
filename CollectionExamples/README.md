# Collection Examples — Cheat Sheet

This folder contains short demos and a cheat sheet for Arrays, `List<T>` and `Dictionary<TKey, TValue>` (no LINQ).

## Arrays (System.Array)

- Declaration / creation:
  - int[] a = new int[3];
  - int[] b = new int[] {1,2,3};
- Common members and patterns:
  - Length: `a.Length` (number of elements)
  - IndexOf: `Array.IndexOf(a, value)`
  - Sort: `Array.Sort(a)`
  - Reverse: `Array.Reverse(a)`
  - Copy: `Array.Copy(source, dest, count)`
  - Resize: `Array.Resize(ref a, newSize)`
  - Join for printing: `string.Join(", ", a)`

Example:

```csharp
int[]nums = {3,1,2};
Array.Sort(nums);
Console.WriteLine(string.Join(", ", nums)); // 1, 2, 3
```

## List<T> (System.Collections.Generic.List<T>)

- Declaration:
  - var list = new List<int>();
  - var list2 = new List<string> {"a", "b"};
- Common methods:
  - Add(item), AddRange(IEnumerable)
  - Insert(index, item), InsertRange(index, IEnumerable)
  - Remove(item), RemoveAt(index), RemoveRange(index, count)
  - Contains(item), IndexOf(item)
  - Count property
  - Sort(), Reverse()
  - ToArray(), CopyTo(array, index)
  - Clear()

Example:

```csharp
var l = new List<int>{1,2};
l.Add(3);
Console.WriteLine(l.Count); // 3
l.Sort();
```

## Dictionary<TKey, TValue>

- Declaration:
  - var d = new Dictionary<string,int>();
  - var d = new Dictionary<int,string> { {1, "one"} };
- Common methods/properties:
  - Add(key, value) — throws if key exists
  - indexer: d[key] = value (add or set)
  - TryGetValue(key, out value) — safe lookup
  - ContainsKey(key)
  - Remove(key)
  - Keys and Values properties to iterate separately
  - Count property

Example:

```csharp
var map = new Dictionary<string,int>();
map["apple"] = 3;
if(map.TryGetValue("apple", out int v)) Console.WriteLine(v);
```

---

Files in this folder:

- `ArrayExample.cs` — array demos
- `ListExample.cs` — list demos
- `DictionaryExample.cs` — dictionary demos
- `Program.cs` — small menu runner
