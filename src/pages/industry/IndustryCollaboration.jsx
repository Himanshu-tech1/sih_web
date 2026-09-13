import React from 'react';
import { Building2, Handshake, FileText, GraduationCap, Building, Search, Download, ArrowRight, CheckCircle, Clock, Plus, BookOpen, PenTool, Users, Monitor, Award, Heart, Briefcase } from 'lucide-react';
import './IndustryCollaboration.css';

const CollabKpiCard = ({ title, value, change, changeText, icon: Icon, colorClass }) => (
  <div className={`collab-kpi-card ${colorClass}`}>
    <div className="kpi-icon-header">
      <div className="kpi-icon"><Icon size={24} /></div>
    </div>
    <div className="kpi-content">
      <div className="kpi-value">{value}</div>
      <h3>{title}</h3>
      <div className="kpi-change positive">
        <ArrowRight size={14} style={{transform: 'rotate(-45deg)'}} />
        <span>{change}</span>
        <span className="vs-text">{changeText}</span>
      </div>
    </div>
  </div>
);

const CollabOption = ({ title, icon: Icon, colorClass }) => (
  <div className="collab-option">
    <div className={`option-icon-box ${colorClass}`}><Icon size={24} /></div>
    <span>{title}</span>
  </div>
);

const IndustryCollaboration = () => {
  const institutesData = [
    { id: 1, name: 'Government ITI Pune', dist: 'Pune', type: 'ITI', skills: 'CNC, Welding, Fitter, Electrical', align: 'High', status: 'Active' },
    { id: 2, name: 'Government Polytechnic Pune', dist: 'Pune', type: 'Polytechnic', skills: 'Mechanical, Automation, CAD/CAM', align: 'High', status: 'Active' },
    { id: 3, name: 'Government ITI Nashik', dist: 'Nashik', type: 'ITI', skills: 'Electrical, HVAC, PLC', align: 'Medium', status: 'Discussion' },
    { id: 4, name: 'Government Polytechnic Nashik', dist: 'Nashik', type: 'Polytechnic', skills: 'Electronics, IoT, Robotics', align: 'Medium', status: 'Requested' },
    { id: 5, name: 'Government ITI Aurangabad', dist: 'Chhatrapati Sambhajinagar', type: 'ITI', skills: 'Fitter, Turner, Machinist', align: 'Low', status: 'Not Started' },
    { id: 6, name: 'Government Polytechnic Nagpur', dist: 'Nagpur', type: 'Polytechnic', skills: 'Automobile, EV, Mechatronics', align: 'Medium', status: 'Active' },
  ];

  return (
    <div className="dashboard-page collab-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Institute Collaboration</h1>
          <p className="page-subtitle">Partner with ITIs and Polytechnics to build a future-ready workforce for Maharashtra.</p>
        </div>
        <div className="partnership-badge">
          Industry-Academia Partnership<br/>for a Skilled Maharashtra
        </div>
      </div>

      <div className="collab-kpi-grid">
        <CollabKpiCard title="Partner Institutes" value="24" change="+33%" changeText="from last year" icon={Building2} colorClass="green-bg" />
        <CollabKpiCard title="Active Collaborations" value="18" change="+50%" changeText="ongoing" icon={Handshake} colorClass="blue-bg" />
        <CollabKpiCard title="Collaboration Requests" value="7" change="+40%" changeText="new requests" icon={FileText} colorClass="orange-bg" />
        <CollabKpiCard title="Training Programs" value="12" change="+71%" changeText="this year" icon={GraduationCap} colorClass="purple-bg" />
        <CollabKpiCard title="Institutes Needing Support" value="9" change="+28%" changeText="identified" icon={Building} colorClass="red-bg" />
      </div>

      <div className="table-card">
        <div className="table-header-bar flex-between">
          <div className="table-title">
            <h3><Building2 size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Partner Institutes</h3>
            <p style={{fontSize: '0.75rem', color: '#64748b'}}>List of ITIs and Polytechnics for potential and ongoing collaboration.</p>
          </div>
          <div className="table-filters flex gap-2 items-center">
            <button className="btn primary-btn">+ Start Collaboration</button>
          </div>
        </div>
        <div className="table-filters-row bg-slate-50 border-b border-slate-200 py-2 px-6 flex gap-4">
          <div className="search-input" style={{width: '280px', backgroundColor: 'white'}}>
            <Search size={16} />
            <input type="text" placeholder="Search institutes, district..." />
          </div>
          <select className="filter-select" style={{backgroundColor: 'white'}}><option>All Types</option></select>
          <select className="filter-select" style={{backgroundColor: 'white'}}><option>All Status</option></select>
          <button className="btn outline-btn bg-white"><Download size={16}/> Export</button>
        </div>
        
        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{width: '40px'}}>#</th>
                <th>Institute</th>
                <th>District</th>
                <th>Type</th>
                <th>Relevant Skills</th>
                <th>Alignment</th>
                <th>Collaboration Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {institutesData.map(inst => (
                <tr key={inst.id}>
                  <td>{inst.id}</td>
                  <td className="font-medium text-dark">{inst.name}</td>
                  <td>{inst.dist}</td>
                  <td>
                    <span className={`status-pill ${inst.type === 'ITI' ? 'blue-outline' : 'purple-outline'}`}>{inst.type}</span>
                  </td>
                  <td>{inst.skills}</td>
                  <td>
                    <span className={`status-text ${inst.align === 'High' ? 'green' : inst.align === 'Medium' ? 'orange' : 'red'}`}>{inst.align}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${inst.status === 'Active' ? 'active' : inst.status === 'Not Started' ? 'closed' : 'draft'}`}>
                      {inst.status === 'Active' ? <CheckCircle size={12} className="inline mr-1"/> : <Clock size={12} className="inline mr-1"/>}
                      {inst.status}
                    </span>
                  </td>
                  <td><button className="action-dots">•••</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="options-card">
        <div className="chart-header">
          <h3><Handshake size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Collaboration Options</h3>
          <p>Ways your industry can collaborate with institutes.</p>
        </div>
        <div className="options-row">
          <CollabOption title="Industry Visit" icon={Building2} colorClass="blue" />
          <CollabOption title="Guest Lecture" icon={Users} colorClass="purple" />
          <CollabOption title="Apprenticeship" icon={Award} colorClass="orange" />
          <CollabOption title="Internship" icon={Briefcase} colorClass="green" />
          <CollabOption title="Joint Training" icon={Handshake} colorClass="blue" />
          <CollabOption title="Lab Support" icon={Monitor} colorClass="red" />
          <CollabOption title="Equipment Support" icon={PenTool} colorClass="purple" />
          <CollabOption title="Faculty Training" icon={GraduationCap} colorClass="green" />
          <CollabOption title="Curriculum Feedback" icon={BookOpen} colorClass="orange" />
        </div>
      </div>

      <div className="bottom-grid-6-4 mt-6">
        <div className="form-card h-full">
          <div className="form-card-header">
            <div className="panel-icon-circle blue"><Plus size={16}/></div>
            <div>
              <h3>Start a New Collaboration</h3>
              <p>Share your collaboration requirements with an institute.</p>
            </div>
          </div>
          <div className="form-card-body">
            <div className="form-grid-2col">
              <div className="form-group">
                <label>Institute *</label>
                <select><option>Select institute</option></select>
              </div>
              <div className="form-group">
                <label>District *</label>
                <select><option>Select district</option></select>
              </div>
              <div className="form-group">
                <label>Program / Trade *</label>
                <select><option>Select program / trade</option></select>
              </div>
            </div>
            
            <div className="form-grid-2col mt-4">
              <div className="form-group">
                <label>Required Skill *</label>
                <input type="text" placeholder="e.g. CNC Programming" />
              </div>
              <div className="form-group">
                <label>Collaboration Type *</label>
                <select><option>Select collaboration type</option></select>
              </div>
              <div className="form-group">
                <label>Duration *</label>
                <select><option>Select duration</option></select>
              </div>
            </div>
            
            <div className="form-grid-2col mt-4">
              <div className="form-group">
                <label>Number of Students *</label>
                <input type="text" placeholder="e.g. 20" />
              </div>
              <div className="form-group">
                <label>Industry Mentor *</label>
                <input type="text" placeholder="Enter mentor name" />
              </div>
            </div>

            <div className="form-group full-width mt-4">
              <label>Description *</label>
              <textarea placeholder="Share more details about the collaboration, objectives and expected outcomes..." rows="3"></textarea>
            </div>

            <div className="form-actions-right mt-6">
              <button className="btn outline-btn">Cancel</button>
              <button className="btn primary-btn">Submit</button>
            </div>
          </div>
        </div>

        <div className="recommendations-card h-full">
          <div className="chart-header flex-between">
            <div>
              <h3><Heart size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Recommended Institutes</h3>
              <p>Based on your required skills.</p>
            </div>
            <a href="#" className="view-details">View All →</a>
          </div>
          <div className="recommendations-list">
            
            <div className="rec-item">
              <div className="rec-icon"><Building2 size={24} className="text-blue"/></div>
              <div className="rec-content">
                <div className="rec-title-row">
                  <h4>Government ITI Pune</h4>
                  <span className="match-tag high">High Match</span>
                </div>
                <div className="rec-details">
                  <span><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Pune</span>
                  <span><span className="status-pill blue-outline" style={{padding: '0 4px', fontSize: '10px'}}>ITI</span></span>
                </div>
                <p className="rec-skills">CNC, PLC, Automation</p>
              </div>
              <button className="btn outline-btn btn-sm">Request →</button>
            </div>

            <div className="rec-item">
              <div className="rec-icon"><Building2 size={24} className="text-blue"/></div>
              <div className="rec-content">
                <div className="rec-title-row">
                  <h4>Government Polytechnic Pune</h4>
                  <span className="match-tag high">High Match</span>
                </div>
                <div className="rec-details">
                  <span><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Pune</span>
                  <span><span className="status-pill purple-outline" style={{padding: '0 4px', fontSize: '10px'}}>Polytechnic</span></span>
                </div>
                <p className="rec-skills">CAD/CAM, Robotics, Mechatronics</p>
              </div>
              <button className="btn outline-btn btn-sm">Request →</button>
            </div>

            <div className="rec-item">
              <div className="rec-icon"><Building2 size={24} className="text-blue"/></div>
              <div className="rec-content">
                <div className="rec-title-row">
                  <h4>Government ITI Nashik</h4>
                  <span className="match-tag medium">Medium Match</span>
                </div>
                <div className="rec-details">
                  <span><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Nashik</span>
                  <span><span className="status-pill blue-outline" style={{padding: '0 4px', fontSize: '10px'}}>ITI</span></span>
                </div>
                <p className="rec-skills">Electrical, IoT, HVAC</p>
              </div>
              <button className="btn outline-btn btn-sm">Request →</button>
            </div>

            <div className="rec-item">
              <div className="rec-icon"><Building2 size={24} className="text-blue"/></div>
              <div className="rec-content">
                <div className="rec-title-row">
                  <h4>Government Polytechnic Nagpur</h4>
                  <span className="match-tag medium">Medium Match</span>
                </div>
                <div className="rec-details">
                  <span><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Nagpur</span>
                  <span><span className="status-pill purple-outline" style={{padding: '0 4px', fontSize: '10px'}}>Polytechnic</span></span>
                </div>
                <p className="rec-skills">EV, Automobile, Power Systems</p>
              </div>
              <button className="btn outline-btn btn-sm">Request →</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCollaboration;
