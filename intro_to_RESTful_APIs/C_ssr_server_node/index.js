// Simple SSR Node.js server to serve static HTML pages
const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to serve an HTML file
function serveFile(res, filename) {
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    serveFile(res, 'home.html');
  } else if (req.url === '/about') {
    serveFile(res, 'about.html');
  } else if (req.url === '/contact') {
    serveFile(res, 'contact.html');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
