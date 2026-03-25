import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 sticky top-0 z-50 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Art Gallery
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/favorites" className="btn btn-ghost">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
