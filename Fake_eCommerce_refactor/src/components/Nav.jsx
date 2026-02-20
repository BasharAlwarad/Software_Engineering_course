import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8 justify-around">
        <Link to={`/`}>Home</Link>
        <Link to={`/cart`}>Cart</Link>
      </ul>
    </nav>
  );
};

export default Nav;
