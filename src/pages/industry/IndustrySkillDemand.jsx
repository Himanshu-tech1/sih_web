import React from 'react';
import { Calendar, Briefcase, Cpu, Flame, TrendingUp, Equal, TrendingDown, AlertTriangle, Download, Search, Info, Users, Plus, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './IndustrySkillDemand.css';

const DemandKpiCard = ({ title, value, change, icon: Icon, colorClass, isNegative = false, isNeutral = false }) => (
  <div className={`demand-kpi-card ${colorClass}`}>
    <div className="kpi-header-row">
      <div className="kpi-icon-circle"><Icon size={20} /></div>
      <div className="kpi-title">{title}</div>
    </div>
    <div className="kpi-value-row">
      <div className="kpi-value">{value}</div>
      <div className={`kpi-change ${isNegative ? 'negative' : isNeutral ? 'neutral' : 'positive'}`}>
        {isNegative ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: 'rotate(180deg)'}}><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        ) : isNeutral ? (
          <span style={{fontSize: '14px'}}>-</span>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        )}
        <span>{change}</span>
        <span className="vs-text">vs. last period</span>
      </div>
    </div>
  </div>
);

const IndustrySkillDemand = () => {
  const lineData = [
    { name: 'Mar 2025', plc: 35, robotics: 25, cnc: 45, automation: 20, ev: 15, iot: 10 },
    { name: 'Apr 2025', plc: 38, robotics: 28, cnc: 48, automation: 22, ev: 18, iot: 12 },
    { name: 'May 2025', plc: 40, robotics: 30, cnc: 50, automation: 25, ev: 22, iot: 15 },
    { name: 'Jun 2025', plc: 45, robotics: 35, cnc: 55, automation: 30, ev: 28, iot: 18 },
    { name: 'Jul 2025', plc: 50, robotics: 40, cnc: 60, automation: 35, ev: 35, iot: 22 },
    { name: 'Aug 2025', plc: 58, robotics: 48, cnc: 68, automation: 40, ev: 45, iot: 28 },
  ];

  const pieData = [
    { name: 'Production / Manufacturing', value: 98, percent: '29%', color: '#3b82f6' },
    { name: 'Maintenance / Support', value: 76, percent: '22%', color: '#22c55e' },
    { name: 'Automation / Robotics', value: 64, percent: '19%', color: '#eab308' },
    { name: 'R&D / Design', value: 48, percent: '14%', color: '#f97316' },
    { name: 'Quality Control', value: 34, percent: '10%', color: '#8b5cf6' },
    { name: 'Others', value: 22, percent: '6%', color: '#94a3b8' }
  ];

  const tableData = [
    { id: 1, skill: 'PLC', roles: '5 roles', demand: 'Very High', growth: '18%', req: 'Advanced', avail: 'Low' },
    { id: 2, skill: 'Robotics', roles: '4 roles', demand: 'High', growth: '12%', req: 'Advanced', avail: 'Low' },
    { id: 3, skill: 'CNC', roles: '6 roles', demand: 'High', growth: '10%', req: 'Intermediate', avail: 'Medium' },
    { id: 4, skill: 'Automation', roles: '5 roles', demand: 'Medium', growth: '6%', req: 'Intermediate', avail: 'Medium' },
    { id: 5, skill: 'EV Technology', roles: '3 roles', demand: 'High', growth: '15%', req: 'Advanced', avail: 'Low' },
    { id: 6, skill: 'Industrial IoT', roles: '4 roles', demand: 'Medium', growth: '8%', req: 'Intermediate', avail: 'Medium' },
  ];

  return (
    <div className="dashboard-page demand-page">
      <div className="page-header flex-between">
        <div>
          <h1 className="page-title">Skill Demand Intelligence</h1>
          <p className="page-subtitle">Track current and future demand for key skills in your industry.</p>
        </div>
        <button className="btn primary-btn">+ Report Skill Requirement</button>
      </div>

      <div className="filters-bar-card">
        <div className="filter-group">
          <div className="filter-icon"><Calendar size={16}/></div>
          <div className="filter-content">
            <label>Time Period</label>
            <select><option>Last 6 Months</option></select>
          </div>
        </div>
        <div className="filter-divider"></div>
        <div className="filter-group">
          <div className="filter-icon"><Briefcase size={16}/></div>
          <div className="filter-content">
            <label>Department</label>
            <select><option>All Departments</option></select>
          </div>
        </div>
        <div className="filter-divider"></div>
        <div className="filter-group">
          <div className="filter-icon"><Users size={16}/></div>
          <div className="filter-content">
            <label>Job Role</label>
            <select><option>All Job Roles</option></select>
          </div>
        </div>
        <div className="filter-divider"></div>
        <div className="filter-group">
          <div className="filter-icon"><Cpu size={16}/></div>
          <div className="filter-content">
            <label>Skill Category</label>
            <select><option>All Categories</option></select>
          </div>
        </div>
      </div>

      <div className="demand-kpi-grid">
        <DemandKpiCard title="High-Demand Skills" value="8" change="2" icon={Flame} colorClass="red" />
        <DemandKpiCard title="Increasing Demand" value="12" change="3" icon={TrendingUp} colorClass="green" />
        <DemandKpiCard title="Stable Demand" value="15" change="0" isNeutral={true} icon={Equal} colorClass="blue" />
        <DemandKpiCard title="Declining Demand" value="5" change="2" isNegative={true} icon={TrendingDown} colorClass="orange" />
        <DemandKpiCard title="Critical Shortages" value="6" change="1" icon={AlertTriangle} colorClass="purple" />
      </div>

      <div className="demand-charts-row">
        <div className="chart-card line-card">
          <div className="chart-header">
            <h3><span className="chart-icon blue"><TrendingUp size={16}/></span> Current Skill Demand Trend</h3>
            <div className="chart-legend-top">
              <span><span className="dot" style={{backgroundColor: '#3b82f6'}}></span> PLC</span>
              <span><span className="dot" style={{backgroundColor: '#22c55e'}}></span> Robotics</span>
              <span><span className="dot" style={{backgroundColor: '#eab308'}}></span> CNC</span>
              <span><span className="dot" style={{backgroundColor: '#f97316'}}></span> Automation</span>
              <span><span className="dot" style={{backgroundColor: '#8b5cf6'}}></span> EV Technology</span>
              <span><span className="dot" style={{backgroundColor: '#06b6d4'}}></span> Industrial IoT</span>
            </div>
          </div>
          <div className="chart-body line-container">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={lineData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} label={{ value: 'Demand Level', angle: -90, position: 'insideLeft', style: {textAnchor: 'middle', fill: '#64748b', fontSize: 12} }} />
                <RechartsTooltip />
                <Line type="monotone" dataKey="plc" stroke="#3b82f6" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="robotics" stroke="#22c55e" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="cnc" stroke="#eab308" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="automation" stroke="#f97316" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="ev" stroke="#8b5cf6" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="iot" stroke="#06b6d4" strokeWidth={2} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card donut-card">
          <div className="chart-header">
            <h3><span className="chart-icon blue"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span> Skill Demand by Job Role</h3>
          </div>
          <div className="chart-body">
            <div className="donut-wrapper" style={{height: '180px', position: 'relative'}}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="pie-center-val">342</text>
                  <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="pie-center-text">(openings)</text>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="donut-legend-list mt-4">
              {pieData.map((item, i) => (
                <div className="legend-row" key={i}>
                  <div className="legend-name"><span className="dot" style={{backgroundColor: item.color}}></span> {item.name}</div>
                  <div className="legend-val">{item.value}</div>
                  <div className="legend-pct">{item.percent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-grid-7-3">
        <div className="table-card h-full">
          <div className="table-header-bar">
            <div className="table-title">
              <h3><Users size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Skill Demand Details</h3>
            </div>
            <div className="search-input" style={{width: '200px'}}>
              <Search size={16} />
              <input type="text" placeholder="Search skills..." />
            </div>
          </div>
          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th><Cpu size={14} className="inline mr-1"/> Skill</th>
                  <th><Briefcase size={14} className="inline mr-1"/> Job Roles</th>
                  <th><TrendingUp size={14} className="inline mr-1"/> Current Demand</th>
                  <th><TrendingUp size={14} className="inline mr-1"/> Growth</th>
                  <th><Plus size={14} className="inline mr-1"/> Required Level</th>
                  <th><AlertTriangle size={14} className="inline mr-1"/> Availability</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td className="font-medium text-dark">{row.skill}</td>
                    <td>{row.roles}</td>
                    <td>
                      <span className={`status-pill ${row.demand === 'Very High' ? 'red-fill' : row.demand === 'High' ? 'orange-fill' : 'yellow-outline'}`}>
                        {row.demand}
                      </span>
                    </td>
                    <td className="text-green font-medium">↑ {row.growth}</td>
                    <td><span className="status-pill purple-outline">{row.req}</span></td>
                    <td>
                      <span className={`status-pill ${row.avail === 'Low' ? 'red-fill' : 'orange-outline'}`}>
                        {row.avail}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="chart-card insights-card h-full">
          <div className="chart-header">
            <h3><Info size={18} className="text-blue inline-block mr-2" style={{verticalAlign: 'middle'}}/> Key Insights</h3>
          </div>
          <div className="chart-body">
            <ul className="insights-list lg">
              <li>
                <div className="insight-icon red"><AlertTriangle size={16}/></div>
                <div className="insight-content">
                  <strong>PLC & Robotics</strong>
                  <p>Highest demand with low availability.</p>
                </div>
              </li>
              <li>
                <div className="insight-icon green"><TrendingUp size={16}/></div>
                <div className="insight-content">
                  <strong>EV Technology</strong>
                  <p>Fastest growing demand (+15%).</p>
                </div>
              </li>
              <li>
                <div className="insight-icon orange"><TrendingUp size={16}/></div>
                <div className="insight-content">
                  <strong>CNC</strong>
                  <p>Moderate growth, medium availability.</p>
                </div>
              </li>
              <li>
                <div className="insight-icon purple"><Info size={16}/></div>
                <div className="insight-content">
                  <strong>Industrial IoT</strong>
                  <p>Emerging demand, limited talent pool.</p>
                </div>
              </li>
            </ul>
            <div className="promo-box mt-4">
              <div className="promo-icon"><Target size={20}/></div>
              <p>Focus on upskilling for high-demand skills and build partnerships for critical talent gaps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySkillDemand;
