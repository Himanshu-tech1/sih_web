import React from 'react';
import { 
  Target, CheckCircle2, AlertTriangle, TrendingUp, Search, 
  Settings, PenTool, Cpu, Shield, ArrowUp, Briefcase, PlayCircle, 
  Lightbulb, ArrowRight, ChevronDown, MapPin, Building2
} from 'lucide-react';
import './StudentSkillGap.css';

const StudentSkillGap = () => {
  return (
    <div className="student-skill-gap">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Target size={24} />
          </div>
          <div>
            <h1>My Skill Gap</h1>
            <p>Compare your current skills with industry requirements and close the gap.</p>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default StudentSkillGap;
