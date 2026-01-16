import { College } from '../types/college';

export const COLLEGES: College[] = [
  {
    id: '1',
    slug: 'iit-bombay',
    name: 'Indian Institute of Technology, Bombay',
    short_description: 'Premier engineering institute known for its research, innovation, and vibrant campus life.',
    overview: {
      nirf_rank: 3,
      naac_grade: 'A++',
      established_year: 1958,
      college_type: 'Government',
      campus_size_acres: 550,
      location: 'Mumbai, Maharashtra'
    },
    academics: {
      courses_offered: ['B.Tech', 'M.Tech', 'PhD', 'M.Sc', 'M.Des'],
      specializations: ['Computer Science', 'Electrical', 'Mechanical', 'Aerospace'],
      faculty_student_ratio: '1:12',
      international_collaborations: ['MIT', 'Stanford', 'NTU Singapore']
    },
    admission: {
      exams_accepted: ['JEE Advanced', 'GATE', 'CEED'],
      reservation_policy: 'As per GoI norms',
      application_process: ['Apply for JEE', 'Qualify Mains', 'Clear Advanced', 'JoSAA Counselling'],
      important_dates: [{ event: 'JEE Adv', date: 'May 2026' }, { event: 'Counselling', date: 'June 2026' }],
      cutoff_trends: [{ year: 2025, cutoff: 'Rank 65 (CSE)' }, { year: 2024, cutoff: 'Rank 61 (CSE)' }]
    },
    placement: {
      avg_package_lpa: 28.5,
      highest_package_lpa: 360,
      placement_percentage: 96,
      top_recruiters: ['Google', 'Microsoft', 'Uber', 'Tower Research', 'Rubrik'],
      alumni_network_strength: 'Strong'
    },
    campus_life: {
      hostel_facilities: true,
      sports_facilities: ['Swimming Pool', 'Indoor Courts', 'Stadium', 'Gym'],
      clubs_committees: ['Techfest', 'Mood Indigo', 'E-Cell', 'Robotics Club'],
      safety_score: 9.5
    },
    financials: {
      fees_per_year: 250000,
      scholarship_available: true,
      education_loan_partners: ['SBI', 'Canara Bank'],
      refund_policy: 'Full refund if withdrawn before deadline'
    },
    reviews: {
      average_rating: 4.8,
      total_reviews: 1250,
      categories: {
        infrastructure: 4.9,
        academics: 5.0,
        placements: 4.9,
        campus_life: 4.7,
        value_for_money: 4.8
      }
    }
  },
  {
    id: '2',
    slug: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences, Delhi',
    short_description: 'The most prestigious medical college in India, setting standards for medical education and healthcare.',
    overview: {
      nirf_rank: 1,
      naac_grade: 'A+',
      established_year: 1956,
      college_type: 'Government',
      campus_size_acres: 115,
      location: 'New Delhi'
    },
    academics: {
      courses_offered: ['MBBS', 'MD/MS', 'M.Ch', 'B.Sc Nursing'],
      specializations: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics'],
      faculty_student_ratio: '1:5',
      international_collaborations: ['Harvard Medical School', 'Johns Hopkins']
    },
    admission: {
      exams_accepted: ['NEET UG', 'INI CET'],
      reservation_policy: 'As per GoI norms',
      application_process: ['Apply for NEET', 'Clear Cutoff', 'MCC Counselling'],
      important_dates: [{ event: 'NEET UG', date: 'May 2026' }],
      cutoff_trends: [{ year: 2025, cutoff: 'Rank 52' }, { year: 2024, cutoff: 'Rank 48' }]
    },
    placement: {
      avg_package_lpa: 18,
      highest_package_lpa: 40,
      placement_percentage: 100,
      top_recruiters: ['Apollo', 'Max', 'Fortis', 'Research Inst.'],
      alumni_network_strength: 'Strong'
    },
    campus_life: {
      hostel_facilities: true,
      sports_facilities: ['Tennis Court', 'Gym', 'Cricket Ground'],
      clubs_committees: ['Pulse (Fest)', 'Literary Society', 'Research Club'],
      safety_score: 9.0
    },
    financials: {
      fees_per_year: 1628,
      scholarship_available: true,
      education_loan_partners: ['SBI'],
      refund_policy: 'Minimal fees, non-refundable'
    },
    reviews: {
      average_rating: 4.9,
      total_reviews: 800,
      categories: { infrastructure: 4.5, academics: 5.0, placements: 5.0, campus_life: 4.2, value_for_money: 5.0 }
    }
  },
  {
    id: '3',
    slug: 'iisc-bangalore',
    name: 'Indian Institute of Science, Bangalore',
    short_description: 'India’s premier institute for advanced scientific and technological research and education.',
    overview: {
      nirf_rank: 1,
      naac_grade: 'A++',
      established_year: 1909,
      college_type: 'Government',
      campus_size_acres: 400,
      location: 'Bangalore, Karnataka'
    },
    academics: {
      courses_offered: ['B.Sc (Research)', 'M.Tech', 'PhD'],
      specializations: ['Aerospace', 'Computer Science', 'Materials Eng'],
      faculty_student_ratio: '1:8',
      international_collaborations: ['Caltech', 'Imperial College London']
    },
    admission: {
      exams_accepted: ['JEE Advanced', 'KVPY', 'GATE'],
      reservation_policy: 'As per GoI norms',
      application_process: ['Apply via Portal', 'Score Card', 'Interview'],
      important_dates: [{ event: 'App Deadline', date: 'April 2026' }],
      cutoff_trends: [{ year: 2025, cutoff: 'Rank 15 (JEE Adv)' }]
    },
    placement: {
      avg_package_lpa: 35,
      highest_package_lpa: 85,
      placement_percentage: 92,
      top_recruiters: ['Google DeepMind', 'ISRO', 'Airbus', 'Microsoft Research'],
      alumni_network_strength: 'Elite'
    },
    campus_life: {
      hostel_facilities: true,
      sports_facilities: ['Gymkhana', 'Swimming Pool'],
      clubs_committees: ['Pravega', 'Rhapsody'],
      safety_score: 9.8
    },
    financials: {
      fees_per_year: 30000,
      scholarship_available: true,
      education_loan_partners: ['SBI', 'Canara Bank'],
      refund_policy: 'As per UGC'
    },
    reviews: {
      average_rating: 4.9,
      total_reviews: 450,
      categories: { infrastructure: 5.0, academics: 5.0, placements: 4.5, campus_life: 4.6, value_for_money: 5.0 }
    }
  },
  {
    id: '4',
    slug: 'coep-pune',
    name: 'College of Engineering, Pune',
    short_description: 'One of the oldest engineering colleges in Asia, known for its strong alumni network and student culture.',
    overview: {
      nirf_rank: 73,
      naac_grade: 'A+',
      established_year: 1854,
      college_type: 'Government',
      campus_size_acres: 36,
      location: 'Pune, Maharashtra'
    },
    academics: {
      courses_offered: ['B.Tech', 'M.Tech', 'MBA'],
      specializations: ['Computer', 'Mechanical', 'E&TC', 'Civil'],
      faculty_student_ratio: '1:18',
      international_collaborations: ['Univ of Toronto']
    },
    admission: {
      exams_accepted: ['MHT CET', 'JEE Main'],
      reservation_policy: 'Maharashtra State quotas apply',
      application_process: ['MHT CET Exam', 'CAP Rounds'],
      important_dates: [{ event: 'MHT CET', date: 'May 2026' }],
      cutoff_trends: [{ year: 2025, cutoff: '99.8%ile (CSE)' }]
    },
    placement: {
      avg_package_lpa: 12.5,
      highest_package_lpa: 52,
      placement_percentage: 88,
      top_recruiters: ['Credit Suisse', 'Deutsche Bank', 'Mastercard', 'Bajaj'],
      alumni_network_strength: 'Very Strong'
    },
    campus_life: {
      hostel_facilities: true,
      sports_facilities: ['Boat Club', 'Ground'],
      clubs_committees: ['MindSpark', 'Regatta', 'Robot Study Circle'],
      safety_score: 9.2
    },
    financials: {
      fees_per_year: 85000,
      scholarship_available: true,
      education_loan_partners: ['SBI'],
      refund_policy: 'As per DTE'
    },
    reviews: {
      average_rating: 4.6,
      total_reviews: 2100,
      categories: { infrastructure: 4.2, academics: 4.7, placements: 4.6, campus_life: 5.0, value_for_money: 4.8 }
    }
  },
  {
    id: '5',
    slug: 'iit-madras',
    name: 'Indian Institute of Technology, Madras',
    short_description: 'Consistently ranked #1 in NIRF, known for its lush green campus and research ecosystem.',
    overview: {
      nirf_rank: 1,
      naac_grade: 'A++',
      established_year: 1959,
      college_type: 'Government',
      campus_size_acres: 617,
      location: 'Chennai, Tamil Nadu'
    },
    academics: {
      courses_offered: ['B.Tech', 'Dual Degree', 'PhD', 'BS Data Science'],
      specializations: ['CSE', 'Electrical', 'Ocean Eng', 'Engineering Design'],
      faculty_student_ratio: '1:10',
      international_collaborations: ['RWTH Aachen', 'Purdue']
    },
    admission: {
      exams_accepted: ['JEE Advanced', 'GATE'],
      reservation_policy: 'GoI Norms',
      application_process: ['JoSAA Counselling'],
      important_dates: [{ event: 'JEE Adv', date: 'May 2026' }],
      cutoff_trends: [{ year: 2025, cutoff: 'Rank 140' }]
    },
    placement: {
      avg_package_lpa: 26,
      highest_package_lpa: 180,
      placement_percentage: 94,
      top_recruiters: ['Texas Instruments', 'Qualcomm', 'Goldman Sachs'],
      alumni_network_strength: 'Strong'
    },
    campus_life: {
      hostel_facilities: true,
      sports_facilities: ['Stadium', 'Pool', 'Student Activity Center'],
      clubs_committees: ['Shaastra', 'Saarang', 'CFI'],
      safety_score: 9.6
    },
    financials: {
      fees_per_year: 220000,
      scholarship_available: true,
      education_loan_partners: ['SBI'],
      refund_policy: 'UGC Norms'
    },
    reviews: {
      average_rating: 4.8,
      total_reviews: 1400,
      categories: { infrastructure: 4.8, academics: 5.0, placements: 4.8, campus_life: 4.9, value_for_money: 4.7 }
    }
  }
];

export const RANKINGS = {
  Engineering: [
    { rank: 1, id: '5', name: 'IIT Madras' },
    { rank: 3, id: '1', name: 'IIT Bombay' },
    { rank: 73, id: '4', name: 'COEP Pune' }
  ],
  Medical: [
    { rank: 1, id: '2', name: 'AIIMS Delhi' }
  ],
  Research: [
    { rank: 1, id: '3', name: 'IISC Bangalore' }
  ]
};

export const COURSES = [
  { 
    slug: 'btech-cse', 
    name: 'B.Tech in Computer Science', 
    duration: '4 Years', 
    avg_fees: '₹8-12 Lakhs', 
    careers: ['Software Engineer', 'Data Scientist'] 
  },
  { 
    slug: 'mbbs', 
    name: 'Bachelor of Medicine (MBBS)', 
    duration: '5.5 Years', 
    avg_fees: '₹50k - ₹1Cr', 
    careers: ['Doctor', 'Surgeon'] 
  },
  { 
    slug: 'bs-data-science', 
    name: 'BS in Data Science', 
    duration: '4 Years', 
    avg_fees: '₹3-6 Lakhs', 
    careers: ['Data Analyst', 'Machine Learning Engineer'] 
  }
];

export const PREDICTOR_DATA = [
  { exam: 'JEE Main', rank_range: [1, 5000], colleges: ['IIT Bombay', 'IIT Delhi', 'IIT Madras'] },
  { exam: 'JEE Main', rank_range: [5000, 15000], colleges: ['NIT Trichy', 'NIT Warangal', 'COEP Pune'] },
  { exam: 'NEET', rank_range: [1, 100], colleges: ['AIIMS Delhi', 'JIPMER'] },
];
