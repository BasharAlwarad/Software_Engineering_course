# Block 3: Loops in JavaScript (No Arrays)

> **Educational content by Bashar Alwarad**  
> Model Context Protocol (MCP) integration with Pokemon data.

## Connect with Me [![LinkedIn](https://img.shields.io/badge/LinkedIn-Bashar%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bashar-alwarad-2a960b1b6/)

---

## Recursion as a Loop (Function-Only Loop)

```javascript
let a = 0;

function bumpUntilTen() {
  if (a > 10) return; // stop condition
  console.log('a =', a);
  a++; // progress
  bumpUntilTen(); // self-call
}

bumpUntilTen();
```

---

## for Loop

```javascript
// count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log('for i =', i);
}
```

---

## while Loop

```javascript
let count = 3;

while (count > 0) {
  console.log('while count =', count);
  count--;
}
```

---

## do...while Loop

```javascript
let tries = 0;

do {
  console.log('do...while try #', tries);
  tries++;
} while (tries < 2);
```

---

## Loop Control: break and continue

```javascript
// break: stop the loop
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log('break demo i =', i);
}

// continue: skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue; // skip even
  console.log('continue demo i =', i);
}
```

---

## Continue & Break (More Scenarios)

```javascript
// while with continue/break
let n = 0;
while (true) {
  n++;
  if (n % 2 === 0) continue; // skip even
  console.log('while odd n =', n);
  if (n > 7) break; // stop loop
}

// do...while with break
let attempts = 0;
do {
  attempts++;
  console.log('attempt', attempts);
  if (attempts === 2) break;
} while (attempts < 5);

// labelled break for nested loops
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j === 4) {
      console.log('sum=4 at', i, j);
      break outerLoop; // exit both loops
    }
  }
}

// Note: Our recursion intro (bumpUntilTen) "breaks" by returning when a > 10.
```

---

## Continue & Break with switch and if

```javascript
// switch uses break to exit a matching case
function dayCategory(day) {
  switch (day) {
    case 'Sat':
    case 'Sun':
      return 'Weekend'; // break not needed after return
    case 'Mon':
    case 'Tue':
      return 'Workday';
    default:
      return 'Unknown';
  }
}

// if: use early return instead of break/continue
function signLabel(num) {
  if (num < 0) return 'Negative'; // early exit
  if (num === 0) return 'Zero'; // early exit
  return 'Positive';
}

console.log(dayCategory('Sun'));
console.log(signLabel(-2));
```

---

## Continue & Break inside Functions and Loops

```javascript
// for with continue/break inside a function
function firstVowelIndex(text) {
  const vowels = 'aeiou';
  for (let i = 0; i < text.length; i++) {
    const c = text[i].toLowerCase();
    if (!vowels.includes(c)) continue; // skip non-vowel
    return i; // found vowel -> break via return
  }
  return -1; // no vowel found
}

// while with continue/break
function logOddsUnder(limit) {
  let n = 0;
  while (true) {
    n++;
    if (n % 2 === 0) continue; // skip even
    console.log('odd:', n);
    if (n >= limit) break; // stop when limit reached
  }
}

console.log(firstVowelIndex('sky'));
logOddsUnder(7);
```

---

## Quick Summary

- Use **for** when you know counts/steps.
- Use **while** when you loop while a condition stays true.
- Use **do...while** to run at least once, then re-check the condition.
- **break** stops a loop; **continue** skips the current iteration.
- Recursion can mimic loops: always include a stop condition and progress.

---
