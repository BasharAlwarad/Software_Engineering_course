# Block 2: Core Control Flow & Functions

> **Educational content by Bashar Alwarad**  
> Model Context Protocol (MCP) integration with Pokemon data.

## Connect with Me [![LinkedIn](https://img.shields.io/badge/LinkedIn-Bashar%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bashar-alwarad-2a960b1b6/)

## Arithmetic Recap

```javascript
let a = 8;
let b = 3;

console.log(a + b); // 11
console.log(a - b); // 5
console.log(a * b); // 24
console.log(a / b); // 2.666...
console.log(a % b); // 2
console.log(a ** b); // 512
```

## Comparison & Logical Operators

```javascript
let x = 5;
let y = '5';

console.log(x == y); // true (value)
console.log(x === y); // false (value + type)
console.log(x !== 10); // true
console.log(x > 2 && x < 10); // true (AND)
console.log(x < 2 || x > 4); // true (OR)
console.log(!(x === 5)); // false (NOT)
```

## Conditionals & Switch

```javascript
let score = 85;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C or below');
}

// Switch example
let day = 'Mon';
switch (day) {
  case 'Mon':
  case 'Tue':
    console.log('Workday');
    break;
  case 'Sat':
  case 'Sun':
    console.log('Weekend');
    break;
  default:
    console.log('Unknown');
}
```

## Try/Catch

```javascript
// Without throwing (graceful fallback)
function safeDivide(a, b) {
  try {
    if (b === 0) return 0; // early safe return
    return a / b;
  } catch (e) {
    return 0;
  }
}

console.log(safeDivide(10, 0)); // 0

// With throwing (propagate the issue)
function mustDivide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

try {
  console.log(mustDivide(10, 0));
} catch (e) {
  console.log('Caught error:', e.message);
}
```

## Functions & Arrow Functions

```javascript
// Regular function
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow function
const greetArrow = (name) => `Hello, ${name}`;

// Arrow with multiple params
const add = (a, b) => a + b;

// Arrow with block body
const describe = (name, age) => {
  return `${name} is ${age} years old.`;
};

console.log(greet('Sam'));
console.log(greetArrow('Lia'));
console.log(add(2, 3));
console.log(describe('Mia', 22));
```

## Continue & Break in Control Flow

- `break`: exits the current loop or `switch`.
- `continue`: skips to the next loop iteration.
- `if / else`: you don’t use `break/continue`; use an early `return` inside functions.

```javascript
// Early return in if/else (function context)
function checkAge(age) {
  if (age < 18) return 'Underage'; // acts like an early exit
  return 'Allowed';
}

// Break in switch
function dayType(day) {
  switch (day) {
    case 'Sat':
    case 'Sun':
      return 'Weekend';
    case 'Mon':
    case 'Tue':
      return 'Workday';
    default:
      return 'Unknown';
  }
}

// Continue and break in a for loop
function logOddsUpTo(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) continue; // skip even
    if (i > 9) break; // stop after 9
    console.log('odd:', i);
  }
}

// Break with labels (exit outer loop)
function findFirstDivisible() {
  outer: for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      if ((i + j) % 4 === 0) {
        console.log('hit:', i, j);
        break outer; // leaves both loops
      }
    }
  }
}

console.log(checkAge(16));
console.log(dayType('Sun'));
logOddsUpTo(12);
findFirstDivisible();
```

---

## Advanced: Memory (Stack vs Heap) & How Functions Run

### Stack vs Heap (Simple View)

- **Stack**: Small, fast. Holds primitive values (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) and function call frames.
- **Heap**: Larger, flexible. Holds reference types (`object`, `array`, `function`, class instances).

```javascript
let n = 10; // primitive on the stack
let user = { name: 'A' }; // object allocated on the heap; the reference is on the stack
let nums = [1, 2, 3]; // array on the heap; reference on the stack
```

### How Functions Use the Call Stack

1. You call a function → a new **stack frame** is pushed (stores params, local primitives, references).
2. The function runs; references inside the frame point to heap objects.
3. When the function returns, the frame is popped; heap objects remain if still referenced elsewhere.

```javascript
function outer() {
  const x = 1; // on stack
  const obj = { v: 2 }; // ref on stack -> object on heap
  return function inner() {
    // function (heap) closes over obj ref
    return x + obj.v;
  };
}

const fn = outer(); // outer frame is gone, but obj and inner stay alive via references
console.log(fn()); // 3
```

### Key Takeaways

- Primitives copy values; objects/arrays/functions copy references.
- Stack frames appear/disappear with function calls; heap data lives while referenced.
- Arrow functions share the same memory rules as regular functions.

---
