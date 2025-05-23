const Navbar = require('./components/Nav');
const Footer = require('./components/Footer');
const Home = require('./pages/Home');
const About = require('./pages/About');
const Contact = require('./pages/Contact');

const render = document.getElementById('render');

const routes = {
  '/': Home,
  '/about': function (cb) {
    cb(About());
  },
  '/contact': function (cb) {
    cb(Contact());
  },
};

function renderRoute() {
  const path = location.hash.slice(1) || '/';
  const view = routes[path];

  if (!view) {
    render.innerHTML =
      Navbar() + '<main class="p-4">Page not found</main>' + Footer();
    return;
  }

  view(function (content) {
    render.innerHTML = Navbar() + content + Footer();
  });
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);
