import { NavLink } from 'react-router';

const Nav = () => {
  const active = ({ isActive }) =>
    isActive ? 'text-yellow-500 py-2' : 'text-white py-2';

  return (
    <nav className="bg-blue-500 p-4 h-screen w-[20vw] min-w-[180px] max-w-[300px] fixed top-0 left-0 z-40 flex flex-col">
      <div className="flex-1 flex flex-col items-start mt-4">
        <div className="flex flex-col w-full">
          <NavLink to="/" className={active}>
            Home
          </NavLink>
          <NavLink to="/about" className={active}>
            About
          </NavLink>
          <NavLink to="/contact" className={active}>
            Contact
          </NavLink>
          <NavLink to="/LoginBasic" className={active}>
            traditional HTML Form
          </NavLink>
          <NavLink to="/loginUseState" className={active}>
            useState for each input field
          </NavLink>
          <NavLink to="/UseStateWithSingleState" className={active}>
            useState with a single state
          </NavLink>
          <NavLink to="/formAction" className={active}>
            form Action
          </NavLink>
          <NavLink to="/useFormStatus" className={active}>
            UseFormStatus
          </NavLink>
          <NavLink to="/ErrorBoundary" className={active}>
            ErrorBoundary
          </NavLink>
          <NavLink to="/UseActionStateForm" className={active}>
            UseActionState Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// import { NavLink } from 'react-router';
// import React from 'react';

// const Nav = () => {
//   const active = ({ isActive }) =>
//     isActive ? 'text-yellow-500 py-2' : 'text-white py-2';

//   return (
//     <nav className="bg-blue-500 p-4 h-screen w-2/16 fixed top-0 left-0 pr-7">
//       <div className="container mx-auto flex flex-col items-start">
//         <NavLink to="/" className="text-white text-2xl font-bold mb-4">
//           My Portfolio
//         </NavLink>
//         <div className="flex flex-col">
//           <NavLink to="/" className={active}>
//             Home
//           </NavLink>
//           <NavLink to="/login1" className={active}>
//             traditional HTML
//           </NavLink>
//           <NavLink to="/login2" className={active}>
//             useState for each input field
//           </NavLink>
//           <NavLink to="/login3" className={active}>
//             useState with a single state
//           </NavLink>
//           <NavLink to="/login4" className={active}>
//             useRef for each input field
//           </NavLink>
//           <NavLink to="/login5" className={active}>
//             useRef for the entire form
//           </NavLink>
//           <NavLink to="/login6" className={active}>
//             react-hook-form.
//           </NavLink>
//           <NavLink to="/login7" className={active}>
//             useReducer for state management
//           </NavLink>
//           <NavLink to="/login8" className={active}>
//             Formik library
//           </NavLink>
//           <NavLink to="/login9" className={active}>
//             Recoil for state management
//           </NavLink>
//           <NavLink to="/login10" className={active}>
//             Image upload
//           </NavLink>
//           <NavLink to="/login11" className={active}>
//             Actions
//           </NavLink>
//         </div>
//       </div>
//     </nav>

// <div className="navbar bg-base-100 shadow-sm">
//   <Link to={`/`} className="btn btn-ghost text-xl">
//     Home
//   </Link>
//   <Link to={`/about`} className="btn btn-ghost text-xl">
//     About
//   </Link>
//   <Link to={`/contact`} className="btn btn-ghost text-xl">
//     Contact
//   </Link>
//   <Link to={`/destinations`} className="btn btn-ghost text-xl">
//     Destinations
//   </Link>
// </div>
//   );
// };

// export default Nav;
