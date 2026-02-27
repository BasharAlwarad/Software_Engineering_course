import { isRouteErrorResponse, useRouteError } from 'react-router';

// The loader runs *before* the component renders
export async function loader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok)
    throw new Response('Failed to fetch posts', { status: res.status });
  const posts = await res.json();
  return posts;
}

// Optional meta using loaded data
export function meta() {
  return [
    { title: 'Top 5 Posts' },
    { name: 'description', content: `Viewing 5 posts from JSONPlaceholder.` },
  ];
}

// Component renders using the loaded data
export default function Home({ loaderData }) {
  const posts = loaderData;

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Latest Posts</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Per-route error boundary
export function ErrorBoundary() {
  const error = useRouteError();

  let message = 'Something went wrong.';
  let details;

  if (isRouteErrorResponse(error)) {
    message =
      error.status === 404 ? '404 - Not Found' : `Error ${error.status}`;
    details = error.statusText || 'An unexpected error occurred.';
  } else if (error instanceof Error) {
    details = error.message;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-red-600">{message}</h1>
      <p>{details}</p>
    </main>
  );
}
