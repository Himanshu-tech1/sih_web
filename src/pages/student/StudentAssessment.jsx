import React, { useState } from 'react';
import { 
  ClipboardList, Info, CheckCircle2, Calendar, Settings, Wrench, Monitor, Users, ArrowLeft, ArrowRight, Lightbulb, Trophy, AlertCircle, BarChart2, Check, Target, AlertTriangle, TrendingUp, Search, PenTool, Cpu, Shield, ArrowUp, Briefcase, PlayCircle, ChevronDown, MapPin, Building2
} from 'lucide-react';
import './StudentAssessment.css';

const StudentAssessment = () => {
  const [selectedOption, setSelectedOption] = useState('B');
  const [activeTab, setActiveTab] = useState('assessment');

  return (
    <div className="student-assessment">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <ClipboardList size={24} />
          </div>
          <div>
            <h1>Skill Assessment</h1>
            <p>Assess your current skills and track your progress.</p>
          </div>
        </div>
        <a href="#" className="how-it-works"><Info size={16} /> How it works?</a>
      </div>

      
      {/* View Toggle Tabs */}
      <div className="view-toggle-tabs" style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #e2e8f0', marginBottom: '24px' }}>
        <button 
          onClick={() => setActiveTab('assessment')}
          style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'assessment' ? '2px solid #3b82f6' : '2px solid transparent', color: activeTab === 'assessment' ? '#3b82f6' : '#64748b', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
        >
          Take Assessment
        </button>
        <button 
          onClick={() => setActiveTab('skill-gap')}
          style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'skill-gap' ? '2px solid #3b82f6' : '2px solid transparent', color: activeTab === 'skill-gap' ? '#3b82f6' : '#64748b', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
        >
          My Skill Gap
        </button>
      </div>

      {activeTab === 'assessment' && (
        <>

      {/* Top Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="progress-circle-large">
            <svg viewBox="0 0 36 36" className="circular-chart green">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="21.5" className="percentage">60%</text>
            </svg>
          </div>
          <div className="metric-details">
            <span className="metric-label">Assessment Progress</span>
            <span className="metric-sub">3 of 5 skills completed</span>
            <div className="mini-progress"><div className="progress green" style={{width: '60%'}}></div></div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><ClipboardList size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Skills to Assess</span>
            <span className="metric-value">2</span>
            <span className="metric-sub">remaining</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box green"><CheckCircle2 size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Completed Assessments</span>
            <span className="metric-value">3</span>
            <span className="metric-sub">of 5 total</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><Calendar size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Last Assessment Date</span>
            <span className="metric-value date">16 Jun 2025</span>
            <span className="metric-sub">PLC Programming</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h3 className="section-title">Skill Categories</h3>
        <p className="section-subtitle">Select a category to start assessment</p>
        
        <div className="category-tabs">
          <button className="category-tab active">
            <Settings size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Technical Skills</span>
              <span className="cat-count">2 skills</span>
            </div>
          </button>
          
          <button className="category-tab">
            <Wrench size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Practical Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Monitor size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Tools & Equipment</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Monitor size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Digital Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Users size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Workplace Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>
        </div>
      </div>

      <div className="assessment-main">
        <div className="left-panel">
          <a href="#" className="back-link"><ArrowLeft size={14} /> Back to Skills</a>
          
          <div className="quiz-card">
            <div className="quiz-header">
              <div className="quiz-title">
                <div className="icon-wrapper blue"><Settings size={18} /></div>
                <h2>PLC Programming</h2>
                <span className="badge-light blue">Technical Skills</span>
              </div>
              <div className="question-progress">
                <span className="q-count">Question 4 of 10</span>
                <div className="q-bar"><div className="progress blue" style={{width: '40%'}}></div></div>
              </div>
            </div>

            <div className="quiz-body">
              <span className="q-label">Question / Task</span>
              <p className="question-text">
                Which of the following is the correct output instruction in ladder logic to turn on a motor when the start button is pressed?
              </p>

              <div className="options-list">
                <div className={`option-item ${selectedOption === 'A' ? 'selected' : ''}`} onClick={() => setSelectedOption('A')}>
                  <div className="radio-circle">{selectedOption === 'A' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">A.</span>
                  <span className="opt-text">X0 — ( ) M0</span>
                </div>
                <div className={`option-item ${selectedOption === 'B' ? 'selected' : ''}`} onClick={() => setSelectedOption('B')}>
                  <div className="radio-circle">{selectedOption === 'B' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">B.</span>
                  <span className="opt-text">X0 — ( ) Y0</span>
                </div>
                <div className={`option-item ${selectedOption === 'C' ? 'selected' : ''}`} onClick={() => setSelectedOption('C')}>
                  <div className="radio-circle">{selectedOption === 'C' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">C.</span>
                  <span className="opt-text">M0 — ( ) Y0</span>
                </div>
                <div className={`option-item ${selectedOption === 'D' ? 'selected' : ''}`} onClick={() => setSelectedOption('D')}>
                  <div className="radio-circle">{selectedOption === 'D' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">D.</span>
                  <span className="opt-text">X0 — ( ) T0</span>
                </div>
              </div>

              <div className="hint-box">
                <Lightbulb size={20} className="hint-icon" />
                <div className="hint-content">
                  <span className="hint-title">Hint</span>
                  <p>The start button is typically connected to an input (X) and the motor output is an output (Y).</p>
                </div>
              </div>
            </div>

            <div className="quiz-footer">
              <button className="outline-btn"><ArrowLeft size={16} /> Previous</button>
              <div className="right-actions">
                <button className="primary-btn">Next <ArrowRight size={16} /></button>
                <button className="text-btn submit"><Check size={16} /> Submit Assessment</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="result-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <Trophy size={18} className="icon-blue" />
                <h3>Assessment Result</h3>
              </div>
            </div>

            <div className="result-body">
              <div className="score-section">
                <div className="result-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="donut-text">
                    <span className="val">65%</span>
                    <span className="lbl">Score</span>
                  </div>
                </div>
                
                <div className="result-details">
                  <h4>PLC Programming</h4>
                  <div className="bar-wrapper">
                    <div className="progress-bar"><div className="progress blue" style={{width: '65%'}}></div></div>
                    <span>65%</span>
                  </div>
                  <div className="level-info">
                    <span className="lvl-label">Skill Level</span>
                    <span className="level-badge intermediate">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="feedback-section">
                <div className="feedback-box strengths">
                  <div className="box-title">
                    <CheckCircle2 size={16} /> Strengths
                  </div>
                  <ul>
                    <li>Basic PLC operation</li>
                  </ul>
                </div>

                <div className="feedback-box improvement">
                  <div className="box-title">
                    <AlertCircle size={16} /> Improvement Area
                  </div>
                  <ul>
                    <li>PLC programming and troubleshooting</li>
                  </ul>
                </div>
              </div>

              <div className="result-actions">
                <button className="outline-btn full-width"><BarChart2 size={16} /> View Skill Gap</button>
                <button className="primary-btn full-width"><ClipboardList size={16} /> Retake Assessment</button>
              </div>
            </div>
          </div>
        </div>
      
        </>
      )}

      {activeTab === 'skill-gap' && (
        <>
          {/* Top Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-card score-card">
          <div className="score-donut-wrap">
             <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="21.5" className="percentage">68%</text>
              </svg>
          </div>
          <div className="score-info">
            <span className="metric-label">Overall Skill Score</span>
            <span className="trend positive"><ArrowUp size={12} /> +5% <span className="dim">from last month</span></span>
          </div>
        </div>

        <div className="metric-card progress-card">
          <div className="metric-header">
            <div className="metric-icon green"><CheckCircle2 size={16} /></div>
            <div className="metric-text">
              <span className="metric-label">Skills Matched</span>
              <div className="metric-val">
                <span className="val">8</span> <span className="sub">/ 12</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar"><div className="progress green" style={{width: '67%'}}></div></div>
            <span className="pct">67%</span>
          </div>
        </div>

        <div className="metric-card progress-card">
          <div className="metric-header">
            <div className="metric-icon red"><AlertTriangle size={16} /></div>
            <div className="metric-text">
              <span className="metric-label">Critical Gaps</span>
              <div className="metric-val">
                <span className="val">3</span> <span className="sub">/ 12</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar"><div className="progress red" style={{width: '25%'}}></div></div>
            <span className="pct">25%</span>
          </div>
        </div>

        <div className="metric-card progress-card">
          <div className="metric-header">
            <div className="metric-icon orange"><AlertTriangle size={16} /></div>
            <div className="metric-text">
              <span className="metric-label">Moderate Gaps</span>
              <div className="metric-val">
                <span className="val">4</span> <span className="sub">/ 12</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar"><div className="progress orange" style={{width: '33%'}}></div></div>
            <span className="pct">33%</span>
          </div>
        </div>

        <div className="metric-card progress-card">
          <div className="metric-header">
            <div className="metric-icon blue"><TrendingUp size={16} /></div>
            <div className="metric-text">
              <span className="metric-label">Skills to Improve</span>
              <div className="metric-val">
                <span className="val">6</span> <span className="sub">/ 12</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar"><div className="progress blue" style={{width: '50%'}}></div></div>
            <span className="pct">50%</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="left-column">
          
          {/* Required vs Current Bar Chart */}
          <div className="content-card">
            <div className="card-header border-bottom">
              <h3>Required Skill vs Current Skill</h3>
              <div className="card-actions">
                <select className="simple-select">
                  <option>All Skills</option>
                </select>
              </div>
            </div>
            
            <div className="comparison-chart-container">
              <div className="legend-row">
                <span className="legend-item"><span className="dot blue-dark"></span> Industry Requirement</span>
                <span className="legend-item"><span className="dot blue-light"></span> My Current Skill</span>
              </div>

              <div className="bar-charts-list">
                <div className="bar-chart-item">
                  <div className="skill-icon-name">
                    <div className="s-icon blue"><Settings size={18} /></div>
                    <span className="s-name">PLC Programming</span>
                  </div>
                  <div className="bars-area">
                    <div className="bar-row">
                      <div className="bar blue-dark" style={{width: '90%'}}></div>
                      <span className="bar-val">90%</span>
                    </div>
                    <div className="bar-row mt">
                      <div className="bar blue-light" style={{width: '55%'}}></div>
                      <span className="bar-val">55%</span>
                    </div>
                  </div>
                  <div className="gap-badge red">Gap: 35%</div>
                </div>

                <div className="bar-chart-item">
                  <div className="skill-icon-name">
                    <div className="s-icon blue"><Settings size={18} /></div>
                    <span className="s-name">CNC Programming</span>
                  </div>
                  <div className="bars-area">
                    <div className="bar-row">
                      <div className="bar blue-dark" style={{width: '80%'}}></div>
                      <span className="bar-val">80%</span>
                    </div>
                    <div className="bar-row mt">
                      <div className="bar blue-light" style={{width: '40%'}}></div>
                      <span className="bar-val">40%</span>
                    </div>
                  </div>
                  <div className="gap-badge red">Gap: 40%</div>
                </div>

                <div className="bar-chart-item">
                  <div className="skill-icon-name">
                    <div className="s-icon blue"><PenTool size={18} /></div>
                    <span className="s-name">CAD</span>
                  </div>
                  <div className="bars-area">
                    <div className="bar-row">
                      <div className="bar blue-dark" style={{width: '70%'}}></div>
                      <span className="bar-val">70%</span>
                    </div>
                    <div className="bar-row mt">
                      <div className="bar blue-light" style={{width: '75%'}}></div>
                      <span className="bar-val">75%</span>
                    </div>
                  </div>
                  <div className="gap-badge green">Matched</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="content-card">
            <div className="card-header border-bottom">
              <h3>Skill Gap Analysis</h3>
              <div className="card-actions">
                <select className="simple-select mr">
                  <option>All Skills</option>
                </select>
                <div className="search-box">
                  <Search size={14} />
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
            
            <table className="gap-table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Required Level</th>
                  <th>Current Level</th>
                  <th>Gap</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="skill-col"><Settings size={16} className="t-icon" /> PLC Programming</td>
                  <td><span className="lvl-text blue">Advanced</span></td>
                  <td>
                    <span className="lvl-text orange">Intermediate</span>
                    <div className="mini-bar"><div className="fill orange" style={{width: '60%'}}></div></div>
                  </td>
                  <td><span className="gap-pct red">35%</span></td>
                  <td><span className="priority red">High</span></td>
                  <td><button className="primary-btn sm">Improve Skill <ArrowRight size={12}/></button></td>
                </tr>
                <tr>
                  <td className="skill-col"><Settings size={16} className="t-icon" /> CNC Programming</td>
                  <td><span className="lvl-text blue">Advanced</span></td>
                  <td>
                    <span className="lvl-text blue">Beginner</span>
                    <div className="mini-bar"><div className="fill blue" style={{width: '30%'}}></div></div>
                  </td>
                  <td><span className="gap-pct red">40%</span></td>
                  <td><span className="priority red">High</span></td>
                  <td><button className="primary-btn sm">Improve Skill <ArrowRight size={12}/></button></td>
                </tr>
                <tr>
                  <td className="skill-col"><PenTool size={16} className="t-icon" /> CAD</td>
                  <td><span className="lvl-text blue">Advanced</span></td>
                  <td>
                    <span className="lvl-text blue">Advanced</span>
                    <div className="mini-bar"><div className="fill blue" style={{width: '100%'}}></div></div>
                  </td>
                  <td><span className="gap-pct green">5%</span></td>
                  <td><span className="priority green">Low</span></td>
                  <td><button className="outline-btn sm">View Details <ArrowRight size={12}/></button></td>
                </tr>
                <tr>
                  <td className="skill-col"><Shield size={16} className="t-icon" /> Electrical Safety</td>
                  <td><span className="lvl-text orange">Intermediate</span></td>
                  <td>
                    <span className="lvl-text blue">Beginner</span>
                    <div className="mini-bar"><div className="fill blue" style={{width: '30%'}}></div></div>
                  </td>
                  <td><span className="gap-pct red">35%</span></td>
                  <td><span className="priority red">High</span></td>
                  <td><button className="outline-btn sm">Take Assessment <ArrowRight size={12}/></button></td>
                </tr>
                <tr>
                  <td className="skill-col"><Settings size={16} className="t-icon" /> Mechanical Drawing</td>
                  <td><span className="lvl-text orange">Intermediate</span></td>
                  <td>
                    <span className="lvl-text orange">Intermediate</span>
                    <div className="mini-bar"><div className="fill orange" style={{width: '60%'}}></div></div>
                  </td>
                  <td><span className="gap-pct green">0%</span></td>
                  <td><span className="priority green">Matched</span></td>
                  <td><button className="outline-btn sm">View Details <ArrowRight size={12}/></button></td>
                </tr>
                <tr>
                  <td className="skill-col"><Cpu size={16} className="t-icon" /> Basic Electronics</td>
                  <td><span className="lvl-text blue">Beginner</span></td>
                  <td>
                    <span className="lvl-text blue">Beginner</span>
                    <div className="mini-bar"><div className="fill blue" style={{width: '30%'}}></div></div>
                  </td>
                  <td><span className="gap-pct green">0%</span></td>
                  <td><span className="priority green">Matched</span></td>
                  <td><button className="outline-btn sm">View Details <ArrowRight size={12}/></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-column">
          
          <div className="content-card">
            <div className="card-header pb-0">
              <h3 className="section-title">Why is this skill important?</h3>
            </div>
            <div className="info-body">
              <div className="skill-focus-header">
                <Settings size={20} className="icon-blue" />
                <h4>PLC Programming</h4>
              </div>
              <p className="desc-text">
                PLC (Programmable Logic Controller) programming is essential for automation in manufacturing, automotive, and electrical industries. It helps in controlling machines, improving efficiency and reducing manual work.
              </p>
              
              <div className="demand-section">
                <h5 className="demand-title"><Briefcase size={14} /> Industry / Job Demand</h5>
                <div className="demand-item">
                  <div className="d-icon"><Building2 size={14} /></div>
                  <span className="d-name">Manufacturing Industry</span>
                  <span className="d-badge orange">High Demand</span>
                </div>
                <div className="demand-item">
                  <div className="d-icon"><Target size={14} /></div>
                  <span className="d-name">Automation Technician</span>
                  <span className="d-badge red">Very High Demand</span>
                </div>
              </div>
              
              <a href="#" className="link-action">View Related Jobs & Industries <ArrowRight size={14} /></a>
            </div>
          </div>

          <div className="content-card bg-light">
            <div className="card-header bg-transparent border-bottom">
              <div className="title-row">
                <Lightbulb size={18} className="icon-blue" />
                <h3>Recommended Learning Path</h3>
              </div>
              <a href="#" className="view-all">View All <ArrowRight size={12}/></a>
            </div>
            
            <div className="learning-path-list">
              <div className="path-item">
                <div className="p-icon"><Briefcase size={16} /></div>
                <div className="p-info">
                  <h4>PLC Programming (Advanced)</h4>
                  <span className="p-meta">Online Course • 20 hours</span>
                </div>
                <button className="primary-btn sm">Start Learning</button>
              </div>

              <div className="path-item">
                <div className="p-icon"><Settings size={16} /></div>
                <div className="p-info">
                  <h4>Industrial Automation</h4>
                  <span className="p-meta">Video Course • 15 hours</span>
                </div>
                <button className="primary-btn sm">Start Learning</button>
              </div>

              <div className="path-item">
                <div className="p-icon"><PenTool size={16} /></div>
                <div className="p-info">
                  <h4>Electrical Systems</h4>
                  <span className="p-meta">Course • 12 hours</span>
                </div>
                <button className="primary-btn sm">Start Learning</button>
              </div>
            </div>

            <div className="keep-improving-banner">
              <div className="banner-icon"><TrendingUp size={20} /></div>
              <div className="banner-text">
                <h4>Keep Improving!</h4>
                <p>Close your skill gaps and get closer to your dream career.</p>
                <button className="primary-btn full-width mt-2">View Learning Recommendations <ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

        </div>
      
        </>
      )}
</div>
    </div>
  );
};

export default StudentAssessment;
