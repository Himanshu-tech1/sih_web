import React, { useState } from 'react';
import { Briefcase, Users, Wrench, GraduationCap, BookOpen, Plus, Search, Filter, MoreHorizontal, X, ArrowUp } from 'lucide-react';
import './IndustryJobs.css';

const JobKpiCard = ({ title, value, change, icon: Icon, colorClass }) => (
  <div className={`job-kpi-card ${colorClass}`}>
    <div className="kpi-icon-header">
      <div className="kpi-icon"><Icon size={20} /></div>
    </div>
    <div className="kpi-content">
      <h3>{title}</h3>
      <div className="kpi-value">{value}</div>
      <div className="kpi-change positive">
        <ArrowUp size={14} />
        <span>{change}</span>
        <span className="vs-text">vs last month</span>
      </div>
    </div>
  </div>
);

const IndustryJobs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const jobsData = [
    { id: 1, role: 'CNC Machine Operator', vacancies: 50, loc: 'Pune', qual: 'ITI / Diploma', skills: 'CNC, VMC, G-Code', exp: '1-3 Years', time: 'Oct 2025', status: 'Active' },
    { id: 2, role: 'PLC Technician', vacancies: 30, loc: 'Chakan', qual: 'ITI / Diploma', skills: 'PLC, HMI, Siemens', exp: '1-3 Years', time: 'Sep 2025', status: 'Active' },
    { id: 3, role: 'Electrician', vacancies: 40, loc: 'Pune', qual: 'ITI', skills: 'Industrial Wiring, VFD', exp: '0-2 Years', time: 'Oct 2025', status: 'Active' },
    { id: 4, role: 'Automation Technician', vacancies: 25, loc: 'Akurdi', qual: 'Diploma / B.E.', skills: 'Automation, SCADA', exp: '2-5 Years', time: 'Nov 2025', status: 'Draft' },
    { id: 5, role: 'Production Supervisor', vacancies: 15, loc: 'Pune', qual: 'Diploma / B.E.', skills: 'Production, Team Handling', exp: '3-5 Years', time: 'Oct 2025', status: 'Active' },
    { id: 6, role: 'EV Technician', vacancies: 20, loc: 'Chakan', qual: 'ITI / Diploma', skills: 'EV Systems, Battery, BMS', exp: '1-3 Years', time: 'Nov 2025', status: 'Closed' }
  ];

  return (
    <div className="dashboard-page jobs-page relative">
      <div className="page-header">
        <div>
          <h1 className="page-title">Job Openings</h1>
          <p className="page-subtitle">Post your current hiring requirements and help build a skilled workforce for Maharashtra.</p>
        </div>
        <button className="btn primary-btn" onClick={() => setIsSidebarOpen(true)}>
          <Plus size={16} /> Post New Job
        </button>
      </div>

      <div className="jobs-kpi-grid">
        <JobKpiCard title="Active Jobs" value="12" change="+2" icon={Briefcase} colorClass="green" />
        <JobKpiCard title="Total Vacancies" value="248" change="+48" icon={Users} colorClass="blue" />
        <JobKpiCard title="ITI-Level Jobs" value="86" change="+12" icon={Wrench} colorClass="purple" />
        <JobKpiCard title="Diploma-Level Jobs" value="102" change="+20" icon={GraduationCap} colorClass="orange" />
        <JobKpiCard title="Higher-Education Jobs" value="60" change="+16" icon={BookOpen} colorClass="red" />
      </div>

      <div className="table-card">
        <div className="table-header-bar">
          <div className="table-title">
            <h3>All Job Openings (12)</h3>
          </div>
          <div className="table-filters">
            <div className="search-input">
              <Search size={16} />
              <input type="text" placeholder="Search by job role, location or skills..." />
            </div>
            <select className="filter-select">
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
              <option>Closed</option>
            </select>
            <select className="filter-select">
              <option>All Qualification</option>
              <option>ITI</option>
              <option>Diploma</option>
              <option>B.E. / B.Tech</option>
            </select>
          </div>
        </div>
        
        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Vacancies</th>
                <th>Location</th>
                <th>Qualification</th>
                <th>Skills</th>
                <th>Experience</th>
                <th>Hiring Timeline</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobsData.map(job => (
                <tr key={job.id}>
                  <td className="font-medium text-dark">{job.role}</td>
                  <td>{job.vacancies}</td>
                  <td>{job.loc}</td>
                  <td>{job.qual}</td>
                  <td>{job.skills}</td>
                  <td>{job.exp}</td>
                  <td>{job.time}</td>
                  <td>
                    <span className={`status-badge ${job.status.toLowerCase()}`}>{job.status}</span>
                  </td>
                  <td><button className="action-dots"><MoreHorizontal size={16}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="showing-text">Showing 1 to 6 of 12 jobs</div>
          <div className="pagination">
            <button className="page-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg></button>
          </div>
        </div>
      </div>

      <div className="promo-banner mt-4">
        <div className="promo-icon"><Users size={32} className="text-blue" /></div>
        <div className="promo-content">
          <strong>Hire Skilled Talent. Build a Stronger Maharashtra.</strong>
          <p>Your hiring needs help shape future training programs for a skilled and productive workforce.</p>
        </div>
      </div>

      {/* Slide-out Panel */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className={`slide-panel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h2>Post New Job</h2>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}><X size={20}/></button>
        </div>
        <div className="panel-content">
          
          <div className="form-section">
            <h3 className="section-title"><span className="circle-num">1</span> Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Job Title *</label>
                <input type="text" placeholder="e.g. CNC Machine Operator" />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select>
                  <option value="">Select Department</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="quality-control">Quality Control</option>
                  <option value="engineering">Engineering</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>
              <div className="form-group">
                <label>Number of Vacancies *</label>
                <input type="number" placeholder="e.g. 10" />
              </div>
              <div className="form-group">
                <label>Job Location *</label>
                <select>
                  <option value="">Select Location</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="chakan">Chakan</option>
                  <option value="akurdi">Akurdi</option>
                  <option value="nashik">Nashik</option>
                </select>
              </div>
              <div className="form-group">
                <label>Employment Type *</label>
                <select>
                  <option value="">Select Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="form-group">
                <label>Hiring Timeline *</label>
                <input type="date" />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title"><span className="circle-num">2</span> Qualification (Select all applicable)</h3>
            <div className="checkbox-grid">
              <label className="checkbox-label"><input type="checkbox"/> ITI</label>
              <label className="checkbox-label"><input type="checkbox"/> B.E. / B.Tech</label>
              <label className="checkbox-label"><input type="checkbox"/> Diploma</label>
              <label className="checkbox-label"><input type="checkbox"/> Other Higher Education</label>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title"><span className="circle-num">3</span> Experience (Select preferred experience level)</h3>
            <div className="checkbox-grid">
              <label className="checkbox-label"><input type="checkbox"/> Fresher</label>
              <label className="checkbox-label"><input type="checkbox"/> 1 - 2 Years</label>
              <label className="checkbox-label"><input type="checkbox"/> 3 - 5 Years</label>
              <label className="checkbox-label"><input type="checkbox"/> 5+ Years</label>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title"><span className="circle-num">4</span> Required Skills</h3>
            <div className="skills-row-header">
              <div style={{flex: 2}}>Skill</div>
              <div style={{flex: 1}}>Required Proficiency</div>
              <div style={{flex: 1}}>Type</div>
              <div style={{width: '32px'}}></div>
            </div>
            <div className="skills-row">
              <div style={{flex: 2}}><input type="text" placeholder="e.g. CNC Operating" /></div>
              <div style={{flex: 1}}>
                <select>
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div style={{flex: 1}}>
                <select>
                  <option value="mandatory">Mandatory</option>
                  <option value="preferred">Preferred</option>
                </select>
              </div>
              <button className="del-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
            </div>
            <div className="skills-row">
              <div style={{flex: 2}}><input type="text" placeholder="e.g. Safety Standards" /></div>
              <div style={{flex: 1}}>
                <select>
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div style={{flex: 1}}>
                <select>
                  <option value="mandatory">Mandatory</option>
                  <option selected value="preferred">Preferred</option>
                </select>
              </div>
              <button className="del-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
            </div>
            <button className="add-skill-btn"><Plus size={14}/> Add Another Skill</button>
          </div>

          <div className="form-section">
            <h3 className="section-title"><span className="circle-num">5</span> Additional Information</h3>
            <div className="form-grid">
              <div className="form-group salary-group">
                <label>Salary Range (₹ per month)</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" />
                  <span className="self-center">to</span>
                  <input type="number" placeholder="Max" />
                </div>
              </div>
              <div className="form-group">
                <label>Shift</label>
                <select>
                  <option value="">Select Shift</option>
                  <option value="general">General Shift (9 AM - 5 PM)</option>
                  <option value="first">1st Shift (6 AM - 2 PM)</option>
                  <option value="second">2nd Shift (2 PM - 10 PM)</option>
                  <option value="third">3rd Shift (10 PM - 6 AM)</option>
                  <option value="rotational">Rotational Shifts</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label>Job Description *</label>
                <textarea placeholder="Describe the role, responsibilities, and other details..." rows="4"></textarea>
                <div className="char-count">0/1000</div>
              </div>
              <div className="form-group">
                <label>Application Deadline *</label>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <button className="btn outline-btn" onClick={() => setIsSidebarOpen(false)}>Cancel</button>
          <div className="flex gap-2">
            <button className="btn outline-btn text-blue border-blue">Save Draft</button>
            <button className="btn primary-btn">Publish Job</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndustryJobs;
