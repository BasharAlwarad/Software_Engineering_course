export default async function Post({ params }) {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const post = await res.json();

  return (
    <main className="p-4 space-y-4">
      <div className="border p-2 rounded mb-5">
        <h2 className="font-semibold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </main>
  );
}
