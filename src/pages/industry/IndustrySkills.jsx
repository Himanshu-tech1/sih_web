import React, { useState } from 'react';
import { Target, AlertTriangle, Settings, Users, Plus, Search, MoreHorizontal, Edit3, Trash2, X } from 'lucide-react';
import './IndustrySkills.css';

const SkillKpiCard = ({ title, value, change, icon: Icon, colorClass }) => (
  <div className={`skill-kpi-card ${colorClass}`}>
    <div className="kpi-icon-header">
      <div className="kpi-icon"><Icon size={20} /></div>
      <div className="kpi-content-stacked">
        <h3>{title}</h3>
        <div className="kpi-value">{value}</div>
      </div>
    </div>
    <div className={`kpi-change ${change.startsWith('+') ? 'positive' : 'negative'}`}>
      <span className="change-val"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: change.startsWith('-') ? 'rotate(180deg)' : 'none'}}><path d="M12 19V5M5 12l7-7 7 7"/></svg> {change}</span>
      <span className="vs-text">vs. last month</span>
    </div>
  </div>
);

const IndustrySkills = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const skillsData = [
    { id: 1, skill: 'PLC Programming', roles: '5 roles', imp: 'Critical', reqLevel: 'Advanced', avail: 'Low', shortage: 'Critical' },
    { id: 2, skill: 'CNC Programming', roles: '4 roles', imp: 'High', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'High' },
    { id: 3, skill: 'Industrial Robotics', roles: '3 roles', imp: 'Critical', reqLevel: 'Intermediate', avail: 'Low', shortage: 'Critical' },
    { id: 4, skill: 'CAD/CAM', roles: '6 roles', imp: 'High', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'Moderate' },
    { id: 5, skill: 'Industrial Safety', roles: '8 roles', imp: 'High', reqLevel: 'Basic', avail: 'High', shortage: 'Good' },
    { id: 6, skill: 'Quality Inspection', roles: '4 roles', imp: 'Medium', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'Moderate' },
    { id: 7, skill: 'Electrical Maintenance', roles: '5 roles', imp: 'High', reqLevel: 'Advanced', avail: 'Low', shortage: 'High' },
    { id: 8, skill: 'Data Analysis', roles: '2 roles', imp: 'Medium', reqLevel: 'Intermediate', avail: 'High', shortage: 'Low' },
  ];

  return (
    <div className="dashboard-page skills-page relative">
      <div className="page-header">
        <div>
          <h1 className="page-title">Required Skills</h1>
          <p className="page-subtitle">Specify the technical and practical skills you require from your workforce.</p>
        </div>
        <div className="promo-pill">
          <div className="pill-icon"><Settings size={16} /></div>
          <div>
            <strong>Better Skills. Stronger Workforce.</strong>
            <p>Connect with the right talent through skill intelligence.</p>
          </div>
        </div>
      </div>

      <div className="table-card">
        <div className="table-header-bar">
          <div className="table-title">
            <h3>Required Skills List</h3>
            <p style={{fontSize: '0.75rem', color: '#64748b'}}>Manage and track all skills required for your workforce.</p>
          </div>
          <div className="table-filters">
            <button className="btn primary-btn" onClick={() => setIsSidebarOpen(true)}>
              <Plus size={16} /> Add Required Skill
            </button>
            <div className="search-input" style={{width: '200px'}}>
              <Search size={16} />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        
        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Job Roles</th>
                <th>Importance</th>
                <th>Required Level</th>
                <th>Candidate Availability</th>
                <th>Shortage Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map(skill => (
                <tr key={skill.id}>
                  <td className="font-medium text-dark flex items-center gap-2">
                    <div className="table-skill-icon"><Settings size={14}/></div>
                    {skill.skill}
                  </td>
                  <td>{skill.roles}</td>
                  <td><span className={`status-text ${skill.imp === 'Critical' ? 'red' : skill.imp === 'High' ? 'orange' : 'blue'}`}>{skill.imp}</span></td>
                  <td>{skill.reqLevel}</td>
                  <td>
                    <span className={`status-pill ${skill.avail === 'Low' ? 'red' : skill.avail === 'High' ? 'green' : 'orange'}`}>
                      {skill.avail}
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${skill.shortage === 'Critical' ? 'red-fill' : skill.shortage === 'High' ? 'red-outline' : skill.shortage === 'Moderate' ? 'orange-outline' : 'green'}`}>
                      {skill.shortage}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="action-icon"><Edit3 size={16}/></button>
                      <button className="action-icon text-red"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-footer">
          <div className="showing-text">Showing 1 to 8 of 48 skills</div>
          <div className="pagination">
            <button className="page-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
      </div>

      {/* Slide-out Panel */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className={`slide-panel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <div className="panel-icon-circle"><Target size={16}/></div>
            <h2>Add Required Skill</h2>
          </div>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}><X size={20}/></button>
        </div>
        <div className="panel-content">
          
          <div className="form-group full-width">
            <label>Skill Name *</label>
            <input type="text" placeholder="Enter skill name" />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Skill Category *</label>
              <select><option>Select category</option></select>
            </div>
            <div className="form-group">
              <label>Related Job Role *</label>
              <select><option>Select job role</option></select>
            </div>
            <div className="form-group">
              <label>Required Proficiency *</label>
              <select><option>Select level</option></select>
            </div>
            <div className="form-group">
              <label>Importance *</label>
              <select><option>Select importance</option></select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Mandatory / Preferred *</label>
            <div className="radio-group">
              <label className="radio-label"><input type="radio" name="mandatory" defaultChecked /> Mandatory</label>
              <label className="radio-label"><input type="radio" name="mandatory" /> Preferred</label>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Practical Experience Required *</label>
            <div className="radio-group">
              <label className="radio-label"><input type="radio" name="exp" defaultChecked /> Yes</label>
              <label className="radio-label"><input type="radio" name="exp" /> No</label>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Certification Required *</label>
            <div className="radio-group">
              <label className="radio-label"><input type="radio" name="cert" defaultChecked /> Yes</label>
              <label className="radio-label"><input type="radio" name="cert" /> No</label>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Comments</label>
            <textarea placeholder="Add any additional notes..." rows="4"></textarea>
          </div>

        </div>
        <div className="panel-footer">
          <button className="btn primary-btn" style={{width: '100%', justifyContent: 'center'}}>Save Skill</button>
          <button className="btn outline-btn" style={{width: '100%', justifyContent: 'center', marginTop: '0.5rem'}} onClick={() => setIsSidebarOpen(false)}>Cancel</button>
        </div>
      </div>
      
    </div>
  );
};

export default IndustrySkills;
