import React, { useEffect, useState, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Statistics() {
  const { ref, isVisible } = useScrollReveal();
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { label: "Active Rentals", value: 12500, suffix: "+" },
    { label: "Tons of CO2 Saved", value: 850, suffix: "" },
    { label: "Verified Users", value: 45000, suffix: "+" },
    { label: "Cities Covered", value: 120, suffix: "+" }
  ];

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible || hasAnimated) return;
      
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [isVisible, target, hasAnimated]);

    useEffect(() => {
      if (isVisible) setHasAnimated(true);
    }, [isVisible]);

    return (
      <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em', lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="statistics" className="section" ref={ref}>
      <div className="container">
        
        <div className={`glass scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
          padding: '4rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 500, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
