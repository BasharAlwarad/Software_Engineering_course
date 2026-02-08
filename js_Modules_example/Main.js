import App from './src/App.js';

var root = document.getElementById('root');

var render = async function () {
  root.innerHTML = await App();
};
render();
