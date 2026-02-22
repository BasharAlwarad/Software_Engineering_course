import { use } from 'react';

import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = use(CartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      <figure className="px-6 pt-6 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain"
        />
      </figure>
      <div className="card-body grow">
        <h2 className="card-title text-lg line-clamp-2">{product.title}</h2>

        <p className="text-sm text-gray-600 line-clamp-3 grow">
          {product.description}
        </p>

        <div className="badge badge-outline mb-2">{product.category}</div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-semibold">{product.rating.rate}</span>
            <span className="text-xs text-gray-500">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary w-full"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
