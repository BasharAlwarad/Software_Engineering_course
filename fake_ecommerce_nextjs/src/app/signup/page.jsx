'use client';
import { useEffect, useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // useEffect(() => {
  const createUser = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  createUser();
  // }, []);

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={() => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={() => setPassword(e.target.value)}
        />
      </form>
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default Signup;
