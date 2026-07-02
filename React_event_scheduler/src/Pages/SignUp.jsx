import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ApiRes, setApiRes] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setApiRes(data);
    navigate('/');
  };

  return (
    <div className="flex justify-center align-middle p-15">
      <form className="flex flex-col flex-2 justify-between">
        <input
          type="email"
          placeholder="name"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="btn bg-amber-100 text-amber-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
