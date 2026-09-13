import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../institute/InstituteRegister.css'; // Reusing similar layout styles

const IndustryRegister = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-layout">
      <header className="auth-header">
        <div className="auth-logo" onClick={() => navigate('/')}>
          <svg className="auth-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#22c55e" />
            <path d="M2 17L12 22L22 17" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="auth-logo-text">SkillConnect</span>
        </div>
        <nav className="auth-nav">
          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="register-main">
        <div className="register-container">
          <Link to="/employer/login" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Login
          </Link>
          
          <div className="register-header">
            <h1>Industry Registration</h1>
            <p>Partner with us to build a skilled and future-ready Maharashtra.</p>
          </div>

          <div className="register-content">
            <div className="steps-sidebar">
              <div className={`step-item ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-circle">1</div>
                <span>Company Information</span>
              </div>
              <div className={`step-item ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-circle">2</div>
                <span>Industry Requirements</span>
              </div>
              <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <span>Industry Feedback</span>
              </div>
            </div>

            <div className="form-area">
              <h2 className="step-title">{currentStep}. {currentStep === 1 ? 'Company Information' : currentStep === 2 ? 'Industry Requirement Information' : 'Industry Feedback'}</h2>
              <form onSubmit={handleSubmit} className="multi-step-form">
                
                {currentStep === 1 && (
                  <div className="form-grid">
                    <div className="input-group">
                      <label>Company Name *</label>
                      <input type="text" placeholder="Enter company name" required />
                    </div>
                    <div className="input-group">
                      <label>Company Registration Number *</label>
                      <input type="text" placeholder="Enter registration number" required />
                    </div>
                    <div className="input-group">
                      <label>Industry Sector *</label>
                      <select required>
                        <option value="">Select sector</option>
                        <option value="it">IT & Software</option>
                        <option value="mfg">Manufacturing</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label>District *</label>
                      <select required>
                        <option value="">Select district</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Industrial Area / Location *</label>
                      <input type="text" placeholder="Enter industrial area / location" required />
                    </div>
                    <div className="input-group">
                      <label>Official Email *</label>
                      <input type="email" placeholder="Enter official email" required />
                    </div>

                    <div className="input-group full-width">
                      <label>Company Address *</label>
                      <input type="text" placeholder="Enter complete address" required />
                    </div>

                    <div className="input-group">
                      <label>Contact Person *</label>
                      <input type="text" placeholder="Enter contact person name" required />
                    </div>
                    <div className="input-group">
                      <label>Contact Number *</label>
                      <input type="tel" placeholder="Enter contact number" required />
                    </div>
                    <div className="input-group">
                      <label>Company Website</label>
                      <input type="url" placeholder="Enter website (optional)" />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>Job Roles Currently Hiring *</label>
                      <input type="text" placeholder="e.g. Technician, Fitter..." required />
                    </div>
                    <div className="input-group full-width">
                      <label>Required Skills *</label>
                      <input type="text" placeholder="e.g. CNC, Welding, PLC..." required />
                    </div>
                    <div className="input-group">
                      <label>Required Qualification *</label>
                      <select required><option value="">Select qualification</option></select>
                    </div>
                    <div className="input-group">
                      <label>Number of Job Openings *</label>
                      <input type="number" placeholder="Enter number" required />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>Skills that are difficult to find *</label>
                      <input type="text" placeholder="e.g. Advanced Welding..." required />
                    </div>
                    <div className="input-group full-width">
                      <label>Recommended training improvements *</label>
                      <input type="text" placeholder="e.g. More hands-on training..." required />
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  {currentStep > 1 && (
                    <button type="button" onClick={handlePrev} className="outline-btn">Previous</button>
                  )}
                  {currentStep < 3 ? (
                    <button type="button" onClick={handleNext} className="primary-btn next-btn">
                      Next
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  ) : (
                    <button type="submit" className="primary-btn">Submit Registration</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryRegister;
