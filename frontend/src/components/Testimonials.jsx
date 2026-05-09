import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  const reviews = [
    { name: "Sarah Jenkins", role: "Renter & Traveler", text: "Routerent completely changed how I travel. I rented a professional camera for my weekend trip and split a ride there with verified users. Flawless experience.", rating: 5 },
    { name: "David Kim", role: "Owner", text: "I've made over $500 this month just renting out my electric bike when I'm at work. The escrow payment system makes it completely stress-free.", rating: 5 },
    { name: "Elena Rodriguez", role: "Commuter", text: "The AI route matching is incredible. I save about $150 a month on my commute to the city, and the UI feels like something out of a sci-fi movie.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="section" ref={ref}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className={`hero-title scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Community <span className="gradient-text">Loved.</span>
          </h2>
        </div>

        <div className={`card-grid scroll-reveal delay-2 ${isVisible ? 'visible' : ''}`}>
          {reviews.map((review, idx) => (
            <div key={idx} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
              
              {/* Quote Icon Background */}
              <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', opacity: 0.1, color: 'var(--accent-color)' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>

              <div style={{ display: 'flex', gap: '0.25rem', color: '#10b981' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
              
              <p style={{ color: 'var(--text-color)', fontSize: '1.1rem', fontStyle: 'italic', flex: 1, zIndex: 1 }}>
                "{review.text}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gradient)' }} />
                <div>
                  <h5 style={{ color: '#fff', margin: 0, fontSize: '1rem', fontWeight: 600 }}>{review.name}</h5>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
