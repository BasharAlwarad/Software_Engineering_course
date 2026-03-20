import { useState, useEffect } from 'react';
import { z } from 'zod';

// Step 1: Define the Zod Schema
const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1),
  price: z.number().positive(),
  description: z.string().min(1),
  category: z.string(),
  image: z.string().url(),
});

// Step 2: Infer the type from the schema (no duplication!)
type Product = z.infer<typeof ProductSchema>;

// Step 3: Create a validating fetch function
async function getProduct(productId: number): Promise<Product> {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!response.ok)
    throw new Error(`Network response was not ok: ${response.statusText}`);

  const resData = await response.json();

  // This is the validation gate
  const { data, success, error } = ProductSchema.safeParse(resData);
  if (!success) {
    throw new Error(`Validation failed: ${error.message}`);
  }

  return data;
}

// Step 4: Create the React Component
export function Products() {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch a random product on component mount
  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError(null);
      try {
        const randomId = Math.floor(Math.random() * 20) + 1;
        const data = await getProduct(randomId);
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, []);

  // Render
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>No product found</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <br />
      <p>ID: {product.id}</p>
      <br />
      <p>Title: {product.title}</p>
      <br />
      <p>Category: {product.category}</p>
      <br />
      <p>Price: ${product.price}</p>
      <br />
      <p>Description: {product.description}</p>
      <br />
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '200px' }}
      />
    </div>
  );
}
