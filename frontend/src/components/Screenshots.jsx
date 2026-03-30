import React from 'react';

export default function Screenshots() {
  const screenshots = [
    { src: '/screenshot1.png', label: 'Home & Explore' },
    { src: '/screenshot2.png', label: 'Route Search' },
    { src: '/screenshot3.png', label: 'Offer Ride' }
  ];

  return (
    <section className="section bg-opacity-50" style={{ background: 'var(--card-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Clean Mobile UI</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Designed for a frictionless, premium experience.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-8" style={{ perspective: '1000px' }}>
          {screenshots.map((shot, i) => (
            <div 
              key={i}
              className="glass-card flex items-center justify-center animate-on-scroll" 
              style={{ width: '300px', padding: 0, overflow: 'hidden', border: '1px solid var(--border-color)', transformStyle: 'preserve-3d' }}
            >
              <img 
                src={shot.src} 
                alt={shot.label}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div 
                style={{ 
                  display: 'none', height: '600px', width: '100%', 
                  alignItems: 'center', justifyContent: 'center', 
                  backgroundColor: 'var(--bg-color)', 
                  color: 'var(--text-muted)',
                  flexDirection: 'column', gap: '12px', textAlign: 'center'
                }}
              >
                <span>{shot.label}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>(Add <b>{shot.src}</b> to public folder)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
