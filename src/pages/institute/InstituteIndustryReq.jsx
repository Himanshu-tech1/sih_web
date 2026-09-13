import React from 'react';
import { 
  BarChart2, ChevronDown, RefreshCw, Briefcase, Target, 
  Lightbulb, AlertTriangle, Building2, ChevronRight, PenTool,
  Settings, Zap, Car, Wrench, ShieldCheck, FileText, Share2, Info
} from 'lucide-react';
import './InstituteIndustryReq.css';

const InstituteIndustryReq = () => {
  return (
    <div className="institute-industry-req">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <BarChart2 size={24} />
          </div>
          <div>
            <h1>Industry Requirements</h1>
            <p>Explore current industry demands to align your training programs with market needs.</p>
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

      <div className="filters-bar">
        <div className="filter-group">
          <label>District</label>
          <div className="select-wrapper">
            <select><option>Pune</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Industry Sector</label>
          <div className="select-wrapper">
            <select><option>All Sectors</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Industry</label>
          <div className="select-wrapper">
            <select><option>All Industries</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Job Role</label>
          <div className="select-wrapper">
            <select><option>All Roles</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Skill</label>
          <div className="select-wrapper">
            <select><option>All Skills</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Demand Level</label>
          <div className="select-wrapper">
            <select><option>All Levels</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Time Period</label>
          <div className="select-wrapper">
            <select><option>Last 6 Months</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <button className="reset-btn">
          <RefreshCw size={14} /> Reset
        </button>
      </div>


      <div className="main-content-area">
        <div className="left-panel">
          <div className="requirements-list-card">
            <div className="card-header">
              <div className="card-title">
                <BarChart2 size={18} color="#3b82f6" />
                <h3>Industry Requirements</h3>
              </div>
              <p className="card-subtitle">Latest industry demand for skills and job roles</p>
            </div>
            
            <table className="req-table">
              <thead>
                <tr>
                  <th>Job Role</th>
                  <th>Industry</th>
                  <th>Required Qualification</th>
                  <th>Required Skills</th>
                  <th>Demand</th>
                  <th>Growth</th>
                  <th>Training Coverage</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="active-row">
                  <td className="role-cell"><PenTool size={16} className="icon-blue" /> CNC Operator</td>
                  <td>Manufacturing</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">CNC</span>
                    <span className="skill-tag">CAD/CAM</span>
                  </td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="growth-text positive">↑ 12%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">75%</span>
                      <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><Settings size={16} className="icon-blue" /> PLC Technician</td>
                  <td>Automation</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">PLC</span>
                    <span className="skill-tag">Electrical</span>
                  </td>
                  <td><span className="demand-text very-high">Very High</span></td>
                  <td><span className="growth-text positive">↑ 18%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">45%</span>
                      <div className="progress-bar"><div className="progress orange" style={{width: '45%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><Car size={16} className="icon-blue" /> EV Technician</td>
                  <td>Automotive</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">EV Diagnostics</span>
                  </td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="growth-text positive">↑ 15%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">20%</span>
                      <div className="progress-bar"><div className="progress red" style={{width: '20%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><ShieldCheck size={16} className="icon-blue" /> Welding Inspector</td>
                  <td>Manufacturing</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">Welding</span>
                    <span className="skill-tag">NDT</span>
                  </td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="growth-text positive">↑ 10%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">65%</span>
                      <div className="progress-bar"><div className="progress" style={{width: '65%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><FileText size={16} className="icon-blue" /> Quality Control Inspector</td>
                  <td>Pharma</td>
                  <td>Diploma / Degree</td>
                  <td className="skills-cell">
                    <span className="skill-tag">QA</span>
                    <span className="skill-tag">Documentation</span>
                  </td>
                  <td><span className="demand-text medium">Medium</span></td>
                  <td><span className="growth-text positive">↑ 8%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">50%</span>
                      <div className="progress-bar"><div className="progress orange" style={{width: '50%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><Wrench size={16} className="icon-blue" /> Mechanical Maintenance</td>
                  <td>Manufacturing</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">Mechanical</span>
                    <span className="skill-tag">Troubleshooting</span>
                  </td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="growth-text positive">↑ 12%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">70%</span>
                      <div className="progress-bar"><div className="progress" style={{width: '70%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><Zap size={16} className="icon-blue" /> Solar PV Technician</td>
                  <td>Renewable Energy</td>
                  <td>ITI / Diploma</td>
                  <td className="skills-cell">
                    <span className="skill-tag">Solar Installation</span>
                    <span className="skill-tag">Electrical</span>
                  </td>
                  <td><span className="demand-text medium">Medium</span></td>
                  <td><span className="growth-text positive">↑ 9%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">45%</span>
                      <div className="progress-bar"><div className="progress orange" style={{width: '45%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
                <tr>
                  <td className="role-cell"><BarChart2 size={16} className="icon-blue" /> Data Analyst</td>
                  <td>IT / Services</td>
                  <td>Diploma / Degree</td>
                  <td className="skills-cell">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Excel</span>
                  </td>
                  <td><span className="demand-text high">High</span></td>
                  <td><span className="growth-text positive">↑ 14%</span></td>
                  <td>
                    <div className="coverage-bar-wrapper">
                      <span className="coverage-text">30%</span>
                      <div className="progress-bar"><div className="progress red" style={{width: '30%'}}></div></div>
                    </div>
                  </td>
                  <td><ChevronRight size={16} className="chevron-icon" /></td>
                </tr>
              </tbody>
            </table>
            
            <div className="table-footer">
              <span className="showing-text">Showing 8 of 32 requirements</span>
              <div className="pagination">
                <button className="page-btn"><ChevronRight size={16} style={{transform: 'rotate(180deg)'}} /></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="details-card">
            <div className="details-header">
              <div className="details-title-row">
                <h2>Requirement Details</h2>
              </div>
            </div>
            
            <div className="role-main-info">
              <div className="role-icon-large"><PenTool size={24} /></div>
              <div className="role-title-group">
                <h3>CNC Operator</h3>
                <span className="role-dept">Manufacturing Industry</span>
              </div>
              <span className="demand-badge high">High Demand</span>
            </div>

            <div className="detail-section">
              <h4>Basic Information</h4>
              <div className="info-grid">
                <div className="info-row">
                  <span className="info-label">Industry</span>
                  <span className="info-value">Manufacturing</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Job Role</span>
                  <span className="info-value">CNC Operator</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Required Qualification</span>
                  <span className="info-value">ITI / Diploma</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Skill Level</span>
                  <span className="info-value">Skilled (Level 3-4)</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h4>Required Skills</h4>
              <div className="skills-tags-container">
                <span className="skill-tag outline">CNC Programming</span>
                <span className="skill-tag outline">CAD/CAM</span>
                <span className="skill-tag outline">Machine Operation</span>
                <span className="skill-tag outline">Problem Solving</span>
              </div>
            </div>

            <div className="demand-comparison">
              <div className="demand-box">
                <span className="demand-label">Current Demand</span>
                <span className="demand-value orange">High</span>
                <span className="demand-sub">(1,000 - 5,000 vacancies)</span>
              </div>
              <div className="demand-box">
                <span className="demand-label">Future Demand (Next 3 Years)</span>
                <span className="demand-value red">Very High</span>
                <span className="demand-sub">(5,000+ vacancies)</span>
              </div>
            </div>

            <div className="detail-section">
              <h4>Industry Comments</h4>
              <div className="quote-box">
                <p>"CNC operators with CAD/CAM knowledge and multi-axis machine experience are in high demand. Preference is given to candidates with safety certifications and hands-on project experience."</p>
                <span className="quote-author">— HR Manager, Tata Motors (Pune)</span>
              </div>
            </div>

            <button className="primary-btn full-width">
              <Share2 size={16} /> Compare With Our Training
            </button>

            <div className="info-alert">
              <Info size={16} className="info-icon" />
              <p>This information is based on latest industry surveys and partner feedback (Q2 2025).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteIndustryReq;
