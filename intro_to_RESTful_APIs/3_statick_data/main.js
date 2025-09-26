// Array of user data
const users = [
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

// Find the <ul> element for the user list
const userList = document.querySelector('ul');
if (userList) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
}
