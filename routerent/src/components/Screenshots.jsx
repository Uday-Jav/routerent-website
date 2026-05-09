import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Screenshots() {
  const { ref, isVisible } = useScrollReveal();

  const screens = [
    { src: '/home_page.png', alt: 'Home Feed' },
    { src: '/product_page.png', alt: 'Rental Details' },
    { src: '/ride_share_page.png', alt: 'Ride Sharing Route' },
    { src: '/Listing_page.png', alt: 'List Your Item' }
  ];

  return (
    <section id="showcase" className="section" ref={ref} style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      
      {/* Immersive cinematic background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 50% 100%, rgba(20,184,166,0.15) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className={`hero-title scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff' }}>
            Experience <span style={{ color: 'var(--accent-color)' }}>Routerent.</span>
          </h2>
          <p className={`hero-subtitle scroll-reveal delay-1 ${isVisible ? 'visible' : ''}`} style={{ color: 'rgba(255,255,255,0.7)' }}>
            A fluid, spatial UI designed for effortless navigation and instant utility.
          </p>
        </div>

        <div className={`scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`} style={{
          display: 'flex',
          gap: '2rem',
          overflowX: 'auto',
          paddingBottom: '2rem',
          snapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          justifyContent: 'center'
        }}>
          {screens.map((screen, idx) => (
            <div key={idx} style={{
              flex: '0 0 auto',
              width: '280px',
              height: '600px',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              scrollSnapAlign: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '6px solid #111',
              position: 'relative'
            }}>
              <img 
                src={screen.src} 
                alt={screen.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = '#1e293b';
                  e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.9rem;">${screen.alt}</div>`;
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
