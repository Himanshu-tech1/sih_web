import React from 'react';
import { 
  CheckCircle2, MapPin, Phone, Mail, User, Calendar, Users, 
  GraduationCap, Briefcase, Award, PenTool, Edit, Save, Info,
  ChevronRight, BarChart2, Target, Settings
} from 'lucide-react';
import './StudentProfile.css';

const StudentProfile = () => {
  return (
    <div className="student-profile">
      
      {/* Top Profile Banner */}
      <div className="profile-banner">
        <div className="banner-left">
          <div className="profile-avatar-large">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="Priya Sharma" />
          </div>
          <div className="profile-titles">
            <div className="name-row">
              <h1>Priya Sharma</h1>
              <span className="verified-badge"><CheckCircle2 size={14} /> Verified Student</span>
            </div>
            <p className="student-type">ITI Student | Electrical Trade</p>
            <div className="contact-row">
              <span className="contact-item"><MapPin size={14} /> Patna, Bihar</span>
              <span className="contact-item"><Phone size={14} /> +91 98765 43210</span>
              <span className="contact-item"><Mail size={14} /> priya.sharma@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="banner-right">
          <div className="completion-box">
            <div className="completion-header">
              <span>Profile Completion</span>
              <span className="pct">85%</span>
            </div>
            <div className="progress-bar-wrapper">
              <div className="progress-bar"><div className="progress blue" style={{width: '85%'}}></div></div>
            </div>
            <p className="completion-msg">Complete your profile to get better job matches and recommendations.</p>
          </div>
          <button className="outline-btn with-icon"><Edit size={16} /> Edit Profile</button>
        </div>
      </div>

      <div className="profile-content-grid">
        <div className="left-column">
          
          <div className="info-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <User size={18} className="icon-blue" />
                <h3>Personal Information</h3>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label"><User size={14} /> Full Name</span>
                <span className="info-value">Priya Sharma</span>
              </div>
              <div className="info-item">
                <span className="info-label"><MapPin size={14} /> District</span>
                <span className="info-value">Patna</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Calendar size={14} /> Date of Birth</span>
                <span className="info-value">15 Mar 2006</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Phone size={14} /> Contact Number</span>
                <span className="info-value">+91 98765 43210</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Users size={14} /> Gender</span>
                <span className="info-value">Female</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Mail size={14} /> Email</span>
                <span className="info-value">priya.sharma@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <GraduationCap size={18} className="icon-blue" />
                <h3>Education Information</h3>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label"><GraduationCap size={14} /> Education Level</span>
                <span className="info-value">ITI (After 10th)</span>
              </div>
              <div className="info-item">
                <span className="info-label"><GraduationCap size={14} /> Trade / Diploma / Course</span>
                <span className="info-value">Electrician</span>
              </div>
              <div className="info-item">
                <span className="info-label"><GraduationCap size={14} /> ITI / Polytechnic / College</span>
                <span className="info-value">ITI</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Calendar size={14} /> Year of Study</span>
                <span className="info-value">2nd Year</span>
              </div>
              <div className="info-item">
                <span className="info-label"><User size={14} /> Institute Name</span>
                <span className="info-value">Government ITI, Patna</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Calendar size={14} /> Graduation Year</span>
                <span className="info-value">2026</span>
              </div>
            </div>
          </div>

          <div className="split-cards">
            <div className="info-card flex-1">
              <div className="card-header border-bottom">
                <div className="card-title">
                  <Target size={18} className="icon-blue" />
                  <h3>Career Preferences</h3>
                </div>
              </div>
              <div className="info-list">
                <div className="info-item stacked">
                  <span className="info-label"><Briefcase size={14} /> Preferred Job Role</span>
                  <span className="info-value">Electrical Technician</span>
                </div>
                <div className="info-item stacked">
                  <span className="info-label"><Briefcase size={14} /> Preferred Industry Sector</span>
                  <span className="info-value">Manufacturing</span>
                </div>
                <div className="info-item stacked">
                  <span className="info-label"><MapPin size={14} /> Preferred Location</span>
                  <span className="info-value">Patna, Bihar</span>
                </div>
              </div>
            </div>

            <div className="right-split">
              <div className="info-card mb-4">
                <div className="card-header border-bottom">
                  <div className="card-title">
                    <Award size={18} className="icon-blue" />
                    <h3>Certifications</h3>
                  </div>
                  <a href="#" className="view-link">View All <ChevronRight size={14} /></a>
                </div>
                <div className="certification-list">
                  <div className="cert-item">
                    <div className="cert-icon"><Award size={20} color="#3b82f6" /></div>
                    <div className="cert-details">
                      <span className="cert-name">ITI Certificate (Electrician)</span>
                      <span className="cert-date">Completed • 2024</span>
                    </div>
                    <span className="cert-status verified"><CheckCircle2 size={12} /> Verified</span>
                  </div>
                  <div className="cert-item">
                    <div className="cert-icon"><Award size={20} color="#3b82f6" /></div>
                    <div className="cert-details">
                      <span className="cert-name">Safety Training Certificate</span>
                      <span className="cert-date">Completed • 2024</span>
                    </div>
                    <span className="cert-status verified"><CheckCircle2 size={12} /> Verified</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="card-header border-bottom">
                  <div className="card-title">
                    <PenTool size={18} className="icon-blue" />
                    <h3>Practical Experience</h3>
                  </div>
                </div>
                <div className="experience-list">
                  <div className="exp-item">
                    <div className="exp-icon"><Calendar size={16} /></div>
                    <div className="exp-details">
                      <span className="exp-label">Duration</span>
                      <span className="exp-value">6 Months</span>
                    </div>
                  </div>
                  <div className="exp-item">
                    <div className="exp-icon"><PenTool size={16} /></div>
                    <div className="exp-details">
                      <span className="exp-label">Type</span>
                      <span className="exp-value">Workshop Training</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="right-column">
          
          <div className="info-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <PenTool size={18} className="icon-blue" />
                <h3>Current Skills</h3>
              </div>
              <a href="#" className="view-link">View All <ChevronRight size={14} /></a>
            </div>
            
            <div className="skills-tags-container">
              <span className="skill-tag green-border">Electrical Wiring</span>
              <span className="skill-tag blue-border">Basic PLC</span>
              <span className="skill-tag blue-border">Motor Control</span>
              <span className="skill-tag cyan-border">Hand Tools</span>
              <span className="skill-tag green-border">Safety Procedures</span>
            </div>

            <div className="card-header border-bottom mt-4">
              <div className="card-title">
                <BarChart2 size={18} className="icon-blue" />
                <h3>Skill Level</h3>
              </div>
            </div>
            
            <div className="skill-bars-list">
              <div className="skill-bar-item">
                <span className="skill-name">Electrical Wiring</span>
                <div className="bar-row">
                  <div className="progress-bar"><div className="progress blue" style={{width: '65%'}}></div></div>
                  <span className="skill-level intermediate">Intermediate</span>
                  <span className="skill-pct">65%</span>
                </div>
              </div>
              <div className="skill-bar-item">
                <span className="skill-name">Basic PLC</span>
                <div className="bar-row">
                  <div className="progress-bar"><div className="progress blue" style={{width: '40%'}}></div></div>
                  <span className="skill-level beginner">Beginner</span>
                  <span className="skill-pct">40%</span>
                </div>
              </div>
              <div className="skill-bar-item">
                <span className="skill-name">Motor Control</span>
                <div className="bar-row">
                  <div className="progress-bar"><div className="progress blue" style={{width: '60%'}}></div></div>
                  <span className="skill-level intermediate">Intermediate</span>
                  <span className="skill-pct">60%</span>
                </div>
              </div>
              <div className="skill-bar-item">
                <span className="skill-name">CAD (Basic)</span>
                <div className="bar-row">
                  <div className="progress-bar"><div className="progress blue" style={{width: '35%'}}></div></div>
                  <span className="skill-level beginner">Beginner</span>
                  <span className="skill-pct">35%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <Settings size={18} className="icon-blue" />
                <h3>Quick Actions</h3>
              </div>
            </div>
            <div className="quick-actions-container">
              <button className="primary-btn full-width mb-3">
                <Edit size={16} /> Edit Profile
              </button>
              <button className="outline-btn full-width">
                <Save size={16} /> Save Changes
              </button>
              
              <div className="info-box mt-4">
                <Info size={16} className="info-icon" />
                <p>Keep your profile updated to get better career matches and learning recommendations.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
