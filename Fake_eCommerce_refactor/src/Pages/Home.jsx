// fetch the data using fetch and useEffect
// save the data into a state
// loop throw the data after return in the JSX

import { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';

const Home = ({ setCart }) => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCart((pre) => {
      return [...pre, product];
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const items = await data.json();
      setProducts(items);
      console.log(items);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default Home;
