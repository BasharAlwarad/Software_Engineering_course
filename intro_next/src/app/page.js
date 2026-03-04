import { Suspense } from 'react';
import Counter from '@/components/Counter';
import PostsList from '@/components/PostsList';
import PostsListSkeleton from '@/components/PostsListSkeleton';
import { getPosts } from '@/data/posts';

export default function Home() {
  const postsPromise = getPosts();

  return (
    <main className="p-4 space-y-4">
      <section>
        <h2 className="text-xl font-semibold">Try the Counter</h2>
        <Counter />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Posts</h2>
        <Suspense fallback={<PostsListSkeleton />}>
          <PostsList postsPromise={postsPromise} />
        </Suspense>
      </section>

      <h1 className="text-2xl font-bold">Latest Posts</h1>
    </main>
  );
}
