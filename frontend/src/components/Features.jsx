import React, { useEffect, useRef } from 'react';
import { Navigation, DollarSign, MessageCircle, ShieldAlert } from 'lucide-react';

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const features = [
    {
      title: "Nearby Rentals Interactive Map",
      desc: "Find bikes, electronics, and tools within your immediate neighborhood using our blazing fast map integration.",
      icon: <Navigation className="text-gradient" />,
      align: "left"
    },
    {
      title: "Route Sharing",
      desc: "Post your commute, find passengers, and share travel expenses effortlessly right within the app.",
      icon: <Navigation className="text-gradient" />,
      align: "right"
    },
    {
      title: "Secure Payments & Deposits",
      desc: "We hold funds safely and manage security deposits seamlessly, protecting both renters and owners.",
      icon: <DollarSign className="text-gradient" />,
      align: "left"
    },
    {
      title: "Live Chat & Instant Booking",
      desc: "Communicate directly to arrange pickups, ask questions, and finalize bookings in real time.",
      icon: <MessageCircle className="text-gradient" />,
      align: "right"
    },
    {
      title: "Fraud Detection Engine",
      desc: "Our AI-driven backend monitors transactions and verifies ID documents to block scammers.",
      icon: <ShieldAlert className="text-gradient" />,
      align: "left"
    }
  ];

  return (
    <section className="section bg-opacity-50" style={{ background: 'transparent' }}>
      <div className="container" ref={containerRef}>
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Powerful Features</h2>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((feat, i) => (
            <div 
              key={i} 
              className={`flex items-center flex-wrap animate-on-scroll ${feat.align === 'right' ? 'flex-row-reverse' : ''}`}
              style={{ gap: '40px', padding: '40px 0', borderBottom: '1px solid var(--border-color)' }}
            >
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div style={{ marginBottom: '16px', display: 'inline-flex', padding: '16px', borderRadius: '16px', background: 'var(--border-color)' }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>{feat.title}</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{feat.desc}</p>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
                <div className="glass-card" style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="text-gradient" style={{ fontWeight: '600' }}>Feature Preview Area</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
