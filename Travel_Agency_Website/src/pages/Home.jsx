import React from 'react';
import { useNavigate, Link } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/destinations`);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="destination" />
        <input type="date" placeholder="dates" />
        <input type="text" placeholder="origin" />
        <button className="cursor-pointer">Go to search</button>
      </form>
    </div>
  );
};

export default Home;
