import React from 'react';
import { UserPlus, Search, CreditCard, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Sign up", desc: "A quick verified sign-up via your phone and ID.", icon: <UserPlus /> },
    { num: "02", title: "Browse or List", desc: "List your item in seconds or browse nearby available goods.", icon: <Search /> },
    { num: "03", title: "Book & Pay", desc: "Instant booking with completely secure end-to-end payments.", icon: <CreditCard /> },
    { num: "04", title: "Use & Review", desc: "Meet up, exchange items, use, return, and review.", icon: <Star /> },
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>How It Works</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Four simple steps to a shared economy.</p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {steps.map((step, i) => (
            <div key={i} className="glass-card animate-on-scroll" style={{ flex: '1 1 250px', maxWidth: '280px', position: 'relative' }}>
              <div 
                style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '5rem', fontWeight: 700, color: 'var(--text-muted)', opacity: 0.05, lineHeight: 1 }}
              >
                {step.num}
              </div>
              <div style={{ marginBottom: '24px', color: 'var(--accent-primary)', display: 'inline-flex', padding: '16px', borderRadius: '12px', background: 'var(--border-color)' }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', zIndex: 1, position: 'relative', fontWeight: 600 }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', zIndex: 1, position: 'relative', fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
