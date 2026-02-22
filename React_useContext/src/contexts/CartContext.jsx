import { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return <CartContext value={{ cart, setCart }}>{children}</CartContext>;
};

export { CartContext, CartProvider };
