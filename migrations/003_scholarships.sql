-- Create Scholarships Table in careerpath schema
CREATE TABLE IF NOT EXISTS careerpath.scholarships (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    slug text NOT NULL UNIQUE,
    name text NOT NULL,
    amount text,
    deadline text,
    eligibility text,
    provider text,
    category text, -- 'Merit', 'Means', 'Sports', 'International'
    exams jsonb DEFAULT '[]'::jsonb,
    colleges jsonb DEFAULT '[]'::jsonb,
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT scholarships_pkey PRIMARY KEY (id)
);

-- Create User Scholarships Table (for saved items)
CREATE TABLE IF NOT EXISTS careerpath.user_scholarships (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id),
    scholarship_id uuid NOT NULL REFERENCES careerpath.scholarships(id) ON DELETE CASCADE,
    status text DEFAULT 'saved', -- 'saved', 'applied'
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT user_scholarships_pkey PRIMARY KEY (id),
    CONSTRAINT unique_user_scholarship UNIQUE (user_id, scholarship_id)
);

-- Enable RLS
ALTER TABLE careerpath.scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE careerpath.user_scholarships ENABLE ROW LEVEL SECURITY;

-- Policies for Scholarships (Public Read)
CREATE POLICY "Public can view scholarships"
    ON careerpath.scholarships
    FOR SELECT
    USING (true);

-- Policies for User Scholarships
CREATE POLICY "Users can view their own saved scholarships"
    ON careerpath.user_scholarships
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can save scholarships"
    ON careerpath.user_scholarships
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove saved scholarships"
    ON careerpath.user_scholarships
    FOR DELETE
    USING (auth.uid() = user_id);

-- Seed Data
INSERT INTO careerpath.scholarships (slug, name, amount, deadline, eligibility, provider, category, exams, colleges)
VALUES
(
    'pm-sss-2026',
    'Prime Minister''s Special Scholarship Scheme (PMSSS)',
    'Up to ₹3 Lakhs/year',
    '30th June 2026',
    'J&K/Ladakh Domicile, Family income < ₹8 LPA',
    'AICTE',
    'Merit',
    '["JEE Main", "NEET"]'::jsonb,
    '["IIT Delhi", "NIT Srinagar"]'::jsonb
),
(
    'hdfc-badhte-kadam',
    'HDFC Badhte Kadam Scholarship',
    '₹1,00,000',
    '15th August 2026',
    'Class 11/12 students who lost earning member',
    'HDFC Bank',
    'Means',
    '[]'::jsonb,
    '[]'::jsonb
),
(
    'tata-trust-medical',
    'Tata Trusts Medical and Healthcare Scholarship',
    'Tuition Fee Waiver',
    '31st July 2026',
    'Pursuing MBBS/BDS, Merit based',
    'Tata Trusts',
    'Merit',
    '["NEET"]'::jsonb,
    '[]'::jsonb
),
(
    'reliance-foundation',
    'Reliance Foundation Undergraduate Scholarship',
    'Up to ₹2 Lakhs',
    '15th Feb 2026',
    'First year UG students, Merit + Means',
    'Reliance Foundation',
    'Merit',
    '["CUET"]'::jsonb,
    '[]'::jsonb
),
(
    'sports-authority-india',
    'SAI Sports Scholarship',
    '₹12,000/month',
    'Rolling',
    'National/State level medal winners',
    'Sports Authority of India',
    'Sports',
    '[]'::jsonb,
    '[]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;
