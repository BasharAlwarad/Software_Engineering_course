'use client';
import { useEffect, useState } from 'react';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const x = 1;
  const y = 2;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`/api/users?search=${search}`);
      const data = await res.json();
      console.log(data);
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
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <span> {user.email} </span>
            <span> {user.password} </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
