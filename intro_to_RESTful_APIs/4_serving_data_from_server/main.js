// Fetch users from the server and hydrate the HTML
function loadUsers() {
  //   fetch('/users')
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((users) => {
      // Build the HTML for the user list
      let html = ``;
      users?.forEach((user) => {
        html += `<li>${user.name} (${user.email})</li>`;
      });
      document.getElementById('usersList').innerHTML = html;
    })
    .catch((err) => {
      console.log(err.message);
      document.getElementById('content').innerHTML =
        '<p>Error loading users.</p>';
    });
}

loadUsers();
