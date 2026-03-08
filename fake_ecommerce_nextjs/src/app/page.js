import Link from 'next/link';
import Image from 'next/image';
import ProductQuantityControls from '@/components/product-quantity-controls';
import CategoryLinks from '@/components/category-links';
import { getProducts } from '@/lib/api';
import { formatPriceToEuro } from '@/lib/currency';

export default async function Home({ searchParams }) {
  const products = await getProducts();
  const params = await searchParams;
  const selectedCategory = params?.category || 'all';
  const visibleProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="space-y-8">
      <CategoryLinks selectedCategory={selectedCategory} />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.id}
            className="card bg-base-100 border border-base-300 shadow-sm"
          >
            <figure className="bg-base-200 p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="h-44 w-full object-contain"
              />
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title text-base">{product.title}</h2>
              <p className="text-xl font-bold">
                {formatPriceToEuro(product.price)}
              </p>
              <Link
                className="link link-primary text-sm"
                href={`/?category=${encodeURIComponent(product.category)}`}
              >
                {product.category}
              </Link>
              <div className="card-actions justify-end">
                <ProductQuantityControls product={product} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
