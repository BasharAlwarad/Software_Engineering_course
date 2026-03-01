import { Form, redirect, useFetcher, useNavigate } from 'react-router';

export function meta({ params }) {
  const { postId } = params;
  return [
    { title: `Post ${postId}` },
    { name: 'description', content: 'Welcome Post!' },
  ];
}

export async function clientLoader({ params }) {
  const { postId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok)
    throw new Response('Failed to fetch posts', { status: res.status });
  return await res.json();
}

export async function clientAction({ params }) {
  try {
    const { postId } = params;
    console.log(postId);
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
    return { isDeleted: true };
  } catch (error) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }) {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const isDeleted = fetcher.data?.isDeleted;

  const post = loaderData;

  return (
    <div key={post.id} className="border p-2 rounded">
      {!isDeleted && (
        <>
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
      <button
        className="border-amber-600 bg-amber-50 text-black"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
      <fetcher.Form method="delete">
        <button type="submit">delete post</button>
      </fetcher.Form>
      {/* <Form method="delete">
        <button type="submit">delete post</button>
      </Form> */}
    </div>
  );
}
