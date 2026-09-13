import React from 'react';
import { 
  Star, ClipboardList, CheckCircle2, AlertTriangle, Target, 
  ArrowUp, ArrowRight, User, Settings, PenTool, Shield, 
  Cpu, Zap, Briefcase, BookOpen, Lock, BarChart2, TrendingUp
} from 'lucide-react';
import './StudentOverview.css';

const StudentOverview = () => {
  return (
    <div className="student-overview">
      <div className="welcome-section">
        <div className="welcome-text">
          <div className="avatar-large">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Student" />
          </div>
          <div>
            <h1>Welcome back, Priya 👋</h1>
            <p>Track your skills and prepare for industry opportunities.</p>
          </div>
        </div>
        <div className="quote-box">
          <p className="quote-text">"Better skills. Brighter future."</p>
          <span className="quote-author">— SkillConnect</span>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card main-score">
          <div className="score-content">
            <div className="score-icon"><Star size={24} color="#3b82f6" fill="#3b82f6" /></div>
            <div className="score-details">
              <span className="score-label">Overall Skill Score</span>
              <div className="score-value-row">
                <span className="score-number">72%</span>
                <span className="score-trend positive"><ArrowUp size={12} /> +5% <span className="dim">from last month</span></span>
              </div>
            </div>
          </div>
          <div className="score-donut">
             <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
          </div>
        </div>

        <div className="metric-card progress-metric">
          <div className="metric-header">
            <div className="metric-icon blue"><ClipboardList size={18} /></div>
            <div className="metric-text">
              <span className="metric-label">Skills Assessed</span>
              <div className="metric-value-wrapper">
                <span className="metric-value">12</span>
                <span className="metric-sub">of 15 skills</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar"><div className="progress blue" style={{width: '80%'}}></div></div>
            <span className="progress-text">80%</span>
          </div>
        </div>

        <div className="metric-card progress-metric">
          <div className="metric-header">
            <div className="metric-icon green"><CheckCircle2 size={18} /></div>
            <div className="metric-text">
              <span className="metric-label">Skills Matched</span>
              <div className="metric-value-wrapper">
                <span className="metric-value">8</span>
                <span className="metric-sub">of 12 skills</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar"><div className="progress green" style={{width: '67%'}}></div></div>
            <span className="progress-text">67%</span>
          </div>
        </div>

        <div className="metric-card progress-metric">
          <div className="metric-header">
            <div className="metric-icon orange"><AlertTriangle size={18} /></div>
            <div className="metric-text">
              <span className="metric-label">Skill Gaps</span>
              <div className="metric-value-wrapper">
                <span className="metric-value">4</span>
                <span className="metric-sub">of 12 skills</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar"><div className="progress orange" style={{width: '33%'}}></div></div>
            <span className="progress-text">33%</span>
          </div>
        </div>

        <div className="metric-card simple-metric">
          <div className="metric-icon purple"><Target size={24} /></div>
          <span className="metric-label">Career Matches</span>
          <span className="metric-value">3</span>
          <span className="metric-sub">suitable roles</span>
          <a href="#" className="view-link">View All <ArrowRight size={12} /></a>
        </div>
      </div>

      <div className="main-content-row">
        <div className="dashboard-card half">
          <div className="card-header">
            <div className="card-title">
              <div className="icon-wrapper blue"><BarChart2 size={16} /></div>
              <h3>My Skill Overview</h3>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14} /></a>
          </div>
          <table className="overview-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Progress</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="skill-name"><User size={14} className="icon-blue" /> PLC Programming</td>
                <td className="progress-cell">
                  <div className="progress-bar"><div className="progress blue" style={{width: '65%'}}></div></div>
                  <span className="pct">65%</span>
                </td>
                <td><span className="level-badge intermediate">Intermediate</span></td>
              </tr>
              <tr>
                <td className="skill-name"><Settings size={14} className="icon-blue" /> CNC</td>
                <td className="progress-cell">
                  <div className="progress-bar"><div className="progress blue" style={{width: '48%'}}></div></div>
                  <span className="pct">48%</span>
                </td>
                <td><span className="level-badge beginner">Beginner</span></td>
              </tr>
              <tr>
                <td className="skill-name"><PenTool size={14} className="icon-blue" /> CAD</td>
                <td className="progress-cell">
                  <div className="progress-bar"><div className="progress blue" style={{width: '78%'}}></div></div>
                  <span className="pct">78%</span>
                </td>
                <td><span className="level-badge intermediate">Intermediate</span></td>
              </tr>
              <tr>
                <td className="skill-name"><Shield size={14} className="icon-blue" /> Electrical Safety</td>
                <td className="progress-cell">
                  <div className="progress-bar"><div className="progress blue" style={{width: '85%'}}></div></div>
                  <span className="pct">85%</span>
                </td>
                <td><span className="level-badge advanced">Advanced</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-card half">
          <div className="card-header">
            <div className="card-title">
              <div className="icon-wrapper blue"><Target size={16} /></div>
              <h3>Top Skill Gaps</h3>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14} /></a>
          </div>
          <table className="overview-table gaps-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Current Level</th>
                <th>Required Level</th>
                <th>Gap</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="skill-name"><Cpu size={14} className="icon-blue" /> Robotics</td>
                <td><span className="text-beginner">Beginner</span></td>
                <td><span className="text-advanced">Advanced</span></td>
                <td><span className="gap-pct red">60%</span></td>
                <td><span className="priority-badge high">High</span></td>
              </tr>
              <tr>
                <td className="skill-name"><User size={14} className="icon-blue" /> PLC Programming</td>
                <td><span className="text-intermediate">Intermediate</span></td>
                <td><span className="text-advanced">Advanced</span></td>
                <td><span className="gap-pct red">45%</span></td>
                <td><span className="priority-badge high">High</span></td>
              </tr>
              <tr>
                <td className="skill-name"><Settings size={14} className="icon-blue" /> CNC Programming</td>
                <td><span className="text-beginner">Beginner</span></td>
                <td><span className="text-intermediate">Intermediate</span></td>
                <td><span className="gap-pct orange">35%</span></td>
                <td><span className="priority-badge medium">Medium</span></td>
              </tr>
              <tr>
                <td className="skill-name"><PenTool size={14} className="icon-blue" /> CAD</td>
                <td><span className="text-intermediate">Intermediate</span></td>
                <td><span className="text-advanced">Advanced</span></td>
                <td><span className="gap-pct orange">30%</span></td>
                <td><span className="priority-badge medium">Medium</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="main-content-row">
        <div className="dashboard-card flex-2">
          <div className="card-header">
            <div className="card-title">
              <div className="icon-wrapper blue"><Briefcase size={16} /></div>
              <h3>Recommended Career Roles</h3>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14} /></a>
          </div>
          <div className="roles-grid">
            <div className="role-card">
              <div className="role-header">
                <div className="role-icon blue"><Settings size={20} /></div>
                <div className="role-info">
                  <h4>CNC Operator</h4>
                  <span className="role-dept">Manufacturing</span>
                </div>
              </div>
              <div className="role-match">
                <div className="match-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="match-icon"><CheckCircle2 size={12} color="#10b981" /></span>
                </div>
                <div className="match-text">
                  <span className="match-pct">82%</span>
                  <span className="match-label">Match</span>
                </div>
              </div>
              <button className="primary-btn outline full-width">View Details <ArrowRight size={14} /></button>
            </div>
            
            <div className="role-card">
              <div className="role-header">
                <div className="role-icon blue"><Zap size={20} /></div>
                <div className="role-info">
                  <h4>Automation Technician</h4>
                  <span className="role-dept">Electrical / Automation</span>
                </div>
              </div>
              <div className="role-match">
                <div className="match-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="match-icon"><CheckCircle2 size={12} color="#10b981" /></span>
                </div>
                <div className="match-text">
                  <span className="match-pct">70%</span>
                  <span className="match-label">Match</span>
                </div>
              </div>
              <button className="primary-btn outline full-width">View Details <ArrowRight size={14} /></button>
            </div>

            <div className="role-card">
              <div className="role-header">
                <div className="role-icon blue"><Zap size={20} /></div>
                <div className="role-info">
                  <h4>Electrical Technician</h4>
                  <span className="role-dept">Electrical</span>
                </div>
              </div>
              <div className="role-match">
                <div className="match-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="match-icon"><CheckCircle2 size={12} color="#10b981" /></span>
                </div>
                <div className="match-text">
                  <span className="match-pct">88%</span>
                  <span className="match-label">Match</span>
                </div>
              </div>
              <button className="primary-btn outline full-width">View Details <ArrowRight size={14} /></button>
            </div>
          </div>
        </div>

        <div className="dashboard-card flex-1">
          <div className="card-header">
            <div className="card-title">
              <div className="icon-wrapper blue"><BookOpen size={16} /></div>
              <h3>Learning Recommendations</h3>
            </div>
            <a href="#" className="view-all">View All <ArrowRight size={14} /></a>
          </div>
          <div className="learning-list">
            <div className="learning-item">
              <div className="learning-icon"><Lock size={16} /></div>
              <span className="learning-name">PLC Programming</span>
              <span className="priority-text red">High Priority</span>
              <button className="text-btn">Complete Module <ArrowRight size={14} /></button>
            </div>
            <div className="learning-item">
              <div className="learning-icon"><Lock size={16} /></div>
              <span className="learning-name">CNC Programming</span>
              <span className="priority-text red">High Priority</span>
              <button className="text-btn">Start Learning <ArrowRight size={14} /></button>
            </div>
            <div className="learning-item">
              <div className="learning-icon"><Lock size={16} /></div>
              <span className="learning-name">CAD</span>
              <span className="priority-text orange">Medium Priority</span>
              <button className="text-btn">Start Learning <ArrowRight size={14} /></button>
            </div>
            <div className="learning-item">
              <div className="learning-icon"><CheckCircle2 size={16} color="#10b981" /></div>
              <span className="learning-name">Electrical Safety</span>
              <span className="priority-text orange">Medium Priority</span>
              <button className="text-btn">Start Learning <ArrowRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header border-bottom">
          <div className="card-title">
            <div className="icon-wrapper blue"><TrendingUp size={16} /></div>
            <h3>Recent Industry Demand</h3>
          </div>
        </div>
        <div className="demand-tags-area">
          <div className="demand-tags-scroll">
            <div className="demand-tag">
              <div className="tag-header">
                <User size={14} className="icon-blue" /> <span>PLC Programming</span>
              </div>
              <span className="badge red-light">Very High Demand</span>
            </div>
            <div className="demand-tag">
              <div className="tag-header">
                <Settings size={14} className="icon-blue" /> <span>CNC</span>
              </div>
              <span className="badge orange-light">High Demand</span>
            </div>
            <div className="demand-tag">
              <div className="tag-header">
                <Cpu size={14} className="icon-blue" /> <span>Robotics</span>
              </div>
              <span className="badge orange-light">High Demand</span>
            </div>
            <div className="demand-tag">
              <div className="tag-header">
                <PenTool size={14} className="icon-blue" /> <span>CAD/CAM</span>
              </div>
              <span className="badge orange-light">High Demand</span>
            </div>
            <div className="demand-tag">
              <div className="tag-header">
                <Zap size={14} className="icon-blue" /> <span>Industrial Automation</span>
              </div>
              <span className="badge cyan-light">Growing Demand</span>
            </div>
          </div>
          <div className="explore-jobs-cta">
            <div className="icon-box"><Briefcase size={20} color="#3b82f6" /></div>
            <div className="cta-text">
              <p>These skills are in high demand in Maharashtra industries.</p>
              <a href="#" className="explore-link">Explore Job Opportunities <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
