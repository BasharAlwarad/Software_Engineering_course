'use client'; // Now it's a Client Component!

import { useActionState } from 'react';
import { registerUser } from '@/actions/users';

export default function Register() {
  // In the client we can use hooks, we can compose our action with `useActionState` to show feedback
  const [actionState, formAction, isPending] = useActionState(registerUser, {
    error: null,
    success: false,
  });

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form action={formAction}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {actionState.error && (
            <div className="text-red-500 text-sm mb-4">{actionState.error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            disabled={isPending}
          >
            {isPending ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
