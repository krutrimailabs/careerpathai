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
