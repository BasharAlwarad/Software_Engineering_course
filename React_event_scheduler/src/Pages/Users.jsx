import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:3001/api/users`);
      const data = await res.json();
      setUsers(data.results);
      console.log(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>
              <span>Name: {user.name} </span>
              <br />
              <span>Email: {user.email} </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
