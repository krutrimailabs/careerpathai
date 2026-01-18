-- Create Mentors Table
CREATE TABLE IF NOT EXISTS careerpath.mentors (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    slug text UNIQUE, -- For friendly URLs if needed, defaulting to ID for now or generated
    name text NOT NULL,
    role text NOT NULL,
    company text NOT NULL,
    company_logo text,
    experience text,
    education text,
    expertise text[], -- Array of strings
    rating numeric(3, 1),
    reviews integer DEFAULT 0,
    hourly_rate numeric,
    image text,
    about text,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT mentors_pkey PRIMARY KEY (id)
);

-- Create Mentor Bookings Table
CREATE TABLE IF NOT EXISTS careerpath.mentor_bookings (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    mentor_id uuid NOT NULL REFERENCES careerpath.mentors(id) ON DELETE CASCADE,
    user_id uuid NOT NULL REFERENCES auth.users(id),
    date date NOT NULL,
    time text NOT NULL,
    status text DEFAULT 'upcoming', -- 'upcoming', 'completed', 'cancelled'
    meeting_link text,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT mentor_bookings_pkey PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE careerpath.mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE careerpath.mentor_bookings ENABLE ROW LEVEL SECURITY;

-- Policies for Mentors (Public Read)
CREATE POLICY "Public can view mentors"
    ON careerpath.mentors
    FOR SELECT
    USING (true);

-- Policies for Bookings
CREATE POLICY "Users can view their own bookings"
    ON careerpath.mentor_bookings
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
    ON careerpath.mentor_bookings
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Seed Data (from src/data/mentors.ts)
INSERT INTO careerpath.mentors (id, name, role, company, company_logo, experience, education, expertise, rating, reviews, hourly_rate, image, about)
VALUES
(
    '11111111-1111-1111-1111-111111111111',
    'Aditi S.',
    'Senior Product Manager',
    'Google',
    'G',
    '8 Years',
    'MBA, IIM Bangalore',
    ARRAY['Product Management', 'Resume Review', 'Mock Interview'],
    4.9,
    120,
    2500,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi',
    'I help aspiring PMs crack interviews at top tech companies. Ex-Microsoft.'
),
(
    '22222222-2222-2222-2222-222222222222',
    'Rahul V.',
    'SDE II',
    'Amazon',
    'A',
    '5 Years',
    'B.Tech, IIT Delhi',
    ARRAY['Software Engineering', 'DSA', 'System Design'],
    4.8,
    85,
    1500,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    'Passionate about coding and helping students master Data Structures.'
),
(
    '33333333-3333-3333-3333-333333333333',
    'Sneha K.',
    'Strategy Consultant',
    'McKinsey',
    'M',
    '4 Years',
    'MBA, ISB Hyderabad',
    ARRAY['Consulting', 'Case Interviews', 'GMAT Prep'],
    5.0,
    200,
    3500,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    'Helping you break into MBB consulting. Expert in case frameworks.'
),
(
    '44444444-4444-4444-4444-444444444444',
    'Vikram R.',
    'Data Scientist',
    'Uber',
    'U',
    '6 Years',
    'MS, Stanford University',
    ARRAY['Data Science', 'Machine Learning', 'AI'],
    4.7,
    60,
    3000,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    'Demystifying AI and ML for beginners. Let''s build your portfolio.'
)
ON CONFLICT (id) DO NOTHING;
