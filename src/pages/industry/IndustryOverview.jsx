import React from 'react';
import { Building2, Briefcase, Users, Target, AlertTriangle, UserPlus, Handshake, ArrowUp, ArrowRight, Clock, LineChart, MessageSquare } from 'lucide-react';
import './IndustryOverview.css';

const KpiCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="kpi-card">
    <div className={`kpi-icon ${colorClass}`}>
      <Icon size={20} />
    </div>
    <div className="kpi-content">
      <h3>{title}</h3>
      <div className="kpi-value-row">
        <div className="kpi-value">{value}</div>
      </div>
      <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
        <ArrowUp size={14} className={!isPositive ? 'rotate-down' : ''} />
        <span>{change}</span>
        <span className="vs-text">vs. last month</span>
      </div>
    </div>
  </div>
);

const IndustryOverview = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Industry Dashboard</h1>
          <p className="page-subtitle">Manage your workforce requirements and connect with skilled talent.</p>
        </div>
        <div className="verified-badge">
          <div className="company-icon"><Building2 size={24}/></div>
          <div className="company-brief">
            <span className="name">ABC Industries Pvt. Ltd.</span>
            <span className="loc">Manufacturing | Pune, Maharashtra</span>
          </div>
          <div className="verified-status">
            <svg viewBox="0 0 24 24" fill="#16a34a" width="16" height="16"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.823 3.823 7.918-7.918-1.061-1.061-6.857 6.857z"/></svg> 
            Verified
          </div>
        </div>
      </div>



      <div className="dashboard-grid main-grid">
        {/* Recent Activity */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><Clock size={16}/></div>
              <div>
                <h2>Recent Activity</h2>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon blue"><Briefcase size={14}/></div>
              <div className="activity-content">
                <strong>New Job Posted</strong>
                <p>CNC Operator - 25 openings</p>
              </div>
              <div className="activity-time">2 hours ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon purple"><Target size={14}/></div>
              <div className="activity-content">
                <strong>Skill Requirement Updated</strong>
                <p>Added PLC Programming (Advanced)</p>
              </div>
              <div className="activity-time">5 hours ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon orange"><MessageSquare size={14}/></div>
              <div className="activity-content">
                <strong>Industry Feedback Submitted</strong>
                <p>Training quality feedback for ITI</p>
              </div>
              <div className="activity-time">1 day ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon green"><Handshake size={14}/></div>
              <div className="activity-content">
                <strong>Institute Collaboration Request</strong>
                <p>Govt. Polytechnic, Pune</p>
              </div>
              <div className="activity-time">2 days ago <ArrowRight size={12}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryOverview;
