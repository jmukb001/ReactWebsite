import React, { useState, useEffect } from 'react';
import './Background.css';

const Background = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let throttleTimeout;

    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          const position = window.pageYOffset;
          setScrollPosition(position);
          throttleTimeout = null;
        }, 20); 
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotation = scrollPosition / 1000; // rotation speed on scroll
  const scale = 1 + scrollPosition / 1500; // slight scale change on scroll
  const hueRotation = scrollPosition / 200; // hue rotation speed on scroll

  return (
    <div
      className="background"
      style={{
        '--rotation': `${rotation}deg`,
        '--scale': scale,
        '--hue-rotation': `${hueRotation}deg`,
        backgroundImage: `url('/newBackground.png')`,
      }}
    />
  );
};

export default Background;
