import Link from 'next/link';

export default function CategoryLinks({ selectedCategory }) {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold">FakeStore Catalog</h1>
      <p className="text-sm opacity-70">
        Browse categories and add products to your cart.
      </p>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/"
          className={`badge badge-lg ${selectedCategory === 'all' ? 'badge-primary' : 'badge-outline'}`}
        >
          all
        </Link>

        <Link
          href="/?category=electronics"
          className={`badge badge-lg ${selectedCategory === 'electronics' ? 'badge-primary' : 'badge-outline'}`}
        >
          electronics
        </Link>

        <Link
          href="/?category=jewelery"
          className={`badge badge-lg ${selectedCategory === 'jewelery' ? 'badge-primary' : 'badge-outline'}`}
        >
          jewelery
        </Link>

        <Link
          href="/?category=men%27s%20clothing"
          className={`badge badge-lg ${selectedCategory === "men's clothing" ? 'badge-primary' : 'badge-outline'}`}
        >
          {"men's clothing"}
        </Link>

        <Link
          href="/?category=women%27s%20clothing"
          className={`badge badge-lg ${selectedCategory === "women's clothing" ? 'badge-primary' : 'badge-outline'}`}
        >
          {"women's clothing"}
        </Link>
      </div>
    </section>
  );
}
