'use client';

import { use } from 'react';
import Link from 'next/link';

const PostsList = ({ postsPromise }) => {
  const posts = use(postsPromise);

  return (
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
  );
};

export default PostsList;
