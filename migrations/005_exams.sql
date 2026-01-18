-- Create exams table
CREATE TABLE IF NOT EXISTS careerpath.exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    exam_date TEXT, -- Keeping as text to match mock format (e.g. "Jan 24, 2026"), typically DATE is better but flexible for "TBD"
    application_deadline TEXT,
    description TEXT,
    eligibility TEXT,
    syllabus JSONB DEFAULT '[]'::jsonb,
    prep_materials JSONB DEFAULT '[]'::jsonb,
    notifications JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE careerpath.exams ENABLE ROW LEVEL SECURITY;

-- Policy
DROP POLICY IF EXISTS "Public exams are viewable by everyone." ON careerpath.exams;
CREATE POLICY "Public exams are viewable by everyone." ON careerpath.exams FOR SELECT USING (true);


-- Seed Data
INSERT INTO careerpath.exams (slug, title, category, exam_date, application_deadline, description, eligibility, syllabus, prep_materials, notifications)
VALUES
(
    'jee-mains-2026',
    'JEE Mains 2026',
    'Engineering',
    'Jan 24, 2026',
    'Dec 15, 2025',
    'Joint Entrance Examination (Main) is conducted for admission to Undergraduate Engineering Programs (B.E/B.Tech.) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and Institutions/Universities funded/recognized by participating State Governments.',
    'Candidates must have passed Class 12th or equivalent examination with Physics, Mathematics, and Chemistry/Biology/Biotechnology/Technical Vocational Subject.',
    '[
      { "subject": "Physics", "topics": ["Kinematics", "Laws of Motion", "Thermodynamics", "Electrostatics"] },
      { "subject": "Chemistry", "topics": ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Equilibrium"] },
      { "subject": "Mathematics", "topics": ["Calculus", "Algebra", "Coordinate Geometry", "Vectors"] }
    ]'::jsonb,
    '[
      { "title": "Previous Year Question Papers (2020-2025)", "type": "PDF", "url": "#" },
      { "title": "Chapter-wise Formula Sheets", "type": "PDF", "url": "#" },
      { "title": "Mock Test Series - Level 1", "type": "Link", "url": "#" }
    ]'::jsonb,
    '[
      { "date": "Nov 01, 2025", "message": "Application process started." },
      { "date": "Jan 10, 2026", "message": "Admit cards released." }
    ]'::jsonb
),
(
    'neet-ug-2026',
    'NEET UG 2026',
    'Medical',
    'May 05, 2026',
    'Apr 05, 2026',
    'The National Eligibility cum Entrance Test (NEET) is the sole entrance test for admission to MBBS and BDS courses in India.',
    'Must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology and English.',
    '[
      { "subject": "Physics", "topics": ["Mechanics", "Optics", "Modern Physics"] },
      { "subject": "Chemistry", "topics": ["Physical", "Organic", "Inorganic"] },
      { "subject": "Biology", "topics": ["Genetics", "Ecology", "Human Physiology", "Plant Physiology"] }
    ]'::jsonb,
    '[
      { "title": "NCERT Biology Highlights", "type": "PDF", "url": "#" },
      { "title": "Physics Numerical Cheat Sheet", "type": "PDF", "url": "#" }
    ]'::jsonb,
    '[
      { "date": "Feb 15, 2026", "message": "Official notification expected." }
    ]'::jsonb
),
(
    'cat-2026',
    'CAT 2026',
    'Management',
    'Nov 29, 2026',
    'Sep 20, 2026',
    'Common Admission Test (CAT) is a computer-based test for admission in graduate management programs.',
    'Bachelor’s Degree with at least 50% marks or equivalent CGPA.',
    '[
      { "subject": "VARC", "topics": ["Reading Comprehension", "Verbal Ability"] },
      { "subject": "DILR", "topics": ["Data Interpretation", "Logical Reasoning"] },
      { "subject": "QA", "topics": ["Arithmetic", "Algebra", "Geometry"] }
    ]'::jsonb,
    '[
        { "title": "Reading Comprehension Practice Set", "type": "PDF", "url": "#" }
    ]'::jsonb,
    '[]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;
