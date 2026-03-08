import CartTable from '@/components/cart-table';

export const metadata = {
  title: 'Cart | FakeStore eCommerce',
};

export default function CartPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <CartTable />
    </section>
  );
}
