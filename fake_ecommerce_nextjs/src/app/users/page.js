import Link from 'next/link';

async function getUsers() {
  const response = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Users</h1>
        <Link href="/signup" className="btn btn-primary btn-sm">
          Add New User
        </Link>
      </div>

      {users.length === 0 ? (
        <p className="text-base-content/60">No users yet. Create one first.</p>
      ) : (
        <div className="space-y-3">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="block rounded-box border border-base-300 bg-base-100 p-4 shadow-sm transition hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{user.email}</p>
                  <p className="text-sm text-base-content/60">
                    ID: {user.id} • Created:{' '}
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-primary">View →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
