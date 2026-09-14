import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  GraduationCap, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Animated Gradient Mesh */}
      <div className="hero-bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-content-container">
        {/* Top Floating Badge */}
        <div className="hero-badge animate-fade-down">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Government of Maharashtra · Skill & Employment Portal</span>
          <Sparkles size={14} className="hero-badge-sparkle" />
        </div>

        {/* Main Title */}
        <h1 className="hero-main-heading animate-fade-up">
          Bridging the Divide Between{' '}
          <span className="hero-gradient-text">Classroom Education</span>{' '}
          & <span className="hero-gradient-accent">Industry Demands</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-description animate-fade-up delay-1">
          An AI-powered state initiative empowering students with targeted skill gap analysis, 
          modernized ITI/Polytechnic curriculums, and direct recruitment pipelines to 1,200+ industries.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions-row animate-fade-up delay-2">
          <button 
            className="hero-primary-btn"
            onClick={() => scrollToSection('portals')}
          >
            <span>Explore Dashboards</span>
            <ArrowRight size={18} className="btn-arrow" />
          </button>
          
          <button 
            className="hero-secondary-btn"
            onClick={() => navigate('/student/login')}
          >
            <GraduationCap size={18} />
            <span>Student Assessment</span>
          </button>

          <button 
            className="hero-outline-btn"
            onClick={() => scrollToSection('how-it-works')}
          >
            <Compass size={18} />
            <span>How It Works</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="hero-trust-bar animate-fade-up delay-3">
          <div className="trust-item">
            <ShieldCheck size={16} className="trust-icon" />
            <span>State Government Verified</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>Real-Time Industry AI Gap Engine</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <TrendingUp size={16} className="trust-icon" />
            <span>Direct Apprenticeship Gateway</span>
          </div>
        </div>

        {/* Hero Interactive Showcase / Visual with Floating Cards */}
        <div className="hero-visual-wrapper animate-zoom-in delay-4">
          <div className="hero-image-card">
            <div className="hero-card-glow" />
            <img 
              src="/images/logo.png" 
              alt="SkillBridge Ecosystem" 
              className="hero-center-logo" 
            />
            <div className="hero-logo-caption">
              SkillBridge Unified Maharashtra Skill Portal
            </div>
          </div>

          {/* Floating Widget 1: Top Left */}
          <div className="floating-card float-card-left">
            <div className="float-card-icon blue">
              <Sparkles size={18} />
            </div>
            <div className="float-card-info">
              <span className="float-card-title">AI Skill Gap Analysis</span>
              <span className="float-card-sub">Curriculum vs Market Trend</span>
            </div>
            <span className="float-badge">98% Match</span>
          </div>

          {/* Floating Widget 2: Bottom Right */}
          <div className="floating-card float-card-right">
            <div className="float-card-icon green">
              <Building2 size={18} />
            </div>
            <div className="float-card-info">
              <span className="float-card-title">Live Industry Openings</span>
              <span className="float-card-sub">Tata, Mahindra, L&T & more</span>
            </div>
            <span className="float-badge green-badge">12,500+ Jobs</span>
          </div>

          {/* Floating Widget 3: Bottom Left */}
          <div className="floating-card float-card-bottom">
            <div className="float-card-icon purple">
              <GraduationCap size={18} />
            </div>
            <div className="float-card-info">
              <span className="float-card-title">Verified ITI & Poly</span>
              <span className="float-card-sub">Accredited State Institutes</span>
            </div>
            <span className="float-badge purple-badge">450+ Campus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
