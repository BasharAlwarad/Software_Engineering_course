export type Post = {
  id: number;
  title: string;
  body: string;
};

export const getPost = async (id: number): Promise<Post> => {
  console.log(`Fetching post with ID: ${id}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error(`Network error: ${res.statusText || 'Unknown error'}`);
  }

  return (await res.json()) as Post;
};
