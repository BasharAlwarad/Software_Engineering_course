import { useState, useEffect, use } from 'react';

import ProductCard from '../components/ProductCard';
import { LangContext } from '../contexts/LangContext';

const Home = () => {
  const { translations } = use(LangContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const items = await data.json();
      setProducts(items);
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{translations.h1}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
