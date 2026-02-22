import { use } from 'react';
import { LangContext } from '../contexts/LangContext';
import { Link } from 'react-router';

const Nav = () => {
  const { setLang } = use(LangContext);
  return (
    <nav className="flex gap-4 justify-around">
      <Link to={`/`}>Home</Link>
      <Link to={`/cart`}>Cart</Link>
      <details className="dropdown">
        <summary className="btn m-1">language</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <button onClick={() => setLang('en')} className="btn">
              English
            </button>
          </li>
          <li>
            <button onClick={() => setLang('ge')} className="btn">
              German
            </button>
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default Nav;
