import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import LoginBasic from './pages/LoginBasic';
import LoginUseState from './pages/LoginUseState';
import UseStateWithSingleState from './pages/UseStateWithSingleState';
import FormAction from './pages/FormAction';
import UseFormStatus from './pages/UseFormStatus';
import ErrorBoundary from './pages/ErrorBoundary';
import UseActionStateForm from './pages/UseActionStateForm';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex">
      <Nav />
      <div className="flex-1 ml-[20vw] min-w-0">
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/:id" element={<DestinationDetails />} />
            <Route path="/LoginBasic" element={<LoginBasic />} />
            <Route path="/loginUseState" element={<LoginUseState />} />
            <Route
              path="/UseStateWithSingleState"
              element={<UseStateWithSingleState />}
            />
            <Route path="/formAction" element={<FormAction />} />
            <Route path="/UseFormStatus" element={<UseFormStatus />} />
            <Route path="/ErrorBoundary" element={<ErrorBoundary />} />
            <Route
              path="/UseActionStateForm"
              element={<UseActionStateForm />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
