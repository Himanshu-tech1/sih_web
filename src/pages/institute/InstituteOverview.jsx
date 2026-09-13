import React from 'react';
import { 
  Users, BookOpen, Settings, Target, AlertTriangle, Handshake, 
  ChevronDown, ArrowUpRight, Award, PenTool, Cpu, Zap, Car,
  FileText, Plus, Wrench, GraduationCap, Lightbulb
} from 'lucide-react';
import './InstituteOverview.css';

const InstituteOverview = () => {
  return (
    <div className="institute-overview">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <BuildingIcon />
          </div>
          <div>
            <h1>Institute Dashboard</h1>
            <p>Monitor your training programs and alignment with industry skill requirements.</p>
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
          <button className="year-selector">
            <span className="icon">📅</span>
            Academic Year 2024-25
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Users size={20} /></div>
            <span>Total Students</span>
          </div>
          <div className="metric-value">1,248</div>
          <div className="metric-trend positive">
            <ArrowUpRight size={14} /> +12% from last year
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><BookOpen size={20} /></div>
            <span>Active Courses / Trades</span>
          </div>
          <div className="metric-value">16</div>
          <div className="metric-trend positive">
            <ArrowUpRight size={14} /> +2 new this year
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green"><Settings size={20} /></div>
            <span>Skills Taught</span>
          </div>
          <div className="metric-value">42</div>
          <div className="metric-trend positive">
            <ArrowUpRight size={14} /> +5 new skills
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green-light"><Target size={20} /></div>
            <span>Industry-Aligned Skills</span>
          </div>
          <div className="metric-value">28</div>
          <div className="metric-trend neutral">
            67% of total skills
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon red"><AlertTriangle size={20} /></div>
            <span>Critical Skill Gaps</span>
          </div>
          <div className="metric-value">8</div>
          <div className="metric-trend negative">
            <ArrowUpRight size={14} /> +3 from last quarter
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon purple"><Handshake size={20} /></div>
            <span>Industry Partnerships</span>
          </div>
          <div className="metric-value">6</div>
          <div className="metric-trend positive">
            <ArrowUpRight size={14} /> +2 new this year
          </div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card demand-snapshot">
          <div className="card-header">
            <div className="card-title">
              <span className="icon-wrapper"><Award size={18} /></span>
              <h3>Industry Demand Snapshot</h3>
            </div>
            <a href="#" className="view-all">View All</a>
          </div>
          <p className="card-subtitle">Currently high-demand skills in the industry</p>
          
          <div className="demand-items">
            <div className="demand-item">
              <div className="demand-icon blue"><Cpu size={24} /></div>
              <span className="demand-name">PLC</span>
              <span className="demand-badge high">High Demand</span>
            </div>
            <div className="demand-item">
              <div className="demand-icon blue"><Settings size={24} /></div>
              <span className="demand-name">CNC</span>
              <span className="demand-badge high">High Demand</span>
            </div>
            <div className="demand-item">
              <div className="demand-icon blue"><Zap size={24} /></div>
              <span className="demand-name">Robotics</span>
              <span className="demand-badge high">High Demand</span>
            </div>
            <div className="demand-item">
              <div className="demand-icon blue"><Wrench size={24} /></div>
              <span className="demand-name">Automation</span>
              <span className="demand-badge high">High Demand</span>
            </div>
            <div className="demand-item">
              <div className="demand-icon orange"><Car size={24} /></div>
              <span className="demand-name">EV Technology</span>
              <span className="demand-badge growing">Growing</span>
            </div>
          </div>
        </div>

        <div className="chart-card training-coverage">
          <div className="card-header">
            <div className="card-title">
              <span className="icon-wrapper blue"><Target size={18} /></span>
              <h3>Training Coverage</h3>
            </div>
          </div>
          <p className="card-subtitle">Percentage of industry-demanded skills covered by your institute</p>
          
          <div className="donut-chart-container">
            <div className="donut-chart">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray="68, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="18" className="percentage">68%</text>
                <text x="18" y="23" className="sub-text">Coverage</text>
              </svg>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="dot green"></span>
                <span className="label">Covered</span>
                <span className="value">68%</span>
                <span className="sub-value">29 skills</span>
              </div>
              <div className="legend-item">
                <span className="dot gray"></span>
                <span className="label">Not Covered</span>
                <span className="value">32%</span>
                <span className="sub-value">13 skills</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card gap-summary">
          <div className="card-header">
            <div className="card-title">
              <span className="icon-wrapper red"><AlertTriangle size={18} /></span>
              <h3>Skill Gap Summary</h3>
            </div>
          </div>
          
          <div className="donut-chart-container">
            <div className="donut-chart multi">
               <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-segment green" strokeDasharray="52, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle-segment orange" strokeDasharray="29, 100" strokeDashoffset="-52" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle-segment red" strokeDasharray="19, 100" strokeDashoffset="-81" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="16" className="sub-text">Total Skills</text>
                <text x="18" y="22" className="percentage">42</text>
              </svg>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="dot red"></span>
                <span className="label">Critical Gap</span>
                <span className="value">8</span>
                <span className="sub-value">(19%)</span>
              </div>
              <div className="legend-item">
                <span className="dot orange"></span>
                <span className="label">Moderate Gap</span>
                <span className="value">12</span>
                <span className="sub-value">(29%)</span>
              </div>
              <div className="legend-item">
                <span className="dot green"></span>
                <span className="label">Aligned</span>
                <span className="value">22</span>
                <span className="sub-value">(52%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="list-card recent-requirements">
          <div className="card-header">
            <div className="card-title">
              <span className="icon-wrapper blue"><Briefcase size={18} /></span>
              <h3>Recent Industry Requirements</h3>
            </div>
            <a href="#" className="view-all">View All</a>
          </div>
          <p className="card-subtitle">Latest job roles and skills demanded by industry partners</p>
          
          <div className="table-responsive">
            <table className="requirements-table">
              <thead>
                <tr>
                  <th>Job Role</th>
                  <th>Required Skills</th>
                  <th>Demand Level</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="role-info">
                      <div className="role-icon"><PenTool size={16} /></div>
                      <div>
                        <div className="role-name">PLC Technician</div>
                        <div className="role-dept">Manufacturing</div>
                      </div>
                    </div>
                  </td>
                  <td className="skills-cell">PLC, Electrical, Troubleshooting</td>
                  <td><span className="badge red-light">High</span></td>
                  <td className="date-cell">26 Jun 2025</td>
                </tr>
                <tr>
                  <td>
                    <div className="role-info">
                      <div className="role-icon"><Settings size={16} /></div>
                      <div>
                        <div className="role-name">CNC Programmer</div>
                        <div className="role-dept">Automotive</div>
                      </div>
                    </div>
                  </td>
                  <td className="skills-cell">CNC Programming, CAD/CAM, GD&T</td>
                  <td><span className="badge red-light">High</span></td>
                  <td className="date-cell">25 Jun 2025</td>
                </tr>
                <tr>
                  <td>
                    <div className="role-info">
                      <div className="role-icon"><Zap size={16} /></div>
                      <div>
                        <div className="role-name">Robotics Technician</div>
                        <div className="role-dept">Electronics</div>
                      </div>
                    </div>
                  </td>
                  <td className="skills-cell">Robotics, Automation, PLC</td>
                  <td><span className="badge orange-light">Medium</span></td>
                  <td className="date-cell">24 Jun 2025</td>
                </tr>
                <tr>
                  <td>
                    <div className="role-info">
                      <div className="role-icon"><Car size={16} /></div>
                      <div>
                        <div className="role-name">EV Service Technician</div>
                        <div className="role-dept">Automotive</div>
                      </div>
                    </div>
                  </td>
                  <td className="skills-cell">EV Systems, Electrical, Diagnostics</td>
                  <td><span className="badge red-light">High</span></td>
                  <td className="date-cell">22 Jun 2025</td>
                </tr>
                <tr>
                  <td>
                    <div className="role-info">
                      <div className="role-icon"><Wrench size={16} /></div>
                      <div>
                        <div className="role-name">Maintenance Engineer</div>
                        <div className="role-dept">Manufacturing</div>
                      </div>
                    </div>
                  </td>
                  <td className="skills-cell">Mechanical, Pneumatics, Problem Solving</td>
                  <td><span className="badge orange-light">Medium</span></td>
                  <td className="date-cell">20 Jun 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="list-card recommended-actions">
          <div className="card-header">
            <div className="card-title">
              <span className="icon-wrapper blue"><Lightbulb size={18} /></span>
              <h3>Recommended Actions</h3>
            </div>
            <a href="#" className="view-all">View All</a>
          </div>
          <p className="card-subtitle">Suggested steps to improve industry alignment</p>
          
          <div className="actions-list">
            <div className="action-item">
              <div className="action-icon blue"><FileText size={20} /></div>
              <div className="action-content">
                <h4>Curriculum Update</h4>
                <p>Update CNC and PLC modules as per latest industry standards.</p>
              </div>
              <span className="priority-badge high">High Priority</span>
            </div>
            
            <div className="action-item">
              <div className="action-icon blue"><Plus size={20} /></div>
              <div className="action-content">
                <h4>New Skill Module</h4>
                <p>Add EV Technology and Battery Management module.</p>
              </div>
              <span className="priority-badge high">High Priority</span>
            </div>
            
            <div className="action-item">
              <div className="action-icon gray"><Wrench size={20} /></div>
              <div className="action-content">
                <h4>Lab Upgrade</h4>
                <p>Upgrade CNC machines and robotics lab equipment.</p>
              </div>
              <span className="priority-badge medium">Medium Priority</span>
            </div>
            
            <div className="action-item">
              <div className="action-icon gray"><GraduationCap size={20} /></div>
              <div className="action-content">
                <h4>Faculty Training</h4>
                <p>Organize industry-led training for faculty on automation.</p>
              </div>
              <span className="priority-badge medium">Medium Priority</span>
            </div>
            
            <div className="action-item">
              <div className="action-icon gray"><Handshake size={20} /></div>
              <div className="action-content">
                <h4>Industry Collaboration</h4>
                <p>Partner with 2-3 new industries for internships and live projects.</p>
              </div>
              <span className="priority-badge low">Low Priority</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const Briefcase = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export default InstituteOverview;
