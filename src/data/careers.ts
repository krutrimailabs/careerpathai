import { CareerProfile, CareerCategory } from '../types/career';

export const CATEGORIES: CareerCategory[] = [
  'Engineering', 'Medical', 'Design', 'Law', 'Management', 
  'Arts & Media', 'Science', 'Commerce', 'Civil Services', 
  'Armed Forces', 'Aviation', 'Agriculture/Environment'
];

export const CAREERS: CareerProfile[] = [
  {
    id: '1',
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    category: 'Engineering',
    short_description: 'Build web applications from front to back, handling both user interfaces and server-side logic.',
    overview: {
      what_is: 'A Full Stack Developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack.',
      day_in_life: [
        'Attend daily stand-up meetings to discuss progress.',
        'Write clean, efficient code for front-end and back-end.',
        'Debug issues and optimize application performance.',
        'Collaborate with designers and product managers.'
      ],
      who_is_it_for: [
        'Problem solvers who enjoy logic and structure.',
        'Creative thinkers who care about user experience.',
        'Lifelong learners adaptable to new technologies.'
      ],
      future_outlook_2030: 'Extremely high demand as businesses continue digital transformation. AI-assisted coding will shift focus to architecture and complex problem solving.'
    },
    path_to_become: {
      stream_selection_10th: ['Science (PCM)'],
      subject_combination_12th: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science (Optional)'],
      entrance_exams: ['JEE Mains', 'JEE Advanced', 'BITSAT', 'VITEEE'],
      degree_requirements: ['B.Tech in CS/IT', 'BCA + MCA', 'B.Sc Computer Science'],
      skill_development_timeline: [
        { stage: 'Year 1-2 (College)', skills: ['C++', 'Java', 'Data Structures', 'Algorithms'] },
        { stage: 'Year 3-4 (College)', skills: ['Web technologies (HTML/CSS/JS)', 'Database Management', 'Git'] },
        { stage: 'Early Career', skills: ['React/Next.js', 'Node.js', 'Cloud Deployment (AWS)', 'System Design'] }
      ]
    },
    financials: {
      education_cost_india: { min: 400000, max: 2500000, currency: 'INR' },
      education_cost_abroad: { min: 20000, max: 80000, currency: 'USD' },
      starting_salary: { min: 600000, max: 1800000, currency: 'INR' },
      five_year_growth_percentage: 200,
      top_paying_companies: ['Google', 'Microsoft', 'Amazon', 'Zomato', 'Flipkart'],
      roi_calculator_data: {
        avg_total_cost: 1500000,
        avg_starting_salary: 1000000
      }
    },
    skills: {
      technical_skills: ['JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'SQL/NoSQL', 'REST/GraphQL'],
      soft_skills: ['Communication', 'Teamwork', 'Adaptability', 'Time Management'],
      tools_and_software: ['VS Code', 'Git', 'Docker', 'Postman', 'Figma'],
      certifications: ['AWS Certified Developer', 'Meta Front-End Developer', 'MongoDB Administrator']
    },
    job_market: {
      demand_trend: 'High',
      top_hiring_cities: ['Bangalore', 'Hyderabad', 'Pune', 'Gurgaon', 'Noida'],
      remote_opportunities_score: 95,
      future_proof_score: 90
    },
    related_careers: [
      { id: '2', name: 'DevOps Engineer', type: 'Horizontal' },
      { id: '3', name: 'Product Manager', type: 'Vertical' },
      { id: '4', name: 'UX Designer', type: 'Hybrid' }
    ]
  },
  {
    id: '2',
    slug: 'cardiologist',
    title: 'Cardiologist',
    category: 'Medical',
    short_description: 'A doctor with special training and skill in finding, treating, and preventing diseases of the heart and blood vessels.',
    overview: {
      what_is: 'Cardiologists are doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood vessels—the cardiovascular system.',
      day_in_life: [
        'Consult with patients and review medical history.',
        'Analyze diagnostic tests (ECGs, Echocardiograms).',
        'Perform procedures like catheterizations or pacemaker implantations.',
        'Prescribe medications and lifestyle changes.'
      ],
      who_is_it_for: [
        'Individuals with deep empathy and desire to save lives.',
        'People capable of working under high pressure.',
        'Detail-oriented minds with strong memory.'
      ],
      future_outlook_2030: 'Steady growth due to aging populations and lifestyle diseases, though AI will assist heavily in diagnostics.'
    },
    path_to_become: {
      stream_selection_10th: ['Science (PCB)'],
      subject_combination_12th: ['Physics', 'Chemistry', 'Biology'],
      entrance_exams: ['NEET UG', 'NEET PG'],
      degree_requirements: ['MBBS (5.5 years)', 'MD General Medicine (3 years)', 'DM Cardiology (3 years)'],
      skill_development_timeline: [
        { stage: 'MBBS', skills: ['Anatomy', 'Physiology', 'Pharmacology'] },
        { stage: 'MD', skills: ['Internal Medicine', 'Patient Care', 'Diagnostics'] },
        { stage: 'DM', skills: ['Advanced Cardiac Life Support', 'Intervention procedures'] }
      ]
    },
    financials: {
      education_cost_india: { min: 1000000, max: 10000000, currency: 'INR' },
      education_cost_abroad: { min: 200000, max: 500000, currency: 'USD' },
      starting_salary: { min: 1200000, max: 2400000, currency: 'INR' },
      five_year_growth_percentage: 150,
      top_paying_companies: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Narayana Health'],
      roi_calculator_data: {
        avg_total_cost: 8000000,
        avg_starting_salary: 1800000
      }
    },
    skills: {
      technical_skills: ['Echocardiography', 'Catheterization', 'ECG Interpretation'],
      soft_skills: ['Empathy', 'Communication', 'Decision Making under pressure'],
      tools_and_software: ['Electronic Health Records (EHR)', 'Imaging Software'],
      certifications: ['Board Certification in Cardiology']
    },
    job_market: {
      demand_trend: 'Stable',
      top_hiring_cities: ['Mumbai', 'Delhi', 'Chennai', 'Bangalore'],
      remote_opportunities_score: 20,
      future_proof_score: 95
    },
    related_careers: [
      { id: '5', name: 'Cardiac Surgeon', type: 'Horizontal' },
      { id: '6', name: 'Hospital Administrator', type: 'Vertical' }
    ]
  },
  {
    id: '3',
    slug: 'ux-designer',
    title: 'UX Designer',
    category: 'Design',
    short_description: 'Design products that provide meaningful and relevant experiences to users.',
    overview: {
      what_is: 'User Experience (UX) Designers are responsible for the overall feel of the product. They ensure the product logically flows from one step to the next.',
      day_in_life: [
        'Conduct user research and usability testing.',
        'Create wireframes, prototypes, and high-fidelity mockups.',
        'Collaborate with developers to implement designs.',
        'Iterate based on user feedback.'
      ],
      who_is_it_for: [
        'People who are empathetic and observant.',
        'Visual thinkers with a knack for problem-solving.',
        'Those who enjoy blending psychology with technology.'
      ],
      future_outlook_2030: 'High demand as digital products become more complex and user-centricity becomes a key differentiator.'
    },
    path_to_become: {
      stream_selection_10th: ['Any Stream'],
      subject_combination_12th: ['Any Stream (Arts/Science preferred for aptitude)'],
      entrance_exams: ['NID DAT', 'UCEED', 'CEED'],
      degree_requirements: ['B.Des in Interaction Design', 'B.Sc in Visual Communication'],
      skill_development_timeline: [
        { stage: 'Foundation', skills: ['Design Thinking', 'Sketching', 'Color Theory'] },
        { stage: 'Advanced', skills: ['Prototyping tools (Figma)', 'User Research methods'] },
        { stage: 'Professional', skills: ['Design Systems', 'Accessibility Standards', 'Frontend Basics'] }
      ]
    },
    financials: {
      education_cost_india: { min: 600000, max: 2000000, currency: 'INR' },
      education_cost_abroad: { min: 30000, max: 100000, currency: 'USD' },
      starting_salary: { min: 500000, max: 1200000, currency: 'INR' },
      five_year_growth_percentage: 180,
      top_paying_companies: ['Google', 'Adobe', 'Microsoft', 'Ola', 'Swiggy'],
      roi_calculator_data: {
        avg_total_cost: 1200000,
        avg_starting_salary: 800000
      }
    },
    skills: {
      technical_skills: ['Wireframing', 'Prototyping', 'User Research', 'Information Architecture'],
      soft_skills: ['Empathy', 'Communication', 'Critical Thinking'],
      tools_and_software: ['Figma', 'Adobe XD', 'Sketch', 'Miro'],
      certifications: ['Google UX Design Certificate', 'Nielsen Norman Group Certification']
    },
    job_market: {
      demand_trend: 'Growing',
      top_hiring_cities: ['Bangalore', 'Pune', 'Gurgaon', 'Mumbai'],
      remote_opportunities_score: 85,
      future_proof_score: 88
    },
    related_careers: [
      { id: '1', name: 'Product Designer', type: 'Horizontal' },
      { id: '7', name: 'Frontend Developer', type: 'Hybrid' }
    ]
  }
];
