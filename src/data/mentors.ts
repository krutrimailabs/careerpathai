export type Mentor = {
  id: string;
  name: string;
  role: string;
  company: string;
  company_logo: string;
  experience: string;
  education: string;
  expertise: string[];
  rating: number;
  reviews: number;
  hourly_rate: number;
  image: string;
  about: string;
};

export const MENTORS: Mentor[] = [
  {
    id: "m1",
    name: "Aditi S.",
    role: "Senior Product Manager",
    company: "Google",
    company_logo: "G",
    experience: "8 Years",
    education: "MBA, IIM Bangalore",
    expertise: ["Product Management", "Resume Review", "Mock Interview"],
    rating: 4.9,
    reviews: 120,
    hourly_rate: 2500,
    image: "/avatars/mentor1.jpg",
    about: "I help aspiring PMs crack interviews at top tech companies. Ex-Microsoft."
  },
  {
    id: "m2",
    name: "Rahul V.",
    role: "SDE II",
    company: "Amazon",
    company_logo: "A",
    experience: "5 Years",
    education: "B.Tech, IIT Delhi",
    expertise: ["Software Engineering", "DSA", "System Design"],
    rating: 4.8,
    reviews: 85,
    hourly_rate: 1500,
    image: "/avatars/mentor2.jpg",
    about: "Passionate about coding and helping students master Data Structures."
  },
  {
    id: "m3",
    name: "Sneha K.",
    role: "Strategy Consultant",
    company: "McKinsey",
    company_logo: "M",
    experience: "4 Years",
    education: "MBA, ISB Hyderabad",
    expertise: ["Consulting", "Case Interviews", "GMAT Prep"],
    rating: 5.0,
    reviews: 200,
    hourly_rate: 3500,
    image: "/avatars/mentor3.jpg",
    about: "Helping you break into MBB consulting. Expert in case frameworks."
  },
  {
    id: "m4",
    name: "Vikram R.",
    role: "Data Scientist",
    company: "Uber",
    company_logo: "U",
    experience: "6 Years",
    education: "MS, Stanford University",
    expertise: ["Data Science", "Machine Learning", "AI"],
    rating: 4.7,
    reviews: 60,
    hourly_rate: 3000,
    image: "/avatars/mentor4.jpg",
    about: "Demystifying AI and ML for beginners. Let's build your portfolio."
  }
];

export const MENTOR_SLOTS = [
  { date: '2026-02-10', slots: ['10:00 AM', '02:00 PM', '04:00 PM'] },
  { date: '2026-02-11', slots: ['11:00 AM', '03:00 PM'] },
  { date: '2026-02-12', slots: ['09:00 AM', '05:00 PM'] },
];

export const USER_SESSIONS = [
  {
    id: 's1',
    mentorId: 'm1',
    mentorName: 'Aditi S.',
    role: 'Senior Product Manager',
    date: '2026-02-15',
    time: '10:00 AM',
    status: 'Upcoming',
    meetingLink: 'https://meet.google.com/abc-defg-hij'
  },
  {
    id: 's2',
    mentorId: 'm2',
    mentorName: 'Rahul V.',
    role: 'SDE II',
    date: '2026-01-20',
    time: '02:00 PM',
    status: 'Completed',
    meetingLink: null
  }
];

export const MENTOR_STATS = {
  total_earnings: 45000,
  sessions_conducted: 15,
  upcoming_sessions: 3,
  rating: 4.9
};
