export function meta() {
  return [{ title: 'Post' }, { name: 'description', content: 'Welcome Post!' }];
}

export async function loader({ params }) {
  const { postId } = params;
  return postId;
}

export default function Post({ loaderData }) {
  console.log(loaderData);

  return <div>Hello to post {loaderData} </div>;
}
