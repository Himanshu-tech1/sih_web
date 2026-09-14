import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Scroll back to top"
    >
      <ArrowUp size={20} className="btt-arrow" />
    </button>
  );
};

export default BackToTop;
