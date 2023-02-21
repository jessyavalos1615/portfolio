import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
