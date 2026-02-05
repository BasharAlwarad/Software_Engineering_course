import App from './app.js';

const root = document.getElementById('root');

const x = async () => {
  const html = await App();
  root.innerHTML = html;
};

x();
// App().then((html) => {
//   root.innerHTML = html;
// });
