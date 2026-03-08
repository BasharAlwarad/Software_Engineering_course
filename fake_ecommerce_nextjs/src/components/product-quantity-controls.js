'use client';

import { useCart } from '@/contexts/cart-context';

export default function ProductQuantityControls({ product }) {
  const { addItem, removeOne, items } = useCart();
  const quantity =
    items.find((item) => item.product.id === product.id)?.quantity || 0;

  if (quantity === 0) {
    return (
      <button
        className="btn btn-primary btn-sm"
        onClick={() => addItem(product)}
      >
        Add to cart
      </button>
    );
  }

  return (
    <div className="join">
      <button
        className="btn btn-sm join-item"
        onClick={() => removeOne(product.id)}
      >
        -
      </button>
      <button className="btn btn-sm join-item btn-disabled">{quantity}</button>
      <button className="btn btn-sm join-item" onClick={() => addItem(product)}>
        +
      </button>
    </div>
  );
}
