import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Building2, GraduationCap, ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

  return (
    <header className="main-site-header">
      <div className="header-inner-container">
        {/* Logo */}
        <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src="/images/logo.png" alt="SkillBridge Logo" className="logo-image" style={{ height: '42px' }} />
          <div className="gov-title-block">
            <span className="portal-name">SkillBridge</span>
            <span className="gov-dept-name">Government of Maharashtra</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/student/login" className="nav-link">
            <GraduationCap size={16} /> Student Portal
          </Link>
          <Link to="/institute/login" className="nav-link">
            <BookOpen size={16} /> Institute Portal
          </Link>
          <Link to="/employer/login" className="nav-link">
            <Building2 size={16} /> Employer Portal
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="header-right-actions">
          {/* Register Dropdown */}
          <div className="register-dropdown-wrapper" onMouseLeave={() => setRegisterDropdownOpen(false)}>
            <button 
              className="register-btn"
              onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
              onMouseEnter={() => setRegisterDropdownOpen(true)}
            >
              <span>Register</span>
              <ChevronDown size={14} />
            </button>

            {registerDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/institute/register" className="dropdown-item" onClick={() => setRegisterDropdownOpen(false)}>
                  <BookOpen size={16} color="#2563eb" />
                  <div>
                    <strong>Register as Institute</strong>
                    <p>For ITIs & Polytechnics</p>
                  </div>
                </Link>
                <Link to="/employer/register" className="dropdown-item" onClick={() => setRegisterDropdownOpen(false)}>
                  <Building2 size={16} color="#16a34a" />
                  <div>
                    <strong>Register as Employer</strong>
                    <p>Post jobs & hire talent</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/student/login" className="login-cta-btn">
            Login <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <Link to="/" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/student/login" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <GraduationCap size={18} /> Student Portal
          </Link>
          <Link to="/institute/login" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <BookOpen size={18} /> Institute Portal
          </Link>
          <Link to="/employer/login" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <Building2 size={18} /> Employer Portal
          </Link>
          <div className="mobile-divider"></div>
          <Link to="/institute/register" className="mobile-nav-item highlight" onClick={() => setMobileMenuOpen(false)}>
            + Register Institute (ITI/Polytechnic)
          </Link>
          <Link to="/employer/register" className="mobile-nav-item highlight green" onClick={() => setMobileMenuOpen(false)}>
            + Register Company / Employer
          </Link>
        </div>
      )}
    </header>
  );
};

const BookOpen = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

export default Header;
