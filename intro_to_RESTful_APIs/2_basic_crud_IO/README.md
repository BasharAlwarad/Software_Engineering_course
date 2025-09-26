# Node.js I/O with JSON: Full CRUD Example

## Introduction

Node.js makes it easy to work with files and perform I/O operations. In this lecture, we'll see how to use Node.js to read and write JSON files, and implement full CRUD (Create, Read, Update, Delete) operations for a list of users.

## Why Use JSON for I/O?

JSON (JavaScript Object Notation) is a lightweight data format that's easy to read and write for both humans and machines. It's commonly used for storing and exchanging data.

## CRUD Operations Explained

- **Create:** Add a new user to the file.
- **Read:** List all users or get a specific user.
- **Update:** Modify an existing user's data.
- **Delete:** Remove a user from the file.

## Example: Users CRUD with Node.js

We'll use a file called `users.json` to store our users. Each user will have an `id`, `name`, and `email`.

### 1. Setup

Create a file named `users.json` in the same directory with the following content:

```json
[]
```

### 2. CRUD Code Example (`io_with_node.js`)

```js
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'users.json');

// Helper to read users
function readUsers() {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile, 'utf8');
  return data ? JSON.parse(data) : [];
}

// Helper to write users
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// CREATE
function createUser(user) {
  const users = readUsers();
  user.id = Date.now();
  users.push(user);
  writeUsers(users);
  console.log('User created:', user);
}

// READ ALL
function getAllUsers() {
  const users = readUsers();
  console.log('All users:', users);
  return users;
}

// READ ONE
function getUserById(id) {
  const users = readUsers();
  const user = users.find((u) => u.id === id);
  console.log('User:', user);
  return user;
}

// UPDATE
function updateUser(id, newData) {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return console.log('User not found');
  users[idx] = { ...users[idx], ...newData };
  writeUsers(users);
  console.log('User updated:', users[idx]);
}

// DELETE
function deleteUser(id) {
  let users = readUsers();
  users = users.filter((u) => u.id !== id);
  writeUsers(users);
  console.log('User deleted:', id);
}

// Example usage:
// createUser({ name: 'Alice', email: 'alice@example.com' });
// getAllUsers();
// const users = getAllUsers();
// if (users.length) updateUser(users[0].id, { name: 'Alice Smith' });
// if (users.length) deleteUser(users[0].id);
```

## How to Run

1. Make sure you have Node.js installed.
2. Place `io_with_node.js` and `users.json` in the same folder.
3. Uncomment the example usage lines in `io_with_node.js` to test each operation.
4. Run:
   ```bash
   node io_with_node.js
   ```

---

This example demonstrates basic file I/O and CRUD operations in Node.js using JSON. For more advanced use cases, consider using a database.
