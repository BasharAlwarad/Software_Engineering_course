import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="w-full bg-pink-800">
      <ul className="flex gap-6 justify-around">
        <li>
          <Link to={`/`}>Forms State</Link>
        </li>
        <li>
          <Link to={`/action`}>Forms actions</Link>
        </li>
        <li>
          <Link to={`/pending`}>FormsPending</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
