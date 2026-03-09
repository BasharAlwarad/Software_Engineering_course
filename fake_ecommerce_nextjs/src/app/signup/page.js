'use client';

import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error || 'Error');
      setLoading(false);
      return;
    }

    setMessage('Signup complete');
    setEmail('');
    setPassword('');
    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-md rounded-box border border-base-300 bg-base-100 p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Simple Signup</h1>
      <p className="mt-2 text-sm text-base-content/70">
        Enter email and password, then save to Neon.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
          <span className="label-text">Password</span>
          <input
            className="input input-bordered w-full"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Sign Up'}
        </button>
      </form>

      {message ? <p className="mt-4 text-sm">{message}</p> : null}
    </section>
  );
}
