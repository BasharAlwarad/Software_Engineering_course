import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

const User = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  const token = `Bearer ${localStorage.getItem('token')}`;
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:3001/api/users/${id}`);
      const data = await res.json();
      setUser(data);
      console.log(data);
    };

    fetchUsers();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
    navigate('/');
  };

  //   {
  //   "name": "John Doe",
  //   "email": "John@example.com",
  //   "password": "12345678",
  //   "isActive": true
  // }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ name, email, password, isActive }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div>
        <span>Name: {user.name} </span>
        <br />
        <span>Email: {user.email} </span>
        <button onClick={handleDelete}>Delete user</button>
      </div>
      <br />
      <div className="flex justify-center align-middle p-15">
        <form className="flex flex-col flex-2 justify-between">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <button
            className="btn bg-amber-100 text-amber-800"
            onClick={handleUpdate}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
