import React from 'react';
import { MapPin, Users, ShieldCheck } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      icon: <MapPin size={32} className="text-gradient" />,
      title: "Rent Nearby",
      desc: "Easily rent personal items (bikes, tools, electronics) from verified neighbors."
    },
    {
      icon: <Users size={32} className="text-gradient" />,
      title: "Share Rides",
      desc: "Share travel routes, offer seats, and split travel costs effortlessly."
    },
    {
      icon: <ShieldCheck size={32} className="text-gradient" />,
      title: "Secure System",
      desc: "Built-in trust score, verified IDs, and 100% secure payment gateways."
    }
  ];

  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The ShareRent Solution</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We bring communities together through shared resources.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {solutions.map((sol, i) => (
            <div key={i} className="glass-card flex flex-col items-center text-center animate-on-scroll visible" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <div style={{ marginBottom: '24px', padding: '16px', borderRadius: '12px', background: 'var(--border-color)' }}>
                {sol.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{sol.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
