import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import TsIntro from './pages/TsIntro';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar Nav */}
      <div className="w-[15vw] min-w-[120px] min-h-[99vh] max-w-xs h-full bg-base-200 flex flex-col">
        <Nav />
      </div>
      {/* Main Content and Footer */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 container mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tsIntro" element={<TsIntro />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
