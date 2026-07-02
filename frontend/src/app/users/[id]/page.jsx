const User = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3001/api/users/${id}`);
  const user = await res.json();
  console.log(user);
  return (
    <div>
      User id is: {id}
      <br />
      <span>email: {user?.email} </span>
      <br />
      <span>
        is status:
        {user?.isActive ? ' active' : ' not active'}
      </span>
      <br />
      <span>created at: {user?.createdAt} </span>
      <br />
      <span>name: {user?.name} </span>
      <br />
    </div>
  );
};

export default User;
