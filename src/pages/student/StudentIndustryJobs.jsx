import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Building2, MapPin, GraduationCap, Clock, 
  Search, CheckCircle2, DollarSign, Sparkles, Send, Eye, X, 
  Star, AlertCircle, Heart, Check
} from 'lucide-react';
import { getPublishedJobs } from '../../utils/jobStorage';
import './StudentIndustryJobs.css';

const StudentIndustryJobs = () => {
  const [jobs, setJobs] = useState(() => getPublishedJobs());
  const [search, setSearch] = useState('');
  const [selectedQual, setSelectedQual] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [savedJobs, setSavedJobs] = useState({});
  const [successToast, setSuccessToast] = useState(null);

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

  const handleApply = (job) => {
    setApplyModalJob(job);
  };

  const confirmApply = (e) => {
    e.preventDefault();
    if (!applyModalJob) return;
    
    setAppliedJobs(prev => ({ ...prev, [applyModalJob.id]: true }));
    setSuccessToast(`Application successfully sent to ${applyModalJob.company} for "${applyModalJob.role}"!`);
    setApplyModalJob(null);

    setTimeout(() => {
      setSuccessToast(null);
    }, 4500);
  };

  const toggleSave = (jobId) => {
    setSavedJobs(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = !search || 
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      (job.company && job.company.toLowerCase().includes(search.toLowerCase())) ||
      (job.loc && job.loc.toLowerCase().includes(search.toLowerCase())) ||
      (job.skillsText && job.skillsText.toLowerCase().includes(search.toLowerCase()));

    const matchesQual = selectedQual === 'All' || 
      (Array.isArray(job.qual) ? job.qual.some(q => q.toLowerCase().includes(selectedQual.toLowerCase())) : (job.qualText || '').includes(selectedQual));

    const matchesLoc = selectedLocation === 'All' || 
      (job.loc && job.loc.toLowerCase().includes(selectedLocation.toLowerCase()));

    return matchesSearch && matchesQual && matchesLoc;
  });

  const totalVacancies = jobs.reduce((acc, curr) => acc + (Number(curr.vacancies) || 0), 0);

  return (
    <div className="dashboard-page student-industry-jobs">
      {/* Toast */}
      {successToast && (
        <div className="student-toast">
          <CheckCircle2 size={20} className="text-green-300" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div className="badge-pill">
          <Sparkles size={14} className="text-blue-500" /> Direct Industry Hiring
        </div>
        <h1 className="page-title">Live Industry Job Openings</h1>
        <p className="page-subtitle">
          Real-time technical job vacancies published directly by partnered manufacturing companies and industrial employers in Maharashtra.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="student-jobs-metrics">
        <div className="metric-box">
          <div className="metric-icon blue"><Briefcase size={20} /></div>
          <div>
            <div className="metric-val">{jobs.length}</div>
            <div className="metric-name">Active Job Postings</div>
          </div>
        </div>

        <div className="metric-box">
          <div className="metric-icon green"><CheckCircle2 size={20} /></div>
          <div>
            <div className="metric-val">{totalVacancies}</div>
            <div className="metric-name">Total Vacancies Available</div>
          </div>
        </div>

        <div className="metric-box">
          <div className="metric-icon purple"><Star size={20} /></div>
          <div>
            <div className="metric-val">84%</div>
            <div className="metric-name">Your Average Profile Match</div>
          </div>
        </div>

        <div className="metric-box">
          <div className="metric-icon amber"><Send size={20} /></div>
          <div>
            <div className="metric-val">{Object.keys(appliedJobs).length}</div>
            <div className="metric-name">Jobs Applied By You</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="filters-strip">
        <div className="search-bar-wrap">
          <Search size={18} className="search-ico" />
          <input 
            type="text" 
            placeholder="Search job title, company, skills (CNC, PLC, Wiring...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-dropdowns">
          <select value={selectedQual} onChange={(e) => setSelectedQual(e.target.value)}>
            <option value="All">All Education</option>
            <option value="ITI">ITI</option>
            <option value="Diploma">Polytechnic Diploma</option>
            <option value="B.E.">B.Tech / B.E.</option>
          </select>

          <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
            <option value="All">All Locations</option>
            <option value="Pune">Pune & Chakan</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nashik">Nashik</option>
            <option value="Aurangabad">Aurangabad</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="jobs-container">
        <div className="container-header">
          <h3>Published Openings ({filteredJobs.length})</h3>
          <span className="live-indicator">● Synchronized Live with Employer Portal</span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="no-results-box">
            <Briefcase size={44} className="text-slate-300" />
            <p>No job matches found for your filter. Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="student-cards-grid">
            {filteredJobs.map((job) => {
              const isApplied = appliedJobs[job.id];
              const isSaved = savedJobs[job.id];

              return (
                <div key={job.id} className="student-job-card">
                  <div className="card-header-line">
                    <div className="job-role-sec">
                      <div className="role-icon">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h4>{job.role}</h4>
                        <span className="company-subtitle">{job.company || 'ABC Industries Pvt. Ltd.'}</span>
                      </div>
                    </div>
                    <button 
                      className={`heart-btn ${isSaved ? 'saved' : ''}`}
                      onClick={() => toggleSave(job.id)}
                      title="Save Job"
                    >
                      <Heart size={18} fill={isSaved ? '#ef4444' : 'none'} color={isSaved ? '#ef4444' : '#94a3b8'} />
                    </button>
                  </div>

                  <div className="tags-row">
                    <span className="tag-pill"><MapPin size={12} /> {job.loc}</span>
                    <span className="tag-pill highlight"><GraduationCap size={12} /> {Array.isArray(job.qual) ? job.qual.join('/') : (job.qualText || job.qual)}</span>
                    <span className="tag-pill"><Clock size={12} /> {job.exp}</span>
                    <span className="vacancies-pill"><strong>{job.vacancies}</strong> Openings</span>
                  </div>

                  {job.salary && (
                    <div className="salary-box">
                      <DollarSign size={14} className="text-emerald-600" />
                      <span>Monthly Salary: <strong>{job.salary}</strong></span>
                    </div>
                  )}

                  <div className="skills-row-sec">
                    <span className="sec-label">Skills Required:</span>
                    <div className="skills-wrap">
                      {Array.isArray(job.skills) && job.skills.length > 0 ? (
                        job.skills.map((s, i) => (
                          <span key={i} className="skill-bubble">
                            {typeof s === 'string' ? s : s.name}
                          </span>
                        ))
                      ) : (
                        <span className="skill-bubble">{job.skillsText || 'Technical trade skills'}</span>
                      )}
                    </div>
                  </div>

                  <div className="card-footer-strip">
                    <div className="posted-time-text">
                      Deadline: <strong>{job.deadline || 'In 30 Days'}</strong>
                    </div>

                    <div className="card-buttons">
                      <button 
                        className="btn outline-btn"
                        onClick={() => setSelectedJob(job)}
                      >
                        <Eye size={14} /> View Details
                      </button>

                      <button 
                        className={`btn ${isApplied ? 'applied-btn' : 'primary-btn'}`}
                        disabled={isApplied}
                        onClick={() => handleApply(job)}
                      >
                        {isApplied ? (
                          <>
                            <Check size={14} /> Applied
                          </>
                        ) : (
                          <>
                            <Send size={14} /> Apply Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* View Details Modal */}
      {selectedJob && (
        <div className="modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <div>
                <h2>{selectedJob.role}</h2>
                <p className="subtext">{selectedJob.company} • {selectedJob.loc}</p>
              </div>
              <button className="close-btn" onClick={() => setSelectedJob(null)}><X size={20}/></button>
            </div>

            <div className="dialog-body">
              <div className="info-summary-grid">
                <div><strong>Vacancies:</strong> {selectedJob.vacancies}</div>
                <div><strong>Salary:</strong> {selectedJob.salary || 'Best in Industry'}</div>
                <div><strong>Shift:</strong> {selectedJob.shift || 'General Shift'}</div>
                <div><strong>Employment:</strong> {selectedJob.empType || 'Full Time'}</div>
                <div><strong>Qualification:</strong> {Array.isArray(selectedJob.qual) ? selectedJob.qual.join(', ') : selectedJob.qualText}</div>
                <div><strong>Experience:</strong> {selectedJob.exp}</div>
              </div>

              <div className="modal-block">
                <h4>Job Description</h4>
                <p>{selectedJob.description}</p>
              </div>

              <div className="modal-block">
                <h4>Required Competencies</h4>
                <div className="skills-wrap">
                  {Array.isArray(selectedJob.skills) && selectedJob.skills.map((s, idx) => (
                    <span key={idx} className="skill-bubble">
                      {typeof s === 'string' ? s : s.name} {typeof s === 'object' && `(${s.proficiency})`}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="dialog-footer">
              <button className="btn outline-btn" onClick={() => setSelectedJob(null)}>Close</button>
              <button 
                className="btn primary-btn"
                disabled={appliedJobs[selectedJob.id]}
                onClick={() => {
                  handleApply(selectedJob);
                  setSelectedJob(null);
                }}
              >
                {appliedJobs[selectedJob.id] ? 'Already Applied' : 'Apply for this Opening'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Confirmation Modal */}
      {applyModalJob && (
        <div className="modal-backdrop" onClick={() => setApplyModalJob(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <div>
                <h2>Apply for {applyModalJob.role}</h2>
                <p className="subtext">{applyModalJob.company} • {applyModalJob.loc}</p>
              </div>
              <button className="close-btn" onClick={() => setApplyModalJob(null)}><X size={20}/></button>
            </div>

            <form onSubmit={confirmApply}>
              <div className="dialog-body">
                <div className="applicant-card">
                  <div className="applicant-avatar">PS</div>
                  <div>
                    <div style={{fontWeight: 700}}>Priya Sharma</div>
                    <div style={{fontSize: '13px', color: '#64748b'}}>ITI Machinist & CNC Programming Certified (2024)</div>
                    <div style={{fontSize: '12px', color: '#059669', fontWeight: 600}}>✓ SkillBridge Verified Student Profile</div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label style={{fontSize: '13px', fontWeight: 600, color: '#334155'}}>Candidate Statement / Note to Employer</label>
                  <textarea 
                    rows="3" 
                    className="modal-textarea"
                    defaultValue={`I am keen to apply for the ${applyModalJob.role} role at ${applyModalJob.company}. I have hands-on workshop experience in CNC machine operation, component measuring instruments, and technical blueprint reading.`}
                  ></textarea>
                </div>

                <div style={{background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', fontSize: '12px', color: '#475569'}}>
                  Your Maharashtra ITI & SkillBridge transcript will be securely forwarded directly to {applyModalJob.company}'s hiring desk.
                </div>
              </div>

              <div className="dialog-footer">
                <button type="button" className="btn outline-btn" onClick={() => setApplyModalJob(null)}>Cancel</button>
                <button type="submit" className="btn primary-btn">
                  <Send size={14} /> Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudentIndustryJobs;
