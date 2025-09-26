// Node.js server to serve user data as an API
const http = require('http'); // Import the built-in HTTP module

// Our data source (could be a database or file in real apps)
const data = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'Dana', email: 'dana@example.com' },
  { name: 'Eva', email: 'eva@example.com' },
  { name: 'Frank', email: 'frank@example.com' },
  { name: 'Grace', email: 'grace@example.com' },
  { name: 'Hassan', email: 'hassan@example.com' },
  { name: 'Ivy', email: 'ivy@example.com' },
  { name: 'Jack', email: 'jack@example.com' },
];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set CORS headers to allow requests from other origins (e.g., if using a separate frontend)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Serve a welcome message at the root path
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('welcome to server');
  }
  // Serve the users data as JSON at /users
  else if (req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }
  // Handle unknown routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
