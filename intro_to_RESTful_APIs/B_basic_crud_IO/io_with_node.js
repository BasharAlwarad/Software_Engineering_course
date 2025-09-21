// Import the built-in 'fs' module for file system operations
const fs = require('fs');
// Import the built-in 'path' module to handle file paths
const path = require('path');

// Define the path to the users.json file (where user data will be stored)
const usersFile = path.join(__dirname, 'users.json');

// Helper function to read users from the JSON file
function readUsers() {
  // If the file doesn't exist, return an empty array
  if (!fs.existsSync(usersFile)) return [];
  // Read the file contents as a string
  const data = fs.readFileSync(usersFile, 'utf8');
  // Parse the JSON string into a JavaScript array/object
  return data ? JSON.parse(data) : [];
}

// Helper function to write users to the JSON file
function writeUsers(users) {
  // Convert the users array/object to a formatted JSON string and write to file
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// CREATE: Add a new user
function createUser(user) {
  const users = readUsers(); // Get current users
  user.id = Date.now(); // Assign a unique id based on timestamp
  users.push(user); // Add the new user to the array
  writeUsers(users); // Save the updated array to the file
  console.log('User created:', user);
}

// READ ALL: Get all users
function getAllUsers() {
  const users = readUsers(); // Read all users from file
  console.log('All users:', users);
  return users;
}

// READ ONE: Get a user by id
function getUserById(id) {
  const users = readUsers(); // Read all users
  // Find the user with the matching id
  const user = users.find((u) => u.id === id);
  console.log('User:', user);
  return user;
}

// UPDATE: Update a user's data by id
function updateUser(id, newData) {
  const users = readUsers(); // Read all users
  // Find the index of the user to update
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return console.log('User not found');
  // Merge the new data into the existing user object
  users[idx] = { ...users[idx], ...newData };
  writeUsers(users); // Save changes
  console.log('User updated:', users[idx]);
}

// DELETE: Remove a user by id
function deleteUser(id) {
  let users = readUsers(); // Read all users
  // Filter out the user with the given id
  users = users.filter((u) => u.id !== id);
  writeUsers(users); // Save the updated array
  console.log('User deleted:', id);
}

// Example usage:
// Create a new user
createUser({ name: 'Alice', email: 'alice@example.com' });

// Get and print all users
getAllUsers();

// Get all users and update the first one (if exists)
const users = getAllUsers();
if (users.length) updateUser(users[0].id, { name: 'Alice Smith' });

// Delete the first user (if exists)
if (users.length) deleteUser(users[0].id);
