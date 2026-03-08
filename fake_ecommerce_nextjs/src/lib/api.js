const API_BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
