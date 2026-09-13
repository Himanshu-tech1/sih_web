// Shared job storage utility for synchronizing published jobs across Industry, Institute, and Student portals

const STORAGE_KEY = 'skillbridge_published_jobs';

export const INITIAL_JOBS = [
  {
    id: 'job-1',
    role: 'CNC Machine Operator',
    company: 'ABC Industries Pvt. Ltd.',
    department: 'Manufacturing',
    vacancies: 50,
    loc: 'Pune, Maharashtra',
    qual: ['ITI', 'Diploma'],
    skills: [
      { name: 'CNC Operating', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'G-Code & VMC', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'Safety Standards', proficiency: 'beginner', type: 'preferred' }
    ],
    skillsText: 'CNC, VMC, G-Code, Machine Operation',
    exp: '1-3 Years',
    salary: '₹18,000 - ₹25,000',
    salaryMin: 18000,
    salaryMax: 25000,
    empType: 'Full Time',
    shift: 'Rotational Shifts',
    time: 'Oct 2025',
    deadline: '2025-10-30',
    description: 'Looking for trained CNC and VMC Machine Operators for our high-precision automotive component manufacturing line in Chakan. Candidates should know basic tool setting and drawing reading.',
    status: 'Active',
    postedAt: '1 day ago',
    timestamp: Date.now() - 86400000
  },
  {
    id: 'job-2',
    role: 'PLC Technician',
    company: 'Automation Solutions Pvt. Ltd.',
    department: 'Engineering',
    vacancies: 30,
    loc: 'Chakan, Pune',
    qual: ['ITI', 'Diploma'],
    skills: [
      { name: 'PLC Programming', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'HMI & SCADA', proficiency: 'beginner', type: 'preferred' },
      { name: 'Industrial Wiring', proficiency: 'intermediate', type: 'mandatory' }
    ],
    skillsText: 'PLC, HMI, Siemens, Ladder Logic',
    exp: '1-3 Years',
    salary: '₹22,000 - ₹30,000',
    salaryMin: 22000,
    salaryMax: 30000,
    empType: 'Full Time',
    shift: 'General Shift (9 AM - 5 PM)',
    time: 'Sep 2025',
    deadline: '2025-10-15',
    description: 'Responsible for PLC troubleshooting, panel wiring maintenance, sensor calibration, and automated conveyor system uptime.',
    status: 'Active',
    postedAt: '2 days ago',
    timestamp: Date.now() - 172800000
  },
  {
    id: 'job-3',
    role: 'Industrial Electrician',
    company: 'Green Energy Manufacturing Co.',
    department: 'Maintenance',
    vacancies: 40,
    loc: 'Nashik, Maharashtra',
    qual: ['ITI'],
    skills: [
      { name: 'Industrial Wiring', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'VFD Maintenance', proficiency: 'beginner', type: 'preferred' },
      { name: 'Electrical Safety', proficiency: 'intermediate', type: 'mandatory' }
    ],
    skillsText: 'Industrial Wiring, VFD, 3-Phase Circuits',
    exp: '0-2 Years',
    salary: '₹16,000 - ₹22,000',
    salaryMin: 16000,
    salaryMax: 22000,
    empType: 'Full Time',
    shift: 'Rotational Shifts',
    time: 'Oct 2025',
    deadline: '2025-11-05',
    description: 'Maintenance of industrial switchgears, transformers, power distribution boards, and heavy motor drives.',
    status: 'Active',
    postedAt: '3 days ago',
    timestamp: Date.now() - 259200000
  },
  {
    id: 'job-4',
    role: 'EV Technician & Battery Specialist',
    company: 'Mahindra Electric Mobility Ltd.',
    department: 'Quality Control',
    vacancies: 25,
    loc: 'Chakan, Pune',
    qual: ['ITI', 'Diploma'],
    skills: [
      { name: 'EV Systems', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'BMS Testing', proficiency: 'beginner', type: 'preferred' },
      { name: 'High Voltage Safety', proficiency: 'expert', type: 'mandatory' }
    ],
    skillsText: 'EV Systems, Battery Pack, BMS, Wiring',
    exp: '1-3 Years',
    salary: '₹20,000 - ₹28,000',
    salaryMin: 20000,
    salaryMax: 28000,
    empType: 'Full Time',
    shift: 'General Shift (9 AM - 5 PM)',
    time: 'Nov 2025',
    deadline: '2025-11-20',
    description: 'Assembly and quality verification of 2-wheeler and 3-wheeler EV battery packs and high-voltage wiring harnesses.',
    status: 'Active',
    postedAt: '4 days ago',
    timestamp: Date.now() - 345600000
  },
  {
    id: 'job-5',
    role: 'Production Supervisor',
    company: 'Bharat Forge Ltd.',
    department: 'Manufacturing',
    vacancies: 15,
    loc: 'Pune, Maharashtra',
    qual: ['Diploma', 'B.E. / B.Tech'],
    skills: [
      { name: 'Production Planning', proficiency: 'intermediate', type: 'mandatory' },
      { name: '5S & Kaizen', proficiency: 'intermediate', type: 'preferred' },
      { name: 'Team Handling', proficiency: 'intermediate', type: 'mandatory' }
    ],
    skillsText: 'Production, Team Handling, 5S, Quality',
    exp: '3-5 Years',
    salary: '₹30,000 - ₹42,000',
    salaryMin: 30000,
    salaryMax: 42000,
    empType: 'Full Time',
    shift: 'Rotational Shifts',
    time: 'Oct 2025',
    deadline: '2025-10-25',
    description: 'Supervise shop-floor machining operations, meet daily production quotas, monitor scrap reduction, and ensure operator safety protocols.',
    status: 'Active',
    postedAt: '5 days ago',
    timestamp: Date.now() - 432000000
  }
];

export const getPublishedJobs = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_JOBS));
      return INITIAL_JOBS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_JOBS;
  } catch (err) {
    console.error('Failed to read published jobs from localStorage', err);
    return INITIAL_JOBS;
  }
};

export const addPublishedJob = (newJob) => {
  try {
    const existing = getPublishedJobs();
    const updated = [newJob, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Dispatch custom event for real-time reactive updates within the same page/window
    window.dispatchEvent(new CustomEvent('skillbridge:jobPublished', { detail: newJob }));
    return updated;
  } catch (err) {
    console.error('Failed to save published job', err);
    return [];
  }
};
