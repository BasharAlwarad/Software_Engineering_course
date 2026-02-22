import { BrowserRouter, Routes, Route } from 'react-router';

import { CartProvider } from './contexts/CartContext';
import { LangProvider } from './contexts/LangContext';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

import Nav from './components/Nav';

function App() {
  return (
    <div>
      <LangProvider>
        <CartProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LangProvider>
    </div>
  );
}

export default App;
