import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentAuth.css';
import '../../layouts/AuthLayout.css';

const StudentAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/student/dashboard');
  };

  return (
    <div className="student-auth-layout">
      {/* Top Navigation */}
      <header className="auth-header">
        <div className="auth-logo" onClick={() => navigate('/')}>
          <img src="/images/logo.png" alt="SkillBridge Logo" className="logo-image" style={{ height: '40px' }} />
        </div>
        <nav className="auth-nav">
          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="student-auth-main">
        {/* Left Panel */}
        <div className="student-left-panel">

        <h1 className="student-hero-title">Bridge Your <span>Skills</span><br />to Your <span>Career</span></h1>
        <p className="student-hero-desc">Know what industries need. Identify your skill gap.<br/>Build the right career path.</p>

        <div className="student-journey">
          <div className="journey-step">
            <div className="journey-icon student-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h4>Student</h4>
            <p>Your Journey Starts Here</p>
          </div>
          <svg className="journey-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div className="journey-step">
            <div className="journey-icon skills-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <h4>Skills</h4>
            <p>Know What You Have</p>
          </div>
          <svg className="journey-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div className="journey-step">
            <div className="journey-icon industry-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg></div>
            <h4>Industry</h4>
            <p>See What They Need</p>
          </div>
          <svg className="journey-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div className="journey-step">
            <div className="journey-icon job-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <h4>Job</h4>
            <p>Build Your Future</p>
          </div>
        </div>

        <div className="student-illustration-bg">
          <div className="student-features">
            <div className="feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg> Real Industry Data</div>
            <div className="feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Personalized Guidance</div>
            <div className="feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg> Better Career Decisions</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="student-right-panel">
        <div className="student-form-container">
          {isLogin ? (
            <>
              <div className="form-header-student">
                <h2>Welcome Back!</h2>
                <p>Login to your SkillConnect account</p>
              </div>

              <div className="auth-tabs">
                <button className="tab active" onClick={() => setIsLogin(true)}>Login</button>
                <button className="tab" onClick={() => setIsLogin(false)}>Register</button>
              </div>

              <form onSubmit={handleSubmit} className="student-form">
                <div className="input-group">
                  <label>Email / Mobile Number</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                    <input type="text" placeholder="Enter your email or mobile number" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
                    <input type="password" placeholder="Enter your password" required />
                    <span className="input-icon-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></span>
                  </div>
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" /> <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="primary-btn submit-btn">Login →</button>

                <div className="divider"><span>OR</span></div>

                <button type="button" className="google-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Continue with Google
                </button>

                <p className="switch-auth">Don't have an account? <span onClick={() => setIsLogin(false)}>Create Account →</span></p>
              </form>
            </>
          ) : (
            <>
              <div className="form-header-student">
                <h2>Create Your Account</h2>
                <p>Join SkillConnect and start building your career.</p>
              </div>

              <form onSubmit={handleSubmit} className="student-form register">
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Education Level</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>
                    <select required><option value="">Select education level</option></select>
                  </div>
                </div>

                <div className="input-group">
                  <label>ITI / Polytechnic</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
                    <select required><option value="">Select ITI / Polytechnic</option></select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Trade / Diploma Branch</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>
                    <input type="text" placeholder="Enter your trade / diploma branch" required />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="input-group">
                    <label>Year of Study</label>
                    <select required><option value="">Select year</option></select>
                  </div>
                  <div className="input-group">
                    <label>Location</label>
                    <select required><option value="">Select location</option></select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                    <input type="email" placeholder="Enter your email address" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <div className="input-icon-wrapper">
                    <span className="input-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
                    <input type="password" placeholder="Create a strong password" required />
                    <span className="input-icon-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></span>
                  </div>
                </div>

                <button type="submit" className="primary-btn submit-btn" style={{marginTop: '1rem'}}>Register →</button>
                <p className="switch-auth">Already have an account? <span onClick={() => setIsLogin(true)}>Login →</span></p>
              </form>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAuth;
