

export const COUNTRIES = [
  {
    slug: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'The top destination for STEM and research-based programs.',
    avgCost: '₹35L - ₹60L / year',
    keyFeatures: ['OPT up to 3 years', 'Highest salaries', 'Global recognition'],
    topUniversities: ['MIT', 'Stanford', 'Harvard', 'Caltech']
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'World-renowned education with 1-year Masters programs.',
    avgCost: '₹25L - ₹45L / year',
    keyFeatures: ['2-year PSW Visa', 'Shorter duration', 'Cultural hub'],
    topUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'LSE']
  },
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Friendly immigration policies and high quality of life.',
    avgCost: '₹20L - ₹35L / year',
    keyFeatures: ['Easy PR pathway', 'Co-op programs', 'Affordable living'],
    topUniversities: ['U of Toronto', 'UBC', 'McGill', 'Waterloo']
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Tuition-free education at public universities.',
    avgCost: '₹10L - ₹15L / year',
    keyFeatures: ['Low/No Tuition', 'Strong engineering', ' Schengen access'],
    topUniversities: ['TU Munich', 'RWTH Aachen', 'Heidelberg', 'TU Berlin']
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Great weather, relaxed lifestyle, and top-tier research.',
    avgCost: '₹25L - ₹40L / year',
    keyFeatures: ['Post-study work rights', 'High min wage', 'Diverse culture'],
    topUniversities: ['U of Melbourne', 'ANU', 'USyd', 'UNSW']
  }
];

export const UNIVERSITIES = [
  {
    id: '1',
    name: 'Massachusetts Institute of Technology (MIT)',
    country: 'USA',
    rank: 1,
    fees: '$57,000',
    acceptance: '4%',
    logo: 'MIT'
  },
  {
    id: '2',
    name: 'University of Oxford',
    country: 'UK',
    rank: 2,
    fees: '£30,000',
    acceptance: '17%',
    logo: 'OXF'
  },
  {
    id: '3',
    name: 'Stanford University',
    country: 'USA',
    rank: 3,
    fees: '$60,000',
    acceptance: '3%',
    logo: 'STA'
  },
  {
    id: '4',
    name: 'University of Toronto',
    country: 'Canada',
    rank: 21,
    fees: 'CAD 60,000',
    acceptance: '43%',
    logo: 'UOT'
  },
  {
    id: '5',
    name: 'Technical University of Munich',
    country: 'Germany',
    rank: 30,
    fees: '€0',
    acceptance: '8%',
    logo: 'TUM'
  }
];

export const EXAMS = [
  {
    slug: 'ielts',
    name: 'IELTS',
    type: 'English Proficiency',
    fullForm: 'International English Language Testing System',
    fee: '₹17,000',
    validity: '2 years',
    description: 'The standard English test for UK, Canada, and Australia.'
  },
  {
    slug: 'toefl',
    name: 'TOEFL',
    type: 'English Proficiency',
    fullForm: 'Test of English as a Foreign Language',
    fee: '$195',
    validity: '2 years',
    description: 'Preferred by US universities.'
  },
  {
    slug: 'gre',
    name: 'GRE',
    type: 'Aptitude',
    fullForm: 'Graduate Record Examination',
    fee: '$220',
    validity: '5 years',
    description: 'Required for many MS and PhD programs, especially in the US.'
  }
];

export const APP_GUIDES = [
  {
    id: 'sop',
    title: 'Writing a Statement of Purpose (SOP)',
    desc: 'Tips to craft a compelling story that gets you accepted.',
    duration: '10 min read'
  },
  {
    id: 'lor',
    title: 'Letters of Recommendation (LOR)',
    desc: 'Who to ask and what they should write about you.',
    duration: '5 min read'
  },
  {
    id: 'visa',
    title: 'Student Visa Interview Guide',
    desc: 'Common questions and how to answer them confidently.',
    duration: '15 min read'
  }
];
