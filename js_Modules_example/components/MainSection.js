import ProductCard from './ProductCard.js';

const MainSection = async function () {
  const getData = async function () {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  };

  const data = await getData();

  const products = data
    .map(function (p) {
      return ProductCard(p);
    })
    .join('');

  return `
    <section class="mx-auto max-w-6xl px-4 py-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${products}
      </div>
    </section>
  `;
};

export default MainSection;
