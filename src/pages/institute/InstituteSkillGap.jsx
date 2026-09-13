import React from 'react';
import { 
  Scale, ChevronDown, AlertTriangle, RefreshCw, FileText, Download,
  CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownRight, User, Settings, Zap, Car, BookOpen, Clock, Hexagon, Crosshair
} from 'lucide-react';
import './InstituteSkillGap.css';

const InstituteSkillGap = () => {
  return (
    <div className="institute-skill-gap">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Scale size={24} />
          </div>
          <div>
            <h1>Skill Gap & Alignment</h1>
            <p>Compare what industries require with what your institute currently teaches.</p>
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
        <div className="metric-card highlight">
          <div className="metric-header">
            <span>Overall Industry Alignment</span>
          </div>
          <div className="metric-value-row">
            <div className="alignment-donut-large">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="21.5" className="percentage">68%</text>
              </svg>
            </div>
            <div className="metric-info">
              <div className="metric-title">Overall Industry<br/>Alignment</div>
              <div className="metric-trend positive"><ArrowUpRight size={14} /> +12% from last quarter</div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon red"><AlertTriangle size={20} /></div>
            <span>Critical Skill Gaps</span>
          </div>
          <div className="metric-value">12</div>
          <div className="metric-trend negative"><ArrowUpRight size={14} /> +3 from last quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon orange"><AlertCircle size={20} /></div>
            <span>Partial Alignment</span>
          </div>
          <div className="metric-value">18</div>
          <div className="metric-trend positive"><ArrowDownRight size={14} /> -5 from last quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon green"><CheckCircle2 size={20} /></div>
            <span>Fully Aligned Skills</span>
          </div>
          <div className="metric-value">28</div>
          <div className="metric-trend positive"><ArrowUpRight size={14} /> +7 from last quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><FileText size={20} /></div>
            <span>Skills Requiring Action</span>
          </div>
          <div className="metric-value">20</div>
          <div className="metric-trend negative"><ArrowUpRight size={14} /> +4 from last quarter</div>
        </div>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <label>Trade</label>
          <div className="select-wrapper">
            <select><option>All Trades</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Program</label>
          <div className="select-wrapper">
            <select><option>All Programs</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label>Sector</label>
          <div className="select-wrapper">
            <select><option>All Sectors</option></select>
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
          <label>District</label>
          <div className="select-wrapper">
            <select><option>Pune</option></select>
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
        <button className="reset-btn">
          <RefreshCw size={14} /> Reset Filters
        </button>
      </div>

      <div className="main-content-area">
        <div className="left-panel">
          
          <div className="chart-section-card">
            <div className="card-header">
              <div className="card-title">
                <div className="icon-wrapper blue"><Scale size={18} /></div>
                <div>
                  <h3>Industry Demand vs Institute Training Coverage</h3>
                  <p className="card-subtitle">See how well your training programs match industry demand for key skills.</p>
                </div>
              </div>
              <div className="chart-toggles">
                <button className="toggle-btn active">Bar Chart</button>
                <button className="toggle-btn">Donut Chart</button>
              </div>
            </div>
            
            <div className="chart-legend-top">
              <span className="legend-item"><span className="dot blue"></span> Industry Demand</span>
              <span className="legend-item"><span className="dot light-blue"></span> Institute Coverage</span>
              <span className="legend-item"><span className="dot red"></span> Gap</span>
            </div>

            <div className="bar-chart-container">
              {/* Custom CSS Bar Chart */}
              <div className="bar-group">
                <div className="bar-labels">90%</div>
                <div className="bar-wrapper">
                  <div className="bar blue" style={{height: '90%'}}></div>
                </div>
                <div className="bar-labels">45%</div>
                <div className="bar-wrapper">
                  <div className="bar light-blue" style={{height: '45%'}}></div>
                </div>
                <div className="bar-labels">45%</div>
                <div className="bar-wrapper">
                  <div className="bar red" style={{height: '45%'}}></div>
                </div>
                <div className="x-label">
                  <strong>PLC</strong>
                  <span className="gap-badge high">High Gap</span>
                </div>
              </div>

              <div className="bar-group">
                <div className="bar-labels">80%</div>
                <div className="bar-wrapper">
                  <div className="bar blue" style={{height: '80%'}}></div>
                </div>
                <div className="bar-labels">20%</div>
                <div className="bar-wrapper">
                  <div className="bar light-blue" style={{height: '20%'}}></div>
                </div>
                <div className="bar-labels">60%</div>
                <div className="bar-wrapper">
                  <div className="bar red" style={{height: '60%'}}></div>
                </div>
                <div className="x-label">
                  <strong>Robotics</strong>
                  <span className="gap-badge high">High Gap</span>
                </div>
              </div>

              <div className="bar-group">
                <div className="bar-labels">90%</div>
                <div className="bar-wrapper">
                  <div className="bar blue" style={{height: '90%'}}></div>
                </div>
                <div className="bar-labels">75%</div>
                <div className="bar-wrapper">
                  <div className="bar light-blue" style={{height: '75%'}}></div>
                </div>
                <div className="bar-labels">15%</div>
                <div className="bar-wrapper">
                  <div className="bar red" style={{height: '15%'}}></div>
                </div>
                <div className="x-label">
                  <strong>CNC</strong>
                  <span className="gap-badge partial">Partial Gap</span>
                </div>
              </div>

              <div className="bar-group">
                <div className="bar-labels">85%</div>
                <div className="bar-wrapper">
                  <div className="bar blue" style={{height: '85%'}}></div>
                </div>
                <div className="bar-labels">20%</div>
                <div className="bar-wrapper">
                  <div className="bar light-blue" style={{height: '20%'}}></div>
                </div>
                <div className="bar-labels">65%</div>
                <div className="bar-wrapper">
                  <div className="bar red" style={{height: '65%'}}></div>
                </div>
                <div className="x-label">
                  <strong>EV Technology</strong>
                  <span className="gap-badge high">High Gap</span>
                </div>
              </div>
            </div>
          </div>

          <div className="table-section-card">
            <div className="card-header">
              <div className="card-title">
                <div className="icon-wrapper blue"><FileText size={18} /></div>
                <div>
                  <h3>Skills Gap Analysis</h3>
                  <p className="card-subtitle">Detailed comparison of industry demand vs institute coverage.</p>
                </div>
              </div>
              <button className="primary-btn small">
                <Download size={14} /> Export Report
              </button>
            </div>

            <table className="analysis-table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Industry Demand <ChevronDown size={12} className="sort-icon"/></th>
                  <th>Institute Coverage <ChevronDown size={12} className="sort-icon"/></th>
                  <th>Gap <ChevronDown size={12} className="sort-icon"/></th>
                  <th>Status <ChevronDown size={12} className="sort-icon"/></th>
                  <th>Recommended Action <ChevronDown size={12} className="sort-icon"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="skill-cell"><User size={16} className="icon-blue" /> PLC Programming</td>
                  <td>
                    <div className="progress-cell">
                      <span>90%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '90%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>45%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '45%'}}></div></div>
                    </div>
                  </td>
                  <td>45%</td>
                  <td><span className="status-pill critical">Critical Gap</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Add Skill Module</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="skill-cell"><Zap size={16} className="icon-blue" /> Robotics</td>
                  <td>
                    <div className="progress-cell">
                      <span>80%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '80%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>20%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '20%'}}></div></div>
                    </div>
                  </td>
                  <td>60%</td>
                  <td><span className="status-pill critical">Critical Gap</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Upgrade Lab</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="skill-cell"><Settings size={16} className="icon-blue" /> CNC Programming</td>
                  <td>
                    <div className="progress-cell">
                      <span>90%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '90%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>75%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '75%'}}></div></div>
                    </div>
                  </td>
                  <td>15%</td>
                  <td><span className="status-pill partial">Partial</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Increase Practical Training</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="skill-cell"><Car size={16} className="icon-blue" /> EV Technology</td>
                  <td>
                    <div className="progress-cell">
                      <span>85%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '85%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>20%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '20%'}}></div></div>
                    </div>
                  </td>
                  <td>65%</td>
                  <td><span className="status-pill critical">Critical Gap</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Collaborate With Industry</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="skill-cell"><AlertTriangle size={16} className="icon-blue" /> Welding</td>
                  <td>
                    <div className="progress-cell">
                      <span>70%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '70%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>60%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '60%'}}></div></div>
                    </div>
                  </td>
                  <td>10%</td>
                  <td><span className="status-pill partial">Partial</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Update Curriculum</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="skill-cell"><Zap size={16} className="icon-blue" /> Electrical Systems</td>
                  <td>
                    <div className="progress-cell">
                      <span>75%</span>
                      <div className="progress-bar"><div className="progress blue" style={{width: '75%'}}></div></div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <span>70%</span>
                      <div className="progress-bar"><div className="progress light-blue" style={{width: '70%'}}></div></div>
                    </div>
                  </td>
                  <td>5%</td>
                  <td><span className="status-pill aligned">Aligned</span></td>
                  <td>
                    <div className="select-action">
                      <select><option>Maintain</option></select>
                      <ChevronDown size={14} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="table-footer">
              <span className="showing-text">Showing 6 of 24 skills</span>
              <div className="pagination">
                <button className="page-btn"><ChevronDown size={16} style={{transform: 'rotate(90deg)'}} /></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn"><ChevronDown size={16} style={{transform: 'rotate(-90deg)'}} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          
          <div className="overview-card">
            <h3>Alignment Overview</h3>
            <div className="donut-and-legend">
              <div className="big-donut">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-segment green" strokeDasharray="42, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle-segment orange" strokeDasharray="27, 100" strokeDashoffset="-42" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle-segment red" strokeDasharray="18, 100" strokeDashoffset="-69" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle-segment gray" strokeDasharray="13, 100" strokeDashoffset="-87" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="16" className="percentage">68%</text>
                  <text x="18" y="22" className="sub-text">Overall</text>
                  <text x="18" y="26" className="sub-text">Alignment</text>
                </svg>
              </div>
              <div className="legend-list">
                <div className="legend-row">
                  <div className="legend-label"><span className="dot green"></span> Fully Aligned</div>
                  <div className="legend-value">28 <span className="dim">(42%)</span></div>
                </div>
                <div className="legend-row">
                  <div className="legend-label"><span className="dot orange"></span> Partial Alignment</div>
                  <div className="legend-value">18 <span className="dim">(27%)</span></div>
                </div>
                <div className="legend-row">
                  <div className="legend-label"><span className="dot red"></span> Critical Gap</div>
                  <div className="legend-value">12 <span className="dim">(18%)</span></div>
                </div>
                <div className="legend-row">
                  <div className="legend-label"><span className="dot gray"></span> Not Covered</div>
                  <div className="legend-value">8 <span className="dim">(13%)</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="top-gaps-card">
            <div className="card-header">
              <div className="card-title">
                <AlertTriangle size={16} color="#ef4444" />
                <h3>Top Skill Gaps</h3>
              </div>
              <a href="#" className="view-all">View All</a>
            </div>
            <div className="gap-list">
              <div className="gap-item">
                <span className="rank">1</span>
                <span className="gap-name">PLC Programming</span>
                <span className="gap-value red">45% gap</span>
              </div>
              <div className="gap-item">
                <span className="rank">2</span>
                <span className="gap-name">Robotics</span>
                <span className="gap-value red">60% gap</span>
              </div>
              <div className="gap-item">
                <span className="rank">3</span>
                <span className="gap-name">EV Technology</span>
                <span className="gap-value red">65% gap</span>
              </div>
              <div className="gap-item">
                <span className="rank">4</span>
                <span className="gap-name">Advanced Manufacturing</span>
                <span className="gap-value red">50% gap</span>
              </div>
              <div className="gap-item">
                <span className="rank">5</span>
                <span className="gap-name">CNC Programming</span>
                <span className="gap-value red">15% gap</span>
              </div>
            </div>
          </div>

          <div className="drilldown-card">
            <h3>Drilldown: Institute → Program → Skill → Industry</h3>
            
            <div className="drilldown-path">
              <div className="path-item">
                <div className="path-icon"><BookOpen size={16} /></div>
                <div className="path-details">
                  <span className="path-label">Institute</span>
                  <span className="path-value">Shree Ganesh ITI</span>
                  <span className="path-sub">Pune, Maharashtra</span>
                </div>
              </div>
              <div className="path-connector"><ArrowDownRight size={16} /></div>
              
              <div className="path-item">
                <div className="path-icon"><Clock size={16} /></div>
                <div className="path-details">
                  <span className="path-label">Program</span>
                  <span className="path-value">Electrical Engineering (Diploma)</span>
                  <span className="path-sub">3 Years</span>
                </div>
              </div>
              <div className="path-connector"><ArrowDownRight size={16} /></div>

              <div className="path-item">
                <div className="path-icon"><Zap size={16} /></div>
                <div className="path-details">
                  <span className="path-label">Skill</span>
                  <span className="path-value">PLC Programming</span>
                  <span className="path-sub">Technical</span>
                </div>
              </div>
              <div className="path-connector"><ArrowDownRight size={16} /></div>

              <div className="path-item">
                <div className="path-icon"><Hexagon size={16} /></div>
                <div className="path-details">
                  <span className="path-label">Industry Requirement</span>
                  <span className="path-value">Automation Industry</span>
                  <span className="path-sub">High demand + 90%</span>
                </div>
              </div>
            </div>

            <button className="primary-btn full-width view-full-btn">
              View Full Requirement Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstituteSkillGap;
