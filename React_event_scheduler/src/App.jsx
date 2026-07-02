import { BrowserRouter, Routes, Route } from 'react-router';
import Users from './Pages/Users.jsx';
import Events from './Pages/Events.jsx';
import SignUp from './Pages/SignUp.jsx';
import User from './Pages/User.jsx';
import Event from './Pages/Event.jsx';
import Login from './Pages/Login.jsx';

import Nav from './components/Nav.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Users />} />
        <Route path={'/user/:id'} element={<User />} />
        <Route path={'/events'} element={<Events />} />
        <Route path={'/event/:id'} element={<Event />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
