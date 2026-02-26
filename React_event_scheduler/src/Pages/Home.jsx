// fetch the data using fetch and useEffect
// save the data into a state
// loop throw the data after return in the JSX

import { useState, useEffect } from 'react';

import UserCard from '../components/UserCard';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch(`http://localhost:3001/api/users`);
      const items = await data.json();
      setUsers(items.results);
      console.log(items);
    };
    fetchUsers();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content mb-6">
        User Directory
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((product) => (
          <UserCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
