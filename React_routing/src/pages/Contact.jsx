import { Outlet, Link } from 'react-router';

const Contact = () => {
  return (
    <div>
      <h1>welcome to contact</h1>
      <Link to={`/contact/bashar`}>see bashar</Link>
      <br />
      <Link to={`/contact/justyna`}>see justyna</Link>
      <br />
      <Link to={`/contact/gutsavo`}>see gutsavo</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
