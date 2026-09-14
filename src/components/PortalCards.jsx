import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Check, 
  Sparkles, 
  UserPlus,
  ShieldAlert
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PortalCards.css';

const cardsData = [
  {
    id: 'student',
    roleTag: 'Students & Job Seekers',
    badgeClass: 'student-badge',
    icon: GraduationCap,
    iconColor: '#2563eb',
    iconBg: '#eff6ff',
    title: 'Student Portal',
    subtitle: 'Evaluate your industry readiness & unlock apprenticeships',
    description: 'Access AI skill gap assessments, personalized learning tracks, and direct applications to top Maharashtra companies.',
    features: [
      'Interactive skill assessments & radar scoring',
      'Curated learning resources & gap mitigation',
      'Real-time job & apprenticeship recommendations',
      'Verified government skill profile badge'
    ],
    loginPath: '/student/login',
    registerPath: null, // Students direct login or institute provisioned
    buttonText: 'Enter Student Portal',
    themeColor: '#2563eb'
  },
  {
    id: 'institute',
    roleTag: 'ITIs, Polytechnics & Colleges',
    badgeClass: 'institute-badge',
    icon: BookOpen,
    iconColor: '#7c3aed',
    iconBg: '#f5f3ff',
    title: 'Institute Portal',
    subtitle: 'Align training programs with live market demands',
    description: 'Monitor student cohort competencies, bridge curriculum gaps with corporate inputs, and manage placement drives.',
    features: [
      'Comprehensive student batch analytics & scorecards',
      'Real-time skill mismatch warnings with industries',
      'Automated job drives and corporate partner links',
      'Curriculum modernization suggestions'
    ],
    loginPath: '/institute/login',
    registerPath: '/institute/register',
    buttonText: 'Enter Institute Portal',
    themeColor: '#7c3aed'
  },
  {
    id: 'employer',
    roleTag: 'Recruiters & Industry Partners',
    badgeClass: 'employer-badge',
    icon: Building2,
    iconColor: '#16a34a',
    iconBg: '#f0fdf4',
    title: 'Employer Portal',
    subtitle: 'Hire pre-assessed talent and shape future skills',
    description: 'Post job requirements, provide skill feedback directly to institutions, and recruit verified talent across Maharashtra.',
    features: [
      'Post jobs & scrape market role trends',
      'Filter candidates by verified skill proficiencies',
      'Send direct skill-gap feedback to academic heads',
      'Manage on-campus and apprenticeship interviews'
    ],
    loginPath: '/employer/login',
    registerPath: '/employer/register',
    buttonText: 'Enter Employer Portal',
    themeColor: '#16a34a'
  }
];

const PortalCards = () => {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="portal-section" id="portals" ref={sectionRef}>
      <div className="portal-cards-wrapper">
        <div className={`portal-header ${isVisible ? 'revealed' : ''}`}>
          <div className="portal-pill">
            <Sparkles size={14} />
            Unified Access Hub
          </div>
          <h2 className="portal-main-title">Select Your Dedicated Gateway</h2>
          <p className="portal-main-desc">
            Seamlessly engineered for students, educators, and enterprise recruiters with role-tailored dashboards and actionable intelligence.
          </p>
        </div>

        <div className="portal-cards-grid">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id} 
                className={`modern-portal-card card-${card.id} ${isVisible ? 'revealed' : ''}`}
                style={{ '--stagger-delay': `${index * 0.15}s` }}
              >
                <div className="card-top-header">
                  <span className={`role-badge ${card.badgeClass}`}>{card.roleTag}</span>
                  <div className="portal-icon-box" style={{ background: card.iconBg, color: card.iconColor }}>
                    <IconComponent size={26} />
                  </div>
                </div>

                <h3 className="portal-card-title">{card.title}</h3>
                <p className="portal-card-tagline">{card.subtitle}</p>
                <p className="portal-card-body">{card.description}</p>

                <div className="card-divider" />

                <ul className="portal-features-list">
                  {card.features.map((feat, idx) => (
                    <li key={idx} className="feature-item">
                      <div className="feat-check" style={{ color: card.iconColor }}>
                        <Check size={14} strokeWidth={2.5} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-action-block">
                  <button 
                    className="portal-login-btn"
                    style={{ background: card.themeColor }}
                    onClick={() => navigate(card.loginPath)}
                  >
                    <span>{card.buttonText}</span>
                    <ArrowRight size={16} className="arrow-shift" />
                  </button>

                  {card.registerPath && (
                    <button 
                      className="portal-register-sublink"
                      onClick={() => navigate(card.registerPath)}
                    >
                      <UserPlus size={14} />
                      <span>New registration? Register here</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortalCards;
