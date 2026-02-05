import { Header } from './components/Header.js';
import MainSection from './components/MainSection.js';

const App = async () => {
  return `
    ${Header()}
    ${await MainSection()}
    `;
};
export default App;
