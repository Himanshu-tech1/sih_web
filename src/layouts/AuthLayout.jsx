import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = ({ children, leftPanelContent }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-layout">
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

      {/* Main Content Area */}
      <div className="auth-main">
        {/* Left Panel */}
        <div className="auth-left-panel">
          {leftPanelContent}
        </div>

        {/* Right Panel (Form) */}
        <div className="auth-right-panel">
          <div className="auth-form-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
