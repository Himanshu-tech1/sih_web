import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default for better engagement
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const faqs = [
    {
      question: "What is the SkillBridge Maharashtra Initiative?",
      answer: "SkillBridge is a unified state-wide digital platform developed to bridge the divide between classroom curriculum and industry requirements across Maharashtra. It enables AI-driven skill gap detection, modernizes ITI and Polytechnic offerings, and establishes direct hiring pipelines."
    },
    {
      question: "Is the platform free of cost for students and candidates?",
      answer: "Yes, SkillBridge is completely free for all students. You can register, complete standardized skill assessments, view AI curriculum gap radar scores, access recommended learning modules, and apply directly to verified industry job openings and government apprenticeships without any fees."
    },
    {
      question: "How do employers post jobs and collaborate with institutions?",
      answer: "Employers can register to post verified openings, query pre-assessed candidates based on exact trade proficiencies, use our AI tool to scrape active role requirements, and send curriculum improvement feedback directly to ITIs and Polytechnics."
    },
    {
      question: "Which institutions can register on SkillBridge?",
      answer: "All recognized ITIs (Government and Private), Polytechnics, vocational training colleges, and technical skill academies operating in Maharashtra can register to manage batches, track student competencies, and organize campus drives."
    },
    {
      question: "How does the AI Skill Gap Analysis work?",
      answer: "The AI engine compares the current syllabus of technical trades against live industry demand postings (including scraped trends from LinkedIn and Naukri). It highlights specific missing modules (like EV Diagnostics, IoT sensors, or CNC coding) and helps teachers and students bridge those gaps before placement season."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="faq-container">
        <div className={`faq-header ${isVisible ? 'revealed' : ''}`}>
          <div className="faq-pill">
            <Sparkles size={14} />
            Frequently Asked Questions
          </div>
          <h2>Everything You Need to Know</h2>
          <p>Answers to common questions from students, institute directors, and corporate hiring teams.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''} ${isVisible ? 'revealed' : ''}`}
              style={{ '--delay': `${index * 0.08}s` }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-chevron-circle">
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              <div className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
