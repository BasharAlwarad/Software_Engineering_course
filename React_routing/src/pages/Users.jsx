import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Users = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const oneUser = await data.json();
      setUser(oneUser);
      console.log(oneUser);
    };
    getUser();
  }, [id]);

  return <div>{user?.name}</div>;
};

export default Users;
