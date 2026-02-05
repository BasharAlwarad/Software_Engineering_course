import App from './app.js';

const root = document.getElementById('root');

const render = async () => {
  const html = await App();
  root.innerHTML = html;
};

render();
