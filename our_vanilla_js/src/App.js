import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import h1 from './components/h1.js';

function App() {
  localStorage.setItem('lastname', 'Smith');
  const y = localStorage.getItem('lastname');
  console.log(y);

  //   localStorage.clear();

  return `
${Nav('Contact us')}
${h1('Hello from h1')}
${Main()}
${Footer()}
`;
}

export default App;
