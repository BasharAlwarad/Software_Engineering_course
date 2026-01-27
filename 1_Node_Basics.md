# Block 6: Node.js Basics

> **Educational content by Bashar Alwarad**  
> Running JavaScript outside the browser with Node.js.

## Connect with Me [![LinkedIn](https://img.shields.io/badge/LinkedIn-Bashar%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bashar-alwarad-2a960b1b6/)

---

## What is Node?

**Node.js** is a JavaScript runtime that lets you run JavaScript code **outside the browser** (on your computer, server, etc.). It uses the same V8 engine as Chrome and includes built-in modules for file I/O, networking, and more.

### Why Node.js?

- 🖥️ Run JavaScript on the server or desktop.
- 📦 Use npm (Node Package Manager) for libraries.
- ⚡ Fast and event-driven.
- 🔌 Perfect for backend, CLI tools, and automation.

---

## How to Run JavaScript Files in Terminal

### 1. Install Node.js

Download from [nodejs.org](https://nodejs.org) and install.

### 2. Check Installation

```bash
node --version
```

### 3. Run a JavaScript File

```bash
node filename.js
```

### Example: Hello World

Create a file `hello.js`:

```javascript
console.log('Hello from Node.js!');
```

Run it:

```bash
node hello.js
```

Output:

```
Hello from Node.js!
```

---

## Input & Output with argv

**argv** (argument vector) is an array containing command-line arguments passed to your script.

- `process.argv[0]`: path to node executable
- `process.argv[1]`: path to your script
- `process.argv[2]` and beyond: your arguments

### Example 1: Simple Argument index

Create `index.js`:

```javascript
// Get arguments
const args = process.argv.slice(2); // skip first 2 elements

console.log('You passed:', args);
console.log('Number of args:', args.length);
```

Run:

```bash
node index.js hello world
```

Output:

```
You passed: [ 'hello', 'world' ]
Number of args: 2
```

### Example 2: Personalized Greeting

Create `greet.js`:

```javascript
const name = process.argv[2] || 'Guest';
const age = process.argv[3] || 'unknown';

console.log(`Welcome, ${name}!`);
console.log(`Age: ${age}`);

if (age !== 'unknown') {
  console.log(`Next year you will be ${parseInt(age) + 1}`);
}
```

Run:

```bash
node greet.js Alice 25
```

Output:

```
Welcome, Alice!
Age: 25
Next year you will be 26
```

---

## Quick Summary

- ✅ Node.js runs JavaScript outside the browser.
- ✅ Use `node filename.js` to run a script.
- ✅ `process.argv` accesses command-line arguments.
- ✅ `process.argv[0]` and `[1]` are node & script paths; your args start at `[2]`.
- ✅ Use `process.argv.slice(2)` to get only your arguments.
- ✅ arg input type is string use `parseInt(variable)` to parse it to number when you need to.

---
