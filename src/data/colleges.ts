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
      fees_per_year: 1628, // Yes, AIIMS is very cheap
      scholarship_available: true,
      education_loan_partners: ['SBI'],
      refund_policy: 'Minimal fees, non-refundable'
    },
    reviews: {
      average_rating: 4.9,
      total_reviews: 800,
      categories: {
        infrastructure: 4.5,
        academics: 5.0,
        placements: 5.0,
        campus_life: 4.2,
        value_for_money: 5.0
      }
    }
  }
];
