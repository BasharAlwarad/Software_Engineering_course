import Link from 'next/link';

const Users = async () => {
  const res = await fetch(` http://localhost:3001/api/users`);
  const data = await res.json();
  return (
    <div>
      {data.results?.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.email}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
