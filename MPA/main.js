const userList = document.getElementById('render');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-white shadow rounded';
      div.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      userList.appendChild(div);
    });
  });
