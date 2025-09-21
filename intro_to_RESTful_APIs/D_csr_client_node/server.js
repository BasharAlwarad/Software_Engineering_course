// Node.js server to serve static files and the users.json API
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const baseDir = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
};

const server = http.createServer((req, res) => {
  // Serve users API
  if (req.url === '/users') {
    const usersPath = path.join(baseDir, 'users.json');
    fs.readFile(usersPath, (err, data) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({ error: 'Could not read users.json' }));
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(data);
      }
    });
    return;
  }

  // Serve static files (index.html, main.js, etc.)
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(baseDir, filePath);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
