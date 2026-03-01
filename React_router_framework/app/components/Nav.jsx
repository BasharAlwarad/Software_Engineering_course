import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-around items-center gap-4">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/dashboard`}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
