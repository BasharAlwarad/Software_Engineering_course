import { Link, Outlet } from 'react-router';

export function meta() {
  return [
    { title: 'dashboard' },
    { name: 'description', content: 'dashboard page!' },
  ];
}

export default function Dashboard() {
  return (
    <>
      <Link to={`/dashboard/finance`}>Finance</Link>
      <br />
      <Link to={`/dashboard/personal-info`}>Personal Info</Link>
      <br />
      dash board page <br /> <Outlet />
    </>
  );
}
