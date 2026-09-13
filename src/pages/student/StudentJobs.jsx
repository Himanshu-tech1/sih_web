import React from 'react';
import { 
  Briefcase, Target, ChevronDown, MapPin, Building2, GraduationCap, 
  Settings, Clock, CheckCircle2, Star, Calendar, Heart, Send, Lightbulb, AlertTriangle, ArrowRight, Zap
} from 'lucide-react';
import './StudentJobs.css';

const StudentJobs = () => {
  return (
    <div className="student-jobs">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Briefcase size={24} />
          </div>
          <div>
            <h1>Job Opportunities</h1>
            <p>Find the right job opportunities based on your education, skills and career preferences.</p>
          </div>
        </div>
        <div className="info-formula">
          <div className="formula-icon"><Target size={20} /></div>
          <div className="formula-text-col">
            <span className="ft-title">Better Skills. Better Jobs.</span>
            <span className="ft-sub">Your skills, education and career goals help us find the best job opportunities for you.</span>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filter-group">
          <label><Briefcase size={12} /> Job Role</label>
          <div className="select-wrapper">
            <select><option>All Job Roles</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><Building2 size={12} /> Industry</label>
          <div className="select-wrapper">
            <select><option>All Industries</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><MapPin size={12} /> Location</label>
          <div className="select-wrapper">
            <select><option>All Locations</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><GraduationCap size={12} /> Qualification</label>
          <div className="select-wrapper">
            <select><option>All Qualifications</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><Settings size={12} /> Skill</label>
          <div className="select-wrapper">
            <select><option>All Skills</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><Clock size={12} /> Experience</label>
          <div className="select-wrapper">
            <select><option>All Experience Levels</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon-box blue"><Briefcase size={20} /></div>
          <div className="metric-details">
            <span className="metric-value">12</span>
            <span className="metric-label">Total Job Opportunities</span>
            <span className="metric-sub">matched with your profile</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box green"><CheckCircle2 size={20} /></div>
          <div className="metric-details">
            <span className="metric-value green-text">8</span>
            <span className="metric-label">Eligible for You</span>
            <span className="metric-sub">(Education + Skills Match)</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box purple"><Star size={20} /></div>
          <div className="metric-details">
            <span className="metric-value">82%</span>
            <span className="metric-label">Average Skill Match</span>
            <span className="metric-sub">across available jobs</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><Calendar size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Next Deadline</span>
            <span className="metric-value date-val">Within 15 days</span>
            <span className="metric-sub">for 5 jobs</span>
          </div>
        </div>
      </div>

      {/* Main Jobs Section */}
      <div className="jobs-section">
        <div className="section-header">
          <span className="results-count">Showing 8 of 12 jobs</span>
          <div className="sort-by">
            <span>Sort by:</span>
            <select><option>Best Match</option></select>
          </div>
        </div>

        <div className="jobs-grid">
          
          {/* Job Card 1 */}
          <div className="job-card">
            <div className="job-header-area">
              <div className="job-title-sec">
                <div className="job-icon blue"><BarChart2Icon /></div>
                <div className="job-title-info">
                  <div className="title-row">
                    <h4>CNC Machine Operator</h4>
                    <span className="demand-badge green">High Demand</span>
                  </div>
                  <span className="company-name"><Building2 size={12} /> Precision Manufacturing Pvt. Ltd.</span>
                </div>
              </div>
              <div className="job-meta-sec">
                <span className="posted-time">Posted 2 days ago</span>
                <button className="icon-btn heart"><Heart size={18} /></button>
              </div>
            </div>

            <div className="job-details-row">
              <span className="jd-item"><MapPin size={14} /> Pune, Maharashtra</span>
              <span className="jd-item"><GraduationCap size={14} /> ITI / Diploma</span>
              <span className="jd-item"><Briefcase size={14} /> 0 - 2 Years</span>
              <div className="match-circle">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="19" className="pct">82%</text>
                  <text x="18" y="25" className="lbl">Match</text>
                </svg>
              </div>
            </div>

            <div className="skills-match-area">
              <div className="skills-req">
                <span className="s-label">Required Skills</span>
                <div className="s-tags">
                  <span className="tag">CNC</span>
                  <span className="tag">CAD/CAM</span>
                  <span className="tag">Machine Operation</span>
                </div>
              </div>
              <div className="skills-prog">
                <span className="s-label">Your Skill Match</span>
                <div className="p-bar-wrap">
                  <div className="p-bar"><div className="fill green" style={{width: '82%'}}></div></div>
                  <span className="p-val">82%</span>
                </div>
              </div>
            </div>

            <div className="missing-deadline-row">
              <div className="missing-sec">
                <span className="s-label">Missing Skills</span>
                <span className="missing-skill red-text"><AlertTriangle size={12} /> Advanced CNC Programming</span>
              </div>
              <div className="deadline-sec">
                <div className="d-icon-box"><Calendar size={16} className="blue-text" /></div>
                <div className="d-info">
                  <span className="d-label">Application Deadline</span>
                  <span className="d-val">30 Jun 2025</span>
                </div>
              </div>
            </div>

            <div className="why-match-box">
              <div className="why-header">
                <Lightbulb size={16} className="blue-text" />
                <h5>Why this job matches you?</h5>
              </div>
              <ul>
                <li><CheckCircle2 size={14} className="green-text" /> Your current skills (CNC, Machine Operation) match well with the job requirements.</li>
                <li><CheckCircle2 size={14} className="green-text" /> Your education level (ITI/Diploma) is eligible for this role.</li>
                <li><CheckCircle2 size={14} className="green-text" /> This role is in high demand in the manufacturing sector in Pune.</li>
              </ul>
            </div>

            <div className="card-footer">
              <button className="outline-btn">View Job</button>
              <button className="primary-btn"><Send size={14} /> Apply</button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <div className="job-header-area">
              <div className="job-title-sec">
                <div className="job-icon blue"><Settings size={20} /></div>
                <div className="job-title-info">
                  <div className="title-row">
                    <h4>PLC Technician</h4>
                    <span className="demand-badge green">High Demand</span>
                  </div>
                  <span className="company-name"><Building2 size={12} /> Automation Solutions Pvt. Ltd.</span>
                </div>
              </div>
              <div className="job-meta-sec">
                <span className="posted-time">Posted 4 days ago</span>
                <button className="icon-btn heart"><Heart size={18} /></button>
              </div>
            </div>

            <div className="job-details-row">
              <span className="jd-item"><MapPin size={14} /> Pune, Maharashtra</span>
              <span className="jd-item"><GraduationCap size={14} /> ITI / Diploma</span>
              <span className="jd-item"><Briefcase size={14} /> 0 - 2 Years</span>
              <div className="match-circle">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="19" className="pct">68%</text>
                  <text x="18" y="25" className="lbl">Match</text>
                </svg>
              </div>
            </div>

            <div className="skills-match-area">
              <div className="skills-req">
                <span className="s-label">Required Skills</span>
                <div className="s-tags">
                  <span className="tag">PLC</span>
                  <span className="tag">Electrical Systems</span>
                  <span className="tag">Troubleshooting</span>
                </div>
              </div>
              <div className="skills-prog">
                <span className="s-label">Your Skill Match</span>
                <div className="p-bar-wrap">
                  <div className="p-bar"><div className="fill green" style={{width: '68%'}}></div></div>
                  <span className="p-val">68%</span>
                </div>
              </div>
            </div>

            <div className="missing-deadline-row">
              <div className="missing-sec">
                <span className="s-label">Missing Skills</span>
                <span className="missing-skill red-text"><AlertTriangle size={12} /> Advanced PLC Programming</span>
              </div>
              <div className="deadline-sec">
                <div className="d-icon-box"><Calendar size={16} className="blue-text" /></div>
                <div className="d-info">
                  <span className="d-label">Application Deadline</span>
                  <span className="d-val">05 Jul 2025</span>
                </div>
              </div>
            </div>

            <div className="why-match-box">
              <div className="why-header">
                <Lightbulb size={16} className="blue-text" />
                <h5>Why this job matches you?</h5>
              </div>
              <ul>
                <li><CheckCircle2 size={14} className="green-text" /> Your PLC and Electrical skills match with the job requirements.</li>
                <li><CheckCircle2 size={14} className="green-text" /> Your education level (ITI/Diploma) is eligible for this role.</li>
                <li><CheckCircle2 size={14} className="green-text" /> High demand in automation and manufacturing sector.</li>
              </ul>
            </div>

            <div className="card-footer">
              <button className="outline-btn">View Job</button>
              <button className="primary-btn"><Send size={14} /> Apply</button>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="job-card">
            <div className="job-header-area">
              <div className="job-title-sec">
                <div className="job-icon blue"><Zap size={20} /></div>
                <div className="job-title-info">
                  <div className="title-row">
                    <h4>Industrial Electrician</h4>
                  </div>
                  <span className="company-name"><Building2 size={12} /> Green Energy Manufacturing Co.</span>
                </div>
              </div>
              <div className="job-meta-sec">
                <span className="posted-time">Posted 5 days ago</span>
                <button className="icon-btn heart"><Heart size={18} /></button>
              </div>
            </div>

            <div className="job-details-row">
              <span className="jd-item"><MapPin size={14} /> Nashik, Maharashtra</span>
              <span className="jd-item"><GraduationCap size={14} /> ITI / Diploma</span>
              <span className="jd-item"><Briefcase size={14} /> 0 - 2 Years</span>
              <div className="match-circle">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="19" className="pct">75%</text>
                  <text x="18" y="25" className="lbl">Match</text>
                </svg>
              </div>
            </div>

            <div className="skills-match-area">
              <div className="skills-req">
                <span className="s-label">Required Skills</span>
                <div className="s-tags">
                  <span className="tag">Electrical Wiring</span>
                  <span className="tag">Troubleshooting</span>
                  <span className="tag">Safety</span>
                </div>
              </div>
              <div className="skills-prog">
                <span className="s-label">Your Skill Match</span>
                <div className="p-bar-wrap">
                  <div className="p-bar"><div className="fill green" style={{width: '75%'}}></div></div>
                  <span className="p-val">75%</span>
                </div>
              </div>
            </div>

            <div className="missing-deadline-row">
              <div className="missing-sec">
                <span className="s-label">Missing Skills</span>
                <span className="missing-skill red-text"><AlertTriangle size={12} /> Industrial Automation</span>
              </div>
              <div className="deadline-sec">
                <div className="d-icon-box"><Calendar size={16} className="blue-text" /></div>
                <div className="d-info">
                  <span className="d-label">Application Deadline</span>
                  <span className="d-val">12 Jul 2025</span>
                </div>
              </div>
            </div>

            <div className="card-footer mt-auto">
              <button className="outline-btn">View Job</button>
              <button className="primary-btn"><Send size={14} /> Apply</button>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="job-card">
            <div className="job-header-area">
              <div className="job-title-sec">
                <div className="job-icon blue"><Target size={20} /></div>
                <div className="job-title-info">
                  <div className="title-row">
                    <h4>Quality Control Inspector</h4>
                  </div>
                  <span className="company-name"><Building2 size={12} /> Auto Parts India Ltd.</span>
                </div>
              </div>
              <div className="job-meta-sec">
                <span className="posted-time">Posted 6 days ago</span>
                <button className="icon-btn heart"><Heart size={18} /></button>
              </div>
            </div>

            <div className="job-details-row">
              <span className="jd-item"><MapPin size={14} /> Aurangabad, Maharashtra</span>
              <span className="jd-item"><GraduationCap size={14} /> ITI / Diploma</span>
              <span className="jd-item"><Briefcase size={14} /> 0 - 2 Years</span>
              <div className="match-circle">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="19" className="pct">70%</text>
                  <text x="18" y="25" className="lbl">Match</text>
                </svg>
              </div>
            </div>

            <div className="skills-match-area">
              <div className="skills-req">
                <span className="s-label">Required Skills</span>
                <div className="s-tags">
                  <span className="tag">Quality Tools</span>
                  <span className="tag">Metrology</span>
                  <span className="tag">Inspection</span>
                </div>
              </div>
              <div className="skills-prog">
                <span className="s-label">Your Skill Match</span>
                <div className="p-bar-wrap">
                  <div className="p-bar"><div className="fill green" style={{width: '70%'}}></div></div>
                  <span className="p-val">70%</span>
                </div>
              </div>
            </div>

            <div className="missing-deadline-row">
              <div className="missing-sec">
                <span className="s-label">Missing Skills</span>
                <span className="missing-skill red-text"><AlertTriangle size={12} /> Advanced Quality Analysis</span>
              </div>
              <div className="deadline-sec">
                <div className="d-icon-box"><Calendar size={16} className="blue-text" /></div>
                <div className="d-info">
                  <span className="d-label">Application Deadline</span>
                  <span className="d-val">18 Jul 2025</span>
                </div>
              </div>
            </div>

            <div className="card-footer mt-auto">
              <button className="outline-btn">View Job</button>
              <button className="primary-btn"><Send size={14} /> Apply</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const BarChart2Icon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

export default StudentJobs;
