import React from 'react';
import { 
  Settings, Code, Wrench, Target, AlertTriangle, ChevronDown, 
  RefreshCw, Plus, Lock, MoreVertical, CheckCircle2, AlertCircle, Save
} from 'lucide-react';
import './InstituteSkillsTaught.css';

const InstituteSkillsTaught = () => {
  return (
    <div className="institute-skills">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Settings size={24} />
          </div>
          <div>
            <h1>Skills Taught</h1>
            <p>Maintain a structured list of technical and practical skills currently being taught.</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="last-updated">
            <span className="icon">⏱</span>
            <div>
              <span className="label">Last Updated</span>
              <span className="time">26 Jun 2025, 10:45 AM</span>
            </div>
          </div>
          <div className="verification-status verified">
            <CheckCircle2 size={16} /> Verified
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green"><Settings size={20} /></div>
            <span>Total Skills</span>
          </div>
          <div className="metric-value">48</div>
          <div className="metric-trend positive">+6 from last quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Code size={20} /></div>
            <span>Technical Skills</span>
          </div>
          <div className="metric-value">32</div>
          <div className="metric-trend neutral">67% of total skills</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon purple"><Wrench size={20} /></div>
            <span>Practical Skills</span>
          </div>
          <div className="metric-value">16</div>
          <div className="metric-trend neutral">33% of total skills</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green-light"><Target size={20} /></div>
            <span>Industry-Aligned Skills</span>
          </div>
          <div className="metric-value">34</div>
          <div className="metric-trend neutral">71% alignment rate</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon red"><AlertTriangle size={20} /></div>
            <span>Skills Needing Update</span>
          </div>
          <div className="metric-value">8</div>
          <div className="metric-trend negative">+3 from last quarter</div>
        </div>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <label>Trade / Program</label>
          <div className="select-wrapper">
            <select><option>All</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Skill Category</label>
          <div className="select-wrapper">
            <select><option>All</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Skill Level</label>
          <div className="select-wrapper">
            <select><option>All</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Industry Sector</label>
          <div className="select-wrapper">
            <select><option>All</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <button className="reset-btn">
          <RefreshCw size={14} /> Reset Filters
        </button>
      </div>

      <div className="main-content-area">
        <div className="left-panel">
          <div className="skills-list-card">
            <div className="card-header">
              <div className="card-title">
                <Settings size={18} color="#3b82f6" />
                <h3>Skills List</h3>
              </div>
              <button className="primary-btn small">
                <Plus size={16} /> Add Skill
              </button>
            </div>
            
            <table className="skills-table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Related Program</th>
                  <th>Category</th>
                  <th>Skill Level</th>
                  <th>Practical Training</th>
                  <th>Industry Demand</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> PLC Programming</td>
                  <td>Electrical</td>
                  <td>Technical</td>
                  <td><span className="level-badge intermediate">Intermediate</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> CNC Programming</td>
                  <td>Mechanical</td>
                  <td>Technical</td>
                  <td><span className="level-badge intermediate">Intermediate</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="status-pill partial">Partial</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> Industrial Robotics</td>
                  <td>Automation</td>
                  <td>Technical</td>
                  <td><span className="level-badge beginner">Beginner</span></td>
                  <td>Limited</td>
                  <td><span className="demand-text very-high">Very High</span></td>
                  <td><span className="status-pill gap">Gap</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> Welding Technology</td>
                  <td>Mechanical</td>
                  <td>Practical</td>
                  <td><span className="level-badge intermediate">Intermediate</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> AutoCAD</td>
                  <td>Civil</td>
                  <td>Technical</td>
                  <td><span className="level-badge intermediate">Intermediate</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text medium">Medium</span></td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> 3D Printing</td>
                  <td>Automation</td>
                  <td>Technical</td>
                  <td><span className="level-badge beginner">Beginner</span></td>
                  <td>Limited</td>
                  <td><span className="demand-text emerging">Emerging</span></td>
                  <td><span className="status-pill emerging">Emerging</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> Quality Inspection</td>
                  <td>Mechanical</td>
                  <td>Practical</td>
                  <td><span className="level-badge intermediate">Intermediate</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text medium">Medium</span></td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
                <tr>
                  <td className="skill-name-cell"><Lock size={14} className="lock-icon" /> Electrical Fault Finding</td>
                  <td>Electrical</td>
                  <td>Technical</td>
                  <td><span className="level-badge advanced">Advanced</span></td>
                  <td>Yes</td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td><MoreVertical size={16} className="action-icon" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bottom-charts">
            <div className="chart-card">
              <div className="card-header">
                <div className="card-title">
                  <Target size={16} color="#3b82f6" />
                  <h4>Skill Coverage Overview</h4>
                </div>
              </div>
              <div className="coverage-content">
                <div className="donut-chart-wrapper">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="71, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="16" className="percentage">71%</text>
                    <text x="18" y="22" className="sub-text">Overall Coverage</text>
                  </svg>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="dot green"></span>
                    <span className="label">Covered Skills</span>
                    <span className="value">34 (71%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="dot yellow"></span>
                    <span className="label">Partially Covered</span>
                    <span className="value">8 (17%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="dot red"></span>
                    <span className="label">Not Covered</span>
                    <span className="value">6 (12%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="card-header">
                <h4>Skill Coverage by Category</h4>
              </div>
              <div className="bar-charts">
                <div className="bar-item">
                  <div className="bar-info">
                    <span className="bar-label">Technical</span>
                    <span className="bar-value">75%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
                </div>
                <div className="bar-item">
                  <div className="bar-info">
                    <span className="bar-label">Practical</span>
                    <span className="bar-value">62%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{width: '62%'}}></div></div>
                </div>
                <div className="bar-item">
                  <div className="bar-info">
                    <span className="bar-label">Soft Skills</span>
                    <span className="bar-value">48%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{width: '48%'}}></div></div>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="card-header">
                <h4>Top Uncovered Skills</h4>
              </div>
              <div className="uncovered-list">
                <div className="uncovered-item">
                  <AlertCircle size={14} className="icon-red" />
                  <span className="skill-name">Industrial Robotics</span>
                  <span className="skill-dept">Automation</span>
                </div>
                <div className="uncovered-item">
                  <AlertCircle size={14} className="icon-red" />
                  <span className="skill-name">Advanced CNC Programming</span>
                  <span className="skill-dept">Mechanical</span>
                </div>
                <div className="uncovered-item">
                  <AlertCircle size={14} className="icon-red" />
                  <span className="skill-name">IoT & Smart Manufacturing</span>
                  <span className="skill-dept">Electrical</span>
                </div>
                <div className="uncovered-item">
                  <AlertCircle size={14} className="icon-red" />
                  <span className="skill-name">Additive Manufacturing</span>
                  <span className="skill-dept">Mechanical</span>
                </div>
              </div>
              <a href="#" className="view-all-link">View All Uncovered Skills <ArrowRightIcon /></a>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="add-skill-form">
            <div className="form-header">
              <Plus size={18} color="#3b82f6" />
              <h3>Add New Skill</h3>
            </div>
            
            <div className="form-group">
              <label>Skill Name *</label>
              <input type="text" placeholder="e.g. PLC Programming" />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <div className="select-wrapper">
                <select><option>Select Category</option></select>
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="form-group">
              <label>Related Trade / Program *</label>
              <div className="select-wrapper">
                <select><option>Select Trade / Program</option></select>
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="form-group">
              <label>Skill Level *</label>
              <div className="select-wrapper">
                <select><option>Select Level</option></select>
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Theory Training (Hours)</label>
                <input type="text" placeholder="e.g. 40" />
              </div>
              <div className="form-group half">
                <label>Practical Training (Hours)</label>
                <input type="text" placeholder="e.g. 60" />
              </div>
            </div>

            <div className="form-row align-center">
              <div className="form-group toggle-group">
                <label>Lab Available</label>
                <div className="toggle-switch active">
                  <div className="toggle-knob"></div>
                </div>
              </div>
              <div className="form-group half">
                <label>Equipment Required</label>
                <input type="text" placeholder="e.g. PLC Trainer Kit, Multimeter" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Certification</label>
                <div className="select-wrapper">
                  <select><option>Select Certification</option></select>
                  <ChevronDown size={16} />
                </div>
              </div>
              <div className="form-group half">
                <label>Training Hours (Total)</label>
                <input type="text" placeholder="e.g. 120" />
              </div>
            </div>

            <div className="form-group">
              <label>Description (Optional)</label>
              <textarea placeholder="Add additional notes about this skill..." rows="3"></textarea>
            </div>

            <button className="primary-btn full-width">
              <Save size={16} /> Save Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default InstituteSkillsTaught;
