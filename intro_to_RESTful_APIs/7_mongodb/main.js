// Fetch users from the server and hydrate the HTML
function loadUsers() {
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((users) => {
      let html = '';
      users?.forEach((user) => {
        html += `<li>${user.name} (${user.email})</li>`;
      });
      document.getElementById('usersList').innerHTML = html;
    })
    .catch((err) => {
      document.getElementById('content').innerHTML =
        '<p>Error loading users.</p>';
    });
}

loadUsers();
