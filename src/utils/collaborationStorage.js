// Shared collaboration storage utility for synchronizing collaboration requests between Institute and Industry portals

const STORAGE_KEY = 'skillbridge_collaboration_requests';

export const INITIAL_COLLABORATIONS = [
  {
    id: 'collab-1',
    instituteName: 'Government ITI Pune',
    industryName: 'Tata Motors Ltd.',
    sector: 'Automobile',
    trade: 'Mechanical & Fitter',
    skill: 'CNC & Assembly',
    type: 'Apprenticeship',
    students: 25,
    duration: '6 Months',
    outcome: 'Industry Certified Dual Training',
    message: 'Looking to place 25 ITI Fitter & Machinist trainees for plant apprenticeship in Chakan.',
    status: 'Active',
    date: '24 Jun 2025',
    timestamp: Date.now() - 172800000
  },
  {
    id: 'collab-2',
    instituteName: 'Government Polytechnic Pune',
    industryName: 'L&T Construction',
    sector: 'Construction',
    trade: 'Civil Engineering',
    skill: 'Structural Modeling',
    type: 'Internship',
    students: 15,
    duration: '3 Months',
    outcome: 'Site Supervision Training',
    message: 'Hands-on site internship for 3rd-year diploma civil trainees on metro project.',
    status: 'Active',
    date: '22 Jun 2025',
    timestamp: Date.now() - 345600000
  },
  {
    id: 'collab-3',
    instituteName: 'Shree Ganesh ITI Pune',
    industryName: 'ABC Industries Pvt. Ltd.',
    sector: 'Manufacturing',
    trade: 'Electrical',
    skill: 'PLC Programming & VFD',
    type: 'Joint Training',
    students: 30,
    duration: '4 Months',
    outcome: 'Automation Certification',
    message: 'Requesting industrial trainer support and automation lab exposure for trainees.',
    status: 'Pending Review',
    date: 'Yesterday',
    timestamp: Date.now() - 86400000
  }
];

export const getCollaborations = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COLLABORATIONS));
      return INITIAL_COLLABORATIONS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_COLLABORATIONS;
  } catch (err) {
    console.error('Failed to read collaborations from localStorage', err);
    return INITIAL_COLLABORATIONS;
  }
};

export const addCollaboration = (newCollab) => {
  try {
    const existing = getCollaborations();
    const updated = [newCollab, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Dispatch custom event for real-time reactivity across components and tabs
    window.dispatchEvent(new CustomEvent('skillbridge:collaborationUpdated', { detail: newCollab }));
    return updated;
  } catch (err) {
    console.error('Failed to save collaboration request', err);
    return [];
  }
};

export const updateCollaborationStatus = (id, newStatus) => {
  try {
    const existing = getCollaborations();
    const updated = existing.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('skillbridge:collaborationUpdated', { detail: { id, status: newStatus } }));
    return updated;
  } catch (err) {
    console.error('Failed to update collaboration status', err);
    return [];
  }
};
