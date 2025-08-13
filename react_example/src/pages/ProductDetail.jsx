import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      const found = products.find((p) => String(p.id) === String(productId));
      if (found) {
        setProduct(found);
        return;
      }
    }
    // If not found in localStorage, fetch from API
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div>
      <h2>Product Detail</h2>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Title:</strong> {product.title}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <img src={product.image} alt={product.title} style={{ maxWidth: 200 }} />
      {/* Add more fields as needed */}
    </div>
  );
};

export default ProductDetail;
