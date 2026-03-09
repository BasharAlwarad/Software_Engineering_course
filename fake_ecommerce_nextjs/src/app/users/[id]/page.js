'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UserPage({ params }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  // Unwrap params
  useEffect(() => {
    params.then((p) => setUserId(p.id));
  }, [params]);

  // Fetch user data
  useEffect(() => {
    if (!userId) return;

    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setEmail(data.user.email);
      }
    }
    fetchUser();
  }, [userId]);

  async function handleUpdate(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error || 'Update failed');
      setLoading(false);
      return;
    }

    setMessage('User updated successfully');
    setPassword('');
    setLoading(false);
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }

    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      router.push('/users');
    } else {
      setMessage('Delete failed');
    }
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/users" className="btn btn-ghost btn-sm">
          ← Back to Users
        </Link>
      </div>

      <div className="rounded-box border border-base-300 bg-base-100 p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Edit User</h1>
        <p className="mt-1 text-sm text-base-content/60">
          ID: {user.id} • Created: {new Date(user.created_at).toLocaleString()}
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleUpdate}>
          <label className="form-control w-full">
            <span className="label-text">Email</span>
            <input
              className="input input-bordered w-full"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text">
              New Password (leave empty to keep current)
            </span>
            <input
              className="input input-bordered w-full"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Leave blank to keep current password"
            />
          </label>

          <div className="flex gap-3">
            <button
              className="btn btn-primary flex-1"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update User'}
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={handleDelete}
            >
              Delete User
            </button>
          </div>
        </form>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </section>
  );
}
