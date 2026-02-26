import { Link } from 'react-router';

const Nav = () => {
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          User Directory
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn btn-secondary btn-sm">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="btn btn-info btn-sm">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/events" className="btn btn-info btn-sm">
                  Events
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-error btn-sm">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
