export type Question = {
  id: number;
  text: string;
  category: 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';
};

export const ASSESSMENT_QUESTIONS: Question[] = [
  { id: 1, text: "I enjoy building things with my hands.", category: 'Realistic' },
  { id: 2, text: "I like solving complex mathematical problems.", category: 'Investigative' },
  { id: 3, text: "I am good at expressing myself through art or writing.", category: 'Artistic' },
  { id: 4, text: "I love helping people solve their personal problems.", category: 'Social' },
  { id: 5, text: "I enjoy leading teams and making decisions.", category: 'Enterprising' },
  { id: 6, text: "I like organizing files and keeping things structured.", category: 'Conventional' },
  { id: 7, text: "I prefer working outdoors rather than in an office.", category: 'Realistic' },
  { id: 8, text: "I enjoy learning about how the universe works.", category: 'Investigative' },
  { id: 9, text: "I often come up with creative solutions to problems.", category: 'Artistic' },
  { id: 10, text: "I enjoy teaching or training others.", category: 'Social' },
];
