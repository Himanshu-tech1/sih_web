import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is SkillConnect?",
      answer: "SkillConnect is a unified platform created by the Maharashtra Government to bridge the gap between students, training institutes, and industries. It helps align education with real-world industry demands."
    },
    {
      question: "Is the platform free for students?",
      answer: "Yes, SkillConnect is completely free for students. You can create a profile, access skill assessments, view learning recommendations, and apply for job opportunities at no cost."
    },
    {
      question: "How can industries benefit from this platform?",
      answer: "Industries can post job requirements, discover skilled candidates, view emerging skill trends, and collaborate directly with training institutes to shape future curriculums."
    },
    {
      question: "Who can register as a Training Institute?",
      answer: "Any registered ITI, polytechnic, engineering college, or vocational training center operating within Maharashtra can register to showcase their courses and students."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-icon-wrapper">
            <HelpCircle size={28} className="icon-blue" />
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about the SkillConnect platform.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
