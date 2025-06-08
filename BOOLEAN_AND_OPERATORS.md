## The Boolean value False itself.

1. Empty values:
   - "" (empty string)
   - [] (empty list)
   - () (empty tuple)
   - {} (empty dictionary)
   - set() (empty set)
2. The number 0:
   - 0 (integer)
   - 0.0 (float)
   - 0j (complex zero)
   - The special value None.

## bool function `bool()`

## `is` , `is not` , `==`

## bitwise operators

```py
# Examples:
a = 5      # 0101 in binary
b = 3      # 0011 in binary

# Only 1 where both bits are 1 → result is 1
print("a & b =", a & b)
# 1 where either bit is 1 → result is 7
print("a | b =", a | b)
# 1 where bits are different → result is 6
print("a ^ b =", a ^ b)
# Bitwise NOT inverts every bit
# a = 5        => binary: 0000...0101
# ~a           => flips to: 1111...1010 → which is -6
# This follows the rule:
# ~n = -n - 1
print("~a =", ~a)
# Shifts all bits left, adds a 0 on the right.
# Equivalent to multiplying by 2.
print("a << 1 =", a << 1)
# Shifts all bits right, drops the rightmost bit.
# Equivalent to integer division by 2.
print("a >> 1 =", a >> 1)
```

```py
print(bin(-1 & 0xFFFFFFFF))
print(bin(1 & 0xFFFFFFFF))
```
