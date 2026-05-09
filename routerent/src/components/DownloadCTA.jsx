import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function DownloadCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="download" className="section" ref={ref} style={{ paddingBottom: '10rem' }}>
      <div className="container">
        
        <div className={`glass scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
          padding: '5rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Abstract glows */}
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(20, 184, 166, 0.2)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '300px', height: '300px', background: 'rgba(56, 189, 248, 0.2)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Ready to <span className="gradient-text">Upgrade?</span>
            </h2>
            <p className="hero-subtitle" style={{ margin: '0 auto 3rem auto', maxWidth: '600px', fontSize: '1.2rem' }}>
              Join the future of community renting and intelligent travel. Download Routerent today and experience the difference.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/Uday-Jav/routerent-app/releases/download/v1/app-debug.apk" target="_blank" rel="noopener noreferrer" className="btn primary-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download APK
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
