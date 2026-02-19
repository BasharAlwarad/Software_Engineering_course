import { Link } from 'react-router';

const Navbar = () => {
  const name = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdföasdfölasdöfl';

  return (
    <nav className="bg-pink-900">
      <ul className="flex gap-6 justify-between">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/users/1/${name}/john/gustavo`}>Users</Link>
        </li>
        <li>
          <Link to={`/about`}> About</Link>
        </li>
        <li>
          <Link to={`/contact`}> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
