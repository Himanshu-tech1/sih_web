import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import '../institute/InstituteLogin.css'; // Reusing similar styles

const LeftPanel = () => (
  <div className="institute-left-panel">
    <p className="gov-text">MAHARASHTRA GOVERNMENT</p>
    <h1 className="auth-title">Skill Development Platform</h1>
    <p className="auth-subtitle">Bridging industry demand with skilled talent for a stronger Maharashtra.</p>
    
    <div className="auth-desc" style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#2b5ee8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" style={{marginBottom: '0.5rem'}}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <p style={{fontSize: '0.875rem'}}>Real-time industry insights</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#2b5ee8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" style={{marginBottom: '0.5rem'}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        <p style={{fontSize: '0.875rem'}}>Skill gap analysis</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#2b5ee8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" style={{marginBottom: '0.5rem'}}><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
        <p style={{fontSize: '0.875rem'}}>Better workforce for tomorrow</p>
      </div>
    </div>
    
    <div className="auth-illustration">
      <div className="building-silhouette"></div>
    </div>
  </div>
);

const IndustryLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/employer/dashboard');
  };

  return (
    <AuthLayout leftPanelContent={<LeftPanel />}>
      <div className="login-form-wrapper">
        <div className="form-header">
          <div className="form-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
          </div>
          <h2>Industry Dashboard</h2>
          <p>Share industry requirements and find skilled talent</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input type="text" placeholder="Company ID / Registration Number" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon-wrapper">
              <span className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <input type="email" placeholder="Official Email" required />
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
          <p>New Industry Partner?</p>
          <Link to="/employer/register" className="outline-btn">Register Your Company</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default IndustryLogin;
