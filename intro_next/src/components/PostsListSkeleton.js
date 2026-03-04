// src/components/PostsListSkeleton.js
const PostsListSkeleton = () => {
  return (
    <ul className="space-y-2">
      {Array.from({ length: 100 }).map((_, index) => (
        <li key={index} className="border p-2 rounded mb-5 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </li>
      ))}
    </ul>
  );
};

export default PostsListSkeleton;
