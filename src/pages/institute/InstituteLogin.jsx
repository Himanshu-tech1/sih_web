import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import './InstituteLogin.css';

const LeftPanel = () => (
  <div className="institute-left-panel">
    <p className="gov-text">MAHARASHTRA GOVERNMENT</p>
    <h1 className="auth-title">SkillConnect</h1>
    <p className="auth-subtitle">Connecting Students | Training Institutes | Industries</p>
    <p className="auth-desc">Building a skilled Maharashtra for a stronger tomorrow.</p>
    
    <div className="auth-illustration">
      <div className="building-silhouette"></div>
    </div>
  </div>
);

const InstituteLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/institute/dashboard');
  };

  return (
    <AuthLayout leftPanelContent={<LeftPanel />}>
      <div className="login-form-wrapper">
        <div className="form-header">
          <div className="form-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </div>
          <h2>Institute Dashboard</h2>
          <p>Manage institute training, courses and skill information</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input type="text" placeholder="Institute ID / Registration Number" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <input type="email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input type="password" placeholder="Password" required />
              <span className="input-icon-right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="submit-btn primary-btn">Login</button>
        </form>

        <div className="form-footer">
          <p>New Institute?</p>
          <Link to="/institute/register" className="outline-btn">Register Your Institute</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default InstituteLogin;
