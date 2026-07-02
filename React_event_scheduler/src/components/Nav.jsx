import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul className="flex  justify-evenly align-middle">
        <Link to={`/`}>Users</Link>
        <Link to={`/events`}>Events</Link>
        <Link to={`/signup`}>Sign Up</Link>
        <Link to={`/login`}>Login</Link>
      </ul>
    </nav>
  );
};

export default Nav;
