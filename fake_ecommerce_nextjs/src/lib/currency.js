const euroFormatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
});

export function formatPriceToEuro(value) {
  return euroFormatter.format(value);
}
