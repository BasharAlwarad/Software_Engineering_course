'use client';
import { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`/api/users?search=${search}`);
      const data = await res.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
