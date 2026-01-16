import { Users, Trophy, BookOpen } from 'lucide-react';

export const FORUM_TOPICS = [
  { id: 'jee', name: 'JEE Preparation', count: 1240, icon: BookOpen, color: 'text-blue-600 bg-blue-100' },
  { id: 'neet', name: 'NEET Preparation', count: 850, icon: BookOpen, color: 'text-green-600 bg-green-100' },
  { id: 'study-abroad', name: 'Study Abroad', count: 620, icon: Trophy, color: 'text-purple-600 bg-purple-100' },
  { id: 'college-life', name: 'College Life', count: 430, icon: Users, color: 'text-orange-600 bg-orange-100' },
  { id: 'campus-placements', name: 'Placements', count: 980, icon: Trophy, color: 'text-pink-600 bg-pink-100' },
];

export const FORUM_THREADS = [
  {
    id: '1',
    title: 'Best books for JEE Advanced Maths? Cengage vs Arihant?',
    author: 'Rahul_JEE2026',
    avatar: 'RJ',
    topic: 'JEE Preparation',
    replies: 45,
    views: 1200,
    lastActive: '2h ago',
    tags: ['Books', 'Maths', 'JEE Advanced'],
    isPinned: false
  },
  {
    id: '2',
    title: 'Anyone applying to TU Munich for Winter 2026?',
    author: 'AnanyaS',
    avatar: 'AS',
    topic: 'Study Abroad',
    replies: 23,
    views: 800,
    lastActive: '5h ago',
    tags: ['Germany', 'Masters', 'Admissions'],
    isPinned: false
  },
  {
    id: '3',
    title: 'Beginner guide to starting CP (Competitive Programming) in 1st Year',
    author: 'CodeMaster',
    avatar: 'CM',
    topic: 'Placements',
    replies: 112,
    views: 5000,
    lastActive: '1d ago',
    tags: ['Coding', 'C++', 'Guide'],
    isPinned: true
  }
];

export const QNA_ITEMS = [
  {
    id: '1',
    question: 'Is it possible to crack IIT without coaching?',
    author: 'Aspirant_01',
    answers: 12,
    votes: 45,
    tags: ['JEE', 'Coaching', 'Strategy'],
    time: '3h ago'
  },
  {
    id: '2',
    question: 'How much does a Masters in US actually cost including living expenses?',
    author: 'US_Dreamer',
    answers: 8,
    votes: 32,
    tags: ['USA', 'Finance', 'Masters'],
    time: '6h ago'
  }
];

export const GROUPS = [
  {
    id: '1',
    name: 'Future CSE Engineers',
    members: '12k',
    desc: 'For all computer science aspirants and students.',
    image: '💻'
  },
  {
    id: '2',
    name: 'Design & Creative Arts',
    members: '4.5k',
    desc: 'UI/UX, Graphic Design, and Fine Arts discussions.',
    image: '🎨'
  },
  {
    id: '3',
    name: 'UPSC Aspirants Club',
    members: '8k',
    desc: 'Dedicated to Civil Services preparation.',
    image: '🇮🇳'
  },
  {
    id: '4',
    name: 'Startup & Entrepreneurship',
    members: '3k',
    desc: 'Discuss ideas, funding, and building products.',
    image: '🚀'
  }
];

export const EVENTS = [
  {
    id: '1',
    title: 'JEE 2026 Strategy Roadmap Webinar',
    date: 'Jan 20, 2026',
    time: '6:00 PM IST',
    type: 'Webinar',
    attendees: 450,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
  },
  {
    id: '2',
    title: 'Study in UK: Virtul University Fair',
    date: 'Jan 24, 2026',
    time: '2:00 PM IST',
    type: 'Virtual Fair',
    attendees: 1200,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
  }
];
