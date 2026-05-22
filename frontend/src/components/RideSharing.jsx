import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function RideSharing() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="rides" className="section" ref={ref}>
      <div className="container">
        
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* Left: UI Mockup */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ position: 'relative', order: 2 }}>
            <div className="glass" style={{
              width: '100%',
              height: '550px',
              borderRadius: '2rem',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem'
            }}>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600 }}>Active Route</h4>
                <p style={{ color: 'var(--text-muted)' }}>San Francisco &rarr; Palo Alto</p>
              </div>

              {/* Fake UI Elements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                
                {/* Driver Card */}
                <div className="glass" style={{ padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ color: '#fff', margin: 0, fontSize: '1rem' }}>Alex Chen</h5>
                    <p style={{ color: '#10b981', margin: 0, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}/> Verified Driver
                    </p>
                  </div>
                  <div style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>
                    4.9 ★
                  </div>
                </div>

                {/* Match Card */}
                <div className="glass" style={{ padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.05)', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>Estimated Split</span>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>$12.50</span>
                  </div>
                  <button className="btn" style={{ width: '100%', background: '#38bdf8', color: '#060816', padding: '0.75rem', borderRadius: '0.75rem' }}>
                    Join Ride
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Text Content */}
          <div className={`scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`} style={{ order: 1 }}>
            <h2 className="hero-title" style={{ textAlign: 'left', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Intelligent <br/>
              <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}>Route Sharing.</span>
            </h2>
            <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              Commute smarter. Join routes already heading your way, automatically split travel expenses, and reduce your carbon footprint with our AI matching engine.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "AI-powered route optimization",
                "Dynamic automatic cost splitting",
                "Live ETA & location tracking",
                "Carbon footprint reduction tracker"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)', fontSize: '1.05rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.85rem 2rem', borderRadius: '999px', backdropFilter: 'blur(10px)' }}>Learn More</button>
          </div>

        </div>
      </div>
      
      {/* For larger screens, swap order via CSS or inline styles above */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          #rides .scroll-reveal[style*="order: 2"] { order: 1 !important; }
          #rides .scroll-reveal[style*="order: 1"] { order: 2 !important; }
        }
      `}} />
    </section>
  );
}
