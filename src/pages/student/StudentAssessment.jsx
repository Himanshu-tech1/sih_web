import React, { useState } from 'react';
import { 
  ClipboardList, Info, CheckCircle2, Calendar, Settings, 
  Wrench, Monitor, Users, ArrowLeft, ArrowRight, Lightbulb,
  Trophy, AlertCircle, BarChart2, Check
} from 'lucide-react';
import './StudentAssessment.css';

const StudentAssessment = () => {
  const [selectedOption, setSelectedOption] = useState('B');

  return (
    <div className="student-assessment">
      
      {/* Header */}
      <div className="page-header">
        <div className="header-title">
          <div className="title-icon">
            <ClipboardList size={24} />
          </div>
          <div>
            <h1>Skill Assessment</h1>
            <p>Assess your current skills and track your progress.</p>
          </div>
        </div>
        <a href="#" className="how-it-works"><Info size={16} /> How it works?</a>
      </div>

      {/* Top Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="progress-circle-large">
            <svg viewBox="0 0 36 36" className="circular-chart green">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="21.5" className="percentage">60%</text>
            </svg>
          </div>
          <div className="metric-details">
            <span className="metric-label">Assessment Progress</span>
            <span className="metric-sub">3 of 5 skills completed</span>
            <div className="mini-progress"><div className="progress green" style={{width: '60%'}}></div></div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><ClipboardList size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Skills to Assess</span>
            <span className="metric-value">2</span>
            <span className="metric-sub">remaining</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box green"><CheckCircle2 size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Completed Assessments</span>
            <span className="metric-value">3</span>
            <span className="metric-sub">of 5 total</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box blue"><Calendar size={20} /></div>
          <div className="metric-details">
            <span className="metric-label">Last Assessment Date</span>
            <span className="metric-value date">16 Jun 2025</span>
            <span className="metric-sub">PLC Programming</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h3 className="section-title">Skill Categories</h3>
        <p className="section-subtitle">Select a category to start assessment</p>
        
        <div className="category-tabs">
          <button className="category-tab active">
            <Settings size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Technical Skills</span>
              <span className="cat-count">2 skills</span>
            </div>
          </button>
          
          <button className="category-tab">
            <Wrench size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Practical Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Monitor size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Tools & Equipment</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Monitor size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Digital Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>

          <button className="category-tab">
            <Users size={20} className="cat-icon" />
            <div className="cat-text">
              <span className="cat-name">Workplace Skills</span>
              <span className="cat-count">1 skill</span>
            </div>
          </button>
        </div>
      </div>

      <div className="assessment-main">
        <div className="left-panel">
          <a href="#" className="back-link"><ArrowLeft size={14} /> Back to Skills</a>
          
          <div className="quiz-card">
            <div className="quiz-header">
              <div className="quiz-title">
                <div className="icon-wrapper blue"><Settings size={18} /></div>
                <h2>PLC Programming</h2>
                <span className="badge-light blue">Technical Skills</span>
              </div>
              <div className="question-progress">
                <span className="q-count">Question 4 of 10</span>
                <div className="q-bar"><div className="progress blue" style={{width: '40%'}}></div></div>
              </div>
            </div>

            <div className="quiz-body">
              <span className="q-label">Question / Task</span>
              <p className="question-text">
                Which of the following is the correct output instruction in ladder logic to turn on a motor when the start button is pressed?
              </p>

              <div className="options-list">
                <div className={`option-item ${selectedOption === 'A' ? 'selected' : ''}`} onClick={() => setSelectedOption('A')}>
                  <div className="radio-circle">{selectedOption === 'A' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">A.</span>
                  <span className="opt-text">X0 — ( ) M0</span>
                </div>
                <div className={`option-item ${selectedOption === 'B' ? 'selected' : ''}`} onClick={() => setSelectedOption('B')}>
                  <div className="radio-circle">{selectedOption === 'B' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">B.</span>
                  <span className="opt-text">X0 — ( ) Y0</span>
                </div>
                <div className={`option-item ${selectedOption === 'C' ? 'selected' : ''}`} onClick={() => setSelectedOption('C')}>
                  <div className="radio-circle">{selectedOption === 'C' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">C.</span>
                  <span className="opt-text">M0 — ( ) Y0</span>
                </div>
                <div className={`option-item ${selectedOption === 'D' ? 'selected' : ''}`} onClick={() => setSelectedOption('D')}>
                  <div className="radio-circle">{selectedOption === 'D' && <div className="inner-dot"></div>}</div>
                  <span className="opt-letter">D.</span>
                  <span className="opt-text">X0 — ( ) T0</span>
                </div>
              </div>

              <div className="hint-box">
                <Lightbulb size={20} className="hint-icon" />
                <div className="hint-content">
                  <span className="hint-title">Hint</span>
                  <p>The start button is typically connected to an input (X) and the motor output is an output (Y).</p>
                </div>
              </div>
            </div>

            <div className="quiz-footer">
              <button className="outline-btn"><ArrowLeft size={16} /> Previous</button>
              <div className="right-actions">
                <button className="primary-btn">Next <ArrowRight size={16} /></button>
                <button className="text-btn submit"><Check size={16} /> Submit Assessment</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="result-card">
            <div className="card-header border-bottom">
              <div className="card-title">
                <Trophy size={18} className="icon-blue" />
                <h3>Assessment Result</h3>
              </div>
            </div>

            <div className="result-body">
              <div className="score-section">
                <div className="result-donut">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="donut-text">
                    <span className="val">65%</span>
                    <span className="lbl">Score</span>
                  </div>
                </div>
                
                <div className="result-details">
                  <h4>PLC Programming</h4>
                  <div className="bar-wrapper">
                    <div className="progress-bar"><div className="progress blue" style={{width: '65%'}}></div></div>
                    <span>65%</span>
                  </div>
                  <div className="level-info">
                    <span className="lvl-label">Skill Level</span>
                    <span className="level-badge intermediate">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="feedback-section">
                <div className="feedback-box strengths">
                  <div className="box-title">
                    <CheckCircle2 size={16} /> Strengths
                  </div>
                  <ul>
                    <li>Basic PLC operation</li>
                  </ul>
                </div>

                <div className="feedback-box improvement">
                  <div className="box-title">
                    <AlertCircle size={16} /> Improvement Area
                  </div>
                  <ul>
                    <li>PLC programming and troubleshooting</li>
                  </ul>
                </div>
              </div>

              <div className="result-actions">
                <button className="outline-btn full-width"><BarChart2 size={16} /> View Skill Gap</button>
                <button className="primary-btn full-width"><ClipboardList size={16} /> Retake Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAssessment;
