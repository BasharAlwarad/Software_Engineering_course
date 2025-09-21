import fs from 'fs';
import path from 'path';

// Helper to load users.json synchronously
function loadUsers() {
  const filePath = path.resolve('./users.json');
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

export function readNames() {
  const users = loadUsers();
  return users.map((user) => user.name);
}

export function readEmails() {
  const users = loadUsers();
  return users.map((user) => user.email);
}

export function readPhones() {
  const users = loadUsers();
  return users.map((user) => user.phone);
}
