'use client';

import { createContext, use, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'fake-store-cart';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];

      setItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch {
      // Reset to empty cart if localStorage has invalid JSON.
      setItems([]);
    } finally {
      setHasInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!hasInitialized) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hasInitialized]);

  function addItem(product) {
    setItems((prev) => {
      const index = prev.findIndex((item) => item.product.id === product.id);

      if (index === -1) {
        return [...prev, { product, quantity: 1 }];
      }

      return prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  function removeOne(productId) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeLine(productId) {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  const value = {
    items,
    itemCount,
    totalAmount,
    addItem,
    removeOne,
    removeLine,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = use(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}
