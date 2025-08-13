import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to={'/'}>home</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/users'}>users</Link>
                  </li>
                  <li>
                    <Link to={'/products'}>products</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
