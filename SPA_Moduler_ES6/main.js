import { Navbar } from './components/Nav.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';

const render = document.getElementById('render');

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
};

async function renderRoute() {
  const path = location.hash.slice(1) || '/';
  const view =
    routes[path] || (() => '<main class="p-4">Page not found</main>');
  const content = await view();
  render.innerHTML = `${Navbar()}${content}${Footer()}`;
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);
