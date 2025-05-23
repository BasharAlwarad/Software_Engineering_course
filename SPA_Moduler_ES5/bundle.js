(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Footer() {
  return `
    <footer class="bg-gray-200 text-center p-4">
      <p>&copy; 2025 My Website</p>
    </footer>
  `;
}

module.exports = Footer;

},{}],2:[function(require,module,exports){
function Navbar() {
  return `
    <nav class="bg-blue-600 text-white p-4 flex justify-between">
      <h1 class="font-bold text-lg">My Website</h1>
      <div class="space-x-4">
        <a href="#/" class="hover:underline">Home</a>
        <a href="#/about" class="hover:underline">About Us</a>
        <a href="#/contact" class="hover:underline">Contact Us</a>
      </div>
    </nav>
  `;
}

module.exports = Navbar;

},{}],3:[function(require,module,exports){
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

},{"./components/Footer":1,"./components/Nav":2,"./pages/About":4,"./pages/Contact":5,"./pages/Home":6}],4:[function(require,module,exports){
function About() {
  return `
    <main class="flex-grow p-4">
      <h2 class="text-xl font-semibold mb-4">About Us</h2>
      <p>This is a simple demo website built with Tailwind CSS and JavaScript.</p>
    </main>
  `;
}

module.exports = About;

},{}],5:[function(require,module,exports){
function Contact() {
  return `
    <main class="flex-grow p-4">
      <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
      <p>Feel free to reach out via email at contact@example.com.</p>
    </main>
  `;
}

module.exports = Contact;

},{}],6:[function(require,module,exports){
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

},{}]},{},[3]);
