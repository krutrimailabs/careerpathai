export interface Exam {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  applicationDeadline: string;
  description: string;
  eligibility: string;
  syllabus: {
    subject: string;
    topics: string[];
  }[];
  prepMaterials: {
    title: string;
    type: 'PDF' | 'Video' | 'Link';
    url: string;
  }[];
  notifications: {
    date: string;
    message: string;
  }[];
}

export const EXAMS: Exam[] = [
  {
    id: '1',
    slug: 'jee-mains-2026',
    title: 'JEE Mains 2026',
    category: 'Engineering',
    date: 'Jan 24, 2026',
    applicationDeadline: 'Dec 15, 2025',
    description: 'Joint Entrance Examination (Main) is conducted for admission to Undergraduate Engineering Programs (B.E/B.Tech.) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and Institutions/Universities funded/recognized by participating State Governments.',
    eligibility: 'Candidates must have passed Class 12th or equivalent examination with Physics, Mathematics, and Chemistry/Biology/Biotechnology/Technical Vocational Subject.',
    syllabus: [
      { subject: 'Physics', topics: ['Kinematics', 'Laws of Motion', 'Thermodynamics', 'Electrostatics'] },
      { subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry', 'Equilibrium'] },
      { subject: 'Mathematics', topics: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Vectors'] }
    ],
    prepMaterials: [
      { title: 'Previous Year Question Papers (2020-2025)', type: 'PDF', url: '#' },
      { title: 'Chapter-wise Formula Sheets', type: 'PDF', url: '#' },
      { title: 'Mock Test Series - Level 1', type: 'Link', url: '#' }
    ],
    notifications: [
      { date: 'Nov 01, 2025', message: 'Application process started.' },
      { date: 'Jan 10, 2026', message: 'Admit cards released.' }
    ]
  },
  {
    id: '2',
    slug: 'neet-ug-2026',
    title: 'NEET UG 2026',
    category: 'Medical',
    date: 'May 05, 2026',
    applicationDeadline: 'Apr 05, 2026',
    description: 'The National Eligibility cum Entrance Test (NEET) is the sole entrance test for admission to MBBS and BDS courses in India.',
    eligibility: 'Must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology and English.',
    syllabus: [
      { subject: 'Physics', topics: ['Mechanics', 'Optics', 'Modern Physics'] },
      { subject: 'Chemistry', topics: ['Physical', 'Organic', 'Inorganic'] },
      { subject: 'Biology', topics: ['Genetics', 'Ecology', 'Human Physiology', 'Plant Physiology'] }
    ],
    prepMaterials: [
      { title: 'NCERT Biology Highlights', type: 'PDF', url: '#' },
      { title: 'Physics Numerical Cheat Sheet', type: 'PDF', url: '#' }
    ],
    notifications: [
      { date: 'Feb 15, 2026', message: 'Official notification expected.' }
    ]
  },
  {
    id: '3',
    slug: 'cat-2026',
    title: 'CAT 2026',
    category: 'Management',
    date: 'Nov 29, 2026',
    applicationDeadline: 'Sep 20, 2026',
    description: 'Common Admission Test (CAT) is a computer-based test for admission in graduate management programs.',
    eligibility: 'Bachelor’s Degree with at least 50% marks or equivalent CGPA.',
    syllabus: [
      { subject: 'VARC', topics: ['Reading Comprehension', 'Verbal Ability'] },
      { subject: 'DILR', topics: ['Data Interpretation', 'Logical Reasoning'] },
      { subject: 'QA', topics: ['Arithmetic', 'Algebra', 'Geometry'] }
    ],
    prepMaterials: [
        { title: 'Reading Comprehension Practice Set', type: 'PDF', url: '#' }
    ],
    notifications: []
  }
];
