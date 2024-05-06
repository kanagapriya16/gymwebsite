import React from 'react';
import { Header } from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components here


export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
       
    {/*
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
  */}
        </Routes>
      </Router>
    </div>
  );
};
