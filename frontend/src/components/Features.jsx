import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Features() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      title: "Interactive Rental Map",
      desc: "Instantly discover bikes, cameras, and tools in your immediate vicinity with our blazing fast, spatial map interface.",
      icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
      glowColor: "rgba(20, 184, 166, 0.5)"
    },
    {
      title: "Intelligent Ride Matching",
      desc: "AI-powered route clustering connects you with verified travelers instantly. Split costs and reduce your carbon footprint.",
      icon: <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8.3a2 2 0 0 0-1.6.8L4 11l-5.16.86a1 1 0 0 0-.84.99V16h3m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />,
      glowColor: "rgba(56, 189, 248, 0.5)"
    },
    {
      title: "Military-Grade Security",
      desc: "End-to-end encrypted chats, government ID verification, and secure escrow payments built directly into the platform.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      glowColor: "rgba(16, 185, 129, 0.5)"
    }
  ];

  return (
    <section id="features" className="section" ref={ref} style={{ position: 'relative' }}>
      
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Core Ecosystem
          </div>
          <h2 className={`hero-title scroll-reveal delay-1 ${isVisible ? 'visible' : ''}`} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Designed for <span style={{ color: '#fff' }}>Impact.</span>
          </h2>
          <p className={`hero-subtitle scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`}>
            A futuristic peer-to-peer platform unifying local rentals and smart travel.
          </p>
        </div>

        <div className={`card-grid scroll-reveal delay-3 ${isVisible ? 'visible' : ''}`}>
          {features.map((feature, idx) => (
            <div key={idx} className="glass feature-card" style={{ 
              padding: '3rem 2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              
              {/* Hover Glow Effect via CSS hover (using style tag here for simplicity but conceptually this is glass:hover in index.css) */}
              <div className="card-glow" style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '100px',
                background: feature.glowColor,
                filter: 'blur(50px)',
                opacity: 0.5,
                pointerEvents: 'none'
              }} />

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-color)',
                boxShadow: `0 0 20px ${feature.glowColor}`
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {React.Children.toArray(feature.icon)}
                </svg>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
