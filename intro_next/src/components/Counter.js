'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('This log is from the client side');

  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
}
