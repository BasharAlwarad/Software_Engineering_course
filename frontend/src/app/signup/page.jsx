import React from 'react';

const Signup = async () => {
  const handleForm = async (formdata) => {
    'use server';
    const email = formdata.get('email');
    const password = formdata.get('password');
    const res = await fetch(`http://localhost:3001/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="email" placeholder="Email" name="email" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
