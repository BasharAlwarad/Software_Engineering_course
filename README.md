# 🧠 Understanding Number Systems in Computers

This file covers how data is stored in memory and how to interpret it using Binary, Decimal, and Hexadecimal formats.

---

## 🧩 How Computer Memory Works

All data inside a computer is stored using **transistors**. These transistors can only be in one of two states:

- `0` → OFF
- `1` → ON

This basic unit of information is called a **bit**.

  <img src="images/transistors.jpg" alt="CPU" width="300"/>

### Scaling Up Memory Units

| Unit       | Size            |
| ---------- | --------------- |
| 1 Bit      | Single 0 or 1   |
| 8 Bits     | 1 Byte          |
| 1024 Bytes | 1 Kilobyte (KB) |
| 1024 KB    | 1 Megabyte (MB) |
| 1024 MB    | 1 Gigabyte (GB) |
| 1024 GB    | 1 Terabyte (TB) |

---

## 💡 Binary: The Language of Computers

Binary is a **base-2** number system, using only the digits `0` and `1`.

Each binary digit (bit) represents an increasing power of 2, starting from the right:

| Bit Position | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- |
| Power of 2   | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |

### Example:

Binary: `01001010`  
Calculation: `0×128 + 1×64 + 0×32 + 0×16 + 1×8 + 0×4 + 1×2 + 0×1`  
Result: **74 (Decimal)**

---

## 🗂️ Memory Representation Table

Memory is often visualized like a table, with each cell holding 1 byte (8 bits):

| Address | Binary   | Decimal |
| ------- | -------- | ------- |
| 0x00    | 00000000 | 0       |
| 0x01    | 00000001 | 1       |
| 0x02    | 00000010 | 2       |
| 0x03    | 00000011 | 3       |
| ...     | ...      | ...     |

---

## 📊 Binary System: How It Works

### this chart shows value of 255

```mermaid
flowchart TB
    B7["Bit number: 7<br>Binary = 1<br>Decimal = 128"]
    B6["Bit number: 6<br>Binary = 1<br>Decimal = 64"]
    B5["Bit number: 5<br>Binary = 1<br>Decimal = 32"]
    B4["Bit number: 4<br>Binary = 1<br>Decimal = 16"]
    B3["Bit number: 3<br>Binary = 1<br>Decimal = 8"]
    B2["Bit number: 2<br>Binary = 1<br>Decimal = 4"]
    B1["Bit number: 1<br>Binary = 1<br>Decimal = 2"]
    B0["Bit number: 0<br>Binary = 1<br>Decimal = 1"]

    B7 --> ADD
    B6 --> ADD
    B5 --> ADD
    B4 --> ADD
    B3 --> ADD
    B2 --> ADD
    B1 --> ADD
    B0 --> ADD

    ADD["<div style='width:500px'>One Byte<br>Binary = 11111111<br>Decimal Value:<br>128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255</div>"]

    style B7 fill:#8fbc8f,color:#fff
    style B6 fill:#8fbc8f,color:#fff
    style B5 fill:#8fbc8f,color:#fff
    style B4 fill:#8fbc8f,color:#fff
    style B3 fill:#8fbc8f,color:#fff
    style B2 fill:#8fbc8f,color:#fff
    style B1 fill:#8fbc8f,color:#fff
    style B0 fill:#8fbc8f,color:#fff
```

### this chart shows value 0f 250

```mermaid
flowchart TB
    B7["Bit number: 7<br>Binary = 1<br>Decimal = 128"]
    B6["Bit number: 6<br>Binary = 1<br>Decimal = 64"]
    B5["Bit number: 5<br>Binary = 1<br>Decimal = 32"]
    B4["Bit number: 4<br>Binary = 1<br>Decimal = 16"]
    B3["Bit number: 3<br>Binary = 1<br>Decimal = 8"]
    B2["Bit number: 2<br>Binary = 0<br>Decimal = 0"]
    B1["Bit number: 1<br>Binary = 1<br>Decimal = 2"]
    B0["Bit number: 0<br>Binary = 0<br>Decimal = 0"]

    B7 --> ADD
    B6 --> ADD
    B5 --> ADD
    B4 --> ADD
    B3 --> ADD
    B2 --> ADD
    B1 --> ADD
    B0 --> ADD

    ADD["<div style='width:500px'>One Byte<br>Binary = 11111010<br>Decimal Value:<br>128 + 64 + 32 + 16 + 8 + 0 + 2 + 0 = 250</div>"]

    style B7 fill:#8fbc8f,color:#fff
    style B6 fill:#8fbc8f,color:#fff
    style B5 fill:#8fbc8f,color:#fff
    style B4 fill:#8fbc8f,color:#fff
    style B3 fill:#8fbc8f,color:#fff
    style B1 fill:#8fbc8f,color:#fff
```

### this chart shows value 0f ?

```mermaid
flowchart TB
    B7["Bit number: 7<br>Binary = 1<br>Decimal = 128"]
    B6["Bit number: 6<br>Binary = 1<br>Decimal = 64"]
    B5["Bit number: 5<br>Binary = 0<br>Decimal = 0"]
    B4["Bit number: 4<br>Binary = 1<br>Decimal = 16"]
    B3["Bit number: 3<br>Binary = 1<br>Decimal = 8"]
    B2["Bit number: 2<br>Binary = 0<br>Decimal = 0"]
    B1["Bit number: 1<br>Binary = 1<br>Decimal = 2"]
    B0["Bit number: 0<br>Binary = 0<br>Decimal = 0"]

    B7 --> ADD
    B6 --> ADD
    B5 --> ADD
    B4 --> ADD
    B3 --> ADD
    B2 --> ADD
    B1 --> ADD
    B0 --> ADD

    ADD["<div style='width:500px'>One Byte<br>Binary = 11011010<br>Decimal Value:<br>?</div>"]

    style B7 fill:#8fbc8f,color:#fff
    style B6 fill:#8fbc8f,color:#fff
    style B4 fill:#8fbc8f,color:#fff
    style B3 fill:#8fbc8f,color:#fff
    style B1 fill:#8fbc8f,color:#fff
```

## 🔢 Decimal System (Base-10)

Decimal is the standard number system we use in daily life.

It uses 10 digits: `0-9`. Each position represents a power of **10**.

### Example:

`543 = 5×100 + 4×10 + 3×1`

---

## 🔄 Converting Binary to Decimal

To convert binary to decimal:

1. Write the binary number.
2. Multiply each bit by 2 raised to its position index (starting from 0 at the right).
3. Add all values.

### Example:

Binary: `1011`  
Calculation: `1×8 + 0×4 + 1×2 + 1×1 = 11`  
Decimal: **11**

---

## 🧮 Hexadecimal System (Base-16)

Hexadecimal uses **16 digits**: `0-9` and `A-F`

| Hex | Decimal | Binary |
| --- | ------- | ------ |
| 0   | 0       | 0000   |
| 1   | 1       | 0001   |
| 2   | 2       | 0010   |
| 3   | 3       | 0011   |
| 4   | 4       | 0100   |
| 5   | 5       | 0101   |
| 6   | 6       | 0110   |
| 7   | 7       | 0111   |
| 8   | 8       | 1000   |
| 9   | 9       | 1001   |
| A   | 10      | 1010   |
| B   | 11      | 1011   |
| C   | 12      | 1100   |
| D   | 13      | 1101   |
| E   | 14      | 1110   |
| F   | 15      | 1111   |

### Chart in Hexadecimal

```mermaid
flowchart TB
    B7["Bit number: 7<br>Binary = 1<br>Decimal = 128"]
    B6["Bit number: 6<br>Binary = 1<br>Decimal = 64"]
    B5["Bit number: 5<br>Binary = 1<br>Decimal = 32"]
    B4["Bit number: 4<br>Binary = 1<br>Decimal = 16"]
    B3["Bit number: 3<br>Binary = 1<br>Decimal = 8"]
    B2["Bit number: 2<br>Binary = 1<br>Decimal = 4"]
    B1["Bit number: 1<br>Binary = 1<br>Decimal = 2"]
    B0["Bit number: 0<br>Binary = 1<br>Decimal = 1"]

    HEX1["Binary = 1111<br>Hexadecimal = F<br>Decimal: 15 * 16¹ = 240"]
    HEX2["Binary = 1111<br>Hexadecimal = F<br>Decimal: 15 * 16⁰ = 15"]


    B7 --> HEX1
    B6 --> HEX1
    B5 --> HEX1
    B4 --> HEX1
    B3 --> HEX2
    B2 --> HEX2
    B1 --> HEX2
    B0 --> HEX2

    HEX1 --> ADD
    HEX2 --> ADD

    ADD["<div style='width:500px'>One Byte<br>Binary = 11111111<br>Hexadecimal = FF or 15 15<br>Decimal Value: 16¹ * 15 + 16⁰ * 15 = 255<br> 15 × 16 + 15 × 1 = 255</div>"]

    style B7 fill:#8fbc8f,color:#fff
    style B6 fill:#8fbc8f,color:#fff
    style B5 fill:#8fbc8f,color:#fff
    style B4 fill:#8fbc8f,color:#fff
    style B3 fill:#8fbc8f,color:#fff
    style B2 fill:#8fbc8f,color:#fff
    style B1 fill:#8fbc8f,color:#fff
    style B0 fill:#8fbc8f,color:#fff
```

### Why Use Hex?

- Shorter: `11110000` → `F0`
- Easier to read and group binary

---

## 🧭 Converting Binary to Hex

Group the binary in 4-bit chunks from right to left, then convert each group:

### Example:

Binary: `11110000`  
Groups: `1111` `0000`  
Hex: `F0`

---

## 🧾 Summary Table

| Format      | Example  |
| ----------- | -------- |
| Binary      | 11001010 |
| Decimal     | 202      |
| Hexadecimal | CA       |

---

## 🎓 Practice Task

Convert the following:

1. Binary `10010110` → Decimal: `?` → Hex: `?`
2. Decimal `255` → Binary: `?` → Hex: `?`
3. Hex `7F` → Binary: `?` → Decimal: `?`

<details>
<summary>💡 Answers</summary>

1. Binary `10010110` → Decimal: 150 → Hex: `96`
2. Decimal `255` → Binary: `11111111` → Hex: `FF`
3. Hex `7F` → Binary: `01111111` → Decimal: `127`

</details>

---

## 📚 Further Reading

- [Binary Number System - Wikipedia](https://en.wikipedia.org/wiki/Binary_number)
- [Hexadecimal - Wikipedia](https://en.wikipedia.org/wiki/Hexadecimal)
- [How Computers Work (YouTube - CrashCourse)](https://www.youtube.com/watch?v=OAx_6-wdslM)

---
