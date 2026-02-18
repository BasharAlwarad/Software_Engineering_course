import { Outlet } from 'react-router';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
