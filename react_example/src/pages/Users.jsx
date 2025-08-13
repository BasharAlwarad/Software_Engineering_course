import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );
  const fetchUsers = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUsers(data);
    localStorage.setItem('users', JSON.stringify(data));
    console.log(data);
  };

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      fetchUsers();
    }
  }, [users]);

  return (
    <div>
      Users
      {users?.map((user) => (
        <li key={user.id}>
          <Link to={`${user.id}`}> {user.name}</Link>
        </li>
      ))}
      <Outlet />
    </div>
  );
};

export default Users;
