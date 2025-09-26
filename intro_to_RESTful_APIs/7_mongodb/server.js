import { createServer } from 'http';
import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017'; // Change if needed
const DB_NAME = 'test'; // Change if needed
const COLLECTION = 'users';

const client = new MongoClient(MONGO_URL);

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('welcome to server');
  } else if (req.url === '/users') {
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const users = await db.collection(COLLECTION).find({}).toArray();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          error: 'Failed to fetch users from MongoDB',
          details: err.message,
        })
      );
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
