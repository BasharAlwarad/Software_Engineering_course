import App from './app.js';

const root = document.getElementById('root');

App().then((html) => {
  root.innerHTML = html;
});
