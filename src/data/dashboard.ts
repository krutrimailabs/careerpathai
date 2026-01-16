import { CheckCircle, Circle, Clock, FileText, Award } from 'lucide-react';

export const CAREER_ROADMAP = [
  {
    id: '1',
    stage: 'Class 10 - Foundation',
    status: 'completed',
    icon: CheckCircle,
    color: 'text-green-600',
    items: [
      { id: '1a', title: 'Complete Career Assessment', completed: true },
      { id: '1b', title: 'Select Stream (Science/Commerce/Arts)', completed: true },
    ]
  },
  {
    id: '2',
    stage: 'Class 11 - Exploration',
    status: 'current',
    icon: Clock,
    color: 'text-blue-600',
    items: [
      { id: '2a', title: 'Shortlist 5 Target Colleges', completed: true },
      { id: '2b', title: 'Join a Community Group', completed: false },
      { id: '2c', title: 'Attend 2 Career Webinars', completed: false },
    ]
  },
  {
    id: '3',
    stage: 'Class 12 - Preparation',
    status: 'upcoming',
    icon: Circle,
    color: 'text-zinc-400',
    items: [
      { id: '3a', title: 'Prepare for Entrance Exams (JEE/NEET)', completed: false },
      { id: '3b', title: 'Draft College Application Essays', completed: false },
      { id: '3c', title: 'Apply to Colleges', completed: false },
    ]
  }
];

export const APPLICATIONS = [
  {
    id: '1',
    college: 'IIT Bombay',
    program: 'B.Tech CSE',
    status: 'Applying',
    deadline: 'June 15, 2026',
    logo: 'IITB'
  },
  {
    id: '2',
    college: 'BITS Pilani',
    program: 'B.E. Computer Science',
    status: 'Interested',
    deadline: 'July 01, 2026',
    logo: 'BITS'
  },
  {
    id: '3',
    college: 'VIT Vellore',
    program: 'B.Tech IT',
    status: 'Submitted',
    deadline: 'May 30, 2026',
    logo: 'VIT'
  }
];

export const PROGRESS_STATS = {
  profileCompletion: 75,
  skills: [
    { subject: 'Physics', A: 120, fullMark: 150 },
    { subject: 'Maths', A: 98, fullMark: 150 },
    { subject: 'Chemistry', A: 86, fullMark: 150 },
    { subject: 'English', A: 99, fullMark: 150 },
    { subject: 'Logic', A: 85, fullMark: 150 },
  ],
  mockTests: [
    { date: 'Jan', score: 120 },
    { date: 'Feb', score: 135 },
    { date: 'Mar', score: 125 },
    { date: 'Apr', score: 150 },
    { date: 'May', score: 180 },
  ]
};

export const BILLING_HISTORY = [
  { id: 'INV001', date: 'Jan 15, 2026', amount: '₹2,999', plan: 'Pro Student', status: 'Paid' },
];
