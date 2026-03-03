'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-700 mb-2">
        Something went wrong!
      </h2>
      <p className="text-red-600 mb-4">Error: {error.message}</p>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
