import React, { useState } from 'react';
import { 
  Target, AlertTriangle, AlertCircle, CheckCircle, Users, Download, 
  MoreHorizontal, Plus, Search, Edit3, Trash2, X, Settings, CheckCircle2
} from 'lucide-react';
import './IndustrySkillGap.css';

const IndustrySkillGap = () => {
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' or 'gap-feedback'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Required Skills Data State
  const [skillsData, setSkillsData] = useState([
    { id: 1, skill: 'PLC Programming', roles: '5 roles', imp: 'Critical', reqLevel: 'Advanced', avail: 'Low', shortage: 'Critical' },
    { id: 2, skill: 'CNC Programming', roles: '4 roles', imp: 'High', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'High' },
    { id: 3, skill: 'Industrial Robotics', roles: '3 roles', imp: 'Critical', reqLevel: 'Intermediate', avail: 'Low', shortage: 'Critical' },
    { id: 4, skill: 'CAD/CAM', roles: '6 roles', imp: 'High', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'Moderate' },
    { id: 5, skill: 'Industrial Safety', roles: '8 roles', imp: 'High', reqLevel: 'Basic', avail: 'High', shortage: 'Good' },
    { id: 6, skill: 'Quality Inspection', roles: '4 roles', imp: 'Medium', reqLevel: 'Intermediate', avail: 'Medium', shortage: 'Moderate' },
    { id: 7, skill: 'Electrical Maintenance', roles: '5 roles', imp: 'High', reqLevel: 'Advanced', avail: 'Low', shortage: 'High' },
    { id: 8, skill: 'Data Analysis', roles: '2 roles', imp: 'Medium', reqLevel: 'Intermediate', avail: 'High', shortage: 'Low' },
  ]);

  // Skill Search State
  const [skillSearch, setSkillSearch] = useState('');

  // Add Required Skill Form State
  const [newSkillForm, setNewSkillForm] = useState({
    skill: '',
    roles: '1 role',
    imp: 'High',
    reqLevel: 'Intermediate',
    avail: 'Medium',
    shortage: 'Moderate',
    comments: ''
  });

  // Reported Gap Data State
  const [gapData, setGapData] = useState([
    { id: 1, skill: 'PLC Programming', role: 'PLC Technician', req: 'Advanced', cand: 'Basic', gap: 'High', sev: 'Critical', date: '12 Sep 2025' },
    { id: 2, skill: 'Robotics', role: 'Automation Technician', req: 'Intermediate', cand: 'Beginner', gap: 'High', sev: 'Critical', date: '10 Sep 2025' },
    { id: 3, skill: 'CAD/CAM', role: 'CNC Operator', req: 'Intermediate', cand: 'Intermediate', gap: 'Low', sev: 'Low', date: '08 Sep 2025' },
    { id: 4, skill: 'Industrial IoT', role: 'Maintenance Technician', req: 'Advanced', cand: 'Basic', gap: 'High', sev: 'High', date: '05 Sep 2025' },
    { id: 5, skill: 'AI/ML', role: 'Data Analyst', req: 'Intermediate', cand: 'Beginner', gap: 'High', sev: 'High', date: '02 Sep 2025' },
    { id: 6, skill: 'EV Diagnostics', role: 'EV Service Technician', req: 'Intermediate', cand: 'Basic', gap: 'High', sev: 'High', date: '30 Aug 2025' },
  ]);

  // Gap Search and Filter State
  const [gapSearch, setGapSearch] = useState('');
  const [gapSeverityFilter, setGapSeverityFilter] = useState('All');

  // Report New Gap Form State
  const [newGapForm, setNewGapForm] = useState({
    role: '',
    skill: '',
    expectedLevel: 'Intermediate',
    candidateLevel: 'Basic',
    problem: '',
    severity: 'High',
    affectedCount: '',
    training: '',
    comments: ''
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Add Required Skill Handler
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillForm.skill.trim()) {
      alert('Please enter a skill name.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      skill: newSkillForm.skill.trim(),
      roles: newSkillForm.roles || '1 role',
      imp: newSkillForm.imp,
      reqLevel: newSkillForm.reqLevel,
      avail: newSkillForm.avail,
      shortage: newSkillForm.shortage
    };

    setSkillsData([newEntry, ...skillsData]);
    setIsSidebarOpen(false);
    setNewSkillForm({
      skill: '',
      roles: '1 role',
      imp: 'High',
      reqLevel: 'Intermediate',
      avail: 'Medium',
      shortage: 'Moderate',
      comments: ''
    });
    showToast(`✓ Required skill "${newEntry.skill}" added successfully!`);
  };

  // Delete Skill Handler
  const handleDeleteSkill = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from required skills?`)) {
      setSkillsData(skillsData.filter(s => s.id !== id));
      showToast(`Removed "${name}" from required skills.`);
    }
  };

  // Report Skill Gap Handler
  const handleReportGap = (e) => {
    e.preventDefault();
    if (!newGapForm.skill.trim() || !newGapForm.role.trim()) {
      alert('Please enter both Job Role and Skill.');
      return;
    }

    const newGap = {
      id: gapData.length + 1,
      skill: newGapForm.skill.trim(),
      role: newGapForm.role.trim(),
      req: newGapForm.expectedLevel,
      cand: newGapForm.candidateLevel,
      gap: 'High',
      sev: newGapForm.severity,
      date: 'Today'
    };

    setGapData([newGap, ...gapData]);
    setNewGapForm({
      role: '',
      skill: '',
      expectedLevel: 'Intermediate',
      candidateLevel: 'Basic',
      problem: '',
      severity: 'High',
      affectedCount: '',
      training: '',
      comments: ''
    });
    showToast(`✓ Skill gap for "${newGap.skill}" reported successfully to Maharashtra training cells!`);
  };

  const filteredSkills = skillsData.filter(s => 
    !skillSearch || s.skill.toLowerCase().includes(skillSearch.toLowerCase()) || s.roles.toLowerCase().includes(skillSearch.toLowerCase())
  );

  const filteredGaps = gapData.filter(g => {
    const matchesSearch = !gapSearch || 
      g.skill.toLowerCase().includes(gapSearch.toLowerCase()) || 
      g.role.toLowerCase().includes(gapSearch.toLowerCase());
    const matchesSev = gapSeverityFilter === 'All' || g.sev === gapSeverityFilter;
    return matchesSearch && matchesSev;
  });

  return (
    <div className="dashboard-page gap-page relative">
      {/* Toast */}
      {toastMessage && (
        <div className="gap-toast">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Required Skills & Skill Gap Feedback</h1>
          <p className="page-subtitle">
            Specify technical skills required for your workforce and report talent competency gaps to shape Maharashtra vocational training.
          </p>
        </div>
        <div className="flex gap-2">
          {activeTab === 'skills' ? (
            <button className="btn primary-btn" onClick={() => setIsSidebarOpen(true)}>
              <Plus size={16} /> Add Required Skill
            </button>
          ) : (
            <button className="btn primary-btn" onClick={() => {
              const formEl = document.getElementById('report-gap-form-card');
              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
            }}>
              + Report Skill Gap
            </button>
          )}
        </div>
      </div>

      {/* Tab Selector Bar */}
      <div className="skills-gap-tab-bar">
        <button 
          className={`tab-switch-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <Target size={17} />
          <span>Required Skills Specification ({skillsData.length})</span>
        </button>
        <button 
          className={`tab-switch-btn ${activeTab === 'gap-feedback' ? 'active' : ''}`}
          onClick={() => setActiveTab('gap-feedback')}
        >
          <AlertTriangle size={17} />
          <span>Reported Skill Gaps ({gapData.length})</span>
        </button>
      </div>

      {/* ================= TAB 1: REQUIRED SKILLS ================= */}
      {activeTab === 'skills' && (
        <>
          <div className="table-card">
            <div className="table-header-bar">
              <div className="table-title">
                <h3>Required Skills for Industrial Operations</h3>
                <p style={{fontSize: '0.75rem', color: '#64748b'}}>
                  Track and manage candidate skill demands across manufacturing, automotive, and technical roles.
                </p>
              </div>
              <div className="table-filters">
                <div className="search-input" style={{width: '240px'}}>
                  <Search size={16} />
                  <input 
                    type="text" 
                    placeholder="Search required skills..." 
                    value={skillSearch}
                    onChange={(e) => setSkillSearch(e.target.value)}
                  />
                </div>
                <button className="btn primary-btn" onClick={() => setIsSidebarOpen(true)}>
                  <Plus size={16} /> Add Skill
                </button>
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
                  {filteredSkills.map(skill => (
                    <tr key={skill.id}>
                      <td className="font-medium text-dark flex items-center gap-2">
                        <div className="table-skill-icon"><Settings size={14}/></div>
                        {skill.skill}
                      </td>
                      <td>{skill.roles}</td>
                      <td>
                        <span className={`status-text ${skill.imp === 'Critical' ? 'red' : skill.imp === 'High' ? 'orange' : 'blue'}`}>
                          {skill.imp}
                        </span>
                      </td>
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
                          <button 
                            className="action-icon text-red"
                            onClick={() => handleDeleteSkill(skill.id, skill.skill)}
                            title="Remove Skill"
                          >
                            <Trash2 size={16}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="table-footer">
              <div className="showing-text">Showing {filteredSkills.length} of {skillsData.length} required skills</div>
            </div>
          </div>
        </>
      )}

      {/* ================= TAB 2: SKILL GAP FEEDBACK ================= */}
      {activeTab === 'gap-feedback' && (
        <>
          <div className="table-card">
            <div className="table-header-bar">
              <div className="table-title">
                <h3><Users size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Reported Competency Gaps</h3>
                <p style={{fontSize: '0.75rem', color: '#64748b'}}>
                  Observed skill gaps reported by industry supervisors for ITI & Polytechnic candidate batches.
                </p>
              </div>
              <div className="table-filters">
                <div className="search-input">
                  <Search size={16} />
                  <input 
                    type="text" 
                    placeholder="Search skills or job roles..." 
                    value={gapSearch}
                    onChange={(e) => setGapSearch(e.target.value)}
                  />
                </div>
                <select 
                  className="filter-select"
                  value={gapSeverityFilter}
                  onChange={(e) => setGapSeverityFilter(e.target.value)}
                >
                  <option value="All">All Severity</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
                <button className="btn outline-btn" onClick={() => window.print()}>
                  <Download size={16}/> Export
                </button>
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
                  {filteredGaps.map((item) => (
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
                      <td>
                        <button 
                          className="action-dots"
                          onClick={() => showToast(`Gap details for "${item.skill}" are shared with Maharashtra Training Directorate.`)}
                          title="View Gap details"
                        >
                          <MoreHorizontal size={16}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Report New Skill Gap Form */}
          <div className="report-form-card" id="report-gap-form-card">
            <div className="form-card-header">
              <div className="panel-icon-circle blue">
                <Plus size={18} />
              </div>
              <div>
                <h3>Report a New Candidate Skill Gap</h3>
                <p>Submit real shop-floor observations to direct Maharashtra curriculum and workshop training.</p>
              </div>
            </div>
            <form onSubmit={handleReportGap}>
              <div className="form-card-body">
                <div className="form-grid-4col">
                  <div className="form-group">
                    <label>Job Role *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. CNC Operator / PLC Technician"
                      value={newGapForm.role}
                      onChange={(e) => setNewGapForm({...newGapForm, role: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Skill *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Siemens S7 Ladder Logic"
                      value={newGapForm.skill}
                      onChange={(e) => setNewGapForm({...newGapForm, skill: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Expected Skill Level *</label>
                    <select 
                      value={newGapForm.expectedLevel}
                      onChange={(e) => setNewGapForm({...newGapForm, expectedLevel: e.target.value})}
                    >
                      <option value="Advanced">Advanced</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Basic">Basic</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Typical Candidate Skill Level *</label>
                    <select 
                      value={newGapForm.candidateLevel}
                      onChange={(e) => setNewGapForm({...newGapForm, candidateLevel: e.target.value})}
                    >
                      <option value="Basic">Basic / Untrained</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-grid-4col mt-4">
                  <div className="form-group">
                    <label>Problem Observed *</label>
                    <input 
                      type="text" 
                      placeholder="E.g. Lack of hands-on machine practice, zero blueprint reading"
                      value={newGapForm.problem}
                      onChange={(e) => setNewGapForm({...newGapForm, problem: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Severity *</label>
                    <select 
                      value={newGapForm.severity}
                      onChange={(e) => setNewGapForm({...newGapForm, severity: e.target.value})}
                    >
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Candidates Interviewed / Evaluated *</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 15"
                      value={newGapForm.affectedCount}
                      onChange={(e) => setNewGapForm({...newGapForm, affectedCount: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Recommended Training Focus *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Workshop practicals on live PLC rigs"
                      value={newGapForm.training}
                      onChange={(e) => setNewGapForm({...newGapForm, training: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="form-group full-width mt-4">
                  <label>Additional Technical Notes for Institute Trainers</label>
                  <input 
                    type="text" 
                    placeholder="Specific instruments, G-codes, or safety gear candidates struggled with..."
                    value={newGapForm.comments}
                    onChange={(e) => setNewGapForm({...newGapForm, comments: e.target.value})}
                  />
                </div>

                <div className="form-actions-right mt-6">
                  <button type="submit" className="btn primary-btn">
                    Submit Skill Gap Report
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Slide-out Panel for Adding Required Skill */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className={`slide-panel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <div className="panel-icon-circle"><Target size={16}/></div>
            <h2>Add Required Skill</h2>
          </div>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}><X size={20}/></button>
        </div>
        <form onSubmit={handleAddSkill}>
          <div className="panel-content">
            
            <div className="form-group full-width">
              <label>Skill Name *</label>
              <input 
                type="text" 
                placeholder="e.g. Robotic Arm Calibration, SolidWorks CAD"
                value={newSkillForm.skill}
                onChange={(e) => setNewSkillForm({...newSkillForm, skill: e.target.value})}
                required 
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Related Job Roles *</label>
                <input 
                  type="text" 
                  placeholder="e.g. 4 roles" 
                  value={newSkillForm.roles}
                  onChange={(e) => setNewSkillForm({...newSkillForm, roles: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Required Level *</label>
                <select 
                  value={newSkillForm.reqLevel}
                  onChange={(e) => setNewSkillForm({...newSkillForm, reqLevel: e.target.value})}
                >
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
              <div className="form-group">
                <label>Importance *</label>
                <select 
                  value={newSkillForm.imp}
                  onChange={(e) => setNewSkillForm({...newSkillForm, imp: e.target.value})}
                >
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>
              <div className="form-group">
                <label>Market Availability *</label>
                <select 
                  value={newSkillForm.avail}
                  onChange={(e) => setNewSkillForm({...newSkillForm, avail: e.target.value})}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Candidate Shortage Severity *</label>
              <select 
                value={newSkillForm.shortage}
                onChange={(e) => setNewSkillForm({...newSkillForm, shortage: e.target.value})}
              >
                <option value="Critical">Critical Shortage</option>
                <option value="High">High Shortage</option>
                <option value="Moderate">Moderate Shortage</option>
                <option value="Good">Good Availability</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Comments / Key Competencies Required</label>
              <textarea 
                placeholder="Mention mandatory certifications or blueprint knowledge needed..." 
                rows="3"
                value={newSkillForm.comments}
                onChange={(e) => setNewSkillForm({...newSkillForm, comments: e.target.value})}
              ></textarea>
            </div>

          </div>
          <div className="panel-footer">
            <button type="submit" className="btn primary-btn" style={{width: '100%', justifyContent: 'center'}}>
              Save Required Skill
            </button>
            <button 
              type="button" 
              className="btn outline-btn" 
              style={{width: '100%', justifyContent: 'center', marginTop: '0.5rem'}} 
              onClick={() => setIsSidebarOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default IndustrySkillGap;
