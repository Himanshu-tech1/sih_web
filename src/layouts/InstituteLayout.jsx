import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  Home, Building2, BookOpen, Settings, BarChart2, 
  Target, Users, Lightbulb, Bell, Search, Menu, ArrowLeft
} from 'lucide-react';
import './InstituteLayout.css';

const InstituteLayout = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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
          <div className="nav-group-title">Institute Dashboard</div>
          <NavLink to="/institute/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Home size={18} /> Overview
          </NavLink>
          <NavLink to="/institute/dashboard/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Building2 size={18} /> Institute Profile
          </NavLink>
          <NavLink to="/institute/dashboard/courses" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <BookOpen size={18} /> Courses & Curriculum
          </NavLink>
          <NavLink to="/institute/dashboard/skills-taught" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Settings size={18} /> Skills Taught
          </NavLink>
          <NavLink to="/institute/dashboard/industry-requirements" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <BarChart2 size={18} /> Industry Requirements
          </NavLink>
          <NavLink to="/institute/dashboard/skill-gap" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Target size={18} /> Skill Gap & Alignment
          </NavLink>
          <NavLink to="/institute/dashboard/collaboration" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Users size={18} /> Industry Collaboration
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="gov-seal">
             <img src="/images/mah-gov-logo.svg" alt="Gov Logo" style={{height: '24px', opacity: 0.5, marginBottom: '8px'}} />
            <p style={{fontSize: '11px', color: '#64748b', fontWeight: '500', marginBottom: '2px'}}>Government of Maharashtra</p>
            <p className="gov-dept" style={{fontSize: '10px', color: '#94a3b8'}}>Skill Development & Employment Department</p>
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
          </div>
          
          <div className="search-bar" style={{flex: 1, maxWidth: '500px', marginLeft: '24px'}}>
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search courses, skills, industries..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <div className="avatar" style={{backgroundColor: '#2563eb', color: 'white'}}>SI</div>
              <div className="user-info">
                <span className="user-name">Shree Ganesh ITI</span>
                <span className="user-role">Training Institute</span>
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

export default InstituteLayout;
