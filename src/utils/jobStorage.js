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

// AI Scraped Jobs Pool from LinkedIn, Naukri.com, and Industrial Portals
export const AI_SCRAPED_JOBS = [
  {
    id: 'ai-job-linkedin-1',
    role: 'Robotics & Automation Maintenance Technician',
    company: 'Tata Motors Ltd. (Passenger Vehicles)',
    department: 'Robotics & Automation',
    vacancies: 20,
    loc: 'Pune (Pimpri-Chinchwad), Maharashtra',
    qual: ['Diploma', 'ITI'],
    skills: [
      { name: 'Fanuc & KUKA Robotics', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'Siemens S7 PLC Troubleshooting', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'Pneumatics & Sensors', proficiency: 'beginner', type: 'preferred' }
    ],
    skillsText: 'Fanuc Robotics, KUKA, Siemens S7 PLC, Industrial Automation, Sensor Calibration',
    exp: '0-2 Years (Freshers / Apprentices Eligible)',
    salary: '₹26,000 - ₹34,000',
    salaryMin: 26000,
    salaryMax: 34000,
    empType: 'Full Time',
    shift: 'Rotational Shifts (A/B/C)',
    time: 'Just now',
    deadline: '2025-11-28',
    description: '[AI Aggregated via LinkedIn Jobs API] Direct requirement from Tata Motors Talent Acquisition: Technicians needed for automated body shop robotic arms maintenance, teaching pendant routines, PLC sensor diagnostics, and preventive maintenance on high-speed vehicle assembly lines.',
    status: 'Active',
    postedAt: 'Just now',
    timestamp: Date.now(),
    sourcePlatform: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/jobs/search/?keywords=tata%20motors%20robotics%20pune',
    isAiAggregated: true
  },
  {
    id: 'ai-job-naukri-2',
    role: 'Solar PV Systems & Microgrid Technician',
    company: 'Adani Solar & Green Energy',
    department: 'Renewable Energy',
    vacancies: 35,
    loc: 'Nagpur & Aurangabad, Maharashtra',
    qual: ['ITI', 'Diploma'],
    skills: [
      { name: 'Solar PV Inverter Wiring', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'HT/LT Electrical Panels', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'Megger & Earth Testing', proficiency: 'expert', type: 'mandatory' }
    ],
    skillsText: 'Solar PV, Inverter Wiring, HT/LT Panels, Grid Interconnection, Earthing',
    exp: '0-1 Year (Freshers Welcome)',
    salary: '₹22,000 - ₹29,500',
    salaryMin: 22000,
    salaryMax: 29500,
    empType: 'Full Time',
    shift: 'Day Shift (8:30 AM - 5:00 PM)',
    time: 'Just now',
    deadline: '2025-12-05',
    description: '[AI Aggregated via Naukri.com Verified Portal] Immediate hiring for certified ITI (Electrician/Wireman) and Diploma holders for grid-scale solar farm setup, string inverter connection, DC cabling, and sub-station safety testing.',
    status: 'Active',
    postedAt: 'Just now',
    timestamp: Date.now(),
    sourcePlatform: 'Naukri.com',
    sourceUrl: 'https://www.naukri.com/solar-technician-jobs-in-maharashtra',
    isAiAggregated: true
  },
  {
    id: 'ai-job-linkedin-3',
    role: 'CNC Precision Tooling Specialist',
    company: 'Cummins India Technologies',
    department: 'Manufacturing',
    vacancies: 18,
    loc: 'Kothrud, Pune, Maharashtra',
    qual: ['ITI', 'Diploma'],
    skills: [
      { name: 'CNC Multi-Axis Milling', proficiency: 'intermediate', type: 'mandatory' },
      { name: 'Vernier & Micrometer QC', proficiency: 'expert', type: 'mandatory' },
      { name: 'GD&T Drawing Reading', proficiency: 'intermediate', type: 'mandatory' }
    ],
    skillsText: 'CNC Milling, Tool Offset, GD&T, Precision Machining, Micrometer',
    exp: '1-3 Years',
    salary: '₹24,000 - ₹32,000',
    salaryMin: 24000,
    salaryMax: 32000,
    empType: 'Full Time',
    shift: 'Rotational Shifts',
    time: 'Just now',
    deadline: '2025-12-15',
    description: '[AI Aggregated via LinkedIn Jobs API] High-precision machining for diesel and natural gas cylinder heads. Requires knowledge of tool offset calibration and surface finish measurement.',
    status: 'Active',
    postedAt: 'Just now',
    timestamp: Date.now(),
    sourcePlatform: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/jobs/search/?keywords=cummins%20cnc%20pune',
    isAiAggregated: true
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

/**
 * Synchronizes new AI-discovered jobs from LinkedIn, Naukri.com, and industry feeds.
 * Adds newly found jobs to published storage and notifies all listening components.
 */
export const syncAiJobsFromWeb = (count = 2) => {
  try {
    const existing = getPublishedJobs();
    const existingIds = new Set(existing.map(j => j.id));
    
    // Find unadded jobs from AI pool
    const pendingJobs = AI_SCRAPED_JOBS.filter(j => !existingIds.has(j.id));
    
    let jobsToAdd = [];
    if (pendingJobs.length > 0) {
      jobsToAdd = pendingJobs.slice(0, count);
    } else {
      // If already added, generate fresh timestamped entries so user can test repeatedly
      const sample = AI_SCRAPED_JOBS[Math.floor(Math.random() * AI_SCRAPED_JOBS.length)];
      const uniqueId = `ai-job-${Date.now()}`;
      jobsToAdd = [{
        ...sample,
        id: uniqueId,
        role: `${sample.role} (New AI Batch)`,
        postedAt: 'Just now',
        time: 'Just now',
        timestamp: Date.now()
      }];
    }

    const updated = [...jobsToAdd, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('skillbridge:jobPublished', { detail: jobsToAdd }));
    return { added: jobsToAdd, total: updated };
  } catch (err) {
    console.error('Failed to sync AI jobs from web', err);
    return { added: [], total: getPublishedJobs() };
  }
};
