// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Services from './pages/Services';
import AboutUs from './pages/About';
import Contacts from './pages/Contacts'; 
import NotFound from './pages/NotFound'; // 1. Import the new 404 page

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
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}