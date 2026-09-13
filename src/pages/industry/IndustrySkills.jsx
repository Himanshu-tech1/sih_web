import React, { useState } from 'react';
import { Target, AlertTriangle, Settings, Users, Plus, Search, MoreHorizontal, Edit3, Trash2, X } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
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

  const pieData = [
    { name: 'Technical', value: 36, color: '#3b82f6' },
    { name: 'Soft Skills', value: 12, color: '#a855f7' }
  ];

  const barData = [
    { name: 'Technical', count: 36, fill: '#3b82f6' },
    { name: 'Soft Skills', count: 12, fill: '#a855f7' }
  ];

  const trendData = [
    { name: 'PLC', demand: 40, available: 15 },
    { name: 'Robotics', demand: 35, available: 10 },
    { name: 'CNC', demand: 30, available: 20 },
    { name: 'CAD/CAM', demand: 25, available: 18 },
    { name: 'Safety', demand: 20, available: 35 },
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

      <div className="skills-kpi-grid">
        <SkillKpiCard title="Total Required Skills" value="48" change="+12%" icon={Target} colorClass="blue" />
        <SkillKpiCard title="Critical Skills" value="14" change="+8%" icon={AlertTriangle} colorClass="red" />
        <SkillKpiCard title="Technical Skills" value="36" change="+10%" icon={Settings} colorClass="blue" />
        <SkillKpiCard title="Soft Skills" value="12" change="+6%" icon={Users} colorClass="purple" />
        <SkillKpiCard title="Skills in Shortage" value="18" change="+15%" icon={AlertTriangle} colorClass="red" />
      </div>

      <div className="skills-chart-card">
        <div className="chart-header">
          <div>
            <h3>Skill Demand Overview</h3>
            <p>Total demand for required skills across all job roles.</p>
          </div>
          <a href="#" className="view-details">View Details →</a>
        </div>
        <div className="charts-container">
          <div className="chart-box pie-box">
            <div className="pie-wrapper">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={60} paddingAngle={2} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="pie-center-val">
                    48
                  </text>
                  <text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle" className="pie-center-text">
                    Total Skills
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="pie-legend">
              <div className="legend-item">
                <span className="dot blue"></span> Technical <span className="val">75% (36)</span>
              </div>
              <div className="legend-item">
                <span className="dot purple"></span> Soft Skills <span className="val">25% (12)</span>
              </div>
            </div>
          </div>

          <div className="chart-box bar-box">
            <h4>Skill Demand by Category</h4>
            <div className="bar-wrapper">
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={30}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-box shortage-box">
            <h4>Shortage Indicator</h4>
            <div className="shortage-content">
              <div className="shortage-circle">
                <span className="val">18</span>
                <span className="text">Shortage</span>
              </div>
              <div className="shortage-legend">
                <div className="legend-item"><span className="dot red"></span> Critical <span>14</span></div>
                <div className="legend-item"><span className="dot orange"></span> High <span>4</span></div>
                <div className="legend-item"><span className="dot yellow"></span> Moderate <span>6</span></div>
                <div className="legend-item"><span className="dot green"></span> Low <span>3</span></div>
              </div>
            </div>
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

      <div className="bottom-metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <h3>Top Skill Demand</h3>
            <p>Skills with highest industry demand</p>
          </div>
          <div className="metric-body">
            <div className="progress-item">
              <div className="progress-info"><span>PLC Programming</span> <span>92%</span></div>
              <div className="progress-bar"><div className="fill blue" style={{width: '92%'}}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info"><span>CNC Programming</span> <span>78%</span></div>
              <div className="progress-bar"><div className="fill blue" style={{width: '78%'}}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info"><span>Industrial Robotics</span> <span>71%</span></div>
              <div className="progress-bar"><div className="fill blue" style={{width: '71%'}}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info"><span>CAD/CAM</span> <span>62%</span></div>
              <div className="progress-bar"><div className="fill blue" style={{width: '62%'}}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info"><span>Electrical Maintenance</span> <span>48%</span></div>
              <div className="progress-bar"><div className="fill blue" style={{width: '48%'}}></div></div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Skill Shortage Trend</h3>
            <p>Critical skills with supply deficit</p>
          </div>
          <div className="metric-body chart-body">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="demand" fill="#3b82f6" radius={[2, 2, 0, 0]} name="Demand" barSize={12} />
                <Bar dataKey="available" fill="#94a3b8" radius={[2, 2, 0, 0]} name="Available" barSize={12} />
              </BarChart>
            </ResponsiveContainer>
            <div className="legend-center">
              <span className="dot blue"></span> Demand &nbsp;&nbsp;&nbsp; <span className="dot gray"></span> Available
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Quick Insights</h3>
          </div>
          <div className="metric-body">
            <ul className="insights-list">
              <li>
                <span className="bullet red"></span>
                <p><strong>PLC Programming</strong> has the highest shortage (Critical).</p>
              </li>
              <li>
                <span className="bullet orange"></span>
                <p>Industrial Robotics demand is increasing (↑ 18%).</p>
              </li>
              <li>
                <span className="bullet purple"></span>
                <p>Soft skills are needed in 25% of job roles.</p>
              </li>
              <li>
                <span className="bullet green"></span>
                <p>Consider partnering with ITIs for basic level skills.</p>
              </li>
            </ul>
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
