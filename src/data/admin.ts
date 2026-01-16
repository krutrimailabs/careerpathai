import { TrendingUp, Users, AlertTriangle } from 'lucide-react';

export const ADMIN_STATS = [
  { label: 'Total Users', value: '12,450', change: '+12%', icon: Users },
  { label: 'Revenue', value: '₹4.2L', change: '+8%', icon: TrendingUp },
  { label: 'Active Mentors', value: '85', change: '+5%', icon: Users },
  { label: 'Pending Reviews', value: '14', change: '-2%', icon: AlertTriangle },
];

export const ANALYTICS_DATA = {
  growth: [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 600 },
    { month: 'Mar', users: 900 },
    { month: 'Apr', users: 1400 },
    { month: 'May', users: 2000 },
  ],
  revenue: [
    { month: 'Jan', amount: 120000 },
    { month: 'Feb', amount: 150000 },
    { month: 'Mar', amount: 180000 },
    { month: 'Apr', amount: 250000 },
    { month: 'May', amount: 320000 },
  ]
};

export const CMS_POSTS = [
  { id: 1, title: 'Top 10 Engineering Colleges in 2026', author: 'S. Gupta', status: 'Published', date: '2026-01-10' },
  { id: 2, title: 'Guide to Student Visas', author: 'R. Verma', status: 'Draft', date: '2026-01-14' },
  { id: 3, title: 'IELTS vs TOEFL', author: 'Admin', status: 'Review', date: '2026-01-15' },
];

export const MODERATION_QUEUE = [
  { 
    id: 1, 
    user: 'User123', 
    content: 'This college has the worst canteen ever! Totally fake promises.', 
    type: 'Review', 
    status: 'Pending',
    date: '2 hours ago'
  },
  { 
    id: 2, 
    user: 'StudyAbroad_Bot', 
    content: 'Click here for free iPhone: http://spam-link.com', 
    type: 'Comment', 
    status: 'Flagged',
    date: '5 hours ago'
  },
  { 
    id: 3, 
    user: 'RahulS', 
    content: 'Is this information updated for 2026 batch?', 
    type: 'Question', 
    status: 'Pending',
    date: '1 day ago'
  },
];
