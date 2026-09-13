import React from 'react';
import { 
  Building2, CheckCircle2, Edit, Save, MapPin, Mail, Phone, Globe,
  Users, BookOpen, GraduationCap, Handshake, Wrench, FlaskConical,
  MonitorPlay, Cpu, Activity, ArrowRight, FileText, PlusCircle, PenTool
} from 'lucide-react';
import './InstituteProfile.css';

const InstituteProfile = () => {
  return (
    <div className="institute-profile">
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Building2 size={24} />
          </div>
          <div>
            <h1>Institute Profile</h1>
            <p>Manage your institute's official information and details.</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="verification-status verified">
            <CheckCircle2 size={16} /> Verified Institute
          </div>
          <div className="last-updated">
            <span className="icon">⏱</span>
            <div>
              <span className="label">Last Updated</span>
              <span className="time">26 Jun 2025, 10:45 AM</span>
            </div>
          </div>
          <button className="outline-btn">
            <Edit size={16} /> Edit Profile
          </button>
          <button className="primary-btn">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      <div className="profile-grid">
        <div className="card main-info-card">
          <div className="institute-name-section">
            <div className="institute-logo">
              <Building2 size={32} color="#3b82f6" />
            </div>
            <div>
              <h2>Shree Ganesh Industrial Training Institute</h2>
              <span className="verified-badge"><CheckCircle2 size={14} /> Verified Institute</span>
            </div>
          </div>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label"><Building2 size={14} /> Institute Type</span>
              <span className="info-value">ITI</span>
            </div>
            <div className="info-item">
              <span className="info-label"><Mail size={14} /> Official Email</span>
              <span className="info-value primary">principal@sgiti.ac.in</span>
            </div>
            <div className="info-item">
              <span className="info-label"><FileText size={14} /> Registration Number</span>
              <span className="info-value">ITI/MH/2020/1245</span>
            </div>
            <div className="info-item">
              <span className="info-label"><Phone size={14} /> Contact Number</span>
              <span className="info-value">+91 98765 43210</span>
            </div>
            <div className="info-item">
              <span className="info-label"><MapPin size={14} /> District</span>
              <span className="info-value">Pune</span>
            </div>
            <div className="info-item">
              <span className="info-label"><Globe size={14} /> Website</span>
              <span className="info-value primary">www.sgiti.ac.in</span>
            </div>
            <div className="info-item">
              <span className="info-label"><MapPin size={14} /> Taluka</span>
              <span className="info-value">Haveli</span>
            </div>
            <div className="info-item">
              <span className="info-label"></span>
              <span className="info-value"></span>
            </div>
            <div className="info-item full-width">
              <span className="info-label"><MapPin size={14} /> Address</span>
              <span className="info-value">Plot No. 123, MIDC Area, Bhosari, Pune - 411026, Maharashtra</span>
            </div>
          </div>
        </div>

        <div className="card training-info-card">
          <div className="card-header">
            <div className="card-title">
              <Building2 size={18} color="#3b82f6" />
              <h3>Training Information</h3>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon"><Users size={20} /></div>
              <span className="stat-label">Total Students</span>
              <span className="stat-value">1,248</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><Users size={20} /></div>
              <span className="stat-label">Student Capacity</span>
              <span className="stat-value">1,500</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><BookOpen size={20} /></div>
              <span className="stat-label">Trades / Programs</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><GraduationCap size={20} /></div>
              <span className="stat-label">Number of Trainers</span>
              <span className="stat-value">28</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><Handshake size={20} /></div>
              <span className="stat-label">Industry Partnerships</span>
              <span className="stat-value">8</span>
            </div>
          </div>
        </div>

        <div className="card infrastructure-card">
          <div className="card-header">
            <div className="card-title">
              <Wrench size={18} color="#3b82f6" />
              <h3>Infrastructure</h3>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon"><Wrench size={20} /></div>
              <span className="stat-label">Workshops</span>
              <span className="stat-value">8</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><FlaskConical size={20} /></div>
              <span className="stat-label">Laboratories</span>
              <span className="stat-value">5</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><Cpu size={20} /></div>
              <span className="stat-label">Machines / Equipment</span>
              <span className="stat-value">42</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><MonitorPlay size={20} /></div>
              <span className="stat-label">Computer Facilities</span>
              <span className="stat-value">60</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><FileText size={20} /></div>
              <span className="stat-label">Practical Training Facilities</span>
              <span className="stat-value">100%</span>
            </div>
          </div>
        </div>

        <div className="card partnership-card">
          <div className="card-header">
            <div className="card-title">
              <Users size={18} color="#3b82f6" />
              <h3>Industry Partnership</h3>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon"><Building2 size={20} /></div>
              <span className="stat-label">Partner Companies</span>
              <span className="stat-value">15</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><Users size={20} /></div>
              <span className="stat-label">Apprenticeship Partners</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-box">
              <div className="stat-icon"><Handshake size={20} /></div>
              <span className="stat-label">Training Partners</span>
              <span className="stat-value">6</span>
            </div>
          </div>
        </div>

        <div className="card recent-activity-card">
          <div className="card-header">
            <div className="card-title">
              <Activity size={18} color="#3b82f6" />
              <h3>Recent Activity</h3>
            </div>
            <a href="#" className="view-all">View All</a>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon"><FileText size={16} /></div>
              <div className="activity-content">
                <div className="activity-title">Institute profile updated</div>
                <div className="activity-desc">You updated your institute contact details</div>
              </div>
              <div className="activity-meta">
                <span className="activity-time">26 Jun 2025, 10:45 AM</span>
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon"><BookOpen size={16} /></div>
              <div className="activity-content">
                <div className="activity-title">New course added</div>
                <div className="activity-desc">CNC Operator (NSQF Level 4)</div>
              </div>
              <div className="activity-meta">
                <span className="activity-time">24 Jun 2025, 03:20 PM</span>
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon"><Handshake size={16} /></div>
              <div className="activity-content">
                <div className="activity-title">Industry partnership added</div>
                <div className="activity-desc">Tata Motors - Apprenticeship Program</div>
              </div>
              <div className="activity-meta">
                <span className="activity-time">20 Jun 2025, 01:15 PM</span>
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon"><Wrench size={16} /></div>
              <div className="activity-content">
                <div className="activity-title">Infrastructure updated</div>
                <div className="activity-desc">Added 2 new machines in CNC lab</div>
              </div>
              <div className="activity-meta">
                <span className="activity-time">18 Jun 2025, 11:30 AM</span>
                <span className="status-badge completed">Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card quick-actions-card">
          <div className="card-header">
            <div className="card-title">
              <ZapIcon size={18} color="#3b82f6" />
              <h3>Quick Actions</h3>
            </div>
          </div>
          <div className="actions-list">
            <div className="action-button">
              <div className="action-icon"><Edit size={20} /></div>
              <div className="action-text">
                <h4>Edit Profile</h4>
                <p>Update institute information, contact details and more</p>
              </div>
              <ArrowRight size={20} className="arrow-icon" />
            </div>
            <div className="action-button">
              <div className="action-icon"><PenTool size={20} /></div>
              <div className="action-text">
                <h4>Update Information</h4>
                <p>Modify courses, infrastructure, partnerships etc.</p>
              </div>
              <ArrowRight size={20} className="arrow-icon" />
            </div>
            <div className="action-button">
              <div className="action-icon"><Save size={20} /></div>
              <div className="action-text">
                <h4>Save Changes</h4>
                <p>Save all your updates to keep your profile current</p>
              </div>
              <ArrowRight size={20} className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZapIcon = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
)

export default InstituteProfile;
