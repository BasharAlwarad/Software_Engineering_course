import ProductCard from '../components/ProductCard';

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      {cart.map((e) => (
        <ProductCard product={e} />
      ))}
    </div>
  );
};

export default Cart;
