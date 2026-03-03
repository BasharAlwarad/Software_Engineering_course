import Link from 'next/link';
import Counter from '@/components/Counter';

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Latest Posts</h1>
      <Counter />
      <ul className="space-y-2">
        {posts.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <li className="border p-2 rounded mb-5">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
