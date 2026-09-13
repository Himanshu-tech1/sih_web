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
              <img src="/images/tata-logo.svg" alt="Tata Logo" />
            </div>
            <div className="company-name-large">
              <h2>Tata Motors Limited</h2>
              <p>Driving a Better Tomorrow</p>
            </div>
            <div className="company-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Company Office" />
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

      <div className="page-actions-bottom">
        <button className="btn outline-btn"><Edit3 size={16}/> Edit Profile</button>
        <button className="btn primary-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.24l5.08 5.08"/></svg> Update Information</button>
        <button className="btn green-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Submit for Verification</button>
      </div>
    </div>
  );
};

export default IndustryProfile;
