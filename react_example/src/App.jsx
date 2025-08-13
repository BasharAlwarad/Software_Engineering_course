// import { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router';

import MainLayout from './components/MainLayout';
import Nav from './components/Nav';
import NotFound from './pages/NotFound';

import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetail />} />
          </Route>
          <Route path="products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
