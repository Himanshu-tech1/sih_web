import React from 'react';
import { 
  Radar, 
  Cpu, 
  Globe2, 
  BadgeCheck, 
  Users2, 
  BarChart3, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FeaturesShowcase.css';

const features = [
  {
    icon: Cpu,
    title: 'AI Curriculum Gap Diagnostic',
    description: 'Autonomous parsing of institutional syllabus against real-time job openings to pinpoint missing modules.',
    badge: 'Core Engine'
  },
  {
    icon: Globe2,
    title: 'Multi-Source Job Aggregator',
    description: 'Continuous scraping and AI classification of market trends across LinkedIn, Naukri, and state portals.',
    badge: 'Live Data'
  },
  {
    icon: BadgeCheck,
    title: 'State-Verified Skill Credentials',
    description: 'Students earn verifiable digital credentials based on actual assessment performance and trade exams.',
    badge: 'Accreditation'
  },
  {
    icon: Users2,
    title: 'Direct Industry-Institute MoUs',
    description: 'Seamless collaboration tools allowing corporate partners to sponsor labs, apprenticeships, and guest lectures.',
    badge: 'Partnership'
  },
  {
    icon: Radar,
    title: 'Precision Candidate Matching',
    description: 'Employers filter applicants by granular sub-skills, practical tooling proficiencies, and district availability.',
    badge: 'Recruitment'
  },
  {
    icon: BarChart3,
    title: 'District Skill Supply Heatmap',
    description: 'State-wide macro analytics visualizing workforce surplus and shortages across all 36 Maharashtra districts.',
    badge: 'Governance'
  }
];

const FeaturesShowcase = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="features-section" ref={sectionRef}>
      <div className="features-container">
        <div className={`features-header ${isVisible ? 'revealed' : ''}`}>
          <div className="features-pill">
            <Sparkles size={14} />
            Ecosystem Capabilities
          </div>
          <h2 className="features-title">Engineered for High-Velocity Impact</h2>
          <p className="features-subtitle">
            Next-generation digital infrastructure purposefully constructed to eliminate skill mismatches and accelerate youth employment.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={idx}
                className={`feature-card ${isVisible ? 'revealed' : ''}`}
                style={{ '--stagger': `${idx * 0.1}s` }}
              >
                <div className="feat-top-bar">
                  <div className="feat-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="feat-badge-tag">{feat.badge}</span>
                </div>

                <h3 className="feat-card-title">{feat.title}</h3>
                <p className="feat-card-text">{feat.description}</p>

                <div className="feat-hover-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
