'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <section className="mx-auto max-w-xl py-10">
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">Something went wrong</h1>
          <p className="text-sm opacity-80">
            An unexpected error happened. You can try again or go back home.
          </p>
          <p className="text-xs opacity-60">{error?.message}</p>
          <div className="card-actions mt-2">
            <button className="btn btn-primary" onClick={reset}>
              Try again
            </button>
            <Link href="/" className="btn btn-ghost">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
