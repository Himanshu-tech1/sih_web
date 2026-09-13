import React, { useState } from 'react';
import { 
  BookOpen, Users, Settings, AlertTriangle, ChevronDown, 
  Search, Download, Settings as SettingsIcon, PenTool,
  Zap, Wrench, Lock, CheckCircle2, ChevronRight, Edit3, ExternalLink,
  Calendar, FlaskConical, Cpu, MonitorPlay, Target, BarChart, Plus,
  Save, Filter, Check, MoreVertical, Layers, Award
} from 'lucide-react';
import './InstituteCourses.css';

const INITIAL_SKILLS = [
  { id: 'sk-1', name: 'PLC Programming', program: 'Electrical', category: 'Technical', level: 'Intermediate', practical: 'Yes', demand: 'High', status: 'Aligned', equipment: 'PLC Trainer Kit', hours: '120' },
  { id: 'sk-2', name: 'CNC Programming & G-Code', program: 'Mechanical', category: 'Technical', level: 'Intermediate', practical: 'Yes', demand: 'High', status: 'Partial', equipment: 'CNC Milling & Lathe', hours: '140' },
  { id: 'sk-3', name: 'Industrial Robotics', program: 'Automation', category: 'Technical', level: 'Beginner', practical: 'Limited', demand: 'Very High', status: 'Gap', equipment: '6-Axis Robotic Arm', hours: '90' },
  { id: 'sk-4', name: 'Welding Technology (TIG/MIG)', program: 'Mechanical', category: 'Practical', level: 'Intermediate', practical: 'Yes', demand: 'High', status: 'Aligned', equipment: 'Welding Simulator & Kits', hours: '110' },
  { id: 'sk-5', name: 'AutoCAD & SolidWorks', program: 'Civil', category: 'Technical', level: 'Intermediate', practical: 'Yes', demand: 'Medium', status: 'Aligned', equipment: 'CAD Lab Workstations', hours: '100' },
  { id: 'sk-6', name: '3D Printing & Prototyping', program: 'Automation', category: 'Technical', level: 'Beginner', practical: 'Limited', demand: 'Emerging', status: 'Emerging', equipment: 'FDM 3D Printer', hours: '60' },
  { id: 'sk-7', name: 'Quality Inspection & Metrology', program: 'Mechanical', category: 'Practical', level: 'Intermediate', practical: 'Yes', demand: 'Medium', status: 'Aligned', equipment: 'Vernier, Micrometer, CMM', hours: '80' },
  { id: 'sk-8', name: 'Electrical Fault Finding', program: 'Electrical', category: 'Technical', level: 'Advanced', practical: 'Yes', demand: 'High', status: 'Aligned', equipment: 'Digital Multimeter, Megger', hours: '130' }
];

const INITIAL_COURSES = [
  { id: 'c-1', name: 'Fitter', type: 'ITI', sector: 'Manufacturing', duration: '2 Years', students: 120, skillsCovered: 18, alignment: 82, status: 'Active', icon: 'wrench' },
  { id: 'c-2', name: 'Machinist', type: 'ITI', sector: 'Manufacturing', duration: '2 Years', students: 95, skillsCovered: 16, alignment: 78, status: 'Active', icon: 'settings' },
  { id: 'c-3', name: 'Electrician', type: 'ITI', sector: 'Electrical', duration: '2 Years', students: 110, skillsCovered: 20, alignment: 85, status: 'Active', icon: 'zap' },
  { id: 'c-4', name: 'Welder', type: 'ITI', sector: 'Manufacturing', duration: '2 Years', students: 85, skillsCovered: 14, alignment: 70, status: 'Active', icon: 'pen' },
  { id: 'c-5', name: 'Mechanical Engineering', type: 'Diploma', sector: 'Manufacturing', duration: '3 Years', students: 180, skillsCovered: 26, alignment: 76, status: 'Active', icon: 'settings' },
  { id: 'c-6', name: 'Electrical Engineering', type: 'Diploma', sector: 'Electrical', duration: '3 Years', students: 150, skillsCovered: 24, alignment: 88, status: 'Active', icon: 'zap' },
  { id: 'c-7', name: 'Computer Engineering', type: 'Diploma', sector: 'IT & Electronics', duration: '3 Years', students: 140, skillsCovered: 22, alignment: 80, status: 'Active', icon: 'monitor' },
];

const InstituteCourses = () => {
  // Page view mode: 'courses' or 'skills'
  const [mainTab, setMainTab] = useState('courses');

  // Selected Course details tab
  const [activeCourseTab, setActiveCourseTab] = useState('curriculum');
  const [selectedCourse, setSelectedCourse] = useState(INITIAL_COURSES[4]); // Mechanical Engineering default

  // Course search
  const [courseSearch, setCourseSearch] = useState('');

  // Skills state
  const [skillsList, setSkillsList] = useState(INITIAL_SKILLS);
  const [skillSearch, setSkillSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterProgram, setFilterProgram] = useState('All');

  // Add Skill Form state
  const [formSkill, setFormSkill] = useState({
    name: '',
    category: 'Technical',
    program: 'Mechanical',
    level: 'Intermediate',
    theoryHours: '40',
    practicalHours: '60',
    labAvailable: true,
    equipment: '',
    certification: 'NSQF Level 5',
    description: ''
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();
    if (!formSkill.name.trim()) {
      alert('Please enter a Skill Name.');
      return;
    }

    const newSkill = {
      id: `sk-${Date.now()}`,
      name: formSkill.name.trim(),
      program: formSkill.program,
      category: formSkill.category,
      level: formSkill.level,
      practical: formSkill.practicalHours > 0 ? 'Yes' : 'No',
      demand: 'High',
      status: 'Aligned',
      equipment: formSkill.equipment || 'Standard Lab Kit',
      hours: `${Number(formSkill.theoryHours || 0) + Number(formSkill.practicalHours || 0)}`
    };

    setSkillsList([newSkill, ...skillsList]);
    setFormSkill({
      name: '',
      category: 'Technical',
      program: 'Mechanical',
      level: 'Intermediate',
      theoryHours: '40',
      practicalHours: '60',
      labAvailable: true,
      equipment: '',
      certification: 'NSQF Level 5',
      description: ''
    });

    showToast(`🎉 Skill "${newSkill.name}" added successfully to ${newSkill.program}!`);
  };

  // Filtered courses
  const filteredCourses = INITIAL_COURSES.filter(c => 
    !courseSearch || 
    c.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.sector.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.type.toLowerCase().includes(courseSearch.toLowerCase())
  );

  // Filtered skills
  const filteredSkills = skillsList.filter(s => {
    const matchesSearch = !skillSearch || 
      s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
      s.program.toLowerCase().includes(skillSearch.toLowerCase()) ||
      s.equipment.toLowerCase().includes(skillSearch.toLowerCase());
    
    const matchesCategory = filterCategory === 'All' || s.category === filterCategory;
    const matchesProgram = filterProgram === 'All' || s.program.toLowerCase() === filterProgram.toLowerCase();

    return matchesSearch && matchesCategory && matchesProgram;
  });

  return (
    <div className="institute-courses">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="toast-notification-banner">
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <BookOpen size={24} />
          </div>
          <div>
            <h1>Courses, Curriculum & Skills Taught</h1>
            <p>Manage technical programs, curriculum structure, skill competencies, and add new vocational skills.</p>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className={`switch-tab-btn ${mainTab === 'courses' ? 'active' : ''}`}
            onClick={() => setMainTab('courses')}
          >
            <BookOpen size={16} /> Programs & Curriculum
          </button>
          <button 
            className={`switch-tab-btn ${mainTab === 'skills' ? 'active' : ''}`}
            onClick={() => setMainTab('skills')}
          >
            <Settings size={16} /> Skills Taught & Directory ({skillsList.length})
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green"><BookOpen size={20} /></div>
            <span>Active Trades / Programs</span>
          </div>
          <div className="metric-value">12</div>
          <div className="metric-trend neutral">out of 15 registered</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Users size={20} /></div>
            <span>Total Enrolled Students</span>
          </div>
          <div className="metric-value">1,248</div>
          <div className="metric-trend positive">+12% from last year</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon purple"><Settings size={20} /></div>
            <span>Total Skills Taught</span>
          </div>
          <div className="metric-value-row">
            <div className="metric-value">{skillsList.length}</div>
            <div className="mini-donut">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="21" className="percentage">85%</text>
              </svg>
            </div>
          </div>
          <div className="metric-trend neutral">85% industry coverage</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green-light"><Target size={20} /></div>
            <span>Industry Alignment Rate</span>
          </div>
          <div className="metric-value">76%</div>
          <div className="metric-trend positive">High alignment with MSMEs</div>
        </div>
      </div>

      {/* MAIN VIEW 1: COURSES & CURRICULUM */}
      {mainTab === 'courses' && (
        <div className="main-content-area">
          <div className="left-panel">
            <div className="courses-list-card">
              <div className="card-header">
                <div className="card-title">
                  <BookOpen size={18} color="#3b82f6" />
                  <h3>Courses & Curriculum List</h3>
                </div>
                <div className="header-actions">
                  <div className="search-box">
                    <Search size={16} />
                    <input 
                      type="text" 
                      placeholder="Search programs, trades or sectors..." 
                      value={courseSearch}
                      onChange={(e) => setCourseSearch(e.target.value)}
                    />
                  </div>
                  <button 
                    className="primary-btn small"
                    onClick={() => setMainTab('skills')}
                  >
                    <Plus size={15} /> Add New Skill
                  </button>
                </div>
              </div>
              
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Type</th>
                    <th>Sector</th>
                    <th>Duration</th>
                    <th>Students</th>
                    <th>Skills</th>
                    <th>Alignment</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((c) => (
                    <tr 
                      key={c.id} 
                      className={selectedCourse.id === c.id ? 'active-row' : ''}
                      onClick={() => setSelectedCourse(c)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="program-cell">
                        {c.icon === 'wrench' && <Wrench size={16} className="icon-blue" />}
                        {c.icon === 'settings' && <SettingsIcon size={16} className="icon-blue" />}
                        {c.icon === 'zap' && <Zap size={16} className="icon-blue" />}
                        {c.icon === 'pen' && <PenTool size={16} className="icon-blue" />}
                        {c.icon === 'monitor' && <MonitorPlay size={16} className="icon-blue" />}
                        {c.name}
                      </td>
                      <td>{c.type}</td>
                      <td>{c.sector}</td>
                      <td>{c.duration}</td>
                      <td>{c.students}</td>
                      <td>{c.skillsCovered}</td>
                      <td>
                        <div className="alignment-donut">
                          <svg viewBox="0 0 36 36" className="circular-chart green">
                            <path className="circle" strokeDasharray={`${c.alignment}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <text x="18" y="21.5" className="percentage">{c.alignment}%</text>
                          </svg>
                        </div>
                      </td>
                      <td><span className="status-pill active">{c.status}</span></td>
                      <td><ChevronRight size={16} className="chevron-icon" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="right-panel">
            <div className="course-details-card">
              <div className="details-header">
                <div className="details-title-row">
                  <h2>Program Overview</h2>
                </div>
                <span className="badge outline">{selectedCourse.type}</span>
              </div>
              
              <div className="course-main-info">
                <div className="course-icon"><SettingsIcon size={24} /></div>
                <div className="course-title-group">
                  <h3>{selectedCourse.name}</h3>
                  <div className="course-badges">
                    <span className="badge outline">{selectedCourse.duration}</span>
                    <span className="badge outline">{selectedCourse.sector}</span>
                    <span className="status-pill active">{selectedCourse.status}</span>
                  </div>
                </div>
              </div>

              <div className="course-stats-row">
                <div className="stat-group">
                  <span className="stat-label">Enrolled Trainees</span>
                  <span className="stat-value">{selectedCourse.students} Students</span>
                </div>
                <div className="stat-group alignment-group">
                  <div className="alignment-donut">
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray={`${selectedCourse.alignment}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <text x="18" y="21.5" className="percentage">{selectedCourse.alignment}%</text>
                    </svg>
                  </div>
                  <span className="stat-label">Industry Fit</span>
                </div>
              </div>

              <div className="custom-tabs">
                <button 
                  className={`tab-btn ${activeCourseTab === 'curriculum' ? 'active' : ''}`}
                  onClick={() => setActiveCourseTab('curriculum')}
                >
                  Curriculum
                </button>
                <button 
                  className={`tab-btn ${activeCourseTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveCourseTab('skills')}
                >
                  Taught Skills ({skillsList.filter(s => s.program.toLowerCase().includes(selectedCourse.name.toLowerCase()) || selectedCourse.name.toLowerCase().includes(s.program.toLowerCase())).length})
                </button>
                <button 
                  className={`tab-btn ${activeCourseTab === 'labs' ? 'active' : ''}`}
                  onClick={() => setActiveCourseTab('labs')}
                >
                  Labs & Workshop
                </button>
              </div>

              <div className="tab-content">
                {activeCourseTab === 'curriculum' && (
                  <div className="curriculum-details">
                    <div className="detail-section">
                      <div className="section-title">
                        <Users size={16} />
                        <h4>Curriculum Framework</h4>
                      </div>
                      <p>Designed under DGT / MSBTE and National Skills Qualification Framework (NSQF). Covers foundational theory, workshop practice, and shop-floor automation.</p>
                    </div>

                    <div className="detail-section">
                      <div className="section-title">
                        <Calendar size={16} />
                        <h4>Program Structure</h4>
                      </div>
                      <p>{selectedCourse.duration} • 70% Practical Workshop, 30% Classroom Theory</p>
                    </div>

                    <div className="detail-section highlight">
                      <div className="section-title">
                        <BarChart size={16} />
                        <h4>Sector Demand</h4>
                      </div>
                      <p>Meets {selectedCourse.alignment}% of Maharashtra auto-component and heavy engineering industrial cluster needs.</p>
                    </div>
                  </div>
                )}

                {activeCourseTab === 'skills' && (
                  <div className="curriculum-details">
                    <div className="detail-section">
                      <div className="section-title">
                        <Cpu size={16} />
                        <h4>Core Technical & Practical Competencies</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                        {skillsList
                          .filter(s => s.program.toLowerCase().includes(selectedCourse.name.toLowerCase()) || selectedCourse.name.toLowerCase().includes(s.program.toLowerCase()))
                          .map(sk => (
                            <div key={sk.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                              <div>
                                <span style={{ fontWeight: '600', fontSize: '13px', color: '#1e293b' }}>{sk.name}</span>
                                <div style={{ fontSize: '11px', color: '#64748b' }}>Level: {sk.level} • {sk.hours} hrs</div>
                              </div>
                              <span className={`status-pill ${sk.status.toLowerCase()}`}>{sk.status}</span>
                            </div>
                          ))}
                        {skillsList.filter(s => s.program.toLowerCase().includes(selectedCourse.name.toLowerCase()) || selectedCourse.name.toLowerCase().includes(s.program.toLowerCase())).length === 0 && (
                          <p style={{ color: '#64748b', fontSize: '13px' }}>Standard trade competencies mapped to NSQF guidelines.</p>
                        )}
                      </div>
                    </div>
                    <button 
                      className="primary-btn outline full-width"
                      style={{ marginTop: '12px' }}
                      onClick={() => {
                        setFormSkill(prev => ({ ...prev, program: selectedCourse.name.split(' ')[0] }));
                        setMainTab('skills');
                      }}
                    >
                      <Plus size={16} /> Add Skill to this Program
                    </button>
                  </div>
                )}

                {activeCourseTab === 'labs' && (
                  <div className="curriculum-details">
                    <div className="detail-section">
                      <div className="section-title">
                        <FlaskConical size={16} />
                        <h4>Workshop Facilities</h4>
                      </div>
                      <p>Full-scale testing labs, CNC machinery, electrical distribution panels, and safety gear station.</p>
                    </div>
                  </div>
                )}
              </div>

              <button 
                className="primary-btn full-width"
                style={{ marginTop: '16px' }}
                onClick={() => setMainTab('skills')}
              >
                <Settings size={16} /> Manage All Skills Taught
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN VIEW 2: SKILLS TAUGHT & ADD NEW SKILL FORM */}
      {mainTab === 'skills' && (
        <div className="main-content-area skills-view-grid">
          {/* Left Panel: Skills Directory Table */}
          <div className="left-panel">
            {/* Filters Bar */}
            <div className="filters-bar">
              <div className="filter-group">
                <label><Search size={12} /> Search Skill / Keyword</label>
                <div className="search-input-wrap">
                  <input 
                    type="text" 
                    placeholder="Search by skill name, equipment..." 
                    value={skillSearch}
                    onChange={(e) => setSkillSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Category</label>
                <div className="select-wrapper">
                  <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                    <option value="All">All Categories</option>
                    <option value="Technical">Technical</option>
                    <option value="Practical">Practical</option>
                  </select>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className="filter-group">
                <label>Trade / Program</label>
                <div className="select-wrapper">
                  <select value={filterProgram} onChange={(e) => setFilterProgram(e.target.value)}>
                    <option value="All">All Programs</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Automation">Automation</option>
                    <option value="Civil">Civil</option>
                  </select>
                  <ChevronDown size={16} />
                </div>
              </div>

              <button 
                className="reset-btn"
                onClick={() => { setSkillSearch(''); setFilterCategory('All'); setFilterProgram('All'); }}
              >
                Reset
              </button>
            </div>

            {/* Skills Table Card */}
            <div className="skills-list-card">
              <div className="card-header">
                <div className="card-title">
                  <Settings size={18} color="#3b82f6" />
                  <h3>Skills List ({filteredSkills.length})</h3>
                </div>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Live Curriculum Competencies
                </span>
              </div>
              
              <table className="skills-table">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Related Program</th>
                    <th>Category</th>
                    <th>Skill Level</th>
                    <th>Equipment</th>
                    <th>Industry Demand</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSkills.map((sk) => (
                    <tr key={sk.id}>
                      <td className="skill-name-cell">
                        <Lock size={14} className="lock-icon" />
                        <div>
                          <strong>{sk.name}</strong>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>{sk.hours} Hours Training</div>
                        </div>
                      </td>
                      <td>
                        <span className="badge outline">{sk.program}</span>
                      </td>
                      <td>{sk.category}</td>
                      <td>
                        <span className={`level-badge ${sk.level.toLowerCase()}`}>
                          {sk.level}
                        </span>
                      </td>
                      <td style={{ fontSize: '12px', color: '#64748b' }}>{sk.equipment}</td>
                      <td>
                        <span className={`demand-text ${sk.demand.toLowerCase().replace(' ', '-')}`}>
                          {sk.demand}
                        </span>
                      </td>
                      <td>
                        <span className={`status-pill ${sk.status.toLowerCase()}`}>
                          {sk.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Panel: Add New Skill Form */}
          <div className="right-panel">
            <div className="add-skill-form">
              <div className="form-header">
                <div className="form-icon-circle">
                  <Plus size={20} color="#2563eb" />
                </div>
                <div>
                  <h3>Add New Skill</h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Directly integrate into institute curriculum</p>
                </div>
              </div>
              
              <form onSubmit={handleSaveSkill}>
                <div className="form-group">
                  <label>Skill Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CNC Programming, Robotic Welding" 
                    value={formSkill.name}
                    onChange={(e) => setFormSkill({ ...formSkill, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Category *</label>
                    <div className="select-wrapper">
                      <select 
                        value={formSkill.category}
                        onChange={(e) => setFormSkill({ ...formSkill, category: e.target.value })}
                      >
                        <option value="Technical">Technical</option>
                        <option value="Practical">Practical</option>
                        <option value="Digital">Digital / IT</option>
                      </select>
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="form-group half">
                    <label>Trade / Program *</label>
                    <div className="select-wrapper">
                      <select 
                        value={formSkill.program}
                        onChange={(e) => setFormSkill({ ...formSkill, program: e.target.value })}
                      >
                        <option value="Mechanical">Mechanical</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Automation">Automation</option>
                        <option value="Civil">Civil</option>
                        <option value="Computer">Computer</option>
                      </select>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Skill Level *</label>
                    <div className="select-wrapper">
                      <select 
                        value={formSkill.level}
                        onChange={(e) => setFormSkill({ ...formSkill, level: e.target.value })}
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="form-group half">
                    <label>Certification Target</label>
                    <div className="select-wrapper">
                      <select 
                        value={formSkill.certification}
                        onChange={(e) => setFormSkill({ ...formSkill, certification: e.target.value })}
                      >
                        <option value="NSQF Level 4">NSQF Level 4</option>
                        <option value="NSQF Level 5">NSQF Level 5</option>
                        <option value="Industry Certified">Industry Certified</option>
                      </select>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Theory (Hours)</label>
                    <input 
                      type="number" 
                      placeholder="40" 
                      value={formSkill.theoryHours}
                      onChange={(e) => setFormSkill({ ...formSkill, theoryHours: e.target.value })}
                    />
                  </div>
                  <div className="form-group half">
                    <label>Practical (Hours)</label>
                    <input 
                      type="number" 
                      placeholder="60" 
                      value={formSkill.practicalHours}
                      onChange={(e) => setFormSkill({ ...formSkill, practicalHours: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Equipment / Tool Required</label>
                  <input 
                    type="text" 
                    placeholder="e.g. PLC Trainer Kit, Multimeter, Lathe" 
                    value={formSkill.equipment}
                    onChange={(e) => setFormSkill({ ...formSkill, equipment: e.target.value })}
                  />
                </div>

                <div className="form-row align-center" style={{ marginBottom: '16px' }}>
                  <div className="form-group toggle-group" style={{ marginBottom: 0 }}>
                    <label>Lab Available in Campus?</label>
                    <div 
                      className={`toggle-switch ${formSkill.labAvailable ? 'active' : ''}`}
                      onClick={() => setFormSkill({ ...formSkill, labAvailable: !formSkill.labAvailable })}
                    >
                      <div className="toggle-knob"></div>
                    </div>
                  </div>
                  <span style={{ fontSize: '13px', color: formSkill.labAvailable ? '#16a34a' : '#64748b', fontWeight: '500' }}>
                    {formSkill.labAvailable ? 'Lab Ready' : 'External Workshop Needed'}
                  </span>
                </div>

                <div className="form-group">
                  <label>Curriculum Notes / Learning Outcomes</label>
                  <textarea 
                    placeholder="Key competencies students will gain upon completion..." 
                    rows="3"
                    value={formSkill.description}
                    onChange={(e) => setFormSkill({ ...formSkill, description: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="primary-btn full-width">
                  <Save size={16} /> Save & Add to Curriculum
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstituteCourses;
