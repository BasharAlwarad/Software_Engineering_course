function Home(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    var userHTML = users
      .map(function (user) {
        return `
        <div class="p-4 bg-white shadow rounded">
          <strong>${user.name}</strong><br>${user.email}
        </div>
      `;
      })
      .join('');

    var html = `
      <main class="flex-grow p-4">
        <h2 class="text-xl font-semibold mb-4">Users</h2>
        <div class="space-y-2">${userHTML}</div>
      </main>
    `;
    callback(html);
  };
  xhr.send();
}

module.exports = Home;
