import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
            Rent Smarter. <br />
            <span className="text-gradient">Travel Together.</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            The premium platform for renting personal items and sharing travel routes. Save money, reduce waste, and connect with verified users.
          </p>
          
          <div className="flex items-center gap-4" style={{ marginTop: '20px' }}>
            <a href="#download" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.05rem', border: 'none' }}>
              Download App
            </a>
            <a href="#how-it-works" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
              How it works <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          <div 
            className="animate-on-scroll visible"
            style={{ 
              marginTop: '60px', 
              width: '100%', 
              maxWidth: '350px',
              animation: 'fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
              // Subtle floating animation
              animationName: 'float',
              animationDuration: '6s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            <style>{`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
              }
            `}</style>
            
            {/* Using a placeholder box instead of the purple heavy mockup generated previously */}
            <div className="glass-card flex flex-col items-center justify-center text-center" style={{ height: '650px', border: '1px solid var(--border-color)', borderRadius: '24px', overflow: 'hidden' }}>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Phone Mockup Area</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Replace with your app Hero UI (e.g. hero.png)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
