import React from 'react';
import { PackageX, Car, ShieldX } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <PackageX size={32} className="text-gradient" />,
      title: "Idle Assets",
      desc: "People own expensive items like bikes and tools that they barely use."
    },
    {
      icon: <Car size={32} className="text-gradient" />,
      title: "Empty Seats",
      desc: "Travel is expensive and inefficient with mostly empty vehicles."
    },
    {
      icon: <ShieldX size={32} className="text-gradient" />,
      title: "Unsafe Rentals",
      desc: "Traditional peer-to-peer renting lacks trust, verification, and safety."
    }
  ];

  return (
    <section className="section bg-opacity-50" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Problem</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We noticed a disconnect in how we share resources.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {problems.map((prob, i) => (
            <div key={i} className="glass-card flex flex-col items-center text-center animate-on-scroll" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <div style={{ marginBottom: '24px', padding: '16px', borderRadius: '12px', background: 'var(--border-color)' }}>
                {prob.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{prob.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
