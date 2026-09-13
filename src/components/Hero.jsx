import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Welcome to SkillBridge</h1>
      <p className="hero-subtitle">Connecting Students, Institutes and Employers</p>
      <div className="hero-image-placeholder">
        <img src="/images/logo.png" alt="SkillBridge Logo" className="hero-large-logo" />
      </div>
    </section>
  );
};

export default Hero;
