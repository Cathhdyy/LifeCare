import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Ensure the path below matches where your Home.jsx file is saved
import Home from './pages/Home'; 
import Services from './pages/Services';
import AboutUs from './pages/About';
import Contacts from './pages/Contacts'; 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This routes the base URL to your Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}