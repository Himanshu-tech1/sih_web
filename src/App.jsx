import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InstituteLogin from './pages/institute/InstituteLogin';
import InstituteRegister from './pages/institute/InstituteRegister';
import IndustryLogin from './pages/industry/IndustryLogin';
import IndustryRegister from './pages/industry/IndustryRegister';
import StudentAuth from './pages/student/StudentAuth';
import StudentLayout from './layouts/StudentLayout';
import StudentProfile from './pages/student/StudentProfile';
import StudentAssessment from './pages/student/StudentAssessment';
import StudentLearning from './pages/student/StudentLearning';
import StudentJobs from './pages/student/StudentJobs';

import IndustryLayout from './layouts/IndustryLayout';
import IndustryProfile from './pages/industry/IndustryProfile';
import IndustryJobs from './pages/industry/IndustryJobs';
import IndustrySkills from './pages/industry/IndustrySkills';
import IndustrySkillGap from './pages/industry/IndustrySkillGap';
import IndustryCollaboration from './pages/industry/IndustryCollaboration';
import IndustrySettings from './pages/industry/IndustrySettings';

import InstituteLayout from './layouts/InstituteLayout';

import InstituteProfile from './pages/institute/InstituteProfile';
import InstituteCourses from './pages/institute/InstituteCourses';
import InstituteSkillsTaught from './pages/institute/InstituteSkillsTaught';
import InstituteSkillGap from './pages/institute/InstituteSkillGap';
import InstituteCollaboration from './pages/institute/InstituteCollaboration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Institute Portal Routes */}
        <Route path="/institute/login" element={<InstituteLogin />} />
        <Route path="/institute/register" element={<InstituteRegister />} />
        
        {/* Institute Dashboard Routes */}
        <Route path="/institute/dashboard" element={<InstituteLayout />}>
          <Route index element={<InstituteProfile />} />
          <Route path="courses" element={<InstituteCourses />} />
          <Route path="skills-taught" element={<InstituteSkillsTaught />} />
          <Route path="skill-gap" element={<InstituteSkillGap />} />
          <Route path="collaboration" element={<InstituteCollaboration />} />
        </Route>
        
        {/* Industry/Employer Portal Routes */}
        <Route path="/employer/login" element={<IndustryLogin />} />
        <Route path="/employer/register" element={<IndustryRegister />} />
        
        {/* Industry Dashboard Routes */}
        <Route path="/employer/dashboard" element={<IndustryLayout />}>
          <Route index element={<IndustryProfile />} />
          <Route path="jobs" element={<IndustryJobs />} />
          <Route path="skills" element={<IndustrySkills />} />
          <Route path="skill-gap" element={<IndustrySkillGap />} />
          <Route path="collaboration" element={<IndustryCollaboration />} />
          <Route path="settings" element={<IndustrySettings />} />
          {/* We will add more routes here later */}
        </Route>
        
        {/* Student Portal Routes */}
        <Route path="/student/login" element={<StudentAuth />} />
        
        {/* Student Dashboard Routes */}
        <Route path="/student/dashboard" element={<StudentLayout />}>
          <Route index element={<StudentAssessment />} />
          <Route path="learning" element={<StudentLearning />} />
          <Route path="jobs" element={<StudentJobs />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
