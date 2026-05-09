import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function RentalMap() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="rentals" className="section" ref={ref}>
      <div className="container">
        
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* Left: Text Content */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <h2 className="hero-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Smart Local <br/>
              <span className="gradient-text">Rentals.</span>
            </h2>
            <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              Access thousands of premium items right in your neighborhood. From professional camera gear to heavy-duty tools, rent what you need, exactly when you need it.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Live interactive availability map",
                "Instant secure in-app payments",
                "Chat securely with verified owners",
                "Schedule flexible pickup and dropoff"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)', fontSize: '1.05rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(20, 184, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn primary-btn">Explore Map</button>
          </div>

          {/* Right: Map Visual/Mockup */}
          <div className={`scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`} style={{ position: 'relative' }}>
            <div className="glass" style={{
              width: '100%',
              height: '500px',
              borderRadius: '2rem',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              {/* Abstract Map Representation */}
              <div style={{
                position: 'absolute',
                inset: '-20%',
                background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.1) 0%, transparent 60%)',
                filter: 'blur(40px)',
              }} />
              
              <div style={{
                width: '100%',
                height: '100%',
                backgroundSize: '40px 40px',
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.5
              }} />

              {/* Floating Map Pins */}
              <div className="animate-float" style={{ position: 'absolute', top: '30%', left: '20%', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>DSLR Camera</span>
              </div>
              
              <div className="animate-float" style={{ position: 'absolute', top: '60%', right: '15%', animationDelay: '1s', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>Electric Bike</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
