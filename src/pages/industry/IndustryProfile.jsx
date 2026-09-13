import React from 'react';
import { Building2, Settings, Tag, Landmark, Edit3, CheckCircle, Users } from 'lucide-react';
import './IndustryProfile.css';

const IndustryProfile = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Company Profile</h1>
          <p className="page-subtitle">Manage your company information for Maharashtra Government's skill-demand analysis</p>
        </div>
        <div className="status-banner green-banner">
          <div className="banner-icon"><CheckCircle size={24} /></div>
          <div>
            <strong>Verified</strong>
            <p>Your company profile is verified by Maharashtra Government</p>
          </div>
        </div>
      </div>

      <div className="profile-card main-profile">
        <div className="card-header">
          <div className="card-title-wrap">
            <Building2 size={20} className="text-blue" />
            <h2>Company Information</h2>
          </div>
          <button className="edit-btn"><Edit3 size={14}/> Edit</button>
        </div>
        <div className="card-body">
          <div className="company-branding">
            <div className="company-logo-large">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <path d="M10 30 L50 10 L90 30 L90 40 L50 20 L10 40 Z" fill="#1d4ed8"/>
                <path d="M30 40 L50 30 L70 40 L70 80 L50 90 L30 80 Z" fill="#1d4ed8"/>
              </svg>
              <span className="logo-text">TATA</span>
            </div>
            <div className="company-name-large">
              <h2>Tata Motors Limited</h2>
              <p>Driving a Better Tomorrow</p>
            </div>
            <div className="company-image">
              <div className="building-silhouette-large"></div>
            </div>
          </div>
          
          <div className="info-grid-2col">
            <div className="info-item">
              <span className="label">Company Name</span>
              <span className="colon">:</span>
              <span className="value">Tata Motors Limited</span>
            </div>
            <div className="info-item">
              <span className="label">Official Email</span>
              <span className="colon">:</span>
              <span className="value">info@tatamotors.com</span>
            </div>
            <div className="info-item">
              <span className="label">Company Registration Number</span>
              <span className="colon">:</span>
              <span className="value">U34100MH1945PLC004520</span>
            </div>
            <div className="info-item">
              <span className="label">Contact Number</span>
              <span className="colon">:</span>
              <span className="value">+91 20 6618 1234</span>
            </div>
            <div className="info-item">
              <span className="label">Industry Sector</span>
              <span className="colon">:</span>
              <span className="value">Automotive</span>
            </div>
            <div className="info-item">
              <span className="label">Website</span>
              <span className="colon">:</span>
              <span className="value text-blue flex-gap"><a href="#">www.tatamotors.com</a> <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
            </div>
            <div className="info-item">
              <span className="label">Sub-sector</span>
              <span className="colon">:</span>
              <span className="value">Passenger & Commercial Vehicles</span>
            </div>
            <div className="info-item">
              <span className="label">Contact Person</span>
              <span className="colon">:</span>
              <span className="value">Mr. Amit Kulkarni</span>
            </div>
            <div className="info-item">
              <span className="label">District</span>
              <span className="colon">:</span>
              <span className="value">Pune</span>
            </div>
            <div className="info-item">
              <span className="label">Designation</span>
              <span className="colon">:</span>
              <span className="value">Head - HR & Talent Development</span>
            </div>
            <div className="info-item">
              <span className="label">Industrial Area</span>
              <span className="colon">:</span>
              <span className="value">Chakan MIDC</span>
            </div>
            <div className="info-item">
              <span className="label">Email (Contact Person)</span>
              <span className="colon">:</span>
              <span className="value">amit.kulkarni@tatamotors.com</span>
            </div>
            <div className="info-item">
              <span className="label">Complete Address</span>
              <span className="colon">:</span>
              <span className="value">Plot No. A-1, Chakan MIDC,<br/>Taluka Khed, Pune - 410501,<br/>Maharashtra, India</span>
            </div>
            <div className="info-item">
              <span className="label" style={{alignSelf: 'flex-start'}}>Mobile (Contact Person)</span>
              <span className="colon" style={{alignSelf: 'flex-start'}}>:</span>
              <span className="value" style={{alignSelf: 'flex-start'}}>+91 98230 56789</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card h-full">
          <div className="card-header">
            <div className="card-title-wrap">
              <Settings size={20} className="text-blue" />
              <h2>Business Information</h2>
            </div>
            <button className="edit-btn"><Edit3 size={14}/> Edit</button>
          </div>
          <div className="card-body flex-col-between">
            <div className="info-grid-1col">
              <div className="info-item">
                <span className="label">Company Size</span>
                <span className="colon">:</span>
                <span className="value">Large Enterprise</span>
              </div>
              <div className="info-item">
                <span className="label">Number of Employees</span>
                <span className="colon">:</span>
                <span className="value">12,500</span>
              </div>
              <div className="info-item">
                <span className="label">Major Products / Services</span>
                <span className="colon">:</span>
                <span className="value">Passenger Vehicles, Commercial Vehicles, Electric Vehicles, Auto Components</span>
              </div>
              <div className="info-item">
                <span className="label">Technologies Used</span>
                <span className="colon">:</span>
                <span className="value">Robotics, IoT, AI, CAD/CAM, ERP (SAP)</span>
              </div>
              <div className="info-item">
                <span className="label">Machines / Equipment Used</span>
                <span className="colon">:</span>
                <span className="value">CNC Machines, Robotic Arms, Press Machines, Assembly Lines, Paint Shop</span>
              </div>
              <div className="info-item">
                <span className="label">Current Workforce</span>
                <span className="colon">:</span>
                <div className="value stack">
                  <span>Skilled - 60%</span>
                  <span>Semi-Skilled - 30%</span>
                  <span>Unskilled - 10%</span>
                </div>
              </div>
            </div>
            
            <div className="promo-banner mt-4">
              <div className="promo-icon"><Users size={32} className="text-blue" /></div>
              <div className="promo-content">
                <strong>Your information helps build a skilled and stronger Maharashtra.</strong>
                <p>Partnering Industry. Empowering Talent. Building Tomorrow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-col-right">
          <div className="profile-card mb-4">
            <div className="card-header">
              <div className="card-title-wrap">
                <Tag size={20} className="text-blue" />
                <h2>Industry Classification</h2>
              </div>
              <button className="edit-btn"><Edit3 size={14}/> Edit</button>
            </div>
            <div className="card-body">
              <div className="info-grid-1col">
                <div className="info-item">
                  <span className="label">Primary Sector</span>
                  <span className="colon">:</span>
                  <span className="value">Manufacturing</span>
                </div>
                <div className="info-item">
                  <span className="label">Secondary Sector</span>
                  <span className="colon">:</span>
                  <span className="value">Automotive & Auto Components</span>
                </div>
                <div className="info-item">
                  <span className="label">Manufacturing / Service</span>
                  <span className="colon">:</span>
                  <span className="value">Manufacturing</span>
                </div>
                <div className="info-item">
                  <span className="label">Major Job Roles</span>
                  <span className="colon">:</span>
                  <span className="value">Production Operator, Machine Technician, Quality Inspector, Maintenance Engineer, Assembly Line Supervisor</span>
                </div>
                <div className="info-item">
                  <span className="label">Production Technologies</span>
                  <span className="colon">:</span>
                  <span className="value">Automated Assembly, EV Manufacturing, CNC Machining, Robotics, Lean Manufacturing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-header bg-slate-50">
              <div className="card-title-wrap">
                <Landmark size={20} className="text-blue" />
                <h2>Government Data</h2>
              </div>
              <span className="lock-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> View Only</span>
            </div>
            <div className="card-body">
              <div className="info-grid-1col">
                <div className="info-item">
                  <span className="label">Industry ID</span>
                  <span className="colon">:</span>
                  <span className="value">MH-IND-0004521</span>
                </div>
                <div className="info-item">
                  <span className="label">Registration Status</span>
                  <span className="colon">:</span>
                  <span className="value text-green font-medium">Active</span>
                </div>
                <div className="info-item">
                  <span className="label">Last Data Update</span>
                  <span className="colon">:</span>
                  <span className="value">12 Aug 2025, 14:30</span>
                </div>
                <div className="info-item">
                  <span className="label">Verification Date</span>
                  <span className="colon">:</span>
                  <span className="value">05 Aug 2025</span>
                </div>
                <div className="info-item">
                  <span className="label">Verified By</span>
                  <span className="colon">:</span>
                  <span className="value">Maharashtra Industrial Development Corporation (MIDC)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="page-actions-bottom">
        <button className="btn outline-btn"><Edit3 size={16}/> Edit Profile</button>
        <button className="btn primary-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.24l5.08 5.08"/></svg> Update Information</button>
        <button className="btn green-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Submit for Verification</button>
      </div>
    </div>
  );
};

export default IndustryProfile;
