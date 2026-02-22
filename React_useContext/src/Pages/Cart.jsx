import { use } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const Cart = () => {
  const { cart } = use(CartContext);
  console.log(cart);
  return (
    <div>
      {cart?.map((e) => (
        <ProductCard product={e} />
      ))}
    </div>
  );
};

export default Cart;
