import React from 'react';
import { Building2, GraduationCap, Briefcase, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import './StatsCounter.css';

const StatItem = ({ icon: Icon, targetNumber, suffix, label, subtext, isVisible, delayClass }) => {
  const count = useCountUp(targetNumber, 1800, isVisible);

  return (
    <div className={`stat-card ${isVisible ? 'revealed' : ''} ${delayClass}`}>
      <div className="stat-icon-wrapper">
        <Icon size={24} className="stat-icon" />
      </div>
      <div className="stat-number-wrapper">
        <span className="stat-number">{count.toLocaleString()}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <h3 className="stat-label">{label}</h3>
      <p className="stat-subtext">{subtext}</p>
      <div className="stat-sparkle-glow" />
    </div>
  );
};

const StatsCounter = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  const stats = [
    {
      icon: GraduationCap,
      targetNumber: 150000,
      suffix: '+',
      label: 'Students Enrolled',
      subtext: 'Across technical trades & courses',
      delayClass: 'delay-1'
    },
    {
      icon: Building2,
      targetNumber: 450,
      suffix: '+',
      label: 'Partner Institutes',
      subtext: 'ITIs & Polytechnics connected',
      delayClass: 'delay-2'
    },
    {
      icon: Briefcase,
      targetNumber: 1250,
      suffix: '+',
      label: 'Active Employers',
      subtext: 'MSMEs & leading enterprises',
      delayClass: 'delay-3'
    },
    {
      icon: TrendingUp,
      targetNumber: 94,
      suffix: '%',
      label: 'Curriculum Match',
      subtext: 'Industry-aligned accuracy score',
      delayClass: 'delay-4'
    }
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className={`stats-header ${isVisible ? 'revealed' : ''}`}>
          <div className="stats-badge">
            <span className="live-pulse-dot" />
            Live State-Wide Impact Metrics
          </div>
          <h2 className="stats-title">Empowering Skill Development at Scale</h2>
          <p className="stats-subtitle">
            Bridging academia and enterprise with verifiable data, real-time demand tracking, and transparent recruitment pipelines.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              {...stat}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
