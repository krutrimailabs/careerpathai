import { FileText, Calculator, TrendingUp, Search } from 'lucide-react';

export const INTERACTIVE_TOOLS = [
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    description: 'Create a professional resume in minutes tailored for internships and college applications.',
    icon: FileText,
    link: '/resources/tools/resume-builder',
    badge: 'Popular'
  },
  {
    id: 'roi-calculator',
    title: 'College ROI Calculator',
    description: 'Compare tuition fees vs. expected starting salary to find the best value degrees.',
    icon: Calculator,
    link: '/resources/tools/roi-calculator',
    badge: 'New'
  },
  {
    id: 'career-trends',
    title: 'Career Trends Explorer',
    description: 'Visualize job market demand over the last 5 years for various industries.',
    icon: TrendingUp,
    link: '/resources/tools/trends',
    badge: null
  },
  {
    id: 'scholarship-finder',
    title: 'Smart Scholarship Finder',
    description: 'Match your profile with thousands of available scholarships globally.',
    icon: Search,
    link: '/resources/tools/scholarships',
    badge: null
  }
];
