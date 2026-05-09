import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Screenshots from './components/Screenshots';
import Features from './components/Features';
import RentalMap from './components/RentalMap';
import RideSharing from './components/RideSharing';
import TrustSecurity from './components/TrustSecurity';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import Admin from './components/Admin';

import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => {
  useEffect(() => {
    // Ensure dark theme is set by default on mount to match the premium dark UI requirement
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <div className="bg-glow"></div>
      <Navbar />
      <Hero />
      <Screenshots />
      <Features />
      <RentalMap />
      <RideSharing />
      <TrustSecurity />
      <Testimonials />
      <Statistics />
      <DownloadCTA />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
