import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  Home, Building2, Briefcase, Target, LineChart, 
  Lightbulb, MessageSquare, Users, Award, 
  FileText, Settings, Bell, HelpCircle, Search, Menu, ArrowLeft
} from 'lucide-react';
import './IndustryLayout.css';

const IndustryLayout = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/employer/dashboard', icon: Home, end: true },
    { name: 'Company Profile', path: '/employer/dashboard/profile', icon: Building2 },
    { name: 'Job Openings', path: '/employer/dashboard/jobs', icon: Briefcase },
    { name: 'Required Skills', path: '/employer/dashboard/skills', icon: Target },
    { name: 'Skill Gap Feedback', path: '/employer/dashboard/gap-feedback', icon: MessageSquare },
    { name: 'Institute Collaboration', path: '/employer/dashboard/collaboration', icon: Users },
    { name: 'Apprenticeship & Internship', path: '/employer/dashboard/apprenticeship', icon: Award },
    { name: 'Industry Feedback', path: '/employer/dashboard/feedback', icon: MessageSquare },
    { name: 'Reports', path: '/employer/dashboard/reports', icon: FileText },
    { name: 'Settings', path: '/employer/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header" onClick={() => navigate('/')}>
          <div className="sidebar-logo">
            <img src="/images/logo.png" alt="SkillBridge Logo" className="logo-image" style={{ height: '40px' }} />
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/employer/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Home size={18} /> Dashboard
          </NavLink>
          <NavLink to="/employer/dashboard/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Building2 size={18} /> Company Profile
          </NavLink>
          <NavLink to="/employer/dashboard/jobs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Briefcase size={18} /> Job Openings
          </NavLink>
          <NavLink to="/employer/dashboard/skills" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Target size={18} /> Required Skills
          </NavLink>
          <NavLink to="/employer/dashboard/skill-gap" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <MessageSquare size={18} /> Skill Gap Feedback
          </NavLink>
          <NavLink to="/employer/dashboard/collaboration" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Users size={18} /> Institute Collaboration
          </NavLink>
          
          <div className="nav-divider"></div>
          
          <NavLink to="/employer/dashboard/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Settings size={18} /> Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="gov-seal">
            <div className="building-silhouette-small"></div>
            <p>महाराष्ट्र शासन</p>
            <p className="gov-dept">कौशल्य, रोजगार, उद्योजकता</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <ArrowLeft 
              size={24} 
              className="back-arrow" 
              onClick={() => navigate(-1)} 
              style={{ cursor: 'pointer', color: '#64748b', marginRight: '16px' }}
            />
            <Menu 
              size={24} 
              className="menu-toggle" 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
            />
            <div className="gov-logo" style={{display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px'}}>
              <img src="/images/mah-gov-logo.svg" alt="Gov Logo" style={{height: '32px'}} />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '14px', fontWeight: 'bold', color: '#1e293b'}}>Maharashtra Government</span>
                <span style={{fontSize: '11px', color: '#64748b'}}>Skill Development & Employment Department</span>
              </div>
            </div>
          </div>
          
          <div className="search-bar" style={{flex: 1, maxWidth: '500px', marginLeft: '24px'}}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search job roles, skills, institutes, or industry needs..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <button className="icon-btn text-btn">
              <HelpCircle size={20} />
              <span>Help</span>
            </button>
            <div className="user-profile">
              <div className="avatar">AC</div>
              <div className="user-info">
                <span className="user-name">ABC Industries Pvt. Ltd.</span>
                <span className="user-role">Industry Partner</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default IndustryLayout;
