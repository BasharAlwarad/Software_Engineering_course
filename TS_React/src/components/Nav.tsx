import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => (
  <nav className="h-full w-full flex flex-col items-stretch py-8 px-2 bg-base-200">
    <div className="mb-8 flex justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn btn-ghost normal-case text-xl w-full text-center ${
            isActive ? 'btn-active bg-primary text-primary-content' : ''
          }`
        }
        end
      >
        Home
      </NavLink>
    </div>
    <ul className="menu menu-vertical gap-2">
      <li>
        <NavLink
          to="/tsIntro"
          className={({ isActive }) =>
            isActive ? 'active bg-primary text-primary-content' : ''
          }
          end
        >
          TS Intro
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active bg-primary text-primary-content' : ''
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'active bg-primary text-primary-content' : ''
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
