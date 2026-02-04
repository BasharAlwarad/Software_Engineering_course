# Lecture: Web Storage API (localStorage & sessionStorage)

> **Educational content by John Alwarad**  
> Learn how browsers store data locally using the Web Storage API.

## Connect with Me [![LinkedIn](https://img.shields.io/badge/LinkedIn-John%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/John-alwarad-2a960b1b6/)

---

## Introduction: Where does localStorage live?

`localStorage` is stored **inside the browser’s profile data**, not inside your project folder. Each browser keeps a private storage database on your computer (often a **SQLite/LevelDB** file). The **exact file location varies** by browser and OS, and you should **never edit it directly**.

### ✅ Important facts

- **localStorage only stores strings.**
- Every website gets its own storage based on **Origin**:
  - **Origin = protocol + domain + port**
  - Example: `https://example.com:443`
- The browser uses the **URL origin** to link storage to that website.

So if you open `https://mysite.com` and `http://mysite.com`, they **do not share** the same localStorage.

---

## What is localStorage?

`localStorage` is a simple key/value storage built into the browser.

- Data **persists forever** (until manually removed)
- Only **strings** are stored
- Maximum size ~5–10 MB (browser dependent)

### Basic Syntax

```js
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();
```

---

## Example 1: Save and Read a String

```js
localStorage.setItem('username', 'John');

const name = localStorage.getItem('username');
console.log(name); // John
```

---

## Example 2: Save and Read a Number

```js
localStorage.setItem('age', String(25));

const age = Number(localStorage.getItem('age'));
console.log(age + 5); // 30
```

---

## Example 3: Save and Read a Boolean

```js
localStorage.setItem('isLoggedIn', String(true));

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
console.log(isLoggedIn); // true
```

---

## Example 4: Save and Read an Object

```js
const user = { id: 1, name: 'John', role: 'teacher' };

localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // John
```

---

## Example 5: Save and Read an Array

```js
const skills = ['HTML', 'CSS', 'JavaScript'];

localStorage.setItem('skills', JSON.stringify(skills));

const storedSkills = JSON.parse(localStorage.getItem('skills'));
console.log(storedSkills[1]); // CSS
```

---

## Updating Data in localStorage

To update data, simply **set the same key again** with a new value.

```js
localStorage.setItem('username', 'Ali');
localStorage.setItem('username', 'Sara'); // Updated

console.log(localStorage.getItem('username')); // Sara
```

### Updating an Object

```js
const user = JSON.parse(localStorage.getItem('user'));
user.role = 'admin';

localStorage.setItem('user', JSON.stringify(user));
```

---

## Removing Data

### Remove one item

```js
localStorage.removeItem('username');
```

### Clear everything

```js
localStorage.clear();
```

---

## Helpful Tips

- Always use **JSON.stringify()** for objects and arrays
- Always use **JSON.parse()** when reading them back
- Use `String()` when saving numbers and booleans

---

## sessionStorage (Quick Mention)

`sessionStorage` works exactly like `localStorage`, but:

- Data is **deleted when the tab closes**
- Storage is still **per origin**

```js
sessionStorage.setItem('token', 'abc123');
const token = sessionStorage.getItem('token');
```

---

## Summary

- ✅ `localStorage` stores **strings** in the browser
- ✅ Data is linked to the **URL origin** (protocol + domain + port)
- ✅ Use `JSON.stringify()` for objects and arrays
- ✅ Update with `setItem()` again
- ✅ Remove with `removeItem()` or `clear()`
- ✅ `sessionStorage` is the same, but clears when the tab closes
