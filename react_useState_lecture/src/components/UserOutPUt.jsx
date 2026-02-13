import React from 'react';

const UserOutPUt = ({ user }) => {
  return (
    <div>
      <h2>out come of inputs</h2>
      <span> {user.name} </span>
      <br />
      <span> {user.email} </span>
      <br />
      <span> {user.age} </span>
      <br />
      <span> {user.gender} </span>
    </div>
  );
};

export default UserOutPUt;
