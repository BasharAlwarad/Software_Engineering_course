'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { formatPriceToEuro } from '@/lib/currency';

export default function CartTable() {
  const { items, totalAmount, addItem, removeOne, removeLine } = useCart();

  if (items.length === 0) {
    return (
      <div className="alert">
        <span>
          Your cart is empty. Browse products on the{' '}
          <Link className="link" href="/">
            home page
          </Link>
          .
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto bg-base-100 rounded-box border border-base-300">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit price</th>
              <th>Quantity</th>
              <th>Line total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map(({ product, quantity }) => {
              const lineTotal = product.price * quantity;

              return (
                <tr key={product.id}>
                  <td>
                    <div className="font-semibold">{product.title}</div>
                    <Link
                      className="link link-primary text-xs"
                      href={`/?category=${encodeURIComponent(product.category)}`}
                    >
                      {product.category}
                    </Link>
                  </td>
                  <td>{formatPriceToEuro(product.price)}</td>
                  <td>
                    <div className="join">
                      <button
                        className="btn btn-xs join-item"
                        onClick={() => removeOne(product.id)}
                      >
                        -
                      </button>
                      <button className="btn btn-xs join-item btn-disabled">
                        {quantity}
                      </button>
                      <button
                        className="btn btn-xs join-item"
                        onClick={() => addItem(product)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{formatPriceToEuro(lineTotal)}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => removeLine(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3} className="text-right">
                Total
              </th>
              <th>{formatPriceToEuro(totalAmount)}</th>
              <th />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
