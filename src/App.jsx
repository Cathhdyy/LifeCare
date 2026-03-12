// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout'; 
import Services from './pages/Services';
import AboutUs from './pages/About';
import Contacts from './pages/Contacts'; 
import NotFound from './pages/NotFound'; // 1. Import the new 404 page
import Privacy from './pages/Privacy'; // <-- Import Privacy
import Terms from './pages/Terms';     // <-- Import Terms

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contacts />} />
          
          {/* 2. The Catch-All Route. MUST be at the bottom! */}
          {/* If the URL doesn't match any of the above, it will render this */}
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}