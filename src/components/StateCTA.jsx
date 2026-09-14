import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, BookOpen, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './StateCTA.css';

const StateCTA = () => {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="state-cta-section" ref={sectionRef}>
      <div className="state-cta-container">
        <div className={`state-cta-card ${isVisible ? 'revealed' : ''}`}>
          <div className="state-cta-blob blob-left" />
          <div className="state-cta-blob blob-right" />

          <div className="state-cta-content">
            <div className="state-cta-pill">
              <Sparkles size={14} />
              Join the Maharashtra Skill Movement
            </div>

            <h2 className="state-cta-title">
              Ready to Accelerate Your Journey with SkillBridge?
            </h2>

            <p className="state-cta-desc">
              Whether you are a student aspiring for high-growth technical roles, an ITI/Polytechnic wanting industry-aligned courses, or an employer seeking verified talent.
            </p>

            <div className="state-cta-buttons">
              <button 
                className="cta-btn primary-cta"
                onClick={() => navigate('/student/login')}
              >
                <GraduationCap size={18} />
                <span>Student Login</span>
                <ArrowRight size={16} />
              </button>

              <button 
                className="cta-btn secondary-cta"
                onClick={() => navigate('/institute/register')}
              >
                <BookOpen size={18} />
                <span>Register Institute</span>
              </button>

              <button 
                className="cta-btn outline-cta"
                onClick={() => navigate('/employer/register')}
              >
                <Building2 size={18} />
                <span>Hire as Employer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateCTA;
