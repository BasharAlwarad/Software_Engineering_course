import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
