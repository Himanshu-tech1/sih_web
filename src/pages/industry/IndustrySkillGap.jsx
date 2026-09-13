import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle, Users, Download, MoreHorizontal } from 'lucide-react';
import './IndustrySkillGap.css';

const GapKpiCard = ({ title, value, change, icon: Icon, colorClass, isNegative = false }) => (
  <div className={`gap-kpi-card ${colorClass}`}>
    <div className="kpi-icon-header">
      <div className="kpi-icon"><Icon size={24} /></div>
    </div>
    <div className="kpi-content">
      <div className="kpi-value">{value}</div>
      <h3>{title}</h3>
      <div className={`kpi-change ${isNegative ? 'negative' : 'positive'}`}>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: isNegative ? 'rotate(180deg)' : 'none'}}><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        <span>{change}</span>
        <span className="vs-text">from last quarter</span>
      </div>
    </div>
  </div>
);

const IndustrySkillGap = () => {
  const gapData = [
    { id: 1, skill: 'PLC Programming', role: 'PLC Technician', req: 'Advanced', cand: 'Basic', gap: 'High', sev: 'Critical', date: '12 Sep 2025' },
    { id: 2, skill: 'Robotics', role: 'Automation Technician', req: 'Intermediate', cand: 'Beginner', gap: 'High', sev: 'Critical', date: '10 Sep 2025' },
    { id: 3, skill: 'CAD/CAM', role: 'CNC Operator', req: 'Intermediate', cand: 'Intermediate', gap: 'Low', sev: 'Low', date: '08 Sep 2025' },
    { id: 4, skill: 'Industrial IoT', role: 'Maintenance Technician', req: 'Advanced', cand: 'Basic', gap: 'High', sev: 'High', date: '05 Sep 2025' },
    { id: 5, skill: 'AI/ML', role: 'Data Analyst', req: 'Intermediate', cand: 'Beginner', gap: 'High', sev: 'High', date: '02 Sep 2025' },
    { id: 6, skill: 'EV Diagnostics', role: 'EV Service Technician', req: 'Intermediate', cand: 'Basic', gap: 'High', sev: 'High', date: '30 Aug 2025' },
  ];


  return (
    <div className="dashboard-page gap-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Skill Gap Feedback</h1>
          <p className="page-subtitle">Help us understand the gaps in candidate skills. Your feedback will enable better training and curriculum planning in Maharashtra.</p>
        </div>
        <button className="btn primary-btn">+ Report Skill Gap</button>
      </div>


      <div className="table-card">
        <div className="table-header-bar">
          <div className="table-title">
            <h3><Users size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Reported Skill Gaps</h3>
            <p style={{fontSize: '0.75rem', color: '#64748b'}}>List of skill gaps reported by industries.</p>
          </div>
          <div className="table-filters">
            <div className="search-input">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" placeholder="Search skills or job roles..." />
            </div>
            <select className="filter-select"><option>All Severity</option></select>
            <select className="filter-select"><option>All Sectors</option></select>
            <button className="btn outline-btn"><Download size={16}/> Export</button>
          </div>
        </div>
        
        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{width: '40px'}}>#</th>
                <th>Skill</th>
                <th>Job Role</th>
                <th>Required Level</th>
                <th>Candidate Level</th>
                <th>Gap</th>
                <th>Severity</th>
                <th>Reported Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gapData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="font-medium text-dark">{item.skill}</td>
                  <td>{item.role}</td>
                  <td>{item.req}</td>
                  <td>{item.cand}</td>
                  <td>{item.gap}</td>
                  <td>
                    <span className={`status-pill ${item.sev === 'Critical' ? 'red-fill' : item.sev === 'High' ? 'orange-fill' : 'green-outline'}`}>
                      {item.sev}
                    </span>
                  </td>
                  <td>{item.date}</td>
                  <td><button className="action-dots"><MoreHorizontal size={16}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="report-form-card">
        <div className="form-card-header">
          <div className="panel-icon-circle blue"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></div>
          <div>
            <h3>Report a New Skill Gap</h3>
            <p>Share details about the skill gap you have observed.</p>
          </div>
        </div>
        <div className="form-card-body">
          <div className="form-grid-4col">
            <div className="form-group">
              <label>Job Role *</label>
              <select><option>Select job role</option></select>
            </div>
            <div className="form-group">
              <label>Skill *</label>
              <select><option>Select or type skill</option></select>
            </div>
            <div className="form-group">
              <label>Expected Skill Level *</label>
              <select><option>Select level</option></select>
            </div>
            <div className="form-group">
              <label>Typical Candidate Skill Level *</label>
              <select><option>Select level</option></select>
            </div>
          </div>
          
          <div className="form-grid-4col mt-4">
            <div className="form-group">
              <label>Problem Observed *</label>
              <input type="text" placeholder="E.g. Lack of hands-on experience, poor understanding of concepts..." />
            </div>
            <div className="form-group">
              <label>Severity *</label>
              <select><option>Select severity</option></select>
            </div>
            <div className="form-group">
              <label>Number of Candidates Affected *</label>
              <input type="text" placeholder="e.g. 10" />
            </div>
            <div className="form-group">
              <label>Recommended Training *</label>
              <select><option>Select or type training</option></select>
            </div>
          </div>
          
          <div className="form-group full-width mt-4">
            <label>Additional Comments</label>
            <input type="text" placeholder="Any other details that can help us understand the gap better..." />
          </div>

          <div className="form-actions-right mt-6">
            <button className="btn outline-btn">Cancel</button>
            <button className="btn primary-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySkillGap;
