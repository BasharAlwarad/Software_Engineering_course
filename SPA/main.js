const render = document.getElementById('render');

// Shared components
const Navbar = () => `
  <nav class="bg-blue-600 text-white p-4 flex justify-between">
    <h1 class="font-bold text-lg">My Website</h1>
    <div class="space-x-4">
      <a href="#/" class="hover:underline">Home</a>
      <a href="#/about" class="hover:underline">About Us</a>
      <a href="#/contact" class="hover:underline">Contact Us</a>
    </div>
  </nav>
`;

const Footer = () => `
  <footer class="bg-gray-200 text-center p-4">
    <p>&copy; 2025 My Website</p>
  </footer>
`;

// Page templates
const Home = async () => {
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

const About = () => `
  <main class="flex-grow p-4">
    <h2 class="text-xl font-semibold mb-4">About Us</h2>
    <p>This is a simple demo website built with Tailwind CSS and JavaScript.</p>
  </main>
`;

const Contact = () => `
  <main class="flex-grow p-4">
    <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
    <p>Feel free to reach out via email at contact@example.com.</p>
  </main>
`;

// Router
const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
};

async function renderRoute() {
  const path = location.hash.slice(1) || '/';
  const view = routes[path];
  const content = async () => await view();

  render.innerHTML = `
  ${Navbar()}
  ${await content()}
  ${Footer()}
  `;
}

// Listen for hash changes
window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);
