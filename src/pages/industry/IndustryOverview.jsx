import React from 'react';
import { Building2, Briefcase, Users, Target, AlertTriangle, UserPlus, Handshake, ArrowUp, ArrowRight, Clock, LineChart, MessageSquare } from 'lucide-react';
import './IndustryOverview.css';

const KpiCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
  <div className="kpi-card">
    <div className={`kpi-icon ${colorClass}`}>
      <Icon size={20} />
    </div>
    <div className="kpi-content">
      <h3>{title}</h3>
      <div className="kpi-value-row">
        <div className="kpi-value">{value}</div>
      </div>
      <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
        <ArrowUp size={14} className={!isPositive ? 'rotate-down' : ''} />
        <span>{change}</span>
        <span className="vs-text">vs. last month</span>
      </div>
    </div>
  </div>
);

const IndustryOverview = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Industry Dashboard</h1>
          <p className="page-subtitle">Manage your workforce requirements and connect with skilled talent.</p>
        </div>
        <div className="verified-badge">
          <div className="company-icon"><Building2 size={24}/></div>
          <div className="company-brief">
            <span className="name">ABC Industries Pvt. Ltd.</span>
            <span className="loc">Manufacturing | Pune, Maharashtra</span>
          </div>
          <div className="verified-status">
            <svg viewBox="0 0 24 24" fill="#16a34a" width="16" height="16"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.823 3.823 7.918-7.918-1.061-1.061-6.857 6.857z"/></svg> 
            Verified
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        <KpiCard title="Active Job Openings" value="42" change="12%" isPositive={true} icon={Briefcase} colorClass="blue" />
        <KpiCard title="Total Job Roles" value="18" change="8%" isPositive={true} icon={Users} colorClass="light-blue" />
        <KpiCard title="Required Skills" value="56" change="15%" isPositive={true} icon={Target} colorClass="blue" />
        <KpiCard title="Skills in Shortage" value="12" change="3%" isPositive={false} icon={AlertTriangle} colorClass="red" />
        <KpiCard title="Apprenticeship Opportunities" value="8" change="33%" isPositive={true} icon={UserPlus} colorClass="blue" />
        <KpiCard title="Institute Partnerships" value="6" change="20%" isPositive={true} icon={Handshake} colorClass="blue" />
      </div>

      <div className="dashboard-grid main-grid">
        {/* Current Hiring Demand */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><Briefcase size={16}/></div>
              <div>
                <h2>Current Hiring Demand</h2>
                <p>Active job roles and number of vacancies</p>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="card-table">
            <div className="table-head">
              <div>Job Role</div>
              <div style={{textAlign: 'right'}}>Vacancies</div>
            </div>
            <div className="table-row">
              <div className="role-cell">
                <div className="role-icon blue"><Briefcase size={14}/></div>
                <div>
                  <strong>CNC Operator</strong>
                  <span>Manufacturing</span>
                </div>
              </div>
              <div className="badge blue-badge">25</div>
              <ArrowRight size={16} className="row-action" />
            </div>
            <div className="table-row">
              <div className="role-cell">
                <div className="role-icon green"><Target size={14}/></div>
                <div>
                  <strong>PLC Technician</strong>
                  <span>Electronics & Automation</span>
                </div>
              </div>
              <div className="badge green-badge">12</div>
              <ArrowRight size={16} className="row-action" />
            </div>
            <div className="table-row">
              <div className="role-cell">
                <div className="role-icon purple"><Users size={14}/></div>
                <div>
                  <strong>Automation Technician</strong>
                  <span>Manufacturing</span>
                </div>
              </div>
              <div className="badge purple-badge">8</div>
              <ArrowRight size={16} className="row-action" />
            </div>
            <div className="table-row">
              <div className="role-cell">
                <div className="role-icon orange"><Briefcase size={14}/></div>
                <div>
                  <strong>EV Technician</strong>
                  <span>Automotive</span>
                </div>
              </div>
              <div className="badge orange-badge">15</div>
              <ArrowRight size={16} className="row-action" />
            </div>
          </div>
        </div>

        {/* Most Required Skills */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><Target size={16}/></div>
              <div>
                <h2>Most Required Skills</h2>
                <p>Skills in high demand from your industry</p>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="card-table">
            <div className="table-head">
              <div style={{flex: 2}}>Skill</div>
              <div style={{flex: 1}}>Demand</div>
              <div style={{flex: 1}}>Required Level</div>
              <div style={{flex: 1, textAlign: 'center'}}>Candidate Availability</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>CNC Programming</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1}}><span className="status-text blue">Advanced</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red">Low</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>PLC Programming</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1}}><span className="status-text blue">Advanced</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red">Low</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Industrial Automation</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1}}><span className="status-text blue">Advanced</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill orange">Medium</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Welding</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1}}><span className="status-text blue">Intermediate</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill orange">Medium</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Electrical Maintenance</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1}}><span className="status-text blue">Intermediate</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill green">High</span></div>
            </div>
          </div>
        </div>

        {/* Skill Shortage */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon red"><AlertTriangle size={16}/></div>
              <div>
                <h2>Skill Shortage</h2>
                <p>Critical skills where qualified candidates are hard to find</p>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="card-table">
            <div className="table-head">
              <div style={{flex: 2}}>Skill</div>
              <div style={{flex: 1}}>Demand</div>
              <div style={{flex: 1, textAlign: 'center'}}>Gap Level</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>CNC Programming</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red-fill">Severe</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>PLC Troubleshooting</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red-fill">Severe</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Industrial Robotics</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red-outline">High</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>EV Systems</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill red-outline">High</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Advanced Welding</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}><span className="status-pill orange-outline">Medium</span></div>
            </div>
          </div>
        </div>

        {/* Future Skill Demand */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><LineChart size={16}/></div>
              <div>
                <h2>Future Skill Demand</h2>
                <p>Emerging technologies and expected demand</p>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="card-table">
            <div className="table-head">
              <div style={{flex: 2}}>Technology / Skill</div>
              <div style={{flex: 1}}>Expected Demand</div>
              <div style={{flex: 1}}>Timeframe</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>AI & Machine Learning</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1, color: '#64748b'}}>2-5 years</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Electric Vehicle Technology</div>
              <div style={{flex: 1}}><span className="status-text red">High</span></div>
              <div style={{flex: 1, color: '#64748b'}}>2-5 years</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Industrial IoT (IIoT)</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, color: '#64748b'}}>3-5 years</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Robotics & Automation</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, color: '#64748b'}}>3-5 years</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Additive Manufacturing</div>
              <div style={{flex: 1}}><span className="status-text orange">Medium</span></div>
              <div style={{flex: 1, color: '#64748b'}}>3-5 years</div>
            </div>
          </div>
        </div>
        
        {/* Institute Collaboration */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><Building2 size={16}/></div>
              <div>
                <h2>Institute Collaboration</h2>
                <p>Active ITI and Polytechnic partnerships</p>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="collaboration-summary">
            <div className="collab-box">
              <div className="collab-icon blue"><Building2 size={20}/></div>
              <div className="collab-info">
                <h3>3</h3>
                <p>ITI Partners</p>
              </div>
            </div>
            <div className="collab-box">
              <div className="collab-icon blue"><Building2 size={20}/></div>
              <div className="collab-info">
                <h3>3</h3>
                <p>Polytechnic Partners</p>
              </div>
            </div>
          </div>
          <div className="card-table">
            <div className="table-head">
              <div style={{flex: 2}}>Institute Name</div>
              <div style={{flex: 1}}>Type</div>
              <div style={{flex: 1}}>Status</div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Govt. ITI Pimpri</div>
              <div style={{flex: 1, color: '#64748b'}}>ITI</div>
              <div style={{flex: 1}}><span className="status-text green">Active</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Govt. Polytechnic, Pune</div>
              <div style={{flex: 1, color: '#64748b'}}>Polytechnic</div>
              <div style={{flex: 1}}><span className="status-text green">Active</span></div>
            </div>
            <div className="table-row compact">
              <div style={{flex: 2, fontWeight: 500}}>Govt. ITI Chakan</div>
              <div style={{flex: 1, color: '#64748b'}}>ITI</div>
              <div style={{flex: 1}}><span className="status-text green">Active</span></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-wrap">
              <div className="card-icon blue"><Clock size={16}/></div>
              <div>
                <h2>Recent Activity</h2>
              </div>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14}/></a>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon blue"><Briefcase size={14}/></div>
              <div className="activity-content">
                <strong>New Job Posted</strong>
                <p>CNC Operator - 25 openings</p>
              </div>
              <div className="activity-time">2 hours ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon purple"><Target size={14}/></div>
              <div className="activity-content">
                <strong>Skill Requirement Updated</strong>
                <p>Added PLC Programming (Advanced)</p>
              </div>
              <div className="activity-time">5 hours ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon orange"><MessageSquare size={14}/></div>
              <div className="activity-content">
                <strong>Industry Feedback Submitted</strong>
                <p>Training quality feedback for ITI</p>
              </div>
              <div className="activity-time">1 day ago <ArrowRight size={12}/></div>
            </div>
            <div className="activity-item">
              <div className="activity-icon green"><Handshake size={14}/></div>
              <div className="activity-content">
                <strong>Institute Collaboration Request</strong>
                <p>Govt. Polytechnic, Pune</p>
              </div>
              <div className="activity-time">2 days ago <ArrowRight size={12}/></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IndustryOverview;
