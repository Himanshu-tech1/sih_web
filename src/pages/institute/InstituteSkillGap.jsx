import React, { useState } from 'react';
import { 
  Scale, ChevronDown, AlertTriangle, RefreshCw, FileText, Download,
  CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownRight, User, Settings, Zap, Car, BookOpen, Clock, Hexagon, Crosshair,
  Search, Check, Sparkles, Filter
} from 'lucide-react';
import './InstituteSkillGap.css';

const INITIAL_GAP_DATA = [
  {
    id: 1,
    skill: 'PLC Programming',
    sector: 'Electrical & Electronics',
    trade: 'Electrician',
    program: 'Diploma',
    demand: 90,
    coverage: 45,
    gap: 45,
    status: 'Critical Gap',
    action: 'Add Skill Module',
    icon: 'user'
  },
  {
    id: 2,
    skill: 'Robotics & Industrial Automation',
    sector: 'Manufacturing',
    trade: 'Machinist',
    program: 'Diploma',
    demand: 80,
    coverage: 20,
    gap: 60,
    status: 'Critical Gap',
    action: 'Upgrade Lab',
    icon: 'zap'
  },
  {
    id: 3,
    skill: 'CNC Programming & Operation',
    sector: 'Manufacturing',
    trade: 'Fitter',
    program: 'ITI',
    demand: 90,
    coverage: 75,
    gap: 15,
    status: 'Partial',
    action: 'Increase Practical Training',
    icon: 'settings'
  },
  {
    id: 4,
    skill: 'EV Technology & Battery Pack Assembly',
    sector: 'Automotive',
    trade: 'Electrician',
    program: 'Diploma',
    demand: 85,
    coverage: 20,
    gap: 65,
    status: 'Critical Gap',
    action: 'Collaborate With Industry',
    icon: 'car'
  },
  {
    id: 5,
    skill: 'Advanced Welding (TIG/MIG)',
    sector: 'Manufacturing',
    trade: 'Welder',
    program: 'ITI',
    demand: 70,
    coverage: 60,
    gap: 10,
    status: 'Partial',
    action: 'Update Curriculum',
    icon: 'alert'
  },
  {
    id: 6,
    skill: 'Electrical Systems & Substation Wiring',
    sector: 'Electrical & Electronics',
    trade: 'Electrician',
    program: 'ITI',
    demand: 75,
    coverage: 70,
    gap: 5,
    status: 'Aligned',
    action: 'Maintain',
    icon: 'zap'
  },
  {
    id: 7,
    skill: 'AutoCAD & 3D Mechanical Modeling',
    sector: 'Manufacturing',
    trade: 'Fitter',
    program: 'Diploma',
    demand: 82,
    coverage: 65,
    gap: 17,
    status: 'Partial',
    action: 'Increase Practical Training',
    icon: 'settings'
  },
  {
    id: 8,
    skill: 'Solar & Renewable Energy Systems',
    sector: 'Renewable Energy',
    trade: 'Electrician',
    program: 'ITI',
    demand: 78,
    coverage: 35,
    gap: 43,
    status: 'Critical Gap',
    action: 'Add Skill Module',
    icon: 'zap'
  }
];

const ACTION_OPTIONS = [
  'Add Skill Module',
  'Upgrade Lab',
  'Increase Practical Training',
  'Collaborate With Industry',
  'Update Curriculum',
  'Faculty Training (ToT)',
  'Dual Training / Apprenticeship',
  'Maintain'
];

const InstituteSkillGap = () => {
  const [skillsData, setSkillsData] = useState(INITIAL_GAP_DATA);
  const [selectedTrade, setSelectedTrade] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedDemandLevel, setSelectedDemandLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleActionChange = (id, newAction) => {
    setSkillsData(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, action: newAction };
      }
      return item;
    }));

    const skillItem = skillsData.find(s => s.id === id);
    showToast(`✓ Recommended action for "${skillItem?.skill || 'Skill'}" set to "${newAction}"`);
  };

  const resetFilters = () => {
    setSelectedTrade('All');
    setSelectedProgram('All');
    setSelectedSector('All');
    setSelectedDemandLevel('All');
    setSearchQuery('');
  };

  const handleExport = () => {
    showToast('📥 Skills Gap Analysis report downloaded successfully (PDF/Excel)!');
  };

  const filteredData = skillsData.filter(item => {
    const matchesSearch = !searchQuery || 
      item.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTrade = selectedTrade === 'All' || item.trade.toLowerCase() === selectedTrade.toLowerCase();
    const matchesProgram = selectedProgram === 'All' || item.program.toLowerCase() === selectedProgram.toLowerCase();
    const matchesSector = selectedSector === 'All' || item.sector.toLowerCase() === selectedSector.toLowerCase();
    const matchesDemandLevel = selectedDemandLevel === 'All' || 
      (selectedDemandLevel === 'Critical Gap' && item.gap >= 40) ||
      (selectedDemandLevel === 'Partial' && item.gap > 5 && item.gap < 40) ||
      (selectedDemandLevel === 'Aligned' && item.gap <= 5);

    return matchesSearch && matchesTrade && matchesProgram && matchesSector && matchesDemandLevel;
  });

  return (
    <div className="institute-skill-gap">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="toast-notification-banner">
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <Scale size={24} />
          </div>
          <div>
            <h1>Skill Gap & Alignment Analysis</h1>
            <p>Compare Maharashtra industrial skill demands with your institute's course coverage and take action.</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="last-updated">
            <span className="icon">⏱</span>
            <div>
              <span className="label">Last Synced</span>
              <span className="time">Live Data • Pune Industrial Cluster</span>
            </div>
          </div>
          <button className="year-selector">
            <span className="icon">📅</span>
            Academic Year 2024-25
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filter-group">
          <label>Search Skill</label>
          <div className="search-input-wrap">
            <input 
              type="text" 
              placeholder="Search skill, trade..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Trade</label>
          <div className="select-wrapper">
            <select value={selectedTrade} onChange={(e) => setSelectedTrade(e.target.value)}>
              <option value="All">All Trades</option>
              <option value="Electrician">Electrician</option>
              <option value="Fitter">Fitter</option>
              <option value="Machinist">Machinist</option>
              <option value="Welder">Welder</option>
            </select>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="filter-group">
          <label>Program</label>
          <div className="select-wrapper">
            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
              <option value="All">All Programs</option>
              <option value="ITI">ITI</option>
              <option value="Diploma">Diploma</option>
            </select>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="filter-group">
          <label>Sector</label>
          <div className="select-wrapper">
            <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
              <option value="All">All Sectors</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Automotive">Automotive</option>
              <option value="Electrical & Electronics">Electrical & Electronics</option>
              <option value="Renewable Energy">Renewable Energy</option>
            </select>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="filter-group">
          <label>Demand & Gap Level</label>
          <div className="select-wrapper">
            <select value={selectedDemandLevel} onChange={(e) => setSelectedDemandLevel(e.target.value)}>
              <option value="All">All Levels</option>
              <option value="Critical Gap">Critical Gap (&ge; 40%)</option>
              <option value="Partial">Partial Gap (10% - 39%)</option>
              <option value="Aligned">Aligned (&le; 10%)</option>
            </select>
            <ChevronDown size={16} />
          </div>
        </div>

        <button className="reset-btn" onClick={resetFilters}>
          <RefreshCw size={14} /> Reset Filters
        </button>
      </div>

      {/* Main Content Area: Full Width Skills Gap Analysis Table */}
      <div className="main-content-area full-width-layout">
        <div className="left-panel full-width-panel">
          <div className="table-section-card">
            <div className="card-header">
              <div className="card-title">
                <div className="icon-wrapper blue"><FileText size={18} /></div>
                <div>
                  <h3>Skills Gap Analysis</h3>
                  <p className="card-subtitle">Detailed comparison of industry demand vs institute coverage with recommended actions.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className="results-count-tag">{filteredData.length} Skills Analyzed</span>
                <button className="primary-btn small" onClick={handleExport}>
                  <Download size={14} /> Export Report
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="analysis-table">
                <thead>
                  <tr>
                    <th>Skill Competency</th>
                    <th>Related Trade / Sector</th>
                    <th>Industry Demand</th>
                    <th>Institute Coverage</th>
                    <th>Gap %</th>
                    <th>Status</th>
                    <th>Recommended Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td className="skill-cell">
                        {item.icon === 'user' && <User size={16} className="icon-blue" />}
                        {item.icon === 'zap' && <Zap size={16} className="icon-blue" />}
                        {item.icon === 'settings' && <Settings size={16} className="icon-blue" />}
                        {item.icon === 'car' && <Car size={16} className="icon-blue" />}
                        {item.icon === 'alert' && <AlertTriangle size={16} className="icon-blue" />}
                        <span style={{ fontWeight: '600' }}>{item.skill}</span>
                      </td>
                      <td>
                        <span className="trade-badge">{item.trade}</span>
                        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{item.sector}</div>
                      </td>
                      <td>
                        <div className="progress-cell">
                          <span className="pct-num">{item.demand}%</span>
                          <div className="progress-bar">
                            <div className="progress blue" style={{ width: `${item.demand}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="progress-cell">
                          <span className="pct-num">{item.coverage}%</span>
                          <div className="progress-bar">
                            <div className="progress light-blue" style={{ width: `${item.coverage}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <strong style={{ color: item.gap >= 40 ? '#ef4444' : item.gap >= 15 ? '#f59e0b' : '#16a34a' }}>
                          {item.gap}%
                        </strong>
                      </td>
                      <td>
                        <span className={`status-pill ${item.status === 'Critical Gap' ? 'critical' : item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        {/* Working Recommended Action Dropdown */}
                        <div className="select-action">
                          <select 
                            value={item.action} 
                            onChange={(e) => handleActionChange(item.id, e.target.value)}
                          >
                            {ACTION_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={14} />
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredData.length === 0 && (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                        No skill gaps matching your filters. Try clicking "Reset Filters".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="table-footer">
              <span className="showing-text">Showing {filteredData.length} of {skillsData.length} trade skills</span>
              <div className="pagination">
                <button className="page-btn active">1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteSkillGap;
