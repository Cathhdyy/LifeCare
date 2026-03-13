import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 1. Import Provider

import Layout from './components/Layout'; 
import Home from './pages/Home'; 
import Services from './pages/Services';
import AboutUs from './pages/About';
import Contacts from './pages/Contacts'; 
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    // 2. Wrap everything in HelmetProvider
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            
          <Route element={<Layout />}>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}