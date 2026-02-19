import { Routes, Route } from 'react-router';

import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

import Bashar from './components/Bashar';
import Justyna from './components/Justyna';
import Gustavo from './components/Gustavo';

const App = () => {
  return (
    <div>
      <h1>welcome to our app</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route index element={<Bashar />} />
          <Route path="justyna" element={<Justyna />} />
          <Route path="gutsavo" element={<Gustavo />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
