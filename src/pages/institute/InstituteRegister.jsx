import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './InstituteRegister.css';

const MAHARASHTRA_DISTRICTS = [
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", 
  "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", 
  "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", 
  "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", 
  "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", 
  "Washim", "Yavatmal"
];

const InstituteRegister = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/institute/login');
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
          <Link to="/institute/login" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Login
          </Link>
          
          <div className="register-header">
            <h1>Institute Registration</h1>
            <p>Register your ITI / Polytechnic and become a part of Maharashtra's skill ecosystem.</p>
            <div className="institute-type-toggle">
              <button className="active">ITI</button>
              <button>Polytechnic</button>
            </div>
          </div>

          <div className="register-content">
            <div className="steps-sidebar">
              <div className={`step-item ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="step-circle">1</div>
                <span>Institute Information</span>
              </div>
              <div className={`step-item ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                <div className="step-circle">2</div>
                <span>Training Information</span>
              </div>
              <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <span>Review & Submit</span>
              </div>
            </div>

            <div className="form-area">
              <form onSubmit={handleSubmit} className="multi-step-form">
                
                {currentStep === 1 && (
                  <>
                    <h2 className="step-title">1. Institute Information</h2>
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Institute Name *</label>
                        <input type="text" placeholder="Enter institute name" required />
                      </div>
                      <div className="input-group">
                        <label>Institute Type *</label>
                        <select required>
                          <option value="">Select type</option>
                          <option value="private">Private</option>
                          <option value="govt">Government</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Institute Registration Number *</label>
                        <input type="text" placeholder="Enter registration number" required />
                      </div>

                      <div className="input-group">
                        <label>District *</label>
                        <select required>
                          <option value="">Select District</option>
                          {MAHARASHTRA_DISTRICTS.map(district => (
                            <option key={district} value={district}>{district}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="input-group full-width">
                        <label>Address *</label>
                        <input type="text" placeholder="Enter complete address" required />
                      </div>

                      <div className="input-group">
                        <label>Contact Number *</label>
                        <input type="tel" placeholder="Enter contact number" required />
                      </div>
                      <div className="input-group">
                        <label>Official Email *</label>
                        <input type="email" placeholder="Enter official email" required />
                      </div>
                      <div className="input-group full-width">
                        <label>Website (Optional)</label>
                        <input type="url" placeholder="Enter website URL" />
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <h2 className="step-title">2. Training Information</h2>
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Programs Offered *</label>
                        <select required>
                          <option value="">Select programs</option>
                          <option value="engineering">Engineering Trades</option>
                          <option value="non-engineering">Non-Engineering Trades</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Total Student Capacity *</label>
                        <input type="number" placeholder="Enter total capacity" required />
                      </div>
                      <div className="input-group full-width">
                        <label>Trades / Courses Available *</label>
                        <input type="text" placeholder="e.g. Fitter, Electrician, Welder (comma separated)" required />
                      </div>
                      <div className="input-group full-width">
                        <label>Brief Description *</label>
                        <textarea placeholder="Tell us about your institute's facilities and achievements" required rows="3"></textarea>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <h2 className="step-title">3. Review & Submit</h2>
                    <div className="review-section" style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '24px' }}>
                      <p style={{ marginBottom: '16px', color: '#334155' }}>Please review your information before submitting. Ensure all details are accurate to avoid delays in verification.</p>
                      <div className="terms-checkbox" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input type="checkbox" id="terms" required style={{ marginTop: '4px' }} />
                        <label htmlFor="terms" style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
                          I agree to the Terms & Conditions and certify that the information provided is correct.
                        </label>
                      </div>
                    </div>
                  </>
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
                    <button type="submit" className="primary-btn">Submit</button>
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

export default InstituteRegister;
