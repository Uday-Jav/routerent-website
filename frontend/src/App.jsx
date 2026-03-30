import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import DownloadCTA from './components/DownloadCTA';
import Admin from './components/Admin';

import './index.css';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Screenshots />
      <DownloadCTA />
    </>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <BackgroundEffect />
      
      {/* Navigation Bar */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px 0', zIndex: 100, backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container flex justify-between items-center">
          <Link to="/" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.05em' }}>
            <span style={{ color: 'var(--accent-primary)' }}>Share</span>Rent
          </Link>
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer', padding: '8px', borderRadius: '50%' }}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#download" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
              Get App
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Router */}
      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} ShareRent. All rights reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
