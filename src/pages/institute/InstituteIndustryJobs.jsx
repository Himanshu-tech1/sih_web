import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Building2, MapPin, GraduationCap, Users, Calendar, 
  Search, Filter, ArrowUpRight, Share2, CheckCircle2, Clock, 
  DollarSign, Sparkles, Send, Eye, X, BookOpen, AlertCircle
} from 'lucide-react';
import { getPublishedJobs } from '../../utils/jobStorage';
import './InstituteIndustryJobs.css';

const InstituteIndustryJobs = () => {
  const [jobs, setJobs] = useState(() => getPublishedJobs());
  const [search, setSearch] = useState('');
  const [selectedQual, setSelectedQual] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [recommendSuccess, setRecommendSuccess] = useState(null);
  const [recommendModalJob, setRecommendModalJob] = useState(null);
  const [batchName, setBatchName] = useState('2024-2025 Passing Out Batch (Fitter/Machinist/Electrician)');
  const [studentCount, setStudentCount] = useState('25');

  useEffect(() => {
    const handleJobUpdate = () => {
      setJobs(getPublishedJobs());
    };
    window.addEventListener('skillbridge:jobPublished', handleJobUpdate);
    window.addEventListener('storage', handleJobUpdate);
    return () => {
      window.removeEventListener('skillbridge:jobPublished', handleJobUpdate);
      window.removeEventListener('storage', handleJobUpdate);
    };
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = !search || 
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      (job.company && job.company.toLowerCase().includes(search.toLowerCase())) ||
      (job.loc && job.loc.toLowerCase().includes(search.toLowerCase())) ||
      (job.skillsText && job.skillsText.toLowerCase().includes(search.toLowerCase()));

    const matchesQual = selectedQual === 'All' || 
      (Array.isArray(job.qual) ? job.qual.some(q => q.toLowerCase().includes(selectedQual.toLowerCase())) : (job.qualText || '').includes(selectedQual));

    const matchesDept = selectedDept === 'All' || 
      (job.department && job.department.toLowerCase() === selectedDept.toLowerCase());

    return matchesSearch && matchesQual && matchesDept;
  });

  const totalVacancies = jobs.reduce((sum, j) => sum + (Number(j.vacancies) || 0), 0);
  const companiesCount = new Set(jobs.map(j => j.company || 'ABC Industries')).size;

  const handleRecommendSubmit = (e) => {
    e.preventDefault();
    setRecommendSuccess(`Successfully forwarded ${studentCount} candidate profiles from ${batchName} to ${recommendModalJob.company} for "${recommendModalJob.role}".`);
    setRecommendModalJob(null);
    setTimeout(() => {
      setRecommendSuccess(null);
    }, 5000);
  };

  return (
    <div className="dashboard-page institute-jobs-page">
      {/* Toast */}
      {recommendSuccess && (
        <div className="success-toast">
          <CheckCircle2 size={20} className="text-green-300" />
          <span>{recommendSuccess}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header flex-between">
        <div>
          <div className="badge-pill">
            <Sparkles size={14} className="text-amber-500" /> Live Industry Requirements
          </div>
          <h1 className="page-title">Industry Job Openings & Hiring Demands</h1>
          <p className="page-subtitle">
            Live technical job openings published by verified employers in Maharashtra. Recommend skilled students and align curriculum with current demands.
          </p>
        </div>
        <div className="header-actions">
          <button className="btn outline-btn" onClick={() => window.print()}>
            Export Requirements
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="institute-jobs-stats">
        <div className="stat-card">
          <div className="stat-icon blue"><Briefcase size={22} /></div>
          <div>
            <div className="stat-value">{jobs.length}</div>
            <div className="stat-label">Total Published Jobs</div>
            <div className="stat-sub">Updated live from Industry portal</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><Users size={22} /></div>
          <div>
            <div className="stat-value">{totalVacancies}</div>
            <div className="stat-label">Total Open Vacancies</div>
            <div className="stat-sub">Across Pune, Mumbai & Nashik clusters</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple"><Building2 size={22} /></div>
          <div>
            <div className="stat-value">{companiesCount}</div>
            <div className="stat-label">Hiring Companies</div>
            <div className="stat-sub">Active industrial partners</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon amber"><GraduationCap size={22} /></div>
          <div>
            <div className="stat-value">94%</div>
            <div className="stat-label">Trade Match Rate</div>
            <div className="stat-sub">Relevant to ITI & Diploma curriculum</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="filters-card">
        <div className="search-box">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by job title, company name, required skill, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="select-filters">
          <div className="filter-item">
            <label>Qualification:</label>
            <select value={selectedQual} onChange={(e) => setSelectedQual(e.target.value)}>
              <option value="All">All Qualifications</option>
              <option value="ITI">ITI Candidates</option>
              <option value="Diploma">Diploma Holders</option>
              <option value="B.E.">B.E. / B.Tech</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Department:</label>
            <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
              <option value="All">All Sectors</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Engineering">Engineering</option>
              <option value="Quality Control">Quality Control</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Feed */}
      <div className="jobs-list-section">
        <div className="feed-header">
          <h3>Available Openings ({filteredJobs.length})</h3>
          <span className="live-status-dot">
            <span className="dot"></span> Real-time Sync Active
          </span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="empty-state-card">
            <Briefcase size={40} className="text-slate-300" />
            <h4>No job openings found</h4>
            <p>Try clearing your search filters or check back when industries post new hiring requirements.</p>
          </div>
        ) : (
          <div className="job-cards-grid">
            {filteredJobs.map((job) => (
              <div key={job.id} className="institute-job-card">
                <div className="card-top">
                  <div className="company-info-row">
                    <div className="company-avatar">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h4 className="job-role-heading">{job.role}</h4>
                      <div className="company-name-text">
                        {job.company || 'ABC Industries Pvt. Ltd.'} 
                        <span className="verified-tag">✓ Verified Employer</span>
                      </div>
                    </div>
                  </div>
                  {job.postedAt === 'Just now' && (
                    <span className="new-badge">New Opening</span>
                  )}
                </div>

                <div className="meta-grid">
                  <div className="meta-item">
                    <MapPin size={14} /> <span>{job.loc}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={14} /> <span><strong>{job.vacancies}</strong> Vacancies</span>
                  </div>
                  <div className="meta-item">
                    <GraduationCap size={14} /> <span>{Array.isArray(job.qual) ? job.qual.join(', ') : (job.qualText || job.qual)}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} /> <span>{job.empType || 'Full Time'} • {job.exp}</span>
                  </div>
                </div>

                {job.salary && (
                  <div className="salary-pill">
                    <DollarSign size={14} /> Expected Pay: <strong>{job.salary} / month</strong>
                  </div>
                )}

                {/* Skills tags */}
                <div className="skills-chips">
                  <span className="skills-title">Demanded Skills:</span>
                  {Array.isArray(job.skills) && job.skills.length > 0 ? (
                    job.skills.map((s, i) => (
                      <span key={i} className="skill-chip">
                        {typeof s === 'string' ? s : s.name}
                      </span>
                    ))
                  ) : (
                    <span className="skill-chip">{job.skillsText || 'Technical Skills'}</span>
                  )}
                </div>

                <div className="card-bottom">
                  <div className="deadline-text">
                    <Calendar size={13} /> Apply Deadline: <strong>{job.deadline || '30 Days'}</strong>
                  </div>
                  <div className="actions-group">
                    <button 
                      className="btn outline-btn btn-sm"
                      onClick={() => setSelectedJob(job)}
                    >
                      <Eye size={14} /> View Details
                    </button>
                    <button 
                      className="btn primary-btn btn-sm"
                      onClick={() => setRecommendModalJob(job)}
                    >
                      <Send size={14} /> Recommend Students
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View Details Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>{selectedJob.role}</h2>
                <p className="text-slate-500">{selectedJob.company} • {selectedJob.loc}</p>
              </div>
              <button className="close-btn" onClick={() => setSelectedJob(null)}><X size={20}/></button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Job Overview</h4>
                <div className="details-table">
                  <div><strong>Department:</strong> {selectedJob.department || 'Manufacturing'}</div>
                  <div><strong>Vacancies:</strong> {selectedJob.vacancies}</div>
                  <div><strong>Salary:</strong> {selectedJob.salary || 'Competitive'}</div>
                  <div><strong>Shift:</strong> {selectedJob.shift || 'General Shift'}</div>
                  <div><strong>Experience:</strong> {selectedJob.exp}</div>
                  <div><strong>Hiring Timeline:</strong> {selectedJob.time}</div>
                </div>
              </div>

              <div className="modal-section">
                <h4>Job Description</h4>
                <p className="job-desc-text">{selectedJob.description}</p>
              </div>

              <div className="modal-section">
                <h4>Required Competencies & Skills</h4>
                <div className="skills-detailed-list">
                  {Array.isArray(selectedJob.skills) && selectedJob.skills.map((s, idx) => (
                    <div key={idx} className="skill-detail-row">
                      <span className="skill-name">{typeof s === 'string' ? s : s.name}</span>
                      <span className="skill-type-tag">{typeof s === 'object' ? s.type : 'Mandatory'}</span>
                      <span className="skill-prof-tag">{typeof s === 'object' ? s.proficiency : 'Intermediate'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn outline-btn" onClick={() => setSelectedJob(null)}>Close</button>
              <button 
                className="btn primary-btn" 
                onClick={() => {
                  setRecommendModalJob(selectedJob);
                  setSelectedJob(null);
                }}
              >
                <Send size={14} /> Recommend Students for this Role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recommend Students Modal */}
      {recommendModalJob && (
        <div className="modal-overlay" onClick={() => setRecommendModalJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>Recommend Students</h2>
                <p className="text-slate-500">For {recommendModalJob.role} at {recommendModalJob.company}</p>
              </div>
              <button className="close-btn" onClick={() => setRecommendModalJob(null)}><X size={20}/></button>
            </div>

            <form onSubmit={handleRecommendSubmit}>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label>Select Eligible Student Batch *</label>
                  <select 
                    className="modal-select" 
                    value={batchName} 
                    onChange={(e) => setBatchName(e.target.value)}
                  >
                    <option value="2024-2025 Passing Out Batch (Fitter/Machinist/Electrician)">
                      2024-2025 Passing Out Batch (Fitter/Machinist/Electrician)
                    </option>
                    <option value="2023-2024 Certified Alumni Batch">
                      2023-2024 Certified Alumni Batch
                    </option>
                    <option value="Diploma Final Year (Mechanical & Electrical)">
                      Diploma Final Year (Mechanical & Electrical)
                    </option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label>Number of Candidates to Forward *</label>
                  <input 
                    type="number" 
                    min="1" 
                    max={recommendModalJob.vacancies} 
                    value={studentCount}
                    onChange={(e) => setStudentCount(e.target.value)}
                    className="modal-input"
                  />
                  <small style={{color: '#64748b'}}>Current open vacancies: {recommendModalJob.vacancies}</small>
                </div>

                <div className="form-group mb-3">
                  <label>Institute Coordinator Remarks</label>
                  <textarea 
                    rows="3" 
                    className="modal-textarea"
                    defaultValue="Students have completed practical workshop training in CNC machine operation, industrial safety, and blueprint reading. Medical and physical fitness certified."
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn outline-btn" onClick={() => setRecommendModalJob(null)}>Cancel</button>
                <button type="submit" className="btn primary-btn">
                  <CheckCircle2 size={16} /> Send Recommendations
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default InstituteIndustryJobs;
