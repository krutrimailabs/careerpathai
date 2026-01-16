export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const BLOG_CATEGORIES = [
  { id: 'all', name: 'All Posts', slug: 'all' },
  { id: 'guidance', name: 'Career Guidance', slug: 'career-guidance' },
  { id: 'exams', name: 'Exam Prep', slug: 'exam-prep' },
  { id: 'college', name: 'College Life', slug: 'college-life' },
  { id: 'study-abroad', name: 'Study Abroad', slug: 'study-abroad' },
  { id: 'skills', name: 'Skills & Growth', slug: 'skills' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-ai-careers-2026',
    title: 'The Future of AI Careers in 2026 and Beyond',
    excerpt: 'How artificial intelligence is reshaping the job market and what skills you need to stay relevant.',
    content: `
      <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how we work. From software development to creative arts, AI is augmenting human capabilities.</p>
      <h2>The Rise of the AI Engineer</h2>
      <p>Demand for professionals who can build, fine-tune, and maintain AI models is skyrocketing. It's not just about coding anymore; it's about understanding data ethics, model architecture, and real-world application.</p>
      <h2>Soft Skills Matter More Than Ever</h2>
      <p>As AI takes over routine tasks, human-centric skills like empathy, strategic thinking, and complex problem-solving are becoming the premium currency of the job market.</p>
    `,
    category: 'Career Guidance',
    author: {
      name: 'Dr. Sarah Rao',
      role: 'Career Strategist',
      avatar: 'SR'
    },
    coverImage: '/blog/ai-future.jpg', // Placeholder
    publishedAt: 'Jan 15, 2026',
    readTime: '5 min read',
    tags: ['AI', 'Future of Work', 'Technology']
  },
  {
    id: '2',
    slug: 'crack-jee-6-months',
    title: 'How to Crack JEE Mains in 6 Months: A Strategic Roadmap',
    excerpt: 'A month-by-month study plan for serious aspirants, focusing on high-weightage topics.',
    content: `
      <p>Cracking JEE Mains requires more than just hard work; it requires smart work. Here is a breakdown of how to utilize your last 6 months effectively.</p>
      <h2>Month 1-2: Foundation & Weak Areas</h2>
      <p>Identify your weak chapters. Don't ignore them. Spend the first two months clearing backlogs and solidifying concepts.</p>
      <h2>Month 3-4: Practice & Mock Tests</h2>
      <p>Start taking full-length mock tests every Sunday. Analyze your mistakes. Accuracy is as important as speed.</p>
    `,
    category: 'Exam Prep',
    author: {
      name: 'Rahul Verma',
      role: 'IIT Bombay Alumnus',
      avatar: 'RV'
    },
    coverImage: '/blog/jee-prep.jpg',
    publishedAt: 'Jan 12, 2026',
    readTime: '8 min read',
    tags: ['JEE', 'Engineering', 'Study Tips']
  },
  {
    id: '3',
    slug: 'study-in-germany-free',
    title: 'Study in Germany for Free: The Ultimate Guide',
    excerpt: 'Did you know you can study in top German universities for zero tuition fees? Here is how.',
    content: `
      <p>Germany is a favorite destination for international students, largely because most public universities charge no tuition fees.</p>
      <h2>Requirements</h2>
      <p>You need a good academic record, German language proficiency (for some courses), and proof of blocked account funds for living expenses.</p>
    `,
    category: 'Study Abroad',
    author: {
      name: 'Aditi Sharma',
      role: 'Overseas Counselor',
      avatar: 'AS'
    },
    coverImage: '/blog/germany.jpg',
    publishedAt: 'Jan 10, 2026',
    readTime: '6 min read',
    tags: ['Germany', 'Study Abroad', 'Scholarships']
  },
  {
    id: '4',
    slug: 'choosing-right-stream-class-11',
    title: 'Science, Commerce or Arts? Choosing the Right Stream',
    excerpt: 'Confusion after Class 10 is normal. We help you map your interests to the right stream.',
    content: '<p>Content coming soon...</p>',
    category: 'Career Guidance',
    author: {
      name: 'Dr. Sarah Rao',
      role: 'Career Strategist',
      avatar: 'SR'
    },
    coverImage: '/blog/stream-selection.jpg',
    publishedAt: 'Jan 05, 2026',
    readTime: '4 min read',
    tags: ['Class 10', 'Streams', 'School']
  }
];
