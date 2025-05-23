export const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const userHTML = users
    .map(
      (user) => `
      <div class="p-4 bg-white shadow rounded">
        <strong>${user.name}</strong><br>${user.email}
      </div>
    `
    )
    .join('');

  return `
    <main class="flex-grow p-4">
      <h2 class="text-xl font-semibold mb-4">Users</h2>
      <div class="space-y-2">${userHTML}</div>
    </main>
  `;
};
