import React, { useState } from 'react';
import { 
  BookOpen, Users, Settings, AlertTriangle, ChevronDown, 
  Search, Download, Settings as SettingsIcon, PenTool,
  Zap, Wrench, Lock, CheckCircle2, ChevronRight, Edit3, ExternalLink,
  Calendar, FlaskConical, Cpu, MonitorPlay, Target, BarChart
} from 'lucide-react';
import './InstituteCourses.css';

const InstituteCourses = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  return (
    <div className="institute-courses">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <BookOpen size={24} />
          </div>
          <div>
            <h1>Courses & Curriculum</h1>
            <p>View and manage your institute's trades, diploma programs and curriculum.</p>
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
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green"><BookOpen size={20} /></div>
            <span>Active Trades / Programs</span>
          </div>
          <div className="metric-value">12</div>
          <div className="metric-trend neutral">out of 15 total</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Users size={20} /></div>
            <span>Total Students</span>
          </div>
          <div className="metric-value">1,248</div>
          <div className="metric-trend positive">+12% from last year</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon purple"><Settings size={20} /></div>
            <span>Skills Covered</span>
          </div>
          <div className="metric-value-row">
            <div className="metric-value">186</div>
            <div className="mini-donut">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="21" className="percentage">85%</text>
              </svg>
            </div>
          </div>
          <div className="metric-trend neutral">out of 220 total skills</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon orange"><AlertTriangle size={20} /></div>
            <span>Programs Requiring Update</span>
          </div>
          <div className="metric-value">3</div>
          <div className="metric-trend negative">needs curriculum revision</div>
        </div>
      </div>


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
                  <input type="text" placeholder="Search programs, trades or sectors..." />
                </div>
                <button className="outline-btn small">
                  <Download size={16} /> Export
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
                  <th>Skills Covered</th>
                  <th>Industry Alignment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="program-cell"><Wrench size={16} className="icon-blue" /> Fitter</td>
                  <td>ITI</td>
                  <td>Manufacturing</td>
                  <td>2 Years</td>
                  <td>120</td>
                  <td>18</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">82%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="program-cell"><SettingsIcon size={16} className="icon-blue" /> Machinist</td>
                  <td>ITI</td>
                  <td>Manufacturing</td>
                  <td>2 Years</td>
                  <td>95</td>
                  <td>16</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">78%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="program-cell"><Zap size={16} className="icon-blue" /> Electrician</td>
                  <td>ITI</td>
                  <td>Electrical</td>
                  <td>2 Years</td>
                  <td>110</td>
                  <td>20</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">85%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="program-cell"><PenTool size={16} className="icon-blue" /> Welder</td>
                  <td>ITI</td>
                  <td>Manufacturing</td>
                  <td>2 Years</td>
                  <td>85</td>
                  <td>14</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">70%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr className="active-row">
                  <td className="program-cell"><SettingsIcon size={16} className="icon-blue" /> Mechanical Engineering</td>
                  <td>Diploma</td>
                  <td>Manufacturing</td>
                  <td>3 Years</td>
                  <td>180</td>
                  <td>26</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="76, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">76%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="program-cell"><Zap size={16} className="icon-blue" /> Electrical Engineering</td>
                  <td>Diploma</td>
                  <td>Electrical</td>
                  <td>3 Years</td>
                  <td>150</td>
                  <td>24</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">88%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="program-cell"><MonitorPlay size={16} className="icon-blue" /> Computer Engineering</td>
                  <td>Diploma</td>
                  <td>IT & Electronics</td>
                  <td>3 Years</td>
                  <td>140</td>
                  <td>22</td>
                  <td>
                    <div className="alignment-donut">
                      <svg viewBox="0 0 36 36" className="circular-chart green">
                        <path className="circle" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="21.5" className="percentage">80%</text>
                      </svg>
                    </div>
                  </td>
                  <td><span className="status-pill active">Active</span></td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-panel">
          <div className="course-details-card">
            <div className="details-header">
              <div className="details-title-row">
                <h2>Course Details</h2>
              </div>
            </div>
            
            <div className="course-main-info">
              <div className="course-icon"><SettingsIcon size={24} /></div>
              <div className="course-title-group">
                <h3>Mechanical Engineering</h3>
                <div className="course-badges">
                  <span className="badge outline">Diploma</span>
                  <span className="badge outline">3 Years</span>
                  <span className="status-pill active">Active</span>
                </div>
              </div>
            </div>

            <div className="course-stats-row">
              <div className="stat-group">
                <span className="stat-label">Sector</span>
                <span className="stat-value">Manufacturing</span>
              </div>
              <div className="stat-group alignment-group">
                <div className="alignment-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="76, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="21.5" className="percentage">76%</text>
                  </svg>
                </div>
                <span className="stat-label">Industry Alignment</span>
              </div>
            </div>

            <button className="primary-btn full-width view-req-btn">
              View Industry Skill Requirements <ExternalLink size={16} />
            </button>

            <div className="custom-tabs">
              <button 
                className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum
              </button>
              <button 
                className={`tab-btn ${activeTab === 'subjects' ? 'active' : ''}`}
                onClick={() => setActiveTab('subjects')}
              >
                Subjects
              </button>
              <button 
                className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical Skills
              </button>
              <button 
                className={`tab-btn ${activeTab === 'practical' ? 'active' : ''}`}
                onClick={() => setActiveTab('practical')}
              >
                Practical Skills
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'curriculum' && (
                <div className="curriculum-details">
                  <div className="detail-section">
                    <div className="section-title">
                      <Users size={16} />
                      <h4>Curriculum Overview</h4>
                    </div>
                    <p>The curriculum is designed as per AICTE guidelines and industry standards, focusing on core mechanical engineering principles and practical training.</p>
                  </div>

                  <div className="detail-section">
                    <div className="section-title">
                      <Calendar size={16} />
                      <h4>Duration</h4>
                    </div>
                    <p>3 Years (6 Semesters)</p>
                  </div>

                  <div className="detail-section">
                    <div className="section-title">
                      <FlaskConical size={16} />
                      <h4>Lab Requirements</h4>
                    </div>
                    <p>Mechanical Workshop, CAD Lab, Thermal Engineering Lab, Fluid Mechanics Lab, Machine Tools Lab</p>
                  </div>

                  <div className="detail-section">
                    <div className="section-title">
                      <Wrench size={16} />
                      <h4>Equipment</h4>
                    </div>
                    <p>CNC Machines, Lathe Machine, Milling Machine, Welding Equipment, 3D Printer, Measuring Instruments</p>
                  </div>

                  <div className="detail-section">
                    <div className="section-title">
                      <Cpu size={16} />
                      <h4>Technical Skills</h4>
                    </div>
                    <ul className="bullet-list">
                      <li>CAD/CAM</li>
                      <li>CNC Programming</li>
                      <li>Mathematics & Engineering Drawing</li>
                      <li>Problem Solving</li>
                    </ul>
                  </div>

                  <div className="detail-section">
                    <div className="section-title">
                      <SettingsIcon size={16} />
                      <h4>Practical Skills</h4>
                    </div>
                    <ul className="bullet-list">
                      <li>Machine Operation</li>
                      <li>Measurement & Inspection</li>
                      <li>Assembly & Maintenance</li>
                      <li>Welding & Fabrication</li>
                    </ul>
                  </div>

                  <div className="detail-section highlight">
                    <div className="section-title">
                      <BarChart size={16} />
                      <h4>Industry Relevance</h4>
                    </div>
                    <p>Meets 76% of current industry skill requirements. High demand in automotive, manufacturing and production sectors.</p>
                  </div>
                </div>
              )}
            </div>

            <button className="primary-btn outline full-width update-btn">
              <Edit3 size={16} /> Update Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteCourses;
