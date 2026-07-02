import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    localStorage.setItem('token', data.token);
    console.log(data);
    navigate('/');
  };

  return (
    <form className="flex flex-2 justify-center align-middle flex-col m-6">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};

export default Login;
