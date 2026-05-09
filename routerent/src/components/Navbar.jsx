import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '1.5rem 0',
      background: 'transparent',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Left: Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text-heading)',
        }}>
          <img 
            src="/logo.svg" 
            alt="Routerent Logo" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)'
            }} 
          />
          Routerent
        </a>

        {/* Right: Glass Pill Container */}
        <div className="glass" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.5rem 0.5rem 0.5rem 1.5rem',
          borderRadius: '9999px',
        }}>
          <ThemeToggle />
          <a href="https://github.com/Uday-Jav/routerent-app/releases/download/v1/app-debug.apk" target="_blank" rel="noopener noreferrer" className="btn primary-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Get App
          </a>
        </div>

      </div>
    </nav>
  );
}
