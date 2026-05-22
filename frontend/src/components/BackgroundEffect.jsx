import React, { useEffect, useState } from 'react';

export default function BackgroundEffect() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleMouseMove = (e) => {
      setIsHovering(true);
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Use exact pixels so the radial gradient size behaves like a physical dent
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseLeave = () => {
      // Regain its original state by hiding the memory-foam indent
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="interactive-sponge-wrapper">
      <div 
        className="interactive-sponge-layer"
        style={{
          '--mouse-x': `${position.x}px`,
          '--mouse-y': `${position.y}px`,
          '--sponge-opacity': isHovering ? 1 : 0
        }}
      />
    </div>
  );
}
