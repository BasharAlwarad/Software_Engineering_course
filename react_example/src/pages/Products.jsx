import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || []
  );
  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
    localStorage.setItem('products', JSON.stringify(data));
  };

  useEffect(() => {
    if (!localStorage.getItem('products')) {
      fetchProducts();
    }
  }, [products]);

  return (
    <div>
      Products
      {products?.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>{product.title}</Link>
        </li>
      ))}
      <Outlet />
    </div>
  );
};

export default Products;
