import React, { useState } from 'react';
import { 
  UserCheck, 
  BrainCircuit, 
  BriefcaseBusiness, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Sparkles
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

const steps = [
  {
    stepNumber: '01',
    title: 'Registration & Skill Profiling',
    category: 'Onboarding & Mapping',
    icon: UserCheck,
    description: 'Students complete assessments, while Institutes catalog technical courses and syllabus frameworks into the state database.',
    details: [
      'Standardized skill tests across ITI & Polytechnic trades',
      'Dynamic resume and verified badge generator',
      'Instant institutional cohort benchmarking'
    ]
  },
  {
    stepNumber: '02',
    title: 'AI Gap Detection & Market Alignment',
    category: 'Machine Intelligence',
    icon: BrainCircuit,
    description: 'Our AI engine compares live industry vacancies and employer requirement inputs against institute syllabi to flag missing competencies.',
    details: [
      'Automated job market trend ingestion',
      'Direct industry-to-curriculum feedback mechanism',
      'Targeted micro-learning recommendations for students'
    ]
  },
  {
    stepNumber: '03',
    title: 'Precision Matching & Hiring',
    category: 'Placement & Career',
    icon: BriefcaseBusiness,
    description: 'Employers discover candidates ranked by actual verified proficiencies, scheduling direct interviews and apprenticeships effortlessly.',
    details: [
      'Pre-filtered student shortlists matching employer criteria',
      'One-click campus drive notifications to affiliated institutes',
      'Transparent state placement tracking and reporting'
    ]
  }
];

const HowItWorks = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="how-it-works-section" id="how-it-works" ref={sectionRef}>
      <div className="how-it-works-container">
        <div className={`how-it-works-header ${isVisible ? 'revealed' : ''}`}>
          <div className="hiw-badge">
            <Sparkles size={14} />
            Step-by-Step Architecture
          </div>
          <h2 className="hiw-title">How SkillBridge Works</h2>
          <p className="hiw-subtitle">
            A closed-loop digital ecosystem connecting candidates, educational institutions, and corporate employers through real-time skill intelligence.
          </p>
        </div>

        <div className="hiw-timeline-wrapper">
          <div className="hiw-steps-grid">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isCurrent = activeStep === index;
              return (
                <div 
                  key={index}
                  className={`hiw-step-card ${isVisible ? 'revealed' : ''} ${isCurrent ? 'active' : ''}`}
                  style={{ '--delay': `${index * 0.15}s` }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="hiw-step-top">
                    <span className="hiw-step-num">{step.stepNumber}</span>
                    <div className="hiw-icon-circle">
                      <IconComp size={22} />
                    </div>
                  </div>

                  <span className="hiw-step-cat">{step.category}</span>
                  <h3 className="hiw-step-title">{step.title}</h3>
                  <p className="hiw-step-desc">{step.description}</p>

                  <div className="hiw-details-list">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="hiw-detail-row">
                        <CheckCircle2 size={15} className="hiw-check-icon" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="hiw-step-bar" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
