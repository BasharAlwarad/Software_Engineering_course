# Lecture: Serving Data from a JSON File in Node.js

## Introduction

This section builds directly on the previous example in `4_serving_data_from_server`, where data was served from an in-memory array. The only difference here is that the data is now stored in an external `users.json` file, and the server reads this file to serve the data.

---

## What Changes?

- **In-memory data (4_serving_data):**
  - The user data is hardcoded in the server as a JavaScript array.
  - Fast, but not persistent—data is lost if the server restarts.
- **JSON file data (5_serving_data_from_json_file):**
  - The user data is stored in a `users.json` file on disk.
  - The server reads this file each time a request is made to `/users`.
  - Data is persistent and can be edited without changing the server code.

---

## How It Works

1. The browser requests `/users` from the server (just like before).
2. The server uses Node.js's `fs` and `path` modules to read `users.json` from disk.
3. The server sends the contents of `users.json` as a JSON response to the browser.
4. The browser uses JavaScript to render the user list in the HTML.

---

## Example: What to Do (Based on 4_serving_data)

- Copy the server code from `4_serving_data_from_server/server.js`.
- Replace the in-memory array with code that reads from `users.json` using `fs.readFile`.
- Make sure to handle errors if the file is missing or unreadable.
- The rest of the logic (CORS, routes, etc.) stays the same.

---

## Key Code Snippet

```js
const fs = require('fs');
const path = require('path');

// ...existing code...

if (req.url === '/users') {
  const usersPath = path.join(__dirname, 'users.json');
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read users.json' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
}
```

---

## Summary

- The only difference from the previous section is the data source: now it's a file, not an array.
- This is a step toward more realistic applications, where data is stored outside the server code.
- The rest of the architecture and request/response cycle remains the same as in `4_serving_data_from_server`.
