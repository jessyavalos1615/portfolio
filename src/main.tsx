import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import './index.css';
import { router } from './app-routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
