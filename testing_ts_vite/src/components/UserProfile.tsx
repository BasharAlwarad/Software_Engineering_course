import { useState, useEffect } from 'react';

type User = {
  name: string;
  email: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        if (!res.ok) {
          throw new Error('server error');
        }
        const data = await res.json();
        setUser(data);
      } catch {
        setError('Failed to fetch user');
      }
    };

    getUser();
    return () => {};
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>loading</div>;
  }

  return (
    <div>
      <>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </>
    </div>
  );
};

export default UserProfile;
