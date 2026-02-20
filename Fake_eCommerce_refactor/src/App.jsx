import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

import Nav from './components/Nav';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
