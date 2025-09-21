# ECMA6 Modules in Node.js

## Short History

Before ES6 (ECMAScript 2015), JavaScript did not have a standard module system. Node.js introduced its own system using `require` and `module.exports` (CommonJS). With ES6, JavaScript gained a native module system using `import` and `export`, which is now supported in Node.js (with `.mjs` files or by setting `"type": "module"` in `package.json`).

## What are ES6 Modules?

ES6 modules allow you to split your code into reusable pieces. You can export functions, objects, or values from one file and import them into another using the `export` and `import` keywords.

## Example in This Folder

1. **users.json**: Contains a list of user objects with `name`, `email`, and `phone`.

2. **utils.js**: Imports the users from `users.json` and exports three functions:

   - `readNames()`: Returns an array of all user names.
   - `readEmails()`: Returns an array of all user emails.
   - `readPhones()`: Returns an array of all user phone numbers.

   Example:

   ```js
   import users from './users.json' assert { type: 'json' };

   export function readNames() {
     return users.map((user) => user.name);
   }
   // ...
   ```

3. **index.js**: Imports the functions from `utils.js` and uses them to print the names, emails, and phones.

   Example:

   ```js
   import { readNames, readEmails, readPhones } from './utils.js';

   console.log('User Names:', readNames());
   console.log('User Emails:', readEmails());
   console.log('User Phones:', readPhones());
   ```

## How to Run

1. Make sure your `package.json` has `"type": "module"`.
2. Run:
   ```bash
   node index.js
   ```
   Or for auto-reload during development:
   ```bash
   npm run dev
   ```

## Summary

- Use `export` to make functions or values available from a module.
- Use `import` to bring them into another file.
- ES6 modules are now the standard for modular JavaScript in both browsers and Node.js.
