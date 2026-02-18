import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router';
import MainLayout from './components/MainLayout';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
