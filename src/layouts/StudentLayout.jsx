import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  Home, User, ClipboardList, Target, Briefcase, 
  BookOpen, Search, Bell, Menu, ArrowLeft
} from 'lucide-react';
import './StudentLayout.css';

const StudentLayout = () => {
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
          <NavLink to="/student/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <ClipboardList size={18} /> Skill Assessment
          </NavLink>
          <NavLink to="/student/dashboard/learning" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <BookOpen size={18} /> Learning Recommendations
          </NavLink>
          <NavLink to="/student/dashboard/jobs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Search size={18} /> Job Opportunities
          </NavLink>
          <NavLink to="/student/dashboard/industry-jobs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <Briefcase size={18} /> Industry Job Openings
          </NavLink>
          <NavLink to="/student/dashboard/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={() => window.innerWidth <= 1024 && setIsSidebarCollapsed(true)}>
            <User size={18} /> My Profile
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
          
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search courses, skills, job roles, companies..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </button>
            <button className="help-btn">
              <span className="help-icon">?</span> Help
            </button>
            <div className="user-profile">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Student" className="avatar-img" />
              <div className="user-info">
                <span className="user-name">Priya Sharma</span>
                <span className="user-role">Student</span>
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

export default StudentLayout;
