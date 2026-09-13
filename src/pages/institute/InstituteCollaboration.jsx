import React from 'react';
import { 
  Handshake, Building2, Users, Briefcase, GraduationCap, ChevronDown, 
  Search, RefreshCw, ChevronRight, X, Send, ArrowRight
} from 'lucide-react';
import './InstituteCollaboration.css';

const InstituteCollaboration = () => {
  return (
    <div className="institute-collaboration">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Handshake size={24} />
          </div>
          <div>
            <h1>Industry Collaboration</h1>
            <p>Build partnerships with industries for practical training, apprenticeships and industry exposure.</p>
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
          <button className="primary-btn">
            <span className="icon">+</span> Request Collaboration
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Building2 size={20} /></div>
            <span>Industry Partners</span>
          </div>
          <div className="metric-value">18</div>
          <div className="metric-trend positive">↑ +3 this quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Users size={20} /></div>
            <span>Active Collaborations</span>
          </div>
          <div className="metric-value">12</div>
          <div className="metric-trend positive">↑ +4 this quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><Briefcase size={20} /></div>
            <span>Apprenticeship Opportunities</span>
          </div>
          <div className="metric-value">36</div>
          <div className="metric-trend positive">↑ +12 this quarter</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-icon blue"><GraduationCap size={20} /></div>
            <span>Internship Opportunities</span>
          </div>
          <div className="metric-value">48</div>
          <div className="metric-trend positive">↑ +18 this quarter</div>
        </div>
      </div>

      <div className="main-content-area">
        <div className="left-panel">
          <div className="list-card">
            <div className="card-header border-bottom">
              <h3>Collaboration List</h3>
              <div className="header-filters">
                <div className="search-box">
                  <Search size={16} />
                  <input type="text" placeholder="Search industry, sector, skill..." />
                </div>
                <div className="filter-group mini">
                  <label>Collaboration Type</label>
                  <div className="select-wrapper">
                    <select><option>All</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="filter-group mini">
                  <label>Status</label>
                  <div className="select-wrapper">
                    <select><option>All</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <button className="outline-btn small">
                  <RefreshCw size={14} /> Reset
                </button>
              </div>
            </div>

            <table className="collab-table">
              <thead>
                <tr>
                  <th>Industry</th>
                  <th>Sector</th>
                  <th>District</th>
                  <th>Collaboration Type</th>
                  <th>Related Skill</th>
                  <th>Status</th>
                  <th>Last Activity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo tm">TM</div>
                    <span>Tata Motors</span>
                  </td>
                  <td>Automobile</td>
                  <td>Pune</td>
                  <td><span className="type-badge blue">Apprenticeship</span></td>
                  <td>Motor Vehicle Service</td>
                  <td><span className="status-pill active">• Active</span></td>
                  <td className="activity-cell">
                    <span className="date">24 Jun 2025</span>
                    <span className="desc">Training batch started</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo lt">LT</div>
                    <span>L&T Construction</span>
                  </td>
                  <td>Construction</td>
                  <td>Pune</td>
                  <td><span className="type-badge purple">Internship</span></td>
                  <td>Civil Engineering</td>
                  <td><span className="status-pill active">• Active</span></td>
                  <td className="activity-cell">
                    <span className="date">22 Jun 2025</span>
                    <span className="desc">Student batch deployed</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo ba">BA</div>
                    <span>Bajaj Auto</span>
                  </td>
                  <td>Automobile</td>
                  <td>Aurangabad</td>
                  <td><span className="type-badge cyan">Industry Visit</span></td>
                  <td>EV Technology</td>
                  <td><span className="status-pill completed">Completed</span></td>
                  <td className="activity-cell">
                    <span className="date">18 Jun 2025</span>
                    <span className="desc">Visit completed</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo ri">RI</div>
                    <span>Reliance Industries</span>
                  </td>
                  <td>Petrochemical</td>
                  <td>Nagpur</td>
                  <td><span className="type-badge yellow">Guest Lecture</span></td>
                  <td>Process Technology</td>
                  <td><span className="status-pill active">• Active</span></td>
                  <td className="activity-cell">
                    <span className="date">16 Jun 2025</span>
                    <span className="desc">Session conducted</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo ha">HA</div>
                    <span>Hindustan Aeronautics</span>
                  </td>
                  <td>Aerospace & Defence</td>
                  <td>Nashik</td>
                  <td><span className="type-badge red">Joint Training</span></td>
                  <td>CAD/CAM</td>
                  <td><span className="status-pill pending">Pending</span></td>
                  <td className="activity-cell">
                    <span className="date">12 Jun 2025</span>
                    <span className="desc">Under review</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo mm">MM</div>
                    <span>Mahindra & Mahindra</span>
                  </td>
                  <td>Automobile</td>
                  <td>Pune</td>
                  <td><span className="type-badge green">Faculty Training</span></td>
                  <td>Robotics</td>
                  <td><span className="status-pill active">• Active</span></td>
                  <td className="activity-cell">
                    <span className="date">10 Jun 2025</span>
                    <span className="desc">Training completed</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo in">IN</div>
                    <span>Infosys</span>
                  </td>
                  <td>IT / ITES</td>
                  <td>Pune</td>
                  <td><span className="type-badge blue">Curriculum Feedback</span></td>
                  <td>Programming</td>
                  <td><span className="status-pill pending">Pending</span></td>
                  <td className="activity-cell">
                    <span className="date">08 Jun 2025</span>
                    <span className="desc">Awaiting response</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
                <tr>
                  <td className="industry-cell">
                    <div className="company-logo gb">GB</div>
                    <span>Godrej & Boyce</span>
                  </td>
                  <td>Manufacturing</td>
                  <td>Mumbai</td>
                  <td><span className="type-badge cyan">Lab / Equipment Support</span></td>
                  <td>Electrical Systems</td>
                  <td><span className="status-pill active">• Active</span></td>
                  <td className="activity-cell">
                    <span className="date">05 Jun 2025</span>
                    <span className="desc">Equipment delivered</span>
                  </td>
                  <td><ChevronRight size={16} className="chevron" /></td>
                </tr>
              </tbody>
            </table>
            
            <div className="table-footer">
              <span className="showing-text">Showing 1-8 of 18 collaborations</span>
              <div className="pagination">
                <button className="page-btn"><ChevronRight size={16} style={{transform: 'rotate(180deg)'}} /></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="request-form-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <div className="icon-wrapper blue"><Handshake size={18} /></div>
                <h3>Request Collaboration</h3>
              </div>
              <button className="close-btn"><X size={18} /></button>
            </div>
            
            <div className="form-body">
              <div className="form-group full-width">
                <label>Industry Name <span className="req">*</span></label>
                <input type="text" placeholder="Search or select industry" />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Sector <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select sector</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>Related Trade / Program <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select trade / program</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Required Skill <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select skill</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>Required Skill <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select skill</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Collaboration Type <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select type</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>Number of Students <span className="req">*</span></label>
                  <input type="text" placeholder="e.g. 10" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Duration <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select duration</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>Expected Outcome <span className="req">*</span></label>
                  <div className="select-wrapper form-select">
                    <select><option>Select outcome</option></select>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Message / Additional Details</label>
                <textarea placeholder="Add any specific requirements, goals or notes..." rows="3"></textarea>
              </div>

              <button className="primary-btn full-width submit-btn">
                <Send size={16} /> Send Request
              </button>
            </div>
          </div>

          <div className="recommended-partners-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <div className="icon-wrapper blue">✨</div>
                <h3>Recommended Industry Partners</h3>
              </div>
              <a href="#" className="view-all">View All <ArrowRight size={14} /></a>
            </div>
            
            <div className="partners-list">
              <div className="partner-item">
                <div className="company-logo tm">TM</div>
                <div className="partner-info">
                  <h4>Tata Motors Ltd.</h4>
                  <p>Automobile | Pune</p>
                  <div className="partner-tags">
                    <span className="tag blue">Apprenticeship</span>
                    <span className="tag purple">Internship</span>
                  </div>
                </div>
                <button className="outline-btn small">Request</button>
              </div>

              <div className="partner-item">
                <div className="company-logo lt">LT</div>
                <div className="partner-info">
                  <h4>L&T Construction</h4>
                  <p>Construction | Pune</p>
                  <div className="partner-tags">
                    <span className="tag cyan">Industry Visit</span>
                    <span className="tag yellow">Guest Lecture</span>
                  </div>
                </div>
                <button className="outline-btn small">Request</button>
              </div>

              <div className="partner-item">
                <div className="company-logo ba">BA</div>
                <div className="partner-info">
                  <h4>Bajaj Auto</h4>
                  <p>Automobile | Aurangabad</p>
                  <div className="partner-tags">
                    <span className="tag blue">Apprenticeship</span>
                    <span className="tag red">Joint Training</span>
                  </div>
                </div>
                <button className="outline-btn small">Request</button>
              </div>

              <div className="partner-item">
                <div className="company-logo bo">BI</div>
                <div className="partner-info">
                  <h4>Bosch India</h4>
                  <p>Manufacturing | Pune</p>
                  <div className="partner-tags">
                    <span className="tag cyan">Lab Support</span>
                    <span className="tag green">Faculty Training</span>
                  </div>
                </div>
                <button className="outline-btn small">Request</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstituteCollaboration;
