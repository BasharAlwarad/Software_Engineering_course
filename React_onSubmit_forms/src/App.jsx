import { BrowserRouter, Routes, Route } from 'react-router';

import FormsState from './pages/FormsState';
import FormsActions from './pages/FormsActions';
import FormsPending from './pages/FormsPending';
import NotFound from './pages/NotFound';

import Nav from './components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<FormsState />} />
          <Route path="/action" element={<FormsActions />} />
          <Route path="/pending" element={<FormsPending />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
