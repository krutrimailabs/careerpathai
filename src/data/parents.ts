export const CHILD_DATA = {
  id: 'student_01',
  name: 'Arjun Sharma',
  grade: 'Class 12',
  school: 'Delhi Public School, R.K. Puram',
  academics: {
    gpa: '8.8/10',
    attendance: '94%',
    recent_grades: [
      { subject: 'Physics', grade: 'A', score: 92 },
      { subject: 'Mathematics', grade: 'A+', score: 96 },
      { subject: 'Chemistry', grade: 'B+', score: 85 },
      { subject: 'Computer Science', grade: 'A', score: 90 },
    ]
  },
  interests: ['Robotics', 'Coding', 'Physics'],
  recommended_careers: ['Robotics Engineer', 'Software Developer', 'Data Scientist'],
  recent_activity: [
    { action: 'Completed Assessment', detail: 'Career Aptitude Test', date: '2 days ago' },
    { action: 'Shortlisted College', detail: 'IIT Bombay', date: '1 week ago' },
    { action: 'Viewed Webinar', detail: 'Future of AI', date: '1 week ago' },
  ]
};

export const FINANCIAL_GOALS = {
  target_amount: 2500000,
  current_savings: 800000,
  monthly_contribution: 25000,
  projected_inflation: 6, // percent
  years_until_college: 2
};

export const SAFETY_RESOURCES = [
  {
    id: 1,
    title: 'Safe Campus Guide 2026',
    description: 'Checklist of safety features to look for in university campuses and hostels.',
    type: 'Checklist',
    link: '#'
  },
  {
    id: 2,
    title: 'Top 10 Safest Cities for Students',
    description: 'Rankings based on crime rates, student support, and infrastructure.',
    type: 'Report',
    link: '#'
  },
  {
    id: 3,
    title: 'Emergency Contacts Template',
    description: 'Downloadable card for students to carry with essential numbers.',
    type: 'Template',
    link: '#'
  }
];
