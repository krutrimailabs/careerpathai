export const ASSESSMENT_RESULTS = {
  personality_type: 'INTJ - The Architect',
  traits: [
    { label: 'Openness', value: 85, fullMark: 100 },
    { label: 'Conscientiousness', value: 78, fullMark: 100 },
    { label: 'Extraversion', value: 45, fullMark: 100 },
    { label: 'Agreeableness', value: 60, fullMark: 100 },
    { label: 'Neuroticism', value: 30, fullMark: 100 },
  ],
  analysis: `You are an analytical problem-solver. You prefer working with ideas and systems rather than people and emotions. Your high Openness score suggests you are creative and open to new experiences. High Conscientiousness indicates you are organized and disciplined. Lower Extraversion means you recharge by being alone.`,
  career_matches: [
    { title: 'Software Architect', match: 96 },
    { title: 'Data Scientist', match: 94 },
    { title: 'Investment Banker', match: 88 },
    { title: 'Surgeon', match: 85 },
  ]
};

export const ASSESSMENT_HISTORY = [
  { id: 1, date: '2025-12-10', type: 'Career Aptitude Test', score: '85/100', status: 'Completed' },
  { id: 2, date: '2026-01-05', type: 'Personality Assessment', score: 'INTJ', status: 'Completed' },
  { id: 3, date: '2026-01-15', type: 'Stream Selector (Class 10)', score: 'Science (PCM)', status: 'Completed' },
];

export const AVAILABLE_TESTS = [
  { 
    type: 'personality', 
    title: 'Personality Assessment', 
    description: 'Discover your strengths, blind spots, and work style based on the Big 5 model.', 
    time: '20 mins', 
    questions: 50 
  },
  { 
    type: 'aptitude', 
    title: 'General Aptitude Test', 
    description: 'Evaluate your logical reasoning, numerical ability, and verbal skills.', 
    time: '45 mins', 
    questions: 30 
  },
  { 
    type: 'stream-selector', 
    title: 'Stream Selector (Class 10)', 
    description: 'Confused between Science, Commerce, and Arts? Let AI guide you.', 
    time: '15 mins', 
    questions: 20 
  },
];
