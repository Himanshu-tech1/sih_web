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
        <SettingsNavTab icon={Lock} title="Account Security" />
        <SettingsNavTab icon={Users} title="User Management" />
        <SettingsNavTab icon={Bell} title="Notifications" />
        <SettingsNavTab icon={Share2} title="Data Sharing" />
        <SettingsNavTab icon={CheckCircle} title="Industry Verification" />
        <SettingsNavTab icon={Link} title="API / Data Integration" />
        <SettingsNavTab icon={FileText} title="Activity Log" />
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

        {/* Account Security */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <Lock size={18} className="text-blue" /> Account Security
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Keep your account secure.</p>
          </div>
          <div className="card-body flex flex-col gap-4">
            <div className="security-item flex-between">
              <div className="flex items-start gap-3">
                <Key size={18} className="text-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-dark text-sm">Change Password</h4>
                  <p className="text-xs text-gray">Update your password regularly.</p>
                </div>
              </div>
              <button className="btn outline-btn">Change Password</button>
            </div>
            <div className="security-item flex-between border-t pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-dark text-sm">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray">Add an extra layer of security.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green text-xs font-semibold flex items-center gap-1"><span className="dot bg-green"></span> Enabled</span>
                <button className="btn outline-btn">Manage</button>
              </div>
            </div>
            <div className="security-item flex-between border-t pt-4">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-dark text-sm">Login History</h4>
                  <p className="text-xs text-gray">View your recent login activity.</p>
                </div>
              </div>
              <button className="btn outline-btn">View History</button>
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

        {/* Notification Preferences */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <Bell size={18} className="text-blue" /> Notification Preferences
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Choose what updates you want to receive.</p>
          </div>
          <div className="card-body">
            <div className="toggle-list">
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><Users size={16}/></span> New candidate matches</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><Building2 size={16}/></span> Institute collaboration requests</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-orange"><AlertTriangle size={16}/></span> Skill-gap alerts</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-green"><CheckCircle size={16}/></span> Government feedback requests</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-red"><Briefcase size={16}/></span> Job applications</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-purple"><GraduationCap size={16}/></span> Training opportunities</div>
                <div className="toggle-switch"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing Preferences */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <Share2 size={18} className="text-blue" /> Data Sharing Preferences
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Manage how your data is shared with government and institutes.</p>
          </div>
          <div className="card-body">
            <div className="toggle-list">
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><Briefcase size={16}/></span> Share job openings with government</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><AlertTriangle size={16}/></span> Share skill gap feedback (anonymized)</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2 border-b">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><Building2 size={16}/></span> Allow institutes to view collaboration interest</div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="toggle-item flex-between py-2">
                <div className="flex items-center gap-2 text-sm text-dark font-medium"><span className="text-blue"><FileText size={16}/></span> Share workforce demand data for policy planning</div>
                <div className="toggle-switch"></div>
              </div>
            </div>
            
            <div className="info-box bg-blue-50 border border-blue-200 text-blue rounded-lg p-3 mt-4 text-xs flex gap-2">
              <div className="mt-1"><Info size={14}/></div>
              <p>Your data is used only for skill development and workforce planning purposes under Government of Maharashtra's SkillConnect initiative.</p>
            </div>
          </div>
        </div>

        {/* Industry Verification */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <CheckCircle size={18} className="text-blue" /> Industry Verification
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Complete verification to access all features.</p>
          </div>
          <div className="card-body">
            <div className="flex items-center gap-2 text-green font-semibold mb-4">
              <CheckCircle size={18} /> Verified <span className="text-gray text-xs font-normal">Your company has been verified by the Maharashtra Government.</span>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-gray block text-xs">Verified On</span>
                <span className="text-dark font-medium">12 Aug 2025</span>
              </div>
              <div>
                <span className="text-gray block text-xs">Verification ID</span>
                <span className="text-dark font-medium">MH-IND-2025-0142</span>
              </div>
              <div>
                <span className="text-gray block text-xs">Documents</span>
                <a href="#" className="text-blue font-medium hover:underline">View Documents</a>
              </div>
            </div>
          </div>
        </div>

        {/* API / Data Integration */}
        <div className="settings-card col-span-1">
          <div className="card-header border-b">
            <h3 className="flex items-center gap-2 text-dark font-semibold">
              <Link size={18} className="text-blue" /> API / Data Integration
            </h3>
            <p className="text-sm text-gray mt-1 ml-6">Integrate your systems with SkillConnect.</p>
          </div>
          <div className="card-body">
            <div className="flex-between mb-4">
              <div className="text-sm"><span className="text-gray">API Status</span> <span className="text-green font-semibold ml-2"><span className="dot bg-green"></span> Active</span></div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="text-gray hover:text-blue">View API Docs</a>
                <a href="#" className="text-blue flex items-center gap-1 hover:underline"><Key size={14}/> Manage Keys</a>
              </div>
            </div>
            <div className="form-group mb-2">
              <label className="text-xs">Webhook URL</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="https://api.abcmfg.com/skillconnect/webhook" className="flex-1" />
                <button className="btn outline-btn p-2"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
              </div>
            </div>
            <p className="text-xs text-gray">Need help? <a href="#" className="text-blue">Contact our support team.</a></p>
          </div>
        </div>

        {/* Activity Log */}
        <div className="settings-card col-span-2">
          <div className="card-header border-b flex-between">
            <div>
              <h3 className="flex items-center gap-2 text-dark font-semibold">
                <FileText size={18} className="text-blue" /> Activity Log
              </h3>
              <p className="text-sm text-gray mt-1 ml-6">Track recent activity on your account.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray">
              Filter <select className="border border-slate-300 rounded px-2 py-1 outline-none text-dark"><option>All Modules</option></select>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="settings-table w-full text-left text-sm">
              <thead className="bg-slate-50 text-gray">
                <tr>
                  <th className="py-2 px-4 font-semibold">Date & Time</th>
                  <th className="py-2 px-4 font-semibold">User</th>
                  <th className="py-2 px-4 font-semibold">Action</th>
                  <th className="py-2 px-4 font-semibold">Module</th>
                  <th className="py-2 px-4 font-semibold">Status</th>
                  <th className="py-2 px-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 text-xs text-gray">12 Sep 2025, 10:24 AM</td>
                  <td className="py-2 px-4 font-medium text-dark">Rahul Sharma</td>
                  <td className="py-2 px-4">Added new job opening</td>
                  <td className="py-2 px-4">Job Openings</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Success</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-xs text-gray">12 Sep 2025, 09:15 AM</td>
                  <td className="py-2 px-4 font-medium text-dark">Priya Deshmukh</td>
                  <td className="py-2 px-4">Updated company profile</td>
                  <td className="py-2 px-4">Company Profile</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Success</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-xs text-gray">11 Sep 2025, 05:42 PM</td>
                  <td className="py-2 px-4 font-medium text-dark">Amit Kulkarni</td>
                  <td className="py-2 px-4">Reported skill gap</td>
                  <td className="py-2 px-4">Skill Gap Feedback</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Success</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-xs text-gray">11 Sep 2025, 11:20 AM</td>
                  <td className="py-2 px-4 font-medium text-dark">Neha Patil</td>
                  <td className="py-2 px-4">Invited institute for collaboration</td>
                  <td className="py-2 px-4">Institute Collaboration</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Success</span></td>
                  <td className="py-2 px-4"><button className="text-gray"><MoreHorizontal size={16}/></button></td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-xs text-gray">10 Sep 2025, 03:18 PM</td>
                  <td className="py-2 px-4 font-medium text-dark">System</td>
                  <td className="py-2 px-4">User login</td>
                  <td className="py-2 px-4">Account</td>
                  <td className="py-2 px-4"><span className="text-green font-medium">Success</span></td>
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
