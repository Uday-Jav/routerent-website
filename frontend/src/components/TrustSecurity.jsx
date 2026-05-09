import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function TrustSecurity() {
  const { ref, isVisible } = useScrollReveal();

  const securityFeatures = [
    { title: "Government ID Match", desc: "Every user is verified via facial recognition and official ID before their first transaction." },
    { title: "AI Fraud Detection", desc: "Our real-time engine monitors behavior to prevent scams and ensure complete safety." },
    { title: "Secure Escrow", desc: "Payments are held securely and only released when both parties confirm satisfaction." },
    { title: "Trust Scores", desc: "Transparent rating systems build community accountability and peace of mind." }
  ];

  return (
    <section id="security" className="section" ref={ref}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '1rem', color: '#10b981', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Uncompromising Safety
          </div>
          <h2 className={`hero-title scroll-reveal delay-1 ${isVisible ? 'visible' : ''}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Built on <span style={{ color: '#10b981' }}>Absolute Trust.</span>
          </h2>
          <p className={`hero-subtitle scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`}>
            We believe safety shouldn't be a premium feature. It's the foundation of everything we build at Routerent.
          </p>
        </div>

        <div className="card-grid">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className={`glass scroll-reveal delay-${(idx % 4) + 1} ${isVisible ? 'visible' : ''}`} style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderTop: '2px solid rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{feature.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
