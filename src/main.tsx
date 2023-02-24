import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Navigation from './components/Navigation/Navigation';

import './index.css';
import theme from './theme/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
