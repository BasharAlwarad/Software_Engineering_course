import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl py-10">
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-2xl">404 - Page not found</h1>
          <p className="text-sm opacity-80">
            The page you are looking for does not exist.
          </p>
          <div className="card-actions mt-2">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
