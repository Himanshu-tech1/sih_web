import React from 'react';
import { 
  Briefcase, BarChart2, Star, Target, Settings, Building2, MapPin, 
  GraduationCap, ChevronDown, Check, X, ArrowRight, Zap, PenTool
} from 'lucide-react';
import './StudentCareerMatch.css';

const StudentCareerMatch = () => {
  return (
    <div className="student-career-match">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Briefcase size={24} />
          </div>
          <div>
            <h1>Career & Job Role Match</h1>
            <p>Discover the best job roles based on your skills, education and industry demand.</p>
          </div>
        </div>
        <div className="info-formula">
          <div className="formula-icon"><BarChart2 size={20} /></div>
          <span className="formula-text">Your Skills + Education + Industry Demand <br/> = Better Career Opportunities</span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filter-group">
          <label><Building2 size={12} /> Industry Sector</label>
          <div className="select-wrapper">
            <select><option>All Sectors</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="filter-group">
          <label><MapPin size={12} /> Job Role</label>
          <div className="select-wrapper">
            <select><option>All Job Roles</option></select>
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
          <label><GraduationCap size={12} /> Education Level</label>
          <div className="select-wrapper">
            <select><option>All Education Levels</option></select>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="metrics-grid">
        <div className="metric-card best-match">
          <div className="metric-icon-box orange"><Star size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Best Match</span>
            <span className="metric-value">CNC Machine Operator</span>
            <span className="metric-sub green-text">82% Match <ChevronRightIcon /></span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><Target size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Total Matching Roles</span>
            <span className="metric-value">8</span>
            <span className="metric-sub">out of 28 job roles</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box cyan"><Settings size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">ITI Eligible</span>
            <span className="metric-value">5</span>
            <span className="metric-sub">job roles</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box purple"><GraduationCap size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Diploma Eligible</span>
            <span className="metric-value">6</span>
            <span className="metric-sub">job roles</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box gray"><Building2 size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Higher Education Required</span>
            <span className="metric-value">2</span>
            <span className="metric-sub">job roles</span>
          </div>
        </div>
      </div>

      {/* Main Content List */}
      <div className="roles-list-section">
        <div className="section-header">
          <div>
            <h3>Recommended Job Roles</h3>
            <p>Based on your profile, skills and current industry demand.</p>
          </div>
          <div className="sort-by">
            <span>Sort by:</span>
            <select><option>Best Match</option></select>
          </div>
        </div>

        <div className="roles-grid">
          
          {/* Card 1 */}
          <div className="job-match-card best">
            <div className="card-badge"><Star size={12} /> Best Match</div>
            
            <div className="card-top">
              <div className="job-title-row">
                <div className="job-icon blue"><Settings size={20} /></div>
                <div>
                  <h4>CNC Machine Operator</h4>
                  <span className="job-dept">Manufacturing | Mechanical</span>
                </div>
                <div className="eligibility-tag green">ITI / Diploma Eligible</div>
              </div>
            </div>

            <div className="match-stats-row">
              <div className="match-donut-small">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="donut-val">
                  <span className="pct">82%</span>
                  <span className="lbl">Match</span>
                </div>
              </div>

              <div className="stat-box">
                <span className="stat-label"><GraduationCap size={14} /> Qualification</span>
                <span className="stat-val">ITI / Diploma</span>
              </div>

              <div className="stat-box">
                <span className="stat-label"><BarChart2 size={14} /> Demand</span>
                <span className="stat-val orange-text">High</span>
              </div>
            </div>

            <div className="skills-comparison">
              <div className="req-skills-row">
                <span className="list-label">Required Skills</span>
                <div className="skill-tags">
                  <span className="tag">CNC</span>
                  <span className="tag">CAD/CAM</span>
                  <span className="tag">Machine Operation</span>
                </div>
              </div>
              
              <div className="comparison-cols">
                <div className="comp-col">
                  <span className="col-label">Your Skills</span>
                  <ul className="skill-list present">
                    <li><Check size={14} /> CNC</li>
                    <li><Check size={14} /> CAD/CAM</li>
                    <li><Check size={14} /> Machine Operation</li>
                  </ul>
                </div>
                <div className="comp-col">
                  <span className="col-label">Missing Skill</span>
                  <ul className="skill-list missing">
                    <li>Advanced CNC Programming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="primary-btn full-width">View Job Role <ArrowRight size={14} /></button>
              <button className="outline-btn">View Skill Gap</button>
              <button className="outline-btn">View Learning Path</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="job-match-card">
            <div className="card-top">
              <div className="job-title-row">
                <div className="job-icon blue"><Zap size={20} /></div>
                <div>
                  <h4>Automation Technician</h4>
                  <span className="job-dept">Automation | Manufacturing</span>
                </div>
                <div className="eligibility-tag green">ITI / Diploma Eligible</div>
              </div>
            </div>

            <div className="match-stats-row">
              <div className="match-donut-small">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="donut-val">
                  <span className="pct">70%</span>
                  <span className="lbl">Match</span>
                </div>
              </div>

              <div className="stat-box">
                <span className="stat-label"><GraduationCap size={14} /> Qualification</span>
                <span className="stat-val">ITI / Diploma</span>
              </div>

              <div className="stat-box">
                <span className="stat-label"><BarChart2 size={14} /> Demand</span>
                <span className="stat-val orange-text">High</span>
              </div>
            </div>

            <div className="skills-comparison">
              <div className="req-skills-row">
                <span className="list-label">Required Skills</span>
                <div className="skill-tags">
                  <span className="tag">PLC</span>
                  <span className="tag">Electrical Systems</span>
                  <span className="tag">Robotics</span>
                </div>
              </div>
              
              <div className="comparison-cols">
                <div className="comp-col">
                  <span className="col-label">Your Skills</span>
                  <ul className="skill-list present">
                    <li><Check size={14} /> PLC</li>
                    <li><Check size={14} /> Electrical Systems</li>
                    <li><Check size={14} /> Robotics</li>
                  </ul>
                </div>
                <div className="comp-col">
                  <span className="col-label">Missing Skill</span>
                  <ul className="skill-list missing">
                    <li>Advanced Robotics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="primary-btn full-width">View Job Role <ArrowRight size={14} /></button>
              <button className="outline-btn">View Skill Gap</button>
              <button className="outline-btn">View Learning Path</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="job-match-card">
            <div className="card-top">
              <div className="job-title-row">
                <div className="job-icon blue"><Zap size={20} /></div>
                <div>
                  <h4>Electrical Technician</h4>
                  <span className="job-dept">Electrical | Power & Energy</span>
                </div>
                <div className="eligibility-tag green">ITI / Diploma Eligible</div>
              </div>
            </div>

            <div className="match-stats-row">
              <div className="match-donut-small">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="donut-val">
                  <span className="pct">88%</span>
                  <span className="lbl">Match</span>
                </div>
              </div>

              <div className="stat-box">
                <span className="stat-label"><GraduationCap size={14} /> Qualification</span>
                <span className="stat-val">ITI / Diploma</span>
              </div>

              <div className="stat-box">
                <span className="stat-label"><BarChart2 size={14} /> Demand</span>
                <span className="stat-val orange-text">High</span>
              </div>
            </div>

            <div className="skills-comparison">
              <div className="req-skills-row">
                <span className="list-label">Required Skills</span>
                <div className="skill-tags">
                  <span className="tag">Electrical Wiring</span>
                  <span className="tag">Troubleshooting</span>
                  <span className="tag">Safety</span>
                </div>
              </div>
              
              <div className="comparison-cols">
                <div className="comp-col">
                  <span className="col-label">Your Skills</span>
                  <ul className="skill-list present">
                    <li><Check size={14} /> Electrical Wiring</li>
                    <li><Check size={14} /> Troubleshooting</li>
                    <li><Check size={14} /> Safety</li>
                  </ul>
                </div>
                <div className="comp-col">
                  <span className="col-label">Missing Skill</span>
                  <ul className="skill-list missing">
                    <li>Industrial Automation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="primary-btn full-width">View Job Role <ArrowRight size={14} /></button>
              <button className="outline-btn">View Skill Gap</button>
              <button className="outline-btn">View Learning Path</button>
            </div>
          </div>

          {/* Card 4 (Requires Bridge Skill) */}
          <div className="job-match-card">
            <div className="card-badge orange"><Settings size={12} /> Bridge Skill Required</div>
            
            <div className="card-top">
              <div className="job-title-row">
                <div className="job-icon blue"><Target size={20} /></div>
                <div>
                  <h4>Industrial Robotics Technician</h4>
                  <span className="job-dept">Automation | Manufacturing</span>
                </div>
              </div>
            </div>

            <div className="match-stats-row">
              <div className="match-donut-small">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="donut-val">
                  <span className="pct">65%</span>
                  <span className="lbl">Match</span>
                </div>
              </div>

              <div className="stat-box">
                <span className="stat-label"><GraduationCap size={14} /> Qualification</span>
                <span className="stat-val">Diploma</span>
              </div>

              <div className="stat-box">
                <span className="stat-label"><BarChart2 size={14} /> Demand</span>
                <span className="stat-val red-text">Very High</span>
              </div>
            </div>

            <div className="skills-comparison">
              <div className="req-skills-row">
                <span className="list-label">Required Skills</span>
                <div className="skill-tags">
                  <span className="tag">Robotics</span>
                  <span className="tag">PLC</span>
                  <span className="tag">Mechanical</span>
                </div>
              </div>
              
              <div className="comparison-cols">
                <div className="comp-col">
                  <span className="col-label">Your Skills</span>
                  <ul className="skill-list present">
                    <li><Check size={14} /> Robotics</li>
                    <li><Check size={14} /> PLC <span className="warning-icon">!</span></li>
                    <li><Check size={14} /> Mechanical</li>
                  </ul>
                </div>
                <div className="comp-col">
                  <span className="col-label">Missing Skill</span>
                  <ul className="skill-list missing">
                    <li>Advanced Programming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="primary-btn full-width">View Job Role <ArrowRight size={14} /></button>
              <button className="outline-btn">View Skill Gap</button>
              <button className="outline-btn">View Learning Path</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper component
const ChevronRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"></path>
  </svg>
);

export default StudentCareerMatch;
