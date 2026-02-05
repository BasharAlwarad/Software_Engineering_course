const ProductCard = (p) => {
  return `
    <article class="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
    <div class="aspect-square w-full overflow-hidden rounded-lg bg-slate-50">
    <img class="h-full w-full object-contain" src="${p?.image}" alt="${p?.title}" />
    </div>
    <h3 class="mt-3 line-clamp-2 text-lg font-semibold text-slate-900">${p?.title}</h3>
    <p class="mt-1 text-sm text-slate-500">${p?.category}</p>
            <div class="mt-3 flex items-center justify-between">
              <span class="text-xl font-bold text-emerald-600">$${p?.price}</span>
              <button class="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">Add</button>
              </div>
              </article>
              `;
};
export default ProductCard;
