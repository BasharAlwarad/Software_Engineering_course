import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-around align-middle">
        <Link href={`/`}>Home</Link>
        <Link href={`/users`}>users</Link>
        <Link href={`/signup`}>Sign up</Link>
      </ul>
    </nav>
  );
};

export default Nav;
