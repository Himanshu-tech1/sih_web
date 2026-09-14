import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Building2, GraduationCap, School } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './SuccessStories.css';

const stories = [
  {
    type: 'Student Success',
    typeIcon: GraduationCap,
    quote: "SkillBridge showed me the exact skills missing in my ITI Electrician syllabus for Electric Vehicle servicing. I took the recommended micro-modules and cleared my interview with Tata Motors within 3 weeks!",
    author: "Rohan Patil",
    role: "EV Technician @ Tata Motors",
    location: "Alumnus, Govt. ITI Pune",
    rating: 5,
    tag: "Placed via SkillBridge"
  },
  {
    type: 'Institute Impact',
    typeIcon: School,
    quote: "For the first time, our faculty can see direct feedback from top companies like L&T and Bajaj Auto on our mechanical syllabus. We updated our CNC machining lab and achieved a 92% batch placement record.",
    author: "Dr. Arvind Deshmukh",
    role: "Principal",
    location: "Govt. Polytechnic Nagpur",
    rating: 5,
    tag: "450+ Students Placed"
  },
  {
    type: 'Enterprise Partner',
    typeIcon: Building2,
    quote: "Screening thousands of ITI applicants across Maharashtra used to take our HR team weeks. With SkillBridge's pre-assessed candidate scorecards, we hired 120 verified technicians in one single recruitment cycle.",
    author: "Sneha Kulkarni",
    role: "Head of Campus Talent Acquisition",
    location: "Mahindra & Mahindra, Chakan",
    rating: 5,
    tag: "120+ Hires This Quarter"
  }
];

const SuccessStories = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const current = stories[currentIndex];
  const IconComp = current.typeIcon;

  return (
    <section className="stories-section" ref={sectionRef}>
      <div className="stories-container">
        <div className={`stories-header ${isVisible ? 'revealed' : ''}`}>
          <div className="stories-badge">
            <Quote size={14} />
            Verified Outcomes
          </div>
          <h2 className="stories-title">Real Voices from the Field</h2>
          <p className="stories-subtitle">
            How students, faculty leaders, and corporate recruiters across Maharashtra are transforming careers with SkillBridge.
          </p>
        </div>

        <div className={`stories-card-wrapper ${isVisible ? 'revealed' : ''}`}>
          <div className="story-card">
            <div className="story-card-top">
              <div className="story-type-tag">
                <IconComp size={16} />
                <span>{current.type}</span>
              </div>
              <div className="story-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
            </div>

            <p className="story-quote">"{current.quote}"</p>

            <div className="story-footer">
              <div className="story-author-details">
                <h4 className="story-author-name">{current.author}</h4>
                <p className="story-author-role">{current.role}</p>
                <span className="story-author-loc">{current.location}</span>
              </div>

              <div className="story-outcome-badge">
                {current.tag}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="story-controls">
              <button className="ctrl-btn" onClick={prevStory} aria-label="Previous story">
                <ChevronLeft size={20} />
              </button>
              <div className="ctrl-dots">
                {stories.map((_, idx) => (
                  <button
                    key={idx}
                    className={`ctrl-dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="ctrl-btn" onClick={nextStory} aria-label="Next story">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
