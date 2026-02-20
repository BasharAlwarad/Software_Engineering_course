import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={product.image} alt="Movie" className="w-[100px] h-[100px] " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title} </h2>
        <p>{product.description} </p>
        <p>{product.price} </p>
        <p>{product.category} </p>
        <p>{product.rating.count} </p>
        <p>{product.rating.rate} </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
