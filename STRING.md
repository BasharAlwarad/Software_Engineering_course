<nav>
    <ul>
        <li><a href="./README.md">Intro</a></li>
        <li><a href="./STRING.md">String</a></li>
        <li><a href="./DEF.md">Def</a></li>
    </ul>
</nav>

## print params

## string methods

1. how python store and treat strings.

```mermaid
graph TD

    %% Stack frame
    subgraph Stack
        X["x (variable)"]
    end

    %% Heap object
    subgraph Heap
        OBJ["PyObject<br/>Type: str<br/>Length: 4<br/>Value: "John""]
    end

    X -->|pointer| OBJ

```

```mermaid

graph TD

    subgraph Stack
        X["x (var)"]
    end

    subgraph Heap
        STR_OBJ["PyUnicodeObject<br/>type: str<br/>length: 4<br/>value: "John""]
    end

    subgraph CharArray["char array (contiguous)"]
        J["'J'"]
        O["'o'"]
        H["'h'"]
        N["'n'"]
    end

    STR_OBJ --> CharArray
    X --> STR_OBJ

```

```sql
[STACK]
x ───────────▶ [address 0xA000]

[HEAP at 0xA000]
+----------------------------+
| type: str                 |
| length: 4                 |
| data: pointer to 0xA100   |
+----------------------------+

[0xA100]
+-----+-----+-----+-----+
| 'J' | 'o' | 'h' | 'n' |
+-----+-----+-----+-----+
```

```mermaid
graph TD

%% STACK FRAME
    subgraph Stack
        X["x (variable)"]
    end

%% HEAP OBJECT (PyUnicodeObject)
    subgraph Heap
        PyStr["PyUnicodeObject<br/>type: str<br/>length: 4<br/>data pointer → 0xA100"]
        DataBlock["0xA100: char[]<br/>'J' | 'o' | 'h' | 'n'"]
    end

%% POINTERS
    X -->|pointer| PyStr
    PyStr -->|data pointer| DataBlock

```

```mermaid
graph TD

subgraph Stack
    X["x (variable)"]
end

subgraph Heap
    PyStr["PyUnicodeObject<br/>
    - ob_refcnt: 1<br/>
    - ob_type: &str<br/>
    - length: 4<br/>
    - hash: -1<br/>
    - kind: 1-byte<br/>
    - data → 0xA100"]

    DataBlock["0xA100: ['J', 'o', 'h', 'n']"]
end

X -->|pointer| PyStr
PyStr -->|data pointer| DataBlock

```

1. strip()
2. capitalize()
3. title()
4. chain methods
5. chain methods on the return of input
6. split(" ")
7. first, last = split(" ")
8. format()

## looping throw a string for loop

## string length `len()`

## Check if a String Exists in a Phrase `in` and `not in`

## String Slicing `sting[:]`

## Modifying Strings

1. `upper()` and `lower()`
2. `strip()`
3. `replace()`
4. `split()`

## format function:

1. format two strings
2. format using `.format()`
3. format using `f""`

## string in memory

```py
char = 'hello world'
for c in char:
    ascii_code = ord(c)
    binary_code = bin(ascii_code)
    print(f"Character: {c}")
    print(f"address: {id(c)}")
    print(f"ASCII Code: {ascii_code}")
    print(f"Binary (bitwise): {binary_code}")

```
