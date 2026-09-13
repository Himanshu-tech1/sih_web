import React from 'react';
import { User, Building, Lock, Users, Bell, Share2, CheckCircle, Link, FileText, Upload, Key, MoreHorizontal, Clock, Building2, Briefcase, GraduationCap, AlertTriangle, Info } from 'lucide-react';
import './IndustrySettings.css';

const SettingsNavTab = ({ icon: Icon, title, active }) => (
  <button className={`settings-tab ${active ? 'active' : ''}`}>
    <Icon size={16} />
    {title}
  </button>
);

const IndustrySettings = () => {
  return (
    <div className="dashboard-page settings-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account, organisation details, security and preferences.</p>
        </div>
      </div>

      <div className="settings-nav-bar">
        <SettingsNavTab icon={User} title="Profile Settings" active={true} />
        <SettingsNavTab icon={Building} title="Company Information" />
        <SettingsNavTab icon={Users} title="User Management" />
      </div>

      <div className="settings-grid">
        
        {/* Profile Settings */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <User size={18} className="text-blue" /> Profile Settings
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Manage your personal profile details.</p>
          </div>
          <div className="card-body">
            <div className="flex gap-4">
              <div className="avatar-upload">
                <div className="avatar-circle large">
                  <span>IU</span>
                </div>
                <button className="btn outline-btn btn-sm mt-2">Change Photo</button>
              </div>
              <div className="flex-1 form-grid-2col" style={{gridTemplateColumns: '1fr 1fr'}}>
                <div className="form-group full-width">
                  <label>Full Name *</label>
                  <input type="text" defaultValue="Industry User" />
                </div>
                <div className="form-group full-width">
                  <label>Email Address</label>
                  <input type="email" defaultValue="user@abcmfg.com" disabled className="bg-slate-50 text-gray" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" defaultValue="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input type="text" defaultValue="HR Manager" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn primary-btn">Save Changes</button>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <Building size={18} className="text-blue" /> Company Information
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Update your company details.</p>
          </div>
          <div className="card-body">
            <div className="form-grid-2col">
              <div className="form-group">
                <label>Company Name *</label>
                <input type="text" defaultValue="ABC Manufacturing Pvt. Ltd." />
              </div>
              <div className="form-group">
                <label>Industry Sector *</label>
                <select><option>Automotive & Manufacturing</option></select>
              </div>
              <div className="form-group full-width">
                <label>Registered Address *</label>
                <input type="text" defaultValue="MIDC, Chakan, Pune - 410501, Maharashtra" />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input type="text" defaultValue="https://www.abcmfg.com" />
              </div>
              <div className="form-group">
                <label>Company Description</label>
                <textarea rows="2" defaultValue="We are an automotive component manufacturing company focused on innovation, sustainability and skilled workforce development."></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn primary-btn">Save Changes</button>
            </div>
          </div>
        </div>


        {/* User Management */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b flex-between">
            <div>
              <h3 className="flex items-center gap-2 text-dark font-semibold">
                <Users size={18} className="text-blue" /> User Management
              </h3>
              <p className="text-sm text-gray mt-1 ml-6">Manage team members and their access.</p>
            </div>
            <button className="btn primary-btn btn-sm">+ Add User</button>
          </div>
          <div className="card-body p-0">
            <table className="settings-table w-full text-left text-sm">
              <thead className="bg-slate-50 text-gray">
                <tr>
                  <th className="py-2 px-4 font-semibold">Name</th>
                  <th className="py-2 px-4 font-semibold">Role</th>
                  <th className="py-2 px-4 font-semibold">Email</th>
                  <th className="py-2 px-4 font-semibold">Status</th>
                  <th className="py-2 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-dark">Rahul Sharma</td>
                  <td className="py-2 px-4"><span className="status-pill purple-outline">Admin</span></td>
                  <td className="py-2 px-4 text-gray text-xs">rahul@abcmfg.com</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Active</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-dark">Priya Deshmukh</td>
                  <td className="py-2 px-4"><span className="status-pill blue-outline">HR Manager</span></td>
                  <td className="py-2 px-4 text-gray text-xs">priya@abcmfg.com</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Active</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium text-dark">Amit Kulkarni</td>
                  <td className="py-2 px-4"><span className="status-pill orange-outline">Skill/Training Manager</span></td>
                  <td className="py-2 px-4 text-gray text-xs">amit@abcmfg.com</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Active</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-dark">Neha Patil</td>
                  <td className="py-2 px-4"><span className="status-pill blue-outline">Recruitment Manager</span></td>
                  <td className="py-2 px-4 text-gray text-xs">neha@abcmfg.com</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Active</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IndustrySettings;
