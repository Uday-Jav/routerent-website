import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      background: 'rgba(0,0,0,0.2)',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          
          <Link to="/" style={{
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
              style={{ width: '32px', height: '32px', borderRadius: '8px' }} 
            />
            Routerent
          </Link>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="/#features" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Features</a>
            <a href="/#security" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Security</a>
            <a href="/#download" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Download</a>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Routerent. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
