import React, { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;
    
    const MAX_ROTATION = 12;
    
    setRotation({
      x: -normalizedY * MAX_ROTATION,
      y: normalizedX * MAX_ROTATION
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div className="container hero-grid">
        
        {/* Left Column: Text & Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', zIndex: 10 }}>
          {/* Badge */}
          <div className="glass animate-on-load delay-1" style={{
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: 'var(--accent-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 20px rgba(20, 184, 166, 0.15)'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }} />
            Routerent V1 is now live
          </div>

          <h1 className="hero-title animate-on-load" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Rent Anything Nearby.<br />
            <span className="gradient-text">Travel Smarter Together.</span>
          </h1>
          
          <p className="hero-subtitle animate-on-load delay-2" style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '540px' }}>
            The premium platform for renting personal items and sharing travel routes. Save money, reduce waste, and connect with verified users.
          </p>
          
          <div className="animate-on-load delay-3" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Uday-Jav/routerent-app/releases/download/v1/app-debug.apk" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
              Get Started
            </a>
            <a href="#features" className="btn secondary-btn">
              Explore Features &rarr;
            </a>
          </div>

          {/* Quick Stats */}
          <div className="animate-on-load delay-4" style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-heading)' }}>10k+</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Verified Users</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-heading)' }}>5k+</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Rentals</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-heading)' }}>99%</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Safe Matches</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Mockup */}
        <div 
          className="perspective-container animate-on-load delay-3"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            height: '100%',
            minHeight: '700px',
            position: 'relative'
          }}
        >
          {/* Ambient background glow for mockup */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          {/* Floating UI Elements */}
          <div className="glass animate-float" style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            padding: '1rem',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            transform: `translateZ(40px) translateY(${rotation.x * 2}px)`
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Payment Received</p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)', margin: 0 }}>+$45.00</p>
            </div>
          </div>

          {/* The 3D Rotating Device */}
          <div className="glass" style={{
            width: '100%',
            maxWidth: '360px',
            height: '700px',
            padding: '0.75rem',
            borderRadius: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
            boxShadow: `
              ${-rotation.y * 1.5}px 
              ${rotation.x * 1.5 + 30}px 
              50px rgba(0,0,0,0.3)
            `,
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            
            {/* Inner Highlight Reflection */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '2.5rem',
              background: `radial-gradient(circle at ${50 + rotation.y * 3}% ${50 - rotation.x * 3}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
              pointerEvents: 'none',
              zIndex: 10,
              mixBlendMode: 'overlay'
            }} />

            {/* Inner Screen Area */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000', // Black bezel
              borderRadius: '2rem',
              overflow: 'hidden',
              position: 'relative',
              transform: 'translateZ(20px)'
            }}>
              <img 
                src="/home_page.png" 
                alt="Routerent App Interface" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => { e.target.src = '/product_page.png'; }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
