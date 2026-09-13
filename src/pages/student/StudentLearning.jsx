import React from 'react';
import { 
  BookOpen, Target, Settings, Zap, ArrowRight, Play, Check, Clock, 
  Monitor, BarChart2, Flame, AlertTriangle, Lightbulb, TrendingUp
} from 'lucide-react';
import './StudentLearning.css';

const StudentLearning = () => {
  return (
    <div className="student-learning">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <BookOpen size={24} />
          </div>
          <div>
            <h1>Learning Recommendations</h1>
            <p>Personalized learning based on your skill gaps and industry demand.</p>
          </div>
        </div>
        <div className="info-formula">
          <div className="formula-icon"><Target size={20} /></div>
          <div className="formula-text-col">
            <span className="ft-title">Learn. Improve. Get Hired.</span>
            <span className="ft-sub">Close your skill gaps and build a stronger career.</span>
          </div>
        </div>
      </div>

      {/* Top Skill Gaps Highlight */}
      <div className="top-gaps-box">
        <div className="gaps-left">
          <div className="gaps-icon-box"><Target size={20} /></div>
          <div className="gaps-text">
            <h3>Your Top Skill Gaps</h3>
            <p>Focus on these key skills to improve your career opportunities.</p>
          </div>
        </div>
        <div className="gaps-pills">
          <div className="gap-pill">
            <span className="gp-name">PLC Programming</span>
            <span className="gp-badge red">High</span>
          </div>
          <div className="gap-pill">
            <span className="gp-name">Advanced CNC</span>
            <span className="gp-badge orange">Medium</span>
          </div>
          <div className="gap-pill">
            <span className="gp-name">Industrial Robotics</span>
            <span className="gp-badge orange">Medium</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="learning-filters">
        <div className="filter-tabs">
          <button className="tab-btn active">Recommended for You</button>
          <button className="tab-btn red-light">High Priority</button>
          <button className="tab-btn purple-light">Industry Trending</button>
          <button className="tab-btn green-light">Based on Your Career Goal</button>
        </div>
        <div className="sort-by">
          <span>Sort by:</span>
          <select><option>Most Relevant</option></select>
        </div>
      </div>

      {/* Learning Cards List */}
      <div className="learning-cards-list">
        
        {/* Card 1 */}
        <div className="learning-card">
          <div className="card-col col-main">
            <div className="skill-header">
              <div className="skill-icon blue"><Settings size={20} /></div>
              <div className="skill-info">
                <div className="name-row">
                  <h4>PLC Programming</h4>
                  <span className="badge-flame"><Flame size={12} /> High Demand</span>
                </div>
                <span className="priority-badge red-text">High Priority</span>
                <p className="skill-desc">High demand in current industry requirements.</p>
              </div>
            </div>
            
            <div className="skill-metrics">
              <div className="metric-box">
                <span className="m-label">Current Level</span>
                <span className="m-val blue-text">Basic</span>
                <div className="m-bar"><div className="fill blue" style={{width: '30%'}}></div></div>
              </div>
              <div className="metric-box">
                <span className="m-label">Target Level</span>
                <span className="m-val green-text">Intermediate</span>
                <div className="m-bar"><div className="fill green" style={{width: '60%'}}></div></div>
              </div>
              <div className="metric-box priority">
                <span className="m-label">Priority</span>
                <span className="p-badge red">High</span>
              </div>
            </div>
          </div>

          <div className="card-col col-module">
            <div className="module-header">
              <Settings size={16} className="icon-blue" />
              <h5>Recommended Learning</h5>
            </div>
            <ul className="module-list">
              <li>PLC Programming Fundamentals</li>
              <li>Practical PLC Troubleshooting</li>
            </ul>

            <div className="module-meta">
              <div className="meta-item">
                <Clock size={14} />
                <div className="meta-text">
                  <span className="ml">Duration</span>
                  <span className="mv">6 Weeks</span>
                </div>
              </div>
              <div className="meta-item">
                <Monitor size={14} />
                <div className="meta-text">
                  <span className="ml">Mode</span>
                  <span className="mv">Online + Practical</span>
                </div>
              </div>
              <div className="meta-item">
                <BarChart2 size={14} />
                <div className="meta-text">
                  <span className="ml">Level</span>
                  <span className="mv">Beginner → Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-col col-action">
            <div className="why-important">
              <div className="why-header">
                <Lightbulb size={14} className="icon-blue" />
                <h6>Why this is important?</h6>
              </div>
              <p>PLC programming is essential for automation in manufacturing, making it a high-demand skill in current and future industries.</p>
            </div>
            
            <div className="action-buttons">
              <button className="primary-btn">View Details <ArrowRight size={14} /></button>
              <button className="outline-btn"><Play size={14} /> Start Learning</button>
              <button className="outline-btn"><Check size={14} /> Mark as Completed</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="learning-card">
          <div className="card-col col-main">
            <div className="skill-header">
              <div className="skill-icon blue"><Settings size={20} /></div>
              <div className="skill-info">
                <div className="name-row">
                  <h4>Advanced CNC Programming</h4>
                  <span className="badge-flame"><Flame size={12} /> High Demand</span>
                </div>
                <span className="priority-badge orange-text">Medium Priority</span>
                <p className="skill-desc">High demand in manufacturing and automotive sectors.</p>
              </div>
            </div>
            
            <div className="skill-metrics flex-stats">
              <div className="stat-col">
                <span className="s-label">Skill Gap</span>
                <span className="s-val">40%</span>
                <div className="m-bar"><div className="fill blue" style={{width: '40%'}}></div></div>
              </div>
              <div className="stat-col">
                <span className="s-label">Industry Demand</span>
                <span className="s-val">80%</span>
                <div className="m-bar"><div className="fill blue" style={{width: '80%'}}></div></div>
              </div>
              <div className="stat-col center">
                <span className="s-label">Industry Relevance</span>
                <span className="relevance-badge green">High</span>
              </div>
            </div>
          </div>

          <div className="card-col col-module">
            <div className="module-header">
              <Settings size={16} className="icon-blue" />
              <h5>Recommended Module</h5>
            </div>
            <ul className="module-list">
              <li>Advanced CNC Programming</li>
            </ul>

            <div className="module-meta">
              <div className="meta-item">
                <Clock size={14} />
                <div className="meta-text">
                  <span className="ml">Duration</span>
                  <span className="mv">8 Weeks</span>
                </div>
              </div>
              <div className="meta-item">
                <Monitor size={14} />
                <div className="meta-text">
                  <span className="ml">Mode</span>
                  <span className="mv">Online + Lab</span>
                </div>
              </div>
              <div className="meta-item">
                <BarChart2 size={14} />
                <div className="meta-text">
                  <span className="ml">Level</span>
                  <span className="mv">Intermediate → Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-col col-action">
            <div className="why-important">
              <div className="why-header">
                <Lightbulb size={14} className="icon-blue" />
                <h6>Why this is important?</h6>
              </div>
              <p>Advanced CNC skills are required for complex parts manufacturing and higher-paying job roles in the manufacturing sector.</p>
            </div>
            
            <div className="action-buttons">
              <button className="primary-btn">View Details <ArrowRight size={14} /></button>
              <button className="outline-btn"><Play size={14} /> Start Learning</button>
              <button className="outline-btn"><Check size={14} /> Mark as Completed</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="learning-card">
          <div className="card-col col-main">
            <div className="skill-header">
              <div className="skill-icon blue"><Zap size={20} /></div>
              <div className="skill-info">
                <div className="name-row">
                  <h4>Industrial Robotics</h4>
                  <span className="badge-flame purple"><TrendingUp size={12} /> Trending</span>
                </div>
                <span className="priority-badge orange-text">Medium Priority</span>
                <p className="skill-desc">Growing demand in automation and smart manufacturing.</p>
              </div>
            </div>
            
            <div className="skill-metrics flex-stats">
              <div className="stat-col">
                <span className="s-label">Skill Gap</span>
                <span className="s-val">50%</span>
                <div className="m-bar"><div className="fill blue" style={{width: '50%'}}></div></div>
              </div>
              <div className="stat-col">
                <span className="s-label">Industry Demand</span>
                <span className="s-val">75%</span>
                <div className="m-bar"><div className="fill blue" style={{width: '75%'}}></div></div>
              </div>
              <div className="stat-col center">
                <span className="s-label">Industry Relevance</span>
                <span className="relevance-badge green">High</span>
              </div>
            </div>
          </div>

          <div className="card-col col-module">
            <div className="module-header">
              <Settings size={16} className="icon-blue" />
              <h5>Recommended Module</h5>
            </div>
            <ul className="module-list">
              <li>Industrial Robotics Basics</li>
            </ul>

            <div className="module-meta">
              <div className="meta-item">
                <Clock size={14} />
                <div className="meta-text">
                  <span className="ml">Duration</span>
                  <span className="mv">8 Weeks</span>
                </div>
              </div>
              <div className="meta-item">
                <Monitor size={14} />
                <div className="meta-text">
                  <span className="ml">Mode</span>
                  <span className="mv">Online + Practical</span>
                </div>
              </div>
              <div className="meta-item">
                <BarChart2 size={14} />
                <div className="meta-text">
                  <span className="ml">Level</span>
                  <span className="mv">Beginner → Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-col col-action">
            <div className="why-important">
              <div className="why-header">
                <Lightbulb size={14} className="icon-blue" />
                <h6>Why this is important?</h6>
              </div>
              <p>Robotics skills help you work with automated systems, increasing your employability in modern manufacturing industries.</p>
            </div>
            
            <div className="action-buttons">
              <button className="primary-btn">View Details <ArrowRight size={14} /></button>
              <button className="outline-btn"><Play size={14} /> Start Learning</button>
              <button className="outline-btn"><Check size={14} /> Mark as Completed</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentLearning;
