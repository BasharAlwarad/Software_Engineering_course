// Simple CSR navigation and user list rendering
// This is a Client-Side Rendering (CSR) example:
// - The HTML is static and minimal
// - JavaScript fetches data from the server and hydrates the page

// Handles navigation between pages
console.log(123);
function showPage(page) {
  if (page === 'home') {
    console.log('from home');
    loadUsers(); // Home page: fetch and hydrate users
  } else if (page === 'about') {
    document.getElementById('content').innerHTML =
      '<h1>About Us</h1><p>This is the about page.</p>';
  } else if (page === 'contact') {
    document.getElementById('content').innerHTML =
      '<h1>Contact</h1><p>This is the contact page.</p>';
  }
}

// Fetch users from the server and hydrate the HTML
function loadUsers() {
  // Show a loading message while fetching
  document.getElementById('content').innerHTML = '<p>Hydrating users...</p>';

  // Fetch users from the /users API endpoint
  //   fetch('/users')
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((users) => {
      // Build the HTML for the user list
      let html = '<h1>Welcome to the Home Page</h1>';
      html += '<p>This is a simple Node.js CSR example.</p>';
      html += '<h2>List of Users</h2><ul>';
      users.forEach((user) => {
        html += `<li>${user.name} (${user.email})</li>`;
      });
      html += '</ul>';
      // Hydrate the page with the user list
      document.getElementById('content').innerHTML = html;
    })
    .catch((err) => {
      document.getElementById('content').innerHTML =
        '<p>Error loading users.</p>';
    });
}

// Show home page by default on load
showPage('home');
