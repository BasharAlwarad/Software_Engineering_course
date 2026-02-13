import React from 'react';

const UserInput = ({ setUser }) => {
  const submitUser = () => {
    console.log(123);
  };

  const changeValueofUser = (e) => {
    console.log(e.target.name);
    setUser((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  return (
    <form>
      <input name="name" type="text" onChange={changeValueofUser} />
      <input name="email" type="email" onChange={changeValueofUser} />
      <input name="age" type="number" onChange={changeValueofUser} />
      <input name="gender" type="text" onChange={changeValueofUser} />
      <button onClick={submitUser}>submit</button>
    </form>
  );
};

export default UserInput;
