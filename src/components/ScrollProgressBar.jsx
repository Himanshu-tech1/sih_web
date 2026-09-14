import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
