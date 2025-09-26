# Lecture: Static Data and Hydration in Node.js Projects

## Introduction

In this section, we explore the concept of static data in web development and how to transition from hardcoded (static) data in HTML to dynamic data rendering using JavaScript. This is a foundational step before moving to server-driven or database-driven applications.

---

## 1. Static Data in `index.html`

In the first example (`index.html`), the list of users is written directly into the HTML file. This means:

- The data is **static**: it does not change unless you manually edit the HTML file.
- The browser simply displays whatever is in the HTML at load time.
- There is no interaction or dynamic update of the user list.

**Example:**

```html
<ul>
  <li>Alice (alice@example.com)</li>
  <li>Bob (bob@example.com)</li>
  <!-- ...more users... -->
</ul>
```

This approach is simple, but not scalable. If you want to update the user list, you must edit the HTML file every time.

---

## 2. Hydration with JavaScript in `index2.html` and `main.js`

In the second example (`index2.html`), the HTML file contains an empty or placeholder list, and the actual user data is provided by a JavaScript file (`main.js`).

- The data is stored in a JavaScript array inside `main.js`.
- When the page loads, JavaScript dynamically generates the list items and inserts them into the HTML (`hydration`).
- This makes it easier to update the data, and is a step toward more dynamic, interactive web applications.

**Example:**

```js
// main.js
const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  // ...more users...
];

const userList = document.querySelector('ul');
userList.innerHTML = '';
users.forEach((user) => {
  const li = document.createElement('li');
  li.textContent = `${user.name} (${user.email})`;
  userList.appendChild(li);
});
```

**In summary:**

- `index.html` shows static, hardcoded data.
- `index2.html` + `main.js` demonstrate how to hydrate the page with data from JavaScript, making the page more flexible and maintainable.

---

This pattern is the basis for more advanced techniques, such as fetching data from a server or database, which you will see in later sections.
