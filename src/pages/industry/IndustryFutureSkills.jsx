import React from 'react';
import { Leaf, TrendingUp, Briefcase, Cpu, GraduationCap, Download, Plus, MoreHorizontal } from 'lucide-react';
import './IndustryFutureSkills.css';

const FutureKpiCard = ({ title, value, change, changeText, icon: Icon, colorClass }) => (
  <div className={`future-kpi-card ${colorClass}`}>
    <div className="kpi-icon-header">
      <div className="kpi-icon"><Icon size={20} /></div>
    </div>
    <div className="kpi-content">
      <div className="kpi-value">{value}</div>
      <h3>{title}</h3>
      <div className="kpi-change positive">
        <TrendingUp size={14} />
        <span>{change}</span>
        <span className="vs-text">{changeText}</span>
      </div>
    </div>
  </div>
);

const IndustryFutureSkills = () => {
  const forecastData = [
    { id: 1, name: 'EV Technology', current: 'Medium', expected: 'Very High', growth: '+42%', timeframe: '1 - 2 Years', priority: 'High' },
    { id: 2, name: 'Robotics', current: 'High', expected: 'Very High', growth: '+35%', timeframe: '1 - 3 Years', priority: 'High' },
    { id: 3, name: 'Industrial IoT', current: 'Medium', expected: 'High', growth: '+28%', timeframe: '1 - 2 Years', priority: 'Medium' },
    { id: 4, name: 'Artificial Intelligence (AI)', current: 'High', expected: 'Very High', growth: '+40%', timeframe: '1 - 3 Years', priority: 'High' },
    { id: 5, name: 'Automation', current: 'High', expected: 'Very High', growth: '+32%', timeframe: '1 - 3 Years', priority: 'High' },
    { id: 6, name: 'Renewable Energy', current: 'Medium', expected: 'High', growth: '+30%', timeframe: '1 - 3 Years', priority: 'Medium' },
    { id: 7, name: 'Semiconductor Technology', current: 'Low', expected: 'High', growth: '+38%', timeframe: '2 - 3 Years', priority: 'High' },
    { id: 8, name: 'Advanced Manufacturing', current: 'Medium', expected: 'High', growth: '+26%', timeframe: '1 - 3 Years', priority: 'Medium' },
  ];

  return (
    <div className="dashboard-page future-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Future & Emerging Skills</h1>
          <p className="page-subtitle">Help Maharashtra prepare for tomorrow. Share the skills, technologies and job roles that will be important in the next 1-3 years.</p>
        </div>
        <button className="btn primary-btn">
          <Plus size={16} /> Report Emerging Skill
        </button>
      </div>

      <div className="future-kpi-grid">
        <FutureKpiCard title="Emerging Skills" value="8" change="+33%" changeText="from last year" icon={Leaf} colorClass="green" />
        <FutureKpiCard title="Fast Growing Skills" value="6" change="+50%" changeText="demand" icon={TrendingUp} colorClass="blue" />
        <FutureKpiCard title="Future Job Roles" value="12" change="+40%" changeText="new roles" icon={Briefcase} colorClass="purple" />
        <FutureKpiCard title="New Technologies" value="7" change="+75%" changeText="adoption expected" icon={Cpu} colorClass="orange" />
        <FutureKpiCard title="Skills Requiring Training" value="9" change="+60%" changeText="upskilling need" icon={GraduationCap} colorClass="red" />
      </div>

      <div className="table-card">
        <div className="table-header-bar">
          <div className="table-title">
            <h3>Future Demand Forecast</h3>
            <p style={{fontSize: '0.75rem', color: '#64748b'}}>Industry projected demand for key skills and technologies in the next 1-3 years.</p>
          </div>
          <div className="table-filters">
            <select className="filter-select">
              <option>All Technologies</option>
            </select>
            <select className="filter-select">
              <option>Next 3 Years</option>
            </select>
            <button className="btn outline-btn"><Download size={16}/> Export</button>
          </div>
        </div>
        
        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{width: '50px'}}>#</th>
                <th>Skill / Technology</th>
                <th>Current Demand</th>
                <th>Expected Future Demand</th>
                <th>Growth</th>
                <th>Expected Timeline</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="font-medium text-dark">{item.name}</td>
                  <td>
                    <span className={`status-text ${item.current === 'Low' ? 'blue' : item.current === 'Medium' ? 'orange' : 'red'}`}>
                      {item.current}
                    </span>
                  </td>
                  <td>
                    <span className={`status-text ${item.expected === 'Very High' ? 'red' : 'green'}`}>
                      {item.expected}
                    </span>
                  </td>
                  <td className="text-green font-medium">{item.growth}</td>
                  <td>{item.timeframe}</td>
                  <td>
                    <span className={`status-pill ${item.priority === 'High' ? 'red-fill' : 'orange'}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td><button className="action-dots"><MoreHorizontal size={16}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="report-form-card">
        <div className="form-card-header">
          <div className="panel-icon-circle"><Plus size={16}/></div>
          <div>
            <h3>Report a New Emerging Skill</h3>
            <p>Help us understand the technologies and skills that will be important in the future.</p>
          </div>
        </div>
        <div className="form-card-body">
          <div className="form-grid-3col">
            <div className="form-group">
              <label>Technology / Skill *</label>
              <input type="text" placeholder="e.g. Quantum Computing, EV Technology" />
            </div>
            <div className="form-group">
              <label>Related Job Role</label>
              <input type="text" placeholder="e.g. EV Technician, AI Engineer" />
            </div>
            <div className="form-group">
              <label>Current Demand *</label>
              <select><option>Select demand level</option></select>
            </div>
            
            <div className="form-group">
              <label>Expected Future Demand *</label>
              <select><option>Select demand level</option></select>
            </div>
            <div className="form-group">
              <label>Expected Timeline *</label>
              <select><option>Select timeline</option></select>
            </div>
            <div className="form-group">
              <label>Importance / Priority *</label>
              <select><option>Select importance</option></select>
            </div>
          </div>
          
          <div className="form-grid-2col mt-4">
            <div className="form-group">
              <label>Reason for Demand *</label>
              <textarea placeholder="Why do you think this skill will be in demand?" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label>Required Qualification</label>
              <textarea placeholder="e.g. ITI, Diploma, B.E., Certification, etc." rows="3"></textarea>
            </div>
          </div>
          
          <div className="form-group mt-4">
            <label>Required Training</label>
            <input type="text" placeholder="What kind of training or course is required?" />
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

export default IndustryFutureSkills;
