import Footer from './components/Footer.js';
import Header from './components/Header.js';
import FetchOneProduct from './components/FetchOneProduct.js';
import MainSection from './components/MainSection.js';

var App = async function () {
  return `
${Header()}
${FetchOneProduct()}
${await MainSection()}
${Footer()}
`;
};

export default App;
